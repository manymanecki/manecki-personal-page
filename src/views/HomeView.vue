<script setup>
</script>

<template>
    <div class="container mx-auto">
        <div class="flex space-x-4">
            <div class="flex-auto w-1/4">
                <div class="card card-image h-96 image-full">
                    <figure>
                        <img
                            class="object-center"
                            src="/profilepicture.jpg"
                            alt="Profile picture"
                        />
                    </figure>
                </div>
            </div>
            <div class="flex-auto w-3/4">
                <div class="card card-about h-96">
                    <div class="card-body">
                        <h2 class="card-title text-5xl">Hey, name's Jakub and I'm a Warsaw based Fullstack Developer.</h2>
                        <p class="">Currently studying at Polish-Japanese Academy of Information Technology, my wide range of skills in all areas of software development are perfect for the needs of your company!</p>
                        <div class="card-actions">
                            <a target="_blank" href="https://www.linkedin.com/in/jakubpawlowski00/">
                                <button class="btn gap-2">
                                    <font-awesome-icon icon="fa-brands fa-linkedin" size="xl"/>
                                    Contact me
                                </button>
                            </a>
                            <a target="_blank" href="https://www.github.com/manymanecki">
                                <button class="btn btn-outline gap-2">
                                    <font-awesome-icon icon="fa-brands fa-square-github" size="xl"/>
                                    GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image-full:before {
    background-color: rgba(0, 0, 0, 0) !important;
}

.card-about {
    background: linear-gradient(
        270deg,
        rgba(249, 246, 255, 0.47) 0%,
        rgb(199, 199, 213) 45%,
        rgb(189, 216, 239) 100%
    );
}
</style>
