export const exampleMixin = {
    created() {
        // this.logMessage()
    },
    data() {
        return {
            message: 'I am such a nice mixin.'
        }
    },
    methods: {
        // logMessage() {
        //     console.log(this.message)
        // }
    hello() {
        console.log('Hello from the mixin!')
    }
    }
}