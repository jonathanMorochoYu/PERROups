import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"perroups-b38f8","appId":"1:101869337827:web:6185e641a6bd7790d959d6","storageBucket":"perroups-b38f8.firebasestorage.app","apiKey":"AIzaSyAGp-nyaJt_px9LryGMIjdnrwleBCBMpMI","authDomain":"perroups-b38f8.firebaseapp.com","messagingSenderId":"101869337827"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
