# Josjis Management

A small, responsive website for Josjis Management, a digital marketing and creative partner for UMKM in Surabaya.

## Open the site

Open `index.html` in a browser. This project uses plain HTML, CSS, and JavaScript, so it does not require Node.js, a package install, or a development server.

## Contact and references

- WhatsApp: https://wa.me/message/ZLDYTVWY77NSD1
- Instagram: https://www.instagram.com/josjis_management?stkn=MW5jb3ViZWU3eDFobw==
- Contact email: josjismanagement@gmail.com

The public portfolio summarizes previous professional experience without displaying client identity, client materials, or performance data. Do not add client-identifying materials or campaign data without documented publication permission.

Content production is Rp2,000,000 per month for one Reels/short-form video per day; the six-month package is Rp10,000,000 total. Digital ecosystem management is Rp10,000,000 per month and includes website creation, content, monthly reporting, Google Ads campaign creation and management, SEO, social media management, and comment replies. Ad spend is excluded and paid directly by the client to Google Ads. Domain fees are excluded from package pricing. Scope, payment, cancellation, and renewal terms should be included in the written offer before agreement.

Standalone website creation is a one-time fee: user-only Rp5,000,000, user + cashier Rp8,000,000, and user + owner Rp10,000,000. The user + cashier + owner setup is quoted after scoping. Standalone websites include up to 10 revisions and handover; optional monthly maintenance is Rp1,000,000 for user-only, Rp2,000,000 for user + cashier, and Rp2,500,000 for user + cashier + owner. The service area is West Surabaya and nearby areas.

The hero uses a locally stored still image from a Pexels clip by Kampus Production, with the source credit shown on the page. Pexels media is free to use under the [Pexels License](https://www.pexels.com/license/). DM Sans and Manrope are self-hosted as WOFF2 files to avoid a render-blocking third-party font request; their SIL Open Font License is included in `assets/FONT-LICENSES.txt`.

The footer links to `privasi.html` and `ketentuan.html`. Review these notices whenever contact channels, data processing, or service terms change.

## Deploy otomatis ke Netlify

Website ini tidak memerlukan proses build. Hubungkan repository Git ke Netlify satu kali dengan memilih folder root repository sebagai publish directory. Konfigurasi tersebut juga tersedia di `netlify.toml`.

Setelah repository terhubung, setiap perubahan yang di-push ke branch produksi akan otomatis diterbitkan oleh Netlify. Folder `netlify-ready/` adalah salinan lama untuk unggah manual; jangan gunakan folder itu sebagai sumber deploy otomatis.

Konfigurasi Netlify menetapkan security headers, termasuk Content Security Policy yang membatasi sumber script, stylesheet, font, gambar, dan media yang digunakan situs. Jika menambahkan layanan pihak ketiga baru, perbarui direktif CSP terkait hanya untuk origin yang diperlukan.
