# Stardew Valley Discord Botu

## Açıklama

Bu Discord botu, popüler oyun Stardew Valley'den ilham alarak Discord sunucularında tarım ve ekonomi simülasyonu yapmanıza olanak tanır. Kullanıcılar, tarım yapabilir, hayvan besleyebilir, ürünleri toplayabilir, ticaret yapabilir ve çok daha fazlasını gerçekleştirebilirler. Bot, Discord.js v14 kullanılarak geliştirilmiştir ve komutlar `/` ile çalışmaktadır.

## Özellikler

- **Tarım**: Bitki ekme, hasat yapma
- **Hayvancılık**: Hayvanları besleme, süt ve yumurta toplama
- **Ekonomi Sistemi**: Para kazanma, ürünleri satma
- **Hava Durumu**: Günlük hava durumu raporu
- **Yardım Komutu**: Komutların listesi ve açıklamaları

## Kurulum

### 1. Gerekli Yazılımlar

- Node.js (v18.0.0 veya üstü)
- npm (v8.0.0 veya üstü)
- Git

### 2. Projeyi İndirip Kurma

```bash
# Projeyi klonlayın
git clone https://github.com/username/repository.git
cd repository

# Gerekli paketleri yükleyin
npm install

# Çevresel değişkenleri (.env) ayarlayın
cp .env.example .env
```

### 3. Çevresel Değişkenler

`.env` dosyasını aşağıdaki gibi doldurun:

```
TOKEN=your-bot-token
CLIENT_ID=your-client-id
GUILD_ID=your-guild-id  # Opsiyonel, test etmek istediğiniz sunucunun ID'si
```

### 4. Komutları Deploy Etme

Komutları Discord API'ye yüklemek için:

```bash
node deploy-commands.js
```

### 5. Botu Başlatma

Botunuzu başlatmak için:

```bash
node index.js
```

## Komutlar

### `/balance`

- **Açıklama**: Mevcut bakiyenizi gösterir.

### `/fish`

- **Açıklama**: Balıkçılık yapar.

### `/harvest`

- **Açıklama**: Ürünlerinizi toplar.

### `/plant`

- **Açıklama**: Yeni ürünler eker.

### `/feed`

- **Açıklama**: Hayvanlarınıza yem verir.

### `/sell`

- **Açıklama**: Envanterdeki ürünleri satar.

### `/help`

- **Açıklama**: Bot komutları hakkında bilgi verir. 

## Katılım ve Sözleşme

Bu projeye katkıda bulunmak veya ekibimize katılmak için [katılım sözleşmesi](link-to-agreement) şartlarını kabul etmeniz gerekmektedir. Lütfen sözleşme metnini dikkatlice okuyun.

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen [katkıda bulunma rehberimizi](CONTRIBUTING.md) takip edin.

## Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

## İletişim

Herhangi bir soru veya öneriniz varsa, lütfen [support@example.com](mailto:support@example.com) adresi üzerinden bizimle iletişime geçin.

## Destekleyenler

- [Geliştirici 1](https://github.com/developer1)
- [Geliştirici 2](https://github.com/developer2)

## Diğer Kaynaklar

- [Discord.js Dokümantasyonu](https://discord.js.org/#/docs/main/stable/general/welcome)
- [Stardew Valley Resmi Sitesi](https://www.stardewvalley.net/)
