// Mobile Menu Burger
function burgerMenu() {
	const menu = document.querySelector('#mobile-menu')
	const burger = document.querySelector('#burger')
	const body = document.querySelector('body')

	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		menu.classList.toggle('hidden')
		menu.classList.toggle('flex')
		body.classList.toggle('overflow-hidden')
	})

	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.add('hidden')
			menu.classList.remove('flex')
			burger.classList.remove('active')
			body.classList.remove('overflow-hidden')
		}
	})
}
burgerMenu()

function toggleSubmenu() {
	const submenuTrigger = document.querySelectorAll('.with-submenu')
	const submenus = document.querySelectorAll('.submenu')
	const submenuIcons = document.querySelectorAll('.submenu-icon')

	submenuTrigger.forEach((trigger, idx) => {
		trigger.addEventListener('click', (e) => {
			if (
				e.target.classList.contains('submenu-trigger') ||
				e.target.classList.contains('submenu-icon')
			) {
				slideToggle(submenus[idx])
				submenuIcons[idx].classList.toggle('rotate-180')
			}
		})
	})
}
toggleSubmenu()

// Fixed nav
function fixedHeader() {
	const header = document.getElementById('header')
	const content = document.querySelector('main')

	window.addEventListener('scroll', function () {
		// Проверяем, сколько было прокручено сверху страницы
		if (window.scrollY >= 200) {
			// Если прокрутка больше или равна 200px, добавляем класс "fixed"
			header.classList.add('active')
			content.classList.add('mt-20')
		} else {
			// В противном случае удаляем класс "fixed"
			header.classList.remove('active')
			content.classList.remove('mt-20')
		}
	})
}
fixedHeader()

// Animation Mobile Submenu
/* SLIDE UP */
let slideUp = (target, duration = 300) => {
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.boxSizing = 'border-box'
	target.style.height = target.offsetHeight + 'px'
	target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.style.border = 'none'

	window.setTimeout(() => {
		target.style.display = 'none'
		target.style.removeProperty('height')
		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-top')
		target.style.removeProperty('margin-bottom')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* SLIDE DOWN */
let slideDown = (target, duration = 300) => {
	target.style.removeProperty('display')
	let display = window.getComputedStyle(target).display
	if (display === 'none') display = 'grid'
	target.style.display = display
	let height = target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.offsetHeight
	target.style.boxSizing = 'border-box'
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.height = height + 'px'
	target.style.border = 'none'

	target.style.removeProperty('padding-top')
	target.style.removeProperty('padding-bottom')
	target.style.removeProperty('margin-top')
	target.style.removeProperty('margin-bottom')
	target.style.removeProperty('border')

	window.setTimeout(() => {
		target.style.removeProperty('height')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* TOOGLE */
const slideToggle = (target, duration = 300) => {
	if (window.getComputedStyle(target).display === 'none') {
		return slideDown(target, duration)
	} else {
		return slideUp(target, duration)
	}
}

// Slider
const swiper = new Swiper('.swiper', {
	// Optional parameters
	spaceBetween: 24,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},

	// Responsive breakpoints
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		580: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
})

// Tabs
function toggleTabs(tabsId) {
	// Get main element
	const tabs = document.getElementById(tabsId)
	// Get all the tabs triggers and contents
	const tabsTriggers = tabs.querySelectorAll('.tab-trigger')
	const tabsContents = tabs.querySelectorAll('.tab-content')
	tabsContents.forEach((content) => content.classList.add('hidden'))
	tabsContents[0].classList.remove('hidden')

	// Add a click event listener to each tabs trigger
	tabsTriggers.forEach((trigger, index) => {
		trigger.addEventListener('click', () => {
			// Remove the "active" class from all tabs triggers
			tabsTriggers.forEach((t) => t.classList.remove('active'))
			// Add the "activity" class to the clicked tabs trigger
			trigger.classList.add('active')

			// Hide all tabs contents
			tabsContents.forEach((content) => content.classList.add('hidden'))
			// Show the corresponding tabs content
			tabsContents[index].classList.remove('hidden')
		})
	})
}
// ID of the main tab block
// ID основного блока с табами
toggleTabs('tabs')

// Cookie msg
function toggleCookieMsg() {
	const msg = document.getElementById('cookie')
	const closeBtn = document.getElementById('close-cookie')

	closeBtn.addEventListener('click', () => {
		msg.classList.add('hidden')
	})

	setTimeout(() => {
		msg.classList.toggle('hidden')
	}, 1500)
}
toggleCookieMsg()
