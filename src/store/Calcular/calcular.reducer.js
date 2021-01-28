export default function (state = 0, action) {
  switch(action.type) {
    case 'SOMA':
      return action.payload[0] + action.payload[1]

    case 'SUBTRACAO':
      return action.payload[0] - action.payload[1]

    default:
      return state
  }
}
