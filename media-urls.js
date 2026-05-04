/**
 * Mídias do site — troque os valores abaixo pelas URLs de entrega do Cloudinary (ou outro CDN).
 *
 * No Cloudinary: Media Library → selecionar arquivo → cópia do "Secure URL".
 * Opcionalmente use variante de vídeo mais leve (.mp4) em heroVideo para melhor performance.
 */

window.ELEVALOOK_MEDIA = {
  favicon: "favicon.svg",

  heroVideo:
    "https://res.cloudinary.com/dc48hzb6b/video/upload/v1777924074/Ensaio_IA_eefyj1.mov",

  compare: {
    1: {
      before:
        "https://res.cloudinary.com/dc48hzb6b/image/upload/f_auto,q_auto/antes-1_xzf3kb",
      after:
        "https://res.cloudinary.com/dc48hzb6b/image/upload/v1777924117/depois-1_t2qg3k.jpg",
    },
    2: {
      before:
        "https://res.cloudinary.com/dc48hzb6b/image/upload/v1777924108/antes-2_pzhtqc.jpg",
      after:
        "https://res.cloudinary.com/dc48hzb6b/image/upload/v1777924129/depois-2_k4nwpa.jpg",
    },
  },
};
