<script>
import { exampleMixin } from '../mixins/exampleMixin.js'
export default {
  mixins: [exampleMixin],
  data() {
    return {
      message: 'I take priority.',
    }
  },
//   created() {
//     console.log(this.message)
//   },
}
</script>