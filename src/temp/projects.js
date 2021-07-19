export const projects = [// 2 projects
	{
		id: 2,
		inProgress: false,
		mainInfo: {
			title: 'Gulp',//! second one/ ////////////////////////
			desc: 'project',
			img: 'gulp.jpg',
			website: 'https://gulp.kir3kin.site/',
			github: 'https://github.com/kir3kin/html-coding-scss-gulp-'
		},
		fullDesc: [
			{
				id: 1,
				title: 'In this project were used',
				elements: [
					{
						id: 1,
						desc: 'Gulp',
						link: 'https://github.com/kir3kin/html-coding-scss-gulp-/blob/main/gulpfile.js'
					},
					{
						id: 2,
						desc: 'SCSS(+BEM)',
						link: 'https://github.com/kir3kin/html-coding-scss-gulp-/tree/main/src/assets/scss'
					},
					{
						id: 3,
						desc: 'Vanila.js',
						link: 'https://github.com/kir3kin/html-coding-scss-gulp-/tree/main/src/assets/js'
					}
				]
			},
			{
				id: 2,
				title: 'Implemented',
				elements: [
					{
						id: 1,
						desc: 'Responsive web design: SCSS(BEM)',
						link: 'https://github.com/kir3kin/html-coding-scss-gulp-/tree/main/src/assets/scss'
					},
					{
						id: 2,
						desc: 'Modal windows',
						link: 'https://github.com/kir3kin/html-coding-scss-gulp-/blob/main/src/assets/js/modal.js',
						children: [
							'“Write me” (sidebar, lower blue button)',
							'“Stories” (images on the main page)'
						]
					},
					{
						id: 3,
						desc: '“Burger menu” (for tablets and smarphones)',
						link: 'https://github.com/kir3kin/html-coding-scss-gulp-/blob/main/src/assets/js/mobileNav.js'
					}
				]
			},
			{
				id: 3,
				title: 'Pages',
				elements: [
					{
						id: 1,
						desc: 'Main - page',
						link: 'https://gulp.kir3kin.site/'
					},
					{
						id: 2,
						desc: 'Post - page',
						link: 'https://gulp.kir3kin.site/post.html'
					},
					{
						id: 3,
						desc: 'Works list - page',
						link: 'https://gulp.kir3kin.site/works.html'
					},
					{
						id: 4,
						desc: 'Profile - page',
						link: 'https://gulp.kir3kin.site/profile.html'
					},
					{
						id: 5,
						desc: 'Search result - page',
						link: 'https://gulp.kir3kin.site/search.html'
					},
					{
						id: 6,
						desc: 'Reset password - page',
						link: 'https://gulp.kir3kin.site/reset.html'
					},
					{
						id: 7,
						desc: 'Log in - page ',
						link: 'https://gulp.kir3kin.site/signin.html'
					},
					{
						id: 8,
						desc: 'Sign up - page',
						link: 'https://gulp.kir3kin.site/signup.html'
					},
					{
						id: 9,
						desc: 'About me - page',
						link: 'https://gulp.kir3kin.site/text.html'
					}
				]
			},
			{
				id: 4,
				title: 'Sources',
				elements: [
					{
						id: 1,
						desc: 'Source code on GitHub',
						link: 'https://github.com/kir3kin/html-coding-scss-gulp-',
						children: [
							'Folder „src” – to develop',
							'Folder „dist” – to release'
						]
					}
				]
			},
			{
				id: 5,
				title: 'Validators',
				elements: [
					{
						id: 1,
						desc: 'CSS',
						link: 'https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgulp.kir3kin.site&lang=en'
					},
					{
						id: 2,
						desc: 'HTML',
						link: 'https://validator.w3.org/nu/?doc=https%3A%2F%2Fgulp.kir3kin.site%2F'
					},
					{
						id: 3,
						desc: 'PageSpeed',
						link: 'https://developers.google.com/speed/pagespeed/insights/?hl=en&url=https%3A%2F%2Fgulp.kir3kin.site%2F&tab=desktop'
					}
				]
			}
		]
	},
	{
		id: 1,
		inProgress: false,
		mainInfo: {
			title: 'WHS',//! first one///////////////
			desc: '(Webpack+HTML+SCSS)',
			img: 'whs.jpg',
			website: 'https://whs.kir3kin.site/',
			github: 'https://github.com/kir3kin/whs-project',
		},
		fullDesc: [
			{
				id: 1,
				title: 'In this project were used',
				elements: [
					{
						id: 1,
						desc: 'Webpack',
						link: 'https://github.com/kir3kin/whs-project/blob/master/webpack.config.js'
					},
					{
						id: 2,
						desc: 'SCSS(+BEM)',
						link: 'https://github.com/kir3kin/whs-project/tree/master/src/assets/scss'
					},
					{
						id: 3,
						desc: 'Vanila.js',
						link: 'https://github.com/kir3kin/whs-project/blob/master/src/index.js'
					}
				]
			},
			{
				id: 3,
				title: 'Page',
				elements: [
					{
						id: 1,
						desc: 'Main page',
						link: 'https://whs.kir3kin.site/'
					}
				]
			},
			{
				id: 2,
				title: 'Implemented',
				elements: [
					{
						id: 1,
						desc: 'Responsive web design: SCSS(BEM)',
						link: 'https://github.com/kir3kin/whs-project/blob/master/src/assets/scss/'
					},
					{
						id: 3,
						desc: 'Sliders',
						link: 'https://github.com/kir3kin/whs-project/blob/master/src/assets/modules/slider.js',
						children: [
							'"Main-slider" (in the header “Intro”)',
							'"Text-slider" (in the footer “Testimoanials”)'
						]
					},
					{
						id: 4,
						desc: 'Tabs',
						link: 'https://github.com/kir3kin/whs-project/blob/master/src/assets/modules/tabs.js'
					},
					{
						id: 5,
						desc: 'Resize function (Re-init sliders and tabs when window is resized)'
					},
					{
						id: 6,
						desc: 'Modal window',
						link: 'https://github.com/kir3kin/whs-project/blob/master/src/assets/modules/modal-slider.js',
						children: [
							'“Try demo” (one modal widnow for all slides)'
						]
					},
					{
						id: 7,
						desc: 'Form validation (only simple validation, without sending mails)',
						link: 'https://github.com/kir3kin/whs-project/blob/master/src/assets/modules/form-validation.js'
					},
					{
						id: 8,
						desc: 'Navigation’s highlight (by hash)',
						link: 'https://github.com/kir3kin/whs-project/blob/master/src/assets/modules/navigation.js'
					}
				]
			},
			{
				id: 4,
				title: 'Sources',
				elements: [
					{
						id: 2,
						desc: 'PSD template',
						link: 'https://github.com/kir3kin/whs-project/tree/master/Template'
					},
					{
						id: 4,
						desc: 'Source code on GitHub',
						link: 'https://github.com/kir3kin/whs-project',
						children: [
							'Folder „src” – to develop',
							'Folder „dist” – to release'
						]
					}
				]
			},
			{
				id: 5,
				title: 'Validators',
				elements: [
					{
						id: 1,
						desc: 'CSS',
						link: 'https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fwhs.kir3kin.site%2F&lang=en'
					},
					{
						id: 2,
						desc: 'HTML',
						link: 'https://validator.w3.org/nu/?doc=https%3A%2F%2Fwhs.kir3kin.site%2F'
					},
					{
						id: 3,
						desc: 'PageSpeed',
						link: 'https://developers.google.com/speed/pagespeed/insights/?hl=en&url=https%3A%2F%2Fwhs.kir3kin.site%2F&tab=mobile'
					}
				]
			}
		]
	},
	{	id: 3,
		inProgress: true,
		mainInfo: {
			title: 'My projects',//! third one///////////////
			desc: '(main website)',
			img: 'myProjects.jpg',
			website: 'https://kir3kin.site/',
			github: 'https://github.com/kir3kin/my-portfolio-site',
		},
		fullDesc: [
			{
				id: 1,
				title: 'In this project were used',
				elements: [
					{
						id: 1,
						desc: 'Webpack',
						link: 'https://github.com/kir3kin/my-portfolio-site/blob/main/webpack.config.js'
					},
					{
						id: 2,
						desc: 'React',
						children: [
							'useRef',
							'useState',
						]
					},
					{
						id: 3,
						desc: 'TypeScript',
						link: 'https://github.com/kir3kin/my-portfolio-site/blob/main/tsconfig.json'
					},
					{
						id: 4,
						desc: 'SCSS(+BEM)',
						link: 'https://github.com/kir3kin/my-portfolio-site/tree/main/src/assets/scss'
					}
				]
			},
			{
				id: 2,
				title: 'Implemented',
				elements: [
					{
						id: 1,
						desc: 'Simple routing (BrowserRouter+Switch+Route)',
						link: 'https://github.com/kir3kin/my-portfolio-site/blob/main/src/index.tsx'
					},
					{
						id: 2,
						desc: 'Component - modal window: “Project description”',
						link: 'https://github.com/kir3kin/my-portfolio-site/tree/main/src/Modal'
					},
					{
						id: 3,
						desc: 'Component - Navbar',
						link: 'https://github.com/kir3kin/my-portfolio-site/blob/main/src/components/Navbar.tsx'
					},
					{
						id: 4,
						desc: 'Typescript interfaces',
						link: 'https://github.com/kir3kin/my-portfolio-site/blob/main/src/interfaces/interfaces.ts'
					},
				]
			},
			{
				id: 3,
				title: 'Page',
				elements: [
					{
						id: 1,
						desc: 'Main page',
						link: 'https://kir3kin.site/'
					},
					{
						id: 2,
						desc: 'About me [ in progress... ]',
						link: 'https://kir3kin.site/about'
					}
				]
			},
			{
				id: 4,
				title: 'Sources',
				elements: [
					{
						id: 1,
						desc: 'Source code on GitHub',
						link: 'https://github.com/kir3kin/my-portfolio-site',
						children: [
							'Folder „src” – to develop',
							'Folder „dist” – to release'
						]
					}
				]
			}
		]
	},
	{	id: 4,
		inProgress: false,
		mainInfo: {
			title: 'React todos',//! fourth ///////////////
			desc: '(Basic hooks)',
			img: 'todos.jpg',
			website: 'https://todos.kir3kin.site/',
			github: 'https://github.com/kir3kin/react-todos',
		},
		fullDesc: [
			{
				id: 1,
				title: 'In this project were used',
				elements: [
					{
						id: 1,
						desc: 'CRA',
					},
					{
						id: 2,
						desc: 'React',
					},
					{
						id: 3,
						desc: 'TypeScript',
					},
					{
						id: 4,
						desc: 'SCSS',
						link: 'https://github.com/kir3kin/react-todos/tree/main/src/assets/scss'
					}
				]
			},
			{
				id: 2,
				title: 'Implemented',
				elements: [
					{
						id: 1,
						desc: 'useState (todos form & loading\'s image)',
						link: 'https://github.com/kir3kin/react-todos/blob/main/src/App.tsx'
					},
					{
						id: 2,
						desc: 'useEffect (to loading todos)',
						link: 'https://github.com/kir3kin/react-todos/blob/main/src/App.tsx'
					},
					{
						id: 3,
						desc: '(create & use)Context',
						link: 'https://github.com/kir3kin/react-todos/blob/main/src/context/TodosContext.tsx'
					},
					{
						id: 4,
						desc: 'Lazy loading(Suspense)',
						link: 'https://github.com/kir3kin/react-todos/blob/main/src/App.tsx'
					},
					{
						id: 5,
						desc: 'Todo list',
						link: 'https://github.com/kir3kin/react-todos/blob/main/src/components/TodoList.tsx'
					},
					{
						id: 6,
						desc: 'Custom hook (based on useState)',
						link: 'https://github.com/kir3kin/react-todos/blob/main/src/components/AddTodo.tsx'
					},
					{
						id: 7,
						desc: 'Typescript (for all components and not only)',
						link: 'https://github.com/kir3kin/react-todos/blob/main/src/interfaces/interfaces.ts'
					},
					{
						id: 8,
						desc: 'Animation (add and delete todo item)',
						link: 'https://github.com/kir3kin/react-todos/blob/main/src/components/TodoList.tsx',
						children: [
							'react-transition-group'
						]
					}
				]
			},
			{
				id: 3,
				title: 'Page',
				elements: [
					{
						id: 1,
						desc: 'Todos page',
						link: 'https://todos.kir3kin.site/'
					},
				]
			},
			{
				id: 4,
				title: 'Sources',
				elements: [
					{
						id: 1,
						desc: 'Source code on GitHub',
						link: 'https://github.com/kir3kin/react-todos/',
						children: [
							'Folder „src & public” – to develop',
							'Folder „build” – to release'
						]
					}
				]
			}
		]
	},
	{	id: 5,
		inProgress: false,
		mainInfo: {
			title: 'Form',//! fifth ///////////////
			desc: '(React + Redux + TypeScript)',
			img: 'form-validation.jpg',
			website: 'https://form-validation.kir3kin.site/',
			github: 'https://github.com/kir3kin/form-validation',
		},
		fullDesc: [
			{
				id: 1,
				title: 'In this project were used',
				elements: [
					{
						id: 1,
						desc: 'CRA',
					},
					{
						id: 2,
						desc: 'React',
					},
					{
						id: 3,
						desc: 'TypeScript',
					},
					{
						id: 5,
						desc: 'Redux (Toolkit)',
						link: 'https://github.com/kir3kin/form-validation/blob/main/src/app/store.ts'
					},
					{
						id: 4,
						desc: 'SCSS',
						link: 'https://github.com/kir3kin/form-validation/tree/main/src/assets/scss'
					}
				]
			},
			{
				id: 2,
				title: 'Implemented',
				elements: [
					{
						id: 1,
						desc: 'React transition group plugin',
						link: 'https://github.com/kir3kin/form-validation/blob/main/src/form/Input.tsx',
						children: [
							'Validation error for each input',
							'"You are logged in" alert'
						]
					},
					{
						id: 2,
						desc: 'Form reducer',
						link: 'https://github.com/kir3kin/form-validation/blob/main/src/form/formSlice.ts'
					},
					{
						id: 3,
						desc: 'Validation for 3 input\'s types (email, tel, password)',
						link: 'https://github.com/kir3kin/form-validation/blob/main/src/app/defaultValidPatters.ts'
					},
					{
						id: 4,
						desc: 'Async sending form data, "logIn" action',
						link: 'https://github.com/kir3kin/form-validation/blob/main/src/form/formSlice.ts'
					},
					{
						id: 5,
						desc: 'UseRegister hook for input registration',
						link: 'https://github.com/kir3kin/form-validation/blob/main/src/form/Form.tsx'
					}
				]
			},
			{
				id: 3,
				title: 'Page',
				elements: [
					{
						id: 1,
						desc: 'Form page',
						link: 'https://form-validation.kir3kin.site/'
					},
				]
			},
			{
				id: 4,
				title: 'Sources',
				elements: [
					{
						id: 1,
						desc: 'Source code on GitHub',
						link: 'https://github.com/kir3kin/form-validation/',
						children: [
							'Folder „src & public” – to develop',
							'Folder „build” – to release'
						]
					}
				]
			}
		]
	}
]