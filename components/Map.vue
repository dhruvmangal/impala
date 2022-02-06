<template>
    <div class="container-fluid map">
        <div class="row">
            <div class="col-md-12">
                <div id="map-wrap" style="height: 75vh; width: 96vw; z-index: 0;">
                    <no-ssr>
                    <l-map :zoom=10 :center="[26.881326,75.246752]">
                        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                        <l-marker :lat-lng="[26.881326,75.246752]"></l-marker>
                    </l-map>
                    </no-ssr>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.map{
    margin: 20px 0px;
    z-index: 0 !important;
}
#map-wrap{
    height: 80vh;
}
</style>

<script>
export default {
    name: 'Map'
}
</script>