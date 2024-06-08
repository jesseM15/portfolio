<template>
    <div id="section-footer">
        <div class="container p-grid">
            <div class="p-col-12 p-md-4 ">
                <a href="https://github.com/jessem15" target="_blank">View my github</a>
            </div>
            <div class="p-col-12 p-md-4">
                <a href="https://linkedin.com/in/jessem15" target="_blank">View my linkedin</a>
            </div>
            <div class="p-col-12 p-md-4">
                &copy; 2021 Jesse Merritt
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '~/app';

    #section-footer {
        border-top: 1px dashed $body-color-alt;
        padding: 1rem;
        z-index: 10;
        background: $body-bg;
        color: $body-color;
    }

    #section-footer div:nth-child(1) {
        text-align: left;
    }

    #section-footer div:nth-child(2) {
        text-align: center;
    }

    #section-footer div:nth-child(3) {
        text-align: right;
    }

    #section-footer div div {
        @media only screen and (max-width: $tablet) {
            text-align: center !important;
        }
    }
</style>
