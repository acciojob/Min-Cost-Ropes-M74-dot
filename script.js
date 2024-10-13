function mincost(arr) {
	const minHeap = []
	arr.forEach(ropeLen=>minHeap.push(ropeLen))
	minHeap.sort((a,b)=>a-b)

	let totalCost=0;

	while(minHeap.length > 1){
		let firstRope = minHeap.shift()
		let secondRope = minHeap.shift()

		let currCost = firstRope + secondRope

		totalCost+=currCost

		minHeap.push(currCost)
		minHeap.sort((a,b)=>a-b)
	}
	return totalCost
}

function calculateMinCost() {
  const input = document.getElementById('ropeInput').value;
  const arr = input.split(',').map(Number);
  const result = mincost(arr);
  document.getElementById('result').textContent = `Minimum cost to connect ropes: ${result}`;
}
