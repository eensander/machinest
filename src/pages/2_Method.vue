<template>
  <div>
    <h1>2. Training Method</h1>

    <p class="text-sm">Please select the which you would like to use.</p>
    <hr class="mt-1 mb-4" />

    <div class="grid grid-cols-3 gap-4">
        <div
            v-for="method_category in method_library"
            :key="method_category"
            class="method-category-block"
            :class="{'selected': selected_method_category == method_category}"
            @click="selected_method_category = method_category">
            <span class="self-center">{{ method_category.name }}</span>
        </div>
    </div>

    <hr class="my-4" />

    <div class="grid grid-cols-3 gap-4" v-if="selected_method_category != null ">
        <div
            v-for="method in selected_method_category.methods"
            :key="method"
            class="method-block"
            :class="{'selected': selected_method == method}"
            @click="selected_method = method">
            <span class="self-center">{{ method.name }}</span>
        </div>
    </div>

    <div class="flex justify-between mt-8">
        <button @click="$router.push({ name: 'home' });" class="router-btn">
            &#xff1c; 1. Load
        </button>
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'features' });" :disabled="page_next_disabled" class="router-btn">
            3. Feature Configuration &#xff1e;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface method {
    name: string,
    train: void
}

interface method_category {
    name: string;
    methods: method[];
}

// type method_library = Array<method_category>;

export default defineComponent({

	data: () => ({
        method_library: [
            {
                name: "supervised",
                methods: [
                    // (await import('../learning_methods/supervised/linear_regression')).default,
                    // (await import('../learning_methods/supervised/linear_regression')).default,
                ]
            },
            {
                name: "unsupervised",
                methods: [
                    // require('../learning_methods/supervised/linear_regression')
                ]
            },
            {
                name: "deep learning",
                methods: [
                    // require('../learning_methods/supervised/linear_regression')
                ]
            },
        ] as method_category[],

        selected_method_category: null as method_category | null,
        selected_method: null as method | null,

	}),

    methods: {

    },

    created() {
        console.log(this.method_library)
        // this.selected_method_category = this.method_library[0];
    },

    async mounted() {

        /*
        this.method_library = [
            {
                name: "supervised",
                methods: [
                    (await import('../learning_methods/supervised/linear_regression')).default,
                ]
            },
            {
                name: "unsupervised",
                methods: [
                    // require('../learning_methods/supervised/linear_regression')
                ]
            },
            {
                name: "deep learning",
                methods: [
                    // require('../learning_methods/supervised/linear_regression')
                ]
            },
        ]

        const category_supervised: method_category = {
            name: "supervised",
            methods: []
        }

        for (const filename in [
            'linear_regression'
        ]) {
            category_supervised.methods.push(await import(`../learning_methods/supervised/${filename}`)).default)
        }

        this.method_library.push(category_supervised);

        */
    },

    computed: {
        page_next_disabled(): boolean {
            // return this.file_dataset == null && this.file_model == null;
            return false;
        }
    }

});
</script>

<style scoped lang="scss">

.method-category-block {
    @apply bg-gray-200 border border-gray-300 h-16 flex justify-center cursor-pointer text-gray-800;

    &.selected {
        @apply bg-blue-200 border-blue-300 text-blue-900;
    }
}

.method-block {
    @apply bg-gray-200 border border-gray-300 h-16 flex justify-center cursor-pointer text-gray-800;

    &.selected {
        @apply bg-blue-200 border-blue-300 text-blue-900;
    }
}

</style>
