import passport, { Passport } from "passport";
import PassportLocal from 'passport-local'
//importing a type has NO impact on prod, this only pulls in the type and since TS compiles to JS the types don't follow
import type { Express } from "express";

export function configurePassport(app: Express) {
  passport.use(new PassportLocal.Strategy({
    //This rewires Passport to search for req.body.email not req.body.username that's default
    usernameField:'email',
    //We're stateless, meaning we don't need to worry about this because our token is stored in the front end
    session: false
  }, (email, password, done) => {
    //check if the email exists
    
    //if not, done(bad)

    //if yes, compare password

    //if not true, done(bad)

    //otherwise, done(good)
  }));

	app.use(passport.initialize());
}
