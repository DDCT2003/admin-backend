import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { RopaModule } from './ropa/ropa.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ropacore:ropacore@cluster0.mi2yl.mongodb.net/ropacoredb?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UserModule,
    RopaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
