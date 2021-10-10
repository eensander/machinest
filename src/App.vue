<template>
	<div class="">
<!--
		<div class="sidebar">
			<span class="sidebar-item">Home</span>
			<span class="sidebar-item">Load</span>
			<span class="sidebar-item active">Features</span>
			<span class="sidebar-item">Method</span>
			<span class="sidebar-item">Clean</span>
			<span class="sidebar-item">Train</span>
		</div>
-->
		<div id="main" class="">
			<div class="self-center mt-8 mb-10 border-b-4 border-gray-300 pb-2">
				<!-- <img class="" alt="Vue logo" src="./assets/logo.png"> -->
				<span class="text-5xl uppercase font-bold text-blue-800">Machinest</span>
			</div>
			
			<router-view></router-view>
		</div>

	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import useConfig from '@/composables/useConfig';

export default defineComponent({

	name: "App",

	setup() { 
		const config = useConfig()

		return {
			config
		}
	}

})
</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

/*
.sidebar {
	@apply w-72 border-r border-gray-300 bg-gray-100 p-4 pt-32;
	.sidebar-item {
		@apply block w-full px-6 py-2 rounded-md text-sm text-gray-900 select-none my-1;

		&.active {
			@apply relative z-10;
			background-color: #e0e0ee
		}

		&:not(.active):hover {
			@apply bg-gray-50;
		}
	}
}
*/

html {
}

#main {
    @apply md:mx-auto mx-2 px-4 max-w-4xl flex flex-col h-screen ;
    // @apply border border-gray-200;
}


h1 {
    @apply mb-4 font-bold font-serif text-4xl text-gray-800
}

h3 {
    @apply mb-3 font-medium font-serif text-2xl text-gray-900
}

.router-btn, .btn {

    @apply font-normal px-4 py-1 border-b-4 ;
    @apply bg-blue-600 border-blue-400 text-white; // default btn style

    &.btn-green {
        @apply bg-green-500 border-green-300 text-white;
    }

    &.btn-gray {
        @apply bg-gray-600 border-gray-400 text-white;
    }

    &[disabled] {
        // @apply bg-gray-500 border-gray-400 cursor-not-allowed;
        @apply cursor-not-allowed;
        opacity: 0.6;
        // pointer-events: none;
    }

}

table.styled-table {

    @apply border-collapse table-auto w-full bg-white relative;

    white-space: nowrap;

    @apply overflow-x-auto bg-white rounded-lg overflow-y-auto relative;
    // @apply my-2 border border-gray-200;

    thead {
        tr {
            @apply text-left;

            th {
                @apply bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs;
            }
        }
    }

    tbody {
        tr {
            th {
                @apply bg-gray-100 border-t border-gray-200 px-6 py-2 text-gray-700 font-bold tracking-wider uppercase text-xs;
				width: 1/6%;
            }
            td {
                @apply border-dashed border-t border-gray-200 ;
                @apply pl-6 py-2 ;

                /*
                a:not(.btn) {
                    // @apply text-gray-800 px-6 py-3 flex items-center;
                    @apply text-gray-700;
                    &:hover {
                        @apply text-gray-900;
                        text-decoration: underline;
                    }
                }
                */
            }
        }
    }
}


</style>
