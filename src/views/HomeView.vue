<script setup>
import NavigationBar from "@/components/NavigationBar.vue"
</script>

<template>
    <NavigationBar/>
    <div class="grid gap-4 grid-cols-1">
        <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-none w-3/8 card card-image h-96 image-full">
                <figure>
                    <img
                        class="object-fill object-center"
                        src="/profilepicture.jpg"
                        alt="Profile picture"
                    />
                </figure>
            </div>
            <div class="flex-auto w-5/8 card card-about h-96">
                <div class="card-body">
                    <h2 class="card-title text-5xl">
                        Hey, name's Jakub and I'm a Warsaw based Fullstack Developer.
                    </h2>
                    <p class="">
                        Currently studying at Polish-Japanese Academy of Information Technology,
                        my wide range of skills in all areas of software development is perfect
                        for the needs of your company!
                    </p>
                    <div class="card-actions">
                        <a target="_blank" href="https://www.linkedin.com/in/jakubpawlowski00/">
                            <button class="btn gap-2">
                                <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" />
                                Contact me
                            </button>
                        </a>
                        <a target="_blank" href="https://www.github.com/manymanecki">
                            <button class="btn btn-outline gap-2">
                                <font-awesome-icon
                                    icon="fa-brands fa-square-github"
                                    size="xl"
                                />
                                GitHub
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col md:flex-row gap-4">
            <div class="card card-about h-96">
                <div class="card-body">
                    <h2 class="card-title text-5xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <p class="">
                        In ut erat elit. Etiam et malesuada risus. Curabitur iaculis nunc
                        egestas, interdum erat id, lobortis velit. Quisque interdum tortor at
                        metus laoreet auctor.
                    </p>
                </div>
            </div>
            <div class="card card-about h-96">
                <div class="card-body">
                    <h2 class="card-title text-5xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <p class="">
                        In ut erat elit. Etiam et malesuada risus. Curabitur iaculis nunc
                        egestas, interdum erat id, lobortis velit. Quisque interdum tortor at
                        metus laoreet auctor.
                    </p>
                </div>
            </div>
        </div>
        <div class="flex flex-col md:flex-row gap-4">
            <div class="card card-about h-96">
                <div class="card-body">
                    <h2 class="card-title text-5xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <p class="">
                        In ut erat elit. Etiam et malesuada risus. Curabitur iaculis nunc
                        egestas, interdum erat id, lobortis velit. Quisque interdum tortor at
                        metus laoreet auctor.
                    </p>
                </div>
            </div>
            <div class="card card-about h-96">
                <div class="card-body">
                    <h2 class="card-title text-5xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <p class="">
                        In ut erat elit. Etiam et malesuada risus. Curabitur iaculis nunc
                        egestas, interdum erat id, lobortis velit. Quisque interdum tortor at
                        metus laoreet auctor.
                    </p>
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
