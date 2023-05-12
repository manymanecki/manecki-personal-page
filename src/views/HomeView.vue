<script setup>
import NavigationBar from "@/components/NavigationBar.vue"
import FooterBar from "@/components/FooterBar.vue";
</script>

<template>
    <NavigationBar/>
    <div class="grid gap-4 grid-cols-1">
        <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-none w-3/8 card card-image image-full md:w-96">
                <figure>
                    <img
                        class="object-fill"
                        src="/profilepicture.jpg"
                        alt="Profile picture"
                    />
                </figure>
            </div>
            <div class="flex-auto w-5/8 card card-about h-96">
                <div class="card-body">
                    <h2>
                        Hey, name's Jakub and I'm a Warsaw based Fullstack Developer.
                    </h2>
                    <p>
                        Currently studying at Polish-Japanese Academy of Information Technology,
                        my wide range of skills in all areas of software development is perfect
                        for the needs of your company!
                    </p>
                    <div class="card-actions">
                        <a target="_blank" href="https://www.linkedin.com/in/jakubpawlowski00/">
                            <button class="btn md:gap-2">
                                <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" />
                                Contact me
                            </button>
                        </a>
                        <a target="_blank" href="https://www.github.com/manymanecki">
                            <button class="btn btn-outline md:gap-2">
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
            <div class="card h-96 bg-primary/60 md:w-3/5">
                <div class="card-body">
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <p class="">
                        In ut erat elit. Etiam et malesuada risus. Curabitur iaculis nunc
                        egestas, interdum erat id, lobortis velit. Quisque interdum tortor at
                        metus laoreet auctor.
                    </p>
                </div>
            </div>
            <div class="card h-96 bg-primary/40 md:w-2/5">
                <div class="card-body">
                    <h2>
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
            <div class="card h-96 bg-primary/20">
                <div class="card-body">
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                </div>
            </div>
            <div class="card h-96 bg-primary/10">
                <div class="card-body">
                    <h2>
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
    <FooterBar/>
</template>

<style scoped>
.image-full:before {
    background-color: rgba(0, 0, 0, 0) !important;
    border: hsl(var(--p)) solid 5px;
}

.card-about {
    background: hsl(var(--p));
}
</style>
