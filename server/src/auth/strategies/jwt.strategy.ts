import { UserService } from 'src/user/user.service';
import { AuthService } from './../auth.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwtSecret',
    });
  }

  async validate(payload: { sub: number; email: string }) {
    const user = await this.userService.findOne(payload.sub);
    if (user) {
      return { ...user };
    } else throw new UnauthorizedException();
  }
}
