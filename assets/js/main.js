const { createApp } = Vue

createApp({
    data() {
        return {
            message: "Hello Vue!",
            image: "https://picsum.photos/seed/picsum/300/300",
            altImage: "immagine"
        }
    }
}).mount('#app')