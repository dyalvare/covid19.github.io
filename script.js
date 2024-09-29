let form = document.getElementById('form')
let requiredFields = document.querySelectorAll('.required')

form.onsubmit = (e) => {
  e.preventDefault()
  let flag = true

  requiredFields.forEach((input) => {
    let res
    if (input.type === 'number') res = /[0-9]+/.test(input.value)
    if (input.type === 'select-one')
      res = input.value !== 'Opcion incorrecta' ? true : false

    if (!res) flag = false
  })

  if (flag) {
    alert('Todos los datos están guardados por completo.')
    form.reset()
  } else alert('Hubo un error con los campos númericos o el tipo de vacuna.')
}
