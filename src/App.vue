<template>
    <div id="main" class="">
        <div class="self-center mt-8 mb-10 border-b-4 border-gray-300 pb-2">
            <!-- <img class="" alt="Vue logo" src="./assets/logo.png"> -->
            <span class="text-5xl uppercase font-bold text-blue-800">Machinest</span>
        </div>
		
		<!-- 
		<div>
			<ul id="breadcrumb">
				<li><a href="#">Test</a></li>
				<li><a href="#">Test</a></li>
			</ul>
		</div>
		-->

		<table class="styled-table hidden">
			<tbody>
				<tr>
					<th>Test:</th>
					<td>{{ config.test.value }}</td>
				</tr>
				<tr>
					<th>Training Method:</th>
					<td>{{ config.training_method.value }}</td>
				</tr>
			</tbody>
		</table>

        <router-view></router-view>
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

html {
}

#main {
    @apply md:mx-auto mx-2 px-4 max-w-4xl flex flex-col h-screen ;
    // @apply border border-gray-200;
}


h1 {
    @apply mb-4 font-bold font-serif text-4xl text-gray-800
}

.router-btn {

    @apply font-normal px-4 py-1 border-b-4 ;
    @apply bg-blue-600 border-blue-400 text-white; // default btn style

    &.router-btn-green {
        @apply bg-green-600 border-green-400 text-white;
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
                @apply px-6 py-2 ;

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
