// To find the degree that we have to move from 12:00
// 	|-> for h hour = (30h + m/2)deg <m is the minutes>
// 	|-> for m minutes = (6m)deg <s is the seconds>
// 	|-> for s seconds = (6s)

setInterval(() => {
	let d = new Date()
	let hours = d.getHours()
	let minutes = d.getMinutes()
	let seconds = d.getSeconds()

	let hrotation = 30*hours + minutes/2
	let mrotation = 6 * minutes
	let srotation = 6 * seconds 

	hour.style.transform = `rotate(${hrotation}deg)`
	minute.style.transform = `rotate(${mrotation}deg)`
	second.style.transform = `rotate(${srotation}deg)`

}, 1000)