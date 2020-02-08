import Form from './Form'
import { connect } from 'react-redux'
import { alterHaiku } from '../actions/actions'

const mapStateToProps = state => ({
   haiku: state.haiku,
})

const mapDispatchToProps = dispatch => {
   return {
      onGenerateClick: newHaiku => dispatch(alterHaiku(newHaiku)),
   }
}

const ContainerForm = connect(mapStateToProps, mapDispatchToProps)(Form)
export default ContainerForm
