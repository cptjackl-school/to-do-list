const items = [
  { task: 'Buy Milk', complete: false },
  { task: 'Feed Cat', complete: true },
  { task: 'Clean Room', complete: false },
  { task: 'Make Dinner', complete: false }
]

//Html elements
const $container = document.querySelector('#container')

//this is the list we are recreating in javascript
/*
<ul class="list-group">
      <li class="list-group-item">
        <input type="checkbox" class="form-check-input me-2">
        <label class="form-check-label">Buy Milk</label>
      </li>
      <li class="list-group-item">
        <input type="checkbox" class="form-check-input me-2" checked>
        <label class="form-check-label">Feed Cat</label>
      </li>
    </ul>
*/

//creating list element, best to work from outside in 
const $list = document.createElement('ul')
$list.className = 'list-group'

//creating a list element and putting it in the unordered list
//outting it in a loop that goes through our array of tasks and 
// creates li elements for each and appends them to the list\

for (const item of items){
  const $item = document.createElement('li')
  $item.className = 'list-group-item'
  //$item.textContent = item.task

  const $input = document.createElement('input')
  $input.type = 'checkbox'
  $input.className = 'form-check-input me-2'
  $input.checked = item.complete

  const $label = document.createElement('label')
  $label.className = 'form-check-label'
  $label.textContent = item.task

  $item.append($input)
  $item.append($label)
  $list.append($item)
}
//using the append method to push the unordered list to the container
$container.append($list)



