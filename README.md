# Durum Bilgili Mantık Oluşturma (Statefull Logic) - Gece Modu (Dark Mode)

Bu proje, bu modülde öğrenilen kavram ve teknikleri uygulamanıza ve bunları somut bir projede uygulamanıza olanak tanır. Bu modülde, React'te Form yönetimini üzerine çalıştınız. Stateful logic nedir, bunlar üzerinde custom hooklar nasıl oluşturulur ve birden fazla hook aynı anda nasıl çalıştırılır bunları öğrendiniz. Projenizde bu konulardaki yeterliliğinizi, öğrendiğiniz tüm şeyleri kullanarak oluşturduğunuz bir uygulamayla göstereceksiniz.

## Pratik yapacağınız yetenekler

- Stateful logic içeren custom hooklar yaratmak
- localStorage Web API ile birlikte çalışan hooklar oluşturmak
- tüm hookların aynı anda çalışabilmesini sağlamak

## Giriş

Bu projede kripto para izleme uygulamasını alacak ve 2 custom hook oluşturup, birlikte çalışmalarını sağlayacaksınız, aynı zamanda kullanıcılar gece modunu açıp (dark mode) uygulamayı kullanabilecekler, uygulama kapanıp açılsa bile gece modu daha önce aktif edildiyse uygulama gece modu açık şekilde başlayacak. 

***Görevlerinizi birer birer tamamladığınızdan ve ilerlemeden önce her bir görevi test ettiğinizden emin olun..***

## Talimatlar

### Görev 1: Proje Kurulumu

* [X] Projeyi forklayın.
* [X] Klonlayın
* [X] Proje dizinine gidin
* [X] `npm install`
* [X] `npm start`

### Görev 2: Proje Gereksinimleri

#### Bir geceModuAc hooku oluşturun

* [X] `hooks` adında bir klasör oluşturun
* [X] `geceModuAc.js` adında bir dosya oluşturun.
* [X] Sadece bir boolean(true/false) state değeri ile yüklenen bir hook oluşturun. Bu değer gece modunun açık olup olmadığını belirlemeye yarayacak.
* [X] Oluşturduğunuz state dilimini ve state'i düzenlemenize yarayan fonksiyonu döndürün.
* [X] App.js'deki geceModu state tanımlamasını oluşturduğunuz geceModuAc hooku ile değiştirin.

#### localStorageKullan hooku oluşturun

* [X] `localStorageKullan.js` adında bir dosya oluşturun.
* [X] Bir key value ve baslangicDegeri alan bir hook oluşturun.

#### geceModuAc çevresinde localStorageKullan 'ı kullanın

* [X] geceModuAc hooku içine localStorageKullan'ı import edin.
* [X] localStorage'a kaydedilmiş değere göre UI'den switche tıklandığında gece modunu açıp kapatmayı ayarlayın.
* [X] App kapatılıp açıldığında gece modu daha önce aktif edildiyse uygulama gece modunda başlasın.

