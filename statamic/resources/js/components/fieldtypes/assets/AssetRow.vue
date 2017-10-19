<template>

    <tr>
        <td>
            <div v-if="canShowSvg"
                 class="img svg-img"
                 :style="'background-image:url('+asset.url+')'">
            </div>
            <template v-else>
                <a :href="toenail" class="zoom" v-if="isImage" :title="label">
                    <img :src="thumbnail" />
                </a>
                <div class="img" v-else><file-icon type="div" :extension="asset.extension"></file-icon></div>
            </template>
        </td>
        <td>
            <span @dblclick="edit">
                <span v-if="asset.title !== asset.filename" :title="asset.basename">{{ asset.title }}</span>
                <span v-else>{{ asset.basename }}</span>
            </span>
        </td>
        <td class="pr-0 text-right">

            <span class="remove-asset" @click="remove"></span>

            <asset-editor
                v-if="editing"
                :id="asset.id"
                :allow-deleting="false"
                @closed="closeEditor"
                @saved="assetSaved">
            </asset-editor>
        </td>
    </tr>

</template>

<script>
import Asset from './Asset';

export default {

    mixins: [Asset]

}
</script>
