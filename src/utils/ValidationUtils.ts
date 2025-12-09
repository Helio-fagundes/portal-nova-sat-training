export class ValidationUtils {

static validationName(name: string): any{
    const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{4,}$/;
    switch(name.length > 0){
      case name === ' ':
        return false;
      case name.length < 4:
        return false;
      case (!regexName.test(name)):
        return false;
    }
    return true;
  }

static validationEmail(email: string): any{
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    switch(email.length > 0){
      case email === ' ':
        return false;
      case email.length < 5:
        return false;
      case (!regexEmail.test(email)):
      return false;
    }
    return true;
  }

static validationPassword(password: string): any{
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    switch(password.length > 0){
      case password === ' ':
        return false;
      case password.length < 8:
        return false;
      case (!regexSenha.test(password)):
        return false;
    }
    return true;
  }
}
