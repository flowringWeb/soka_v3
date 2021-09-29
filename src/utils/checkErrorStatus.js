export default {
    methods: {
        isErrorStatus(val = false) {
            console.log('isErrorStatus');
            if (val) {
                console.log('y',val);
                return false
            } else {
                console.log('n');
                return true
            }
        }
    }
}