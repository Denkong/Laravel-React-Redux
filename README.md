# Laravel-React-Redux
This is an instruction how to set up your project on Laravel to work on React+Redux
## Getting Started

### Installing laravel
https://laravel.com/docs/5.7#installation
### Run the command
```
php artisan preset react
```
```
npm install 
```
```
npm install redux react-redux redux-devtools-extension redux-thunk
```
### Adding Redux to your project
Copy and paste js file from this repository to laravel/resources 

### To be able to use ES6 you need to use babel
see https://medium.com/@kallolpratim/how-to-configure-es6-with-laravel-react-using-babel-e936ad4d8ca5
### Other

You need use this code in your page
```
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">

	<div id="example"></div>
	<script src="{{asset('js/app.js')}}" ></script>
```
To start use
```
npm run dev
or
npm run watch
```