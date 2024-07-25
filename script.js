function mincost(arr) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order
  let totalCost = 0;

  while (arr.length > 1) {
    // Remove the two smallest elements
    let first = arr.shift();
    let second = arr.shift();
    
    // Calculate the cost to connect these two ropes
    let cost = first + second;
    totalCost += cost;
    
    // Insert the new rope back into the array and sort again
    arr.push(cost);
    arr.sort((a, b) => a - b);
  }
  
  return totalCost;
}

function calculateMinCost() {
  const input = document.getElementById('ropeInput').value;
  const arr = input.split(',').map(Number);
  const result = mincost(arr);
  document.getElementById('result').textContent = `Minimum cost to connect ropes: ${result}`;
}
