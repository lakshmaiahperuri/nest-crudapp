import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  matchRoles(actualRoles: string[], userRole: string) {
    return actualRoles.some((role) => role === userRole);
  }
  canActivate(context: ExecutionContext) {
    console.log('coming here>>>>>>>>>>>');
    const actualRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!actualRoles) {
      console.log('actua>>>>>>>>>>>>>>>');
      return true;
    }
    const request = context.switchToHttp().getRequest();
    console.log('roles>>>>>>>>>>>>>', request.query, actualRoles);
    const userRole: string = request.query.role;
    return this.matchRoles(actualRoles, userRole);
  }
}
