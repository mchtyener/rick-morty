import {CanActivateFn} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  //burada  kullanıcı girişlerini takip edebiliriz. örneğin yetkilendirme olsaydı gelen yetkiye göre kullanıcın sayfa geçişi sağlanılırdı
  return true;
};
