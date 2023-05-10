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
                        <p>Currently studying at Polish-Japanese Academy of Information Technology, my wide range of skills in all areas of software development are perfect for the needs of your company!</p>
                        <div class="card-actions">
                            <button class="btn">Contact me</button>
                            <button class="btn btn-outline">Linked</button>
                            <button class="btn btn-outline">GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex">
            <div class="flex-auto w-2/5"></div>
            <div class="flex-auto w-3/5"></div>
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

.card-about p {
    padding-top: 2rem;
}
</style>
