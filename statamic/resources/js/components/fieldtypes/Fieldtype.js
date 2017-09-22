export default {

    props: {
        data: {},
        config: {},
        name: {},
        leaveAlert: {
            default: false
        }
    },

    data() {
        return {
            autoBindChangeWatcher: true,
            changeWatcherIsBound: false
        };
    },

    ready() {
        if (this.autoBindChangeWatcher) {
            this.bindChangeWatcher();
        }
    },

    methods: {

        bindChangeWatcher() {
            if (!this.leaveAlert) return;
            if (this.changeWatcherIsBound) return;

            this.$watch('data', function () {
                this.$dispatch('changesMade', true);
            }, { deep: true });

            this.changeWatcherIsBound = true;
        }

    }

};
