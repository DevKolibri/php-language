var CASE_LOWER = 0;var CASE_UPPER = 1;
function empty (mixedValue){
  switch (typeof mixedValue) {
    case 'undefined':
      return true;
    case 'object':
      for(val in mixedValue)return false;
      return true;
    case 'string':
      return (mixedValue.length==0?true:false);
    case 'boolean':
      return false;
    case 'number':
      return isNaN(mixedValue);
    case 'function':
      return false;
    default:
      console.log('nothing');
  }
}
function abs( mixed_number )  {
	return ( ( isNaN ( mixed_number ) ) ? 0 : Math.abs ( mixed_number ) );
}
function addslashes( str ) {
	return str.replace('/(["\'\])/g', "\\$1").replace('/\0/g', "\\0");
}
function array_change_key_case(array) {
	var case_fn, tmp_ar = new Object, argc = arguments.length, argv = arguments, key;
	if (array instanceof Array) {
		return array;
	}
	if (array instanceof Object) {
		if( argc == 1 || argv[1] == 'CASE_LOWER' || argv[1] == 0 || ( CASE_LOWER && arguments[1] == CASE_LOWER ) ){
			case_fn = "toLowerCase";
		} else{
			case_fn = "toUpperCase";
		}
		for (var key in array) {
			tmp_ar[key[case_fn]()] = array[key];
		}
		return tmp_ar;
	}
	return false;
}
function array_chunk( input, size ) {
	for(var x, i = 0, c = -1, l = input.length, n = []; i < l; i++){
		(x = i % size) ? n[c][x] = input[i] : n[++c] = [input[i]];
	}
	return n;
}
function array_combine( keys, values ) {
	var new_array = {}, keycount=keys.length, i;
	if( !keys || !values || keys.constructor !== Array || values.constructor !== Array ){
		return false;
	}
	if(keycount != values.length){
		return false;
	}
	for ( i=0; i < keycount; i++ ){
		new_array[keys[i]] = values[i];
	}
	return new_array;
}
function array_count_values( array ) {
	var tmp_ar = new Object(), key;
	var countValue = function (value) {
		switch (typeof(value)) {
		case "number":
			if (Math.floor(value) != value) {
				return;
			}
		case "string":
			if (value in this) {
				++this[value];
			} else {
				this[value] = 1;
			}
		}
	}
	if (array instanceof Array) {
		array.forEach(countValue, tmp_ar);
	} else if (array instanceof Object) {
		for (var key in array) {
			countValue.call(tmp_ar, array[key]);
		}
	}
	return tmp_ar;
}
function array_diff (array) {
	var arr_dif = [], i = 1, argc = arguments.length, argv = arguments, key, key_c, found=false;
	for ( key in array ){
		for (i = 1; i< argc; i++){
			found = false;
			for (key_c in argv[i]) {
				if (argv[i][key_c] == array[key]) {
					found = true;
					break;
				}
			}
			if(!found){
				arr_dif[key] = array[key];
			}
		}
	}
	return arr_dif;
}
function array_diff_assoc ( array ) {
	var arr_dif = {}, i = 1, argc = arguments.length, argv = arguments, key, key_c, found=false;
	if( !array || (array.constructor !== Array && array.constructor !== Array && typeof array != 'object' && typeof array != 'array') ){
		return null;
	}
	for ( key in array ){
		for (i = 1; i< argc; i++){
			found = false;
			if(argv[i][key]){
				found = true;
				break;
			}
			if(!found){
				arr_dif[key] = array[key];
			}
		}
	}
	return arr_dif;
}
function array_diff_key( object ) {
	var tpm_ar = new Object(), argc = arguments.length, argv = arguments, key, argidx, other;
	for (key in object) {
		tpm_ar[key] = object[key];
	}
	for (argidx = 1; argidx < argc; ++argidx) {
		other = argv[argidx];

		if (other instanceof Object) {
			for (key in other) {
				delete tpm_ar[key];
			}
		}
	}
	return tpm_ar;
}
function array_fill( start_index, num, mixed_val ) {
	var key, tmp_arr = new Array();
	if ( !isNaN ( start_index ) && !isNaN ( num ) ) {
		for( key = start_index; key <= num; key++ ) {
			tmp_arr[key] = mixed_val;
		}
	}
	return tmp_arr;
}
function array_flip( trans ) {
	var key, tmp_ar = {};
	for( key in trans ) {
		tmp_ar[trans[key]] = key;
	}
	return tmp_ar;
}
function array_keys( input, search_value, strict ) {
	var tmp_arr = new Array(), strict = !!strict, include = true, cnt = 0;
	for ( key in input ){
		include = true;
		if ( search_value != undefined ) {
			if( strict && input[key] !== search_value ){
				include = false;
			} else if( input[key] != search_value ){
				include = false;
			}
		}
		if( include ) {
			tmp_arr[cnt] = key;
			cnt++;
		}
	}
	return tmp_arr;
}
function array_key_exists ( key, search ) {
	if( !search || (search.constructor !== Array && search.constructor !== Object) ){
		return false;
	}
	return search[key] !== undefined;
}
function array_map( callback ) {
	var argc = arguments.length, argv = arguments;
	var j = argv[1].length, i = 0, k = 1, m = 0;
	var tmp = [], tmp_ar = [];
	while (i < j) {
		while (k < argc){
			tmp[m++] = argv[k++][i];
		}
		m = 0;
		k = 1;
		if( callback ){
			tmp_ar[i++] = callback.apply(null, tmp);
		} else{
			tmp_ar[i++] = tmp;
		}
		tmp = [];
	}
	return tmp_ar;
}
function array_pad ( input, pad_size, pad_value ) {
	var pad = [], newArray = [], newLength, i=0;
	if ( input instanceof Array && !isNaN ( pad_size ) ) {
		newLength = ( ( pad_size < 0 ) ? ( pad_size * -1 ) : pad_size );
		if ( newLength > input.length ) {
			for ( i = 0; i < ( newLength - input.length ); i++ ) { newArray [ i ] = pad_value; }
			pad = ( ( pad_size < 0 ) ? newArray.concat ( input ) : input.concat ( newArray ) );
		} else {
			pad = input;
		}
	}
	return pad;
}
function array_pop( array ) {
	if( !array.length ){
		return null;
	}
	return array.pop();
}
function array_product ( input ) {
	var Index = 0, Product = 1;
	if ( input instanceof Array ) {
		while ( Index < input.length ) {
			Product *= ( !isNaN ( input [ Index ] ) ? input [ Index ] : 0 );
			Index++;
		}
	} else {
		Product = null;
	}
	return Product;
}
function array_push ( array ) {
	var i, argv = arguments, argc = argv.length;
	for (i=1; i < argc; i++){
		array[array.length++] = argv[i];
	}
	return array.length;
}
function array_rand ( input, num_req ) {
	var Indexes = [];
	var Ticks = num_req || 1;
	var Check = {
		Duplicate	: function ( input, value ) {
			var Exist = false, Index = 0;
			while ( Index < input.length ) {
				if ( input [ Index ] === value ) {
					Exist = true;
					break;
				}
				Index++;
			}
			return Exist;
		}
	};
	if ( input instanceof Array && Ticks <= input.length ) {
		while ( true ) {
			var Rand = Math.floor ( ( Math.random ( ) * input.length ) );
			if ( Indexes.length === Ticks ) { break; }
			if ( !Check.Duplicate ( Indexes, Rand ) ) { Indexes.push ( Rand ); }
		}
	} else {
		Indexes = null;
	}
	return ( ( Ticks == 1 ) ? Indexes.join ( ) : Indexes );
}
function array_reduce( a_input, callback ) {
	var lon = a_input.length;
	var res = 0;
	var tmp = new Array();
	for(i = 0; i < lon; i += 2) {
		tmp[0] = a_input[i];
		if(a_input[i+1]){
			tmp[1] = a_input[i+1];
		} else {
			tmp[1] = 0;
		}
		res += callback.apply(null, tmp);
		tmp = new Array();
	}
	return res;
}
function array_reverse( array, preserve_keys ) {
	var arr_len=array.length, newkey=0, tmp_ar = {}
	for(var key in array){
		newkey=arr_len-key-1;
		tmp_ar[(!!preserve_keys)?newkey:key]=array[newkey];
	}
	return tmp_ar;
}
function array_search( needle, haystack, strict ) {
	var strict = !!strict;
	for(var key in haystack){
		if( (strict && haystack[key] === needle) || (!strict && haystack[key] == needle) ){
			return key;
		}
	}
	return false;
}
function array_shift( array ) {
	var i=0, first_elm=null, cnt=0, tmp_arr = {};
	if( !array || (array.constructor !== Array && array.constructor !== Object) || !array.length ){
		return null;
	}
	if( array.constructor === Array ){
		first_elm = array[0];
		for( i = 0; i < array.length; i++ ){
			array[i] = array[i+1];
		}
		array.length--;
	} else if( array.constructor === Object ){
		for(var key in array){
			if( cnt == 0 ){
				first_elm = array[key];
			} else{
				tmp_arr[key] = array[key];
			}
			cnt ++;
		}
		array = tmp_arr;
	}
	return first_elm;
}
function array_sum( array ) {
	var key, sum=0;
	if( !array || (array.constructor !== Array && array.constructor !== Object) || !array.length ){
		return null;
	}
	for(var key in array){
		sum += array[key];
	}
	return sum;
}
function array_unique( array ) {
	var p, i, j;
	for(i = array.length; i;){
		for(p = --i; p > 0;){
			if(array[i] === array[--p]){
				for(j = p; --p && array[i] === array[p];);
				i -= array.splice(p + 1, j - p).length;
			}
		}
	}
	return true;
}
function array_unshift( array ) {
	var cnt=0, tot_cnt=0, tmp_arr = {}, argc = arguments.length, argv = arguments;
	if( !array || (array.constructor !== Array && array.constructor !== Array && typeof array != 'object' && typeof array != 'array') ){
		return null;
	}
	for (i = 1; i< argc; i++){
		tmp_arr[cnt] = argv[i];
		cnt++; tot_cnt++;
	}
	for(var key in array){
		if( typeof key == 'number' && isFinite( key ) ){
			tmp_arr[cnt] = array[key];
			cnt++; tot_cnt++;
		} else{
			tmp_arr[key] = array[key];
			tot_cnt++;
		}
	}
	return tot_cnt;
}
function array_values( input ) {
	var tmp_arr = new Array(), cnt = 0;
	for ( key in input ){
		tmp_arr[cnt] = input[key];
		cnt++;
	}
	return tmp_arr;
}
function base64_decode( data ) {
	var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var o1, o2, o3, h1, h2, h3, h4, bits, i=0, enc='';
	do { 
		h1 = b64.indexOf(data.charAt(i++));
		h2 = b64.indexOf(data.charAt(i++));
		h3 = b64.indexOf(data.charAt(i++));
		h4 = b64.indexOf(data.charAt(i++));
		bits = h1<<18 | h2<<12 | h3<<6 | h4;
		o1 = bits>>16 & 0xff;
		o2 = bits>>8 & 0xff;
		o3 = bits & 0xff;
		if (h3 == 64)	  enc += String.fromCharCode(o1);
		else if (h4 == 64) enc += String.fromCharCode(o1, o2);
		else			   enc += String.fromCharCode(o1, o2, o3);
	} while (i < data.length);
	return enc;
}
function base64_encode( data ) {
	var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var o1, o2, o3, h1, h2, h3, h4, bits, i=0, enc='';
	do {
		o1 = data.charCodeAt(i++);
		o2 = data.charCodeAt(i++);
		o3 = data.charCodeAt(i++);
		bits = o1<<16 | o2<<8 | o3;
		h1 = bits>>18 & 0x3f;
		h2 = bits>>12 & 0x3f;
		h3 = bits>>6 & 0x3f;
		h4 = bits & 0x3f;
		enc += b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
	} while (i < data.length);
	switch( data.length % 3 ){
		case 1:
			enc = enc.slice(0, -2) + '==';
		break;
		case 2:
			enc = enc.slice(0, -1) + '=';
		break;
	}
	return enc;
}
function basename(path, suffix) {
	var b = path.replace(/^.*[\/\\]/g, '');
	if (typeof(suffix) == 'string' && b.substr(b.length-suffix.length) == suffix) {
		b = b.substr(0, b.length-suffix.length);
	}
	return b;
}
function bin2hex(s){
	var i, f = s.length, a = [];
	for(i = 0; i<f; i++){
		a[i] = s.charCodeAt(i).toString(16);
	}
	return a.join('');
}
function checkdate( month, day, year ) {
	var myDate = new Date();
	myDate.setFullYear( year, (month - 1), day );
        return ((myDate.getMonth()+1) == month && day<32); 
}
function chr( ascii ) {
	return String.fromCharCode(ascii);
}
function compact ( var_names ) {
	var Index = 0, Matrix = {};
	var Process = function ( value ) {
		for ( var i = 0; i < value.length; i++ ) {
			var key_value = value [ i ];
			if ( key_value instanceof Array ) {
				Process ( key_value );
			} else {
				if ( typeof window [ key_value ] !== 'undefined' ) {
					Matrix [ key_value ] = window [ key_value ];
				}
			}
		}
		return true;
	};
	Process ( arguments );
	return Matrix;
}
function count( mixed_var, mode ) {
	var key, cnt = 0;
	if( mode == 'COUNT_RECURSIVE' ) mode = 1;
	if( mode != 1 ) mode = 0;
	for (key in mixed_var){
		cnt++;
		if( mode==1 && mixed_var[key] && (mixed_var[key].constructor === Array || mixed_var[key].constructor === Object) ){
			cnt += count(mixed_var[key], 1);
		}
	}
	return cnt;
}
function count_chars( str, mode ) {
	var histogram = new Object(), tmp_ar = new Array(), argc = arguments.length, key, i, code, mode;
	if (argc == 1) {
		mode = 0;
	}
	mode_even = (mode & 1) == 0;
	if (mode_even) {
		for (i = 1; i < 256; ++i) {
			histogram[i] = 0;
		}
	}
	for (i = 0; i < str.length; ++i) {
		code = str.charCodeAt(i);
		if (code in histogram) {
			++histogram[code];
		} else {
			histogram[code] = 1;
		}
	}
	if (mode > 0) {
		for (key in histogram) {
			if (histogram[key] == 0 != mode_even) {
				delete histogram[key];
			}
		}
	}
	if (mode < 3) {
		return histogram;
	} else {
		for (key in histogram) {
			tmp_ar.push(String.fromCharCode(key));
		}
		return tmp_ar.join("");
	}
}
function crc32 ( str ) {
	str = utf8_encode(str);
	var table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";
	if (typeof(crc) == "undefined") { crc = 0; }
	var x = 0;
	var y = 0;
	crc = crc ^ (-1);
	for( var i = 0, iTop = str.length; i < iTop; i++ ) {
		y = ( crc ^ str.charCodeAt( i ) ) & 0xFF;
		x = "0x" + table.substr( y * 9, 8 );
		crc = ( crc >>> 8 ) ^ x;
	}
	return crc ^ (-1);
}
function date ( format, timestamp ) {
	var a, jsdate = new Date(timestamp ? timestamp * 1000 : null);
	var pad = function(n, c){
		if( (n = n + "").length < c ) {
			return new Array(++c - n.length).join("0") + n;
		} else {
			return n;
		}
	};
	var txt_weekdays = ["Sunday","Monday","Tuesday","Wednesday",
		"Thursday","Friday","Saturday"];
	var txt_ordin = {1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"};
	var txt_months =  ["", "January", "February", "March", "April",
		"May", "June", "July", "August", "September", "October", "November",
		"December"];
	var f = {
			d: function(){
				return pad(f.j(), 2);
			},
			D: function(){
				t = f.l(); return t.substr(0,3);
			},
			j: function(){
				return jsdate.getDate();
			},
			l: function(){
				return txt_weekdays[f.w()];
			},
			N: function(){
				return f.w() + 1;
			},
			S: function(){
				return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th';
			},
			w: function(){
				return jsdate.getDay();
			},
			z: function(){
				return (jsdate - new Date(jsdate.getFullYear() + "/1/1")) / 864e5 >> 0;
			},
			W: function(){
				var a = f.z(), b = 364 + f.L() - a;
				var nd2, nd = (new Date(jsdate.getFullYear() + "/1/1").getDay() || 7) - 1;

				if(b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b){
					return 1;
				} else{

					if(a <= 2 && nd >= 4 && a >= (6 - nd)){
						nd2 = new Date(jsdate.getFullYear() - 1 + "/12/31");
						return date("W", Math.round(nd2.getTime()/1000));
					} else{
						return (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0);
					}
				}
			},
			F: function(){
				return txt_months[f.n()];
			},
			m: function(){
				return pad(f.n(), 2);
			},
			M: function(){
				t = f.F(); return t.substr(0,3);
			},
			n: function(){
				return jsdate.getMonth() + 1;
			},
			t: function(){
				var n;
				if( (n = jsdate.getMonth() + 1) == 2 ){
					return 28 + f.L();
				} else{
					if( n & 1 && n < 8 || !(n & 1) && n > 7 ){
						return 31;
					} else{
						return 30;
					}
				}
			},
			L: function(){
				var y = f.Y();
				return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0;
			},
			Y: function(){
				return jsdate.getFullYear();
			},
			y: function(){
				return (jsdate.getFullYear() + "").slice(2);
			},
			a: function(){
				return jsdate.getHours() > 11 ? "pm" : "am";
			},
			A: function(){
				return f.a().toUpperCase();
			},
			B: function(){
				var off = (jsdate.getTimezoneOffset() + 60)*60;
				var theSeconds = (jsdate.getHours() * 3600) +
								 (jsdate.getMinutes() * 60) +
								  jsdate.getSeconds() + off;
				var beat = Math.floor(theSeconds/86.4);
				if (beat > 1000) beat -= 1000;
				if (beat < 0) beat += 1000;
				if ((String(beat)).length == 1) beat = "00"+beat;
				if ((String(beat)).length == 2) beat = "0"+beat;
				return beat;
			},
			g: function(){
				return jsdate.getHours() % 12 || 12;
			},
			G: function(){
				return jsdate.getHours();
			},
			h: function(){
				return pad(f.g(), 2);
			},
			H: function(){
				return pad(jsdate.getHours(), 2);
			},
			i: function(){
				return pad(jsdate.getMinutes(), 2);
			},
			s: function(){
				return pad(jsdate.getSeconds(), 2);
			},
			O: function(){
			   var t = pad(Math.abs(jsdate.getTimezoneOffset()/60*100), 4);
			   if (jsdate.getTimezoneOffset() > 0) t = "-" + t; else t = "+" + t;
			   return t;
			},
			P: function(){
				var O = f.O();
				return (O.substr(0, 3) + ":" + O.substr(3, 2));
			},
			c: function(){
				return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P();
			},
			U: function(){
				return Math.round(jsdate.getTime()/1000);
			}
	};

	return format.replace(/[\\]?([a-zA-Z])/g, function(t, s){
		if( t!=s ){
			ret = s;
		} else if( f[s] ){
			ret = f[s]();
		} else{
			ret = s;
		}
		return ret;
	});
}
define = (function(){
	function toString(name, value){
		return  "const " + name + "=" + (
			/^(null|true|false|(\+|\-)?\d+(\.\d+)?)$/.test(value = String(value)) ? value : '"' + replace(value) + '"'
		)
	};
	var define, replace;
	try{
		eval("const e=1");
		replace = function(value){
			var replace = {"\x08":"b","\x0A":"\\n","\x0B":"v","\x0C":"f","\x0D":"\\r",'"':'"',"\\":"\\"};
			return  value.replace(/\x08|[\x0A-\x0D]|"|\\/g, function(value){return  "\\"+replace[value]})
		};
		define = function(name, value){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.appendChild(document.createTextNode(toString(name, value)));
			document.documentElement.appendChild(script);
			document.documentElement.removeChild(script);
		}
	}
	catch(e){
		replace = function(value){
			var replace = {"\x0A":"\\n", "\x0D":"\\r"};
			return  value.replace(/"/g, '""').replace(/\n|\r/g, function(value){return replace[value]})
		};
		define = this.execScript ?
		function(name, value){
			execScript(toString(name, value), "VBScript");
		}:
		function(name, value){
			eval(toString(name, value).substring(6));
		}
	};
	return  define;
})();
function defined( constant_name )  {
	return (typeof window[constant_name] !== 'undefined');
}
function end ( array ) {
	var last_elm, key;
	if (array.constructor === Array){
		last_elm = array[(array.length-1)];
	} else {
		for (key in array){
			last_elm = array[key];
		}
	}
	return last_elm;
}
function explode( delimiter, string ) {
	var emptyArray = { 0: '' };
	if ( arguments.length != 2
		|| typeof arguments[0] == 'undefined'
		|| typeof arguments[1] == 'undefined' )
	{
		return null;
	}
	if ( delimiter === ''
		|| delimiter === false
		|| delimiter === null )
	{
		return false;
	}
	if ( typeof delimiter == 'function'
		|| typeof delimiter == 'object'
		|| typeof string == 'function'
		|| typeof string == 'object' )
	{
		return emptyArray;
	}
	if ( delimiter === true ) {
		delimiter = '1';
	}
	return string.toString().split ( delimiter.toString() );
}
function file( url ) {
	var req = null;
	try { req = new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {
		try { req = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {
			try { req = new XMLHttpRequest(); } catch(e) {}
		}
	}
	if (req == null) throw new Error('XMLHttpRequest not supported');
	req.open("GET", url, false);
	req.send(null);
	return req.responseText.split('\n');
}
function file_get_contents( url ) {
	var req = null;
	try { req = new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {
		try { req = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {
			try { req = new XMLHttpRequest(); } catch(e) {}
		}
	}
	if (req == null) throw new Error('XMLHttpRequest not supported');
	req.open("GET", url, false);
	req.send(null);
	return req.responseText;
}
function floatval(mixed_var) {
	return (parseFloat(mixed_var) || 0);
}
function function_exists( function_name ) {
	if (typeof function_name == 'string'){
		return (typeof window[function_name] == 'function');
	} else{
		return (function_name instanceof Function);
	}
}
function get_class(obj) {
	if (obj instanceof Object && !(obj instanceof Array) &&
		!(obj instanceof Function) && obj.constructor) {
		var arr = obj.constructor.toString().match(/function\s*(\w+)/);
		if (arr && arr.length == 2) {
			return arr[1];
		}
	}
	return false;
}

function get_included_files() {
	var cur_file = {};
	cur_file[window.location.href] = 1;
	if(!this.__php_js) this.__php_js = {};
	if(!this.__php_js.includes) this.__php_js.includes = cur_file;
	var includes = new Array();
	var i = 0;
	for(var key in this.__php_js.includes){
		includes[i] = key;
		i++;
	}
	return includes;
}
function htmlentities (string, quote_style) {   
    var histogram = {}, symbol = '', tmp_str = '', entity = '';  
    tmp_str = string.toString();  
    if (false === (histogram = get_html_translation_table('HTML_ENTITIES', quote_style))) {  
        return false;  
    }   
    for (symbol in histogram) {  
        entity = histogram[symbol];  
        tmp_str = tmp_str.split(symbol).join(entity);  
    }  
    return tmp_str;  
} 
function http_build_query( formdata, numeric_prefix, arg_separator ) {
	var key, use_val, use_key, i = 0, tmp_arr = [];
	if(!arg_separator){
		arg_separator = '&';
	}
	for(key in formdata){
		use_key = escape(key);
		use_val = escape((formdata[key].toString()));
		use_val = use_val.replace(/%20/g, '+');
		if(numeric_prefix && !isNaN(key)){
			use_key = numeric_prefix + i;
		}
		tmp_arr[i] = use_key + '=' + use_val;
		i++;
	}
	return tmp_arr.join(arg_separator);
}
function implode( glue, pieces ) {
	return ( ( pieces instanceof Array ) ? pieces.join ( glue ) : pieces );
}
function include( filename ) {
	var js = document.createElement('script');
	js.setAttribute('type', 'text/javascript');
	js.setAttribute('src', filename);
	js.setAttribute('defer', 'defer');
	document.getElementsByTagName('HEAD')[0].appendChild(js);
	var cur_file = {};
	cur_file[window.location.href] = 1;
	if (!window.php_js) window.php_js = {};
	if (!window.php_js.includes) window.php_js.includes = cur_file;
	if (!window.php_js.includes[filename]) {
		window.php_js.includes[filename] = 1;
	} else {
		window.php_js.includes[filename]++;
	}
	return window.php_js.includes[filename];
}
function include_once( filename ) {
	var cur_file = {};
	cur_file[window.location.href] = 1;
	if (!window.php_js) window.php_js = {};
	if (!window.php_js.includes) window.php_js.includes = cur_file;
	if (!window.php_js.includes[filename]) {
		return this.include(filename);
	} else{
		return window.php_js.includes[filename];
	}
}
function intval( mixed_var, base ) {
	var tmp;
	if( typeof( mixed_var ) == 'string' ){
		tmp = parseInt(mixed_var);
		if(isNaN(tmp)){
			return 0;
		} else{
			return tmp.toString(base || 10);
		}
	} else if( typeof( mixed_var ) == 'number' ){
		return Math.floor(mixed_var);
	} else{
		return 0;
	}
}
function in_array(needle, haystack, strict) {
	var found = false, key, strict = !!strict;
	for (key in haystack) {
		if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
			found = true;
			break;
		}
	}
	return found;
}
function isset () {
    var a=arguments, l=a.length, i=0;
    if (l===0) {
        throw new Error('Empty isset'); 
    }
    while (i!==l) {
        if (typeof(a[i])=='undefined' || a[i]===null) { 
            return false; 
        } else { 
            i++; 
        }
    }
    return true;
}
function is_array( mixed_var ) {
	return ( mixed_var instanceof Array );
}
function is_null( mixed_var ){
	return ( mixed_var === null );
}
function is_numeric( mixed_var ) {
	return !isNaN( mixed_var );
}
function is_object( mixed_var ){
	if(mixed_var instanceof Array) {
		return false;
	} else {
		return (mixed_var !== null) && (typeof( mixed_var ) == 'object');
	}
}
function is_string( mixed_var ){
	return (typeof( mixed_var ) == 'string');
}
function join( glue, pieces ) {
	return implode( glue, pieces );
}
function levenshtein( str1, str2 ) {
	var s, l = (s = str1.split("")).length, t = (str2 = str2.split("")).length, i, j, m, n;
	if(!(l || t)) return Math.max(l, t);
	for(var a = [], i = l + 1; i; a[--i] = [i]);
	for(i = t + 1; a[0][--i] = i;);
	for(i = -1, m = s.length; ++i < m;){
		for(j = -1, n = str2.length; ++j < n;){
			a[(i *= 1) + 1][(j *= 1) + 1] = Math.min(a[i][j + 1] + 1, a[i + 1][j] + 1, a[i][j] + (s[i] != str2[j]));
		}
	}
	return a[l][t];
}
function ltrim ( str, charlist ) {
	charlist = !charlist ? ' \s\xA0' : charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
	var re = new RegExp('^[' + charlist + ']+', 'g');
	return str.replace(re, '');
}
function md5 ( str ) {
	var RotateLeft = function(lValue, iShiftBits) {
			return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
		};
	var AddUnsigned = function(lX,lY) {
			var lX4,lY4,lX8,lY8,lResult;
			lX8 = (lX & 0x80000000);
			lY8 = (lY & 0x80000000);
			lX4 = (lX & 0x40000000);
			lY4 = (lY & 0x40000000);
			lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
			if (lX4 & lY4) {
				return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
			}
			if (lX4 | lY4) {
				if (lResult & 0x40000000) {
					return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
				} else {
					return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
				}
			} else {
				return (lResult ^ lX8 ^ lY8);
			}
		};
	var F = function(x,y,z) { return (x & y) | ((~x) & z); };
	var G = function(x,y,z) { return (x & z) | (y & (~z)); };
	var H = function(x,y,z) { return (x ^ y ^ z); };
	var I = function(x,y,z) { return (y ^ (x | (~z))); };
	var FF = function(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};
	var GG = function(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};
	var HH = function(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};
	var II = function(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};
	var ConvertToWordArray = function(str) {
			var lWordCount;
			var lMessageLength = str.length;
			var lNumberOfWords_temp1=lMessageLength + 8;
			var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
			var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
			var lWordArray=Array(lNumberOfWords-1);
			var lBytePosition = 0;
			var lByteCount = 0;
			while ( lByteCount < lMessageLength ) {
				lWordCount = (lByteCount-(lByteCount % 4))/4;
				lBytePosition = (lByteCount % 4)*8;
				lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount)<<lBytePosition));
				lByteCount++;
			}
			lWordCount = (lByteCount-(lByteCount % 4))/4;
			lBytePosition = (lByteCount % 4)*8;
			lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
			lWordArray[lNumberOfWords-2] = lMessageLength<<3;
			lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
			return lWordArray;
		};
	var WordToHex = function(lValue) {
			var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
			for (lCount = 0;lCount<=3;lCount++) {
				lByte = (lValue>>>(lCount*8)) & 255;
				WordToHexValue_temp = "0" + lByte.toString(16);
				WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
			}
			return WordToHexValue;
		};
	var x=Array();
	var k,AA,BB,CC,DD,a,b,c,d;
	var S11=7, S12=12, S13=17, S14=22;
	var S21=5, S22=9 , S23=14, S24=20;
	var S31=4, S32=11, S33=16, S34=23;
	var S41=6, S42=10, S43=15, S44=21;
	str = this.utf8_encode(str);
	x = ConvertToWordArray(str);
	a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
	for (k=0;k<x.length;k+=16) {
		AA=a; BB=b; CC=c; DD=d;
		a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
		d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
		c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
		b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
		a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
		d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
		c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
		b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
		a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
		d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
		c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
		b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
		a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
		d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
		c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
		b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
		a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
		d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
		c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
		b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
		a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
		d=GG(d,a,b,c,x[k+10],S22,0x2441453);
		c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
		b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
		a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
		d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
		c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
		b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
		a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
		d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
		c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
		b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
		a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
		d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
		c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
		b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
		a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
		d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
		c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
		b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
		a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
		d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
		c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
		b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
		a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
		d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
		c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
		b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
		a=II(a,b,c,d,x[k+0], S41,0xF4292244);
		d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
		c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
		b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
		a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
		d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
		c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
		b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
		a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
		d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
		c=II(c,d,a,b,x[k+6], S43,0xA3014314);
		b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
		a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
		d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
		c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
		b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
		a=AddUnsigned(a,AA);
		b=AddUnsigned(b,BB);
		c=AddUnsigned(c,CC);
		d=AddUnsigned(d,DD);
	}
	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
	return temp.toLowerCase();
}
function md5_file ( str_filename ) {
	return md5(file_get_contents(str_filename));
}
function mktime() {
	var i = 0, d = new Date(), argv = arguments, argc = argv.length;
	var dateManip = {
		0: function(tt){ return d.setHours(tt); },
		1: function(tt){ return d.setMinutes(tt); },
		2: function(tt){ return d.setSeconds(tt); },
		3: function(tt){ return d.setMonth(parseInt(tt)-1); },
		4: function(tt){ return d.setDate(tt); },
		5: function(tt){ return d.setYear(tt); }
	};
	for( i = 0; i < argc; i++ ){
		if(argv[i] && isNaN(argv[i])){
			return false;
		} else if(argv[i]){
			if(!dateManip[i](argv[i])){
				return false;
			}
		}
	}
	return Math.floor(d.getTime()/1000);
}
function nl2br( str ) {
	return str.replace(/([^>])\n/g, '$1<br/>');
}
function number_format( number, decimals, dec_point, thousands_sep ) {
	var i, j, kw, kd, km;
	if( isNaN(decimals = Math.abs(decimals)) ){
		decimals = 2;
	}
	if( dec_point == undefined ){
		dec_point = ",";
	}
	if( thousands_sep == undefined ){
		thousands_sep = ".";
	}
	i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
	if( (j = i.length) > 3 ){
		j = j % 3;
	} else{
		j = 0;
	}
	km = (j ? i.substr(0, j) + thousands_sep : "");
	kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
	kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
	return km + kw + kd;
}
function ord( string ) {
	return string.charCodeAt(0);
}
function parse_str(str, array){
	var glue1 = '=';
	var glue2 = '&';
	var array2 = str.split(glue2);
	var array3 = [];
	for(var x=0; x<array2.length; x++){
		var tmp = array2[x].split(glue1);
		array3[unescape(tmp[0])] = unescape(tmp[1]).replace(/[+]/g, ' ');
	}
	if(array){
		array = array3;
	} else{
		return array3;
	}
}
function preg_quote( str ) {
	return str.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
}
function printf( ) {
	var ret = this.sprintf.apply(this, arguments);
	document.write(ret);
	return ret.length;
}
function print_r( array, return_val ) {
	var output = "", pad_char = " ", pad_val = 4;
	var formatArray = function (obj, cur_depth, pad_val, pad_char) {
		if(cur_depth > 0)
			cur_depth++;

		var base_pad = repeat_char(pad_val*cur_depth, pad_char);
		var thick_pad = repeat_char(pad_val*(cur_depth+1), pad_char);
		var str = "";
		if(obj instanceof Array) {
			str += "Array\n" + base_pad + "(\n";
			for(var key in obj) {
				if(obj[key] instanceof Array) {
					str += thick_pad + "["+key+"] => "+formatArray(obj[key], cur_depth+1, pad_val, pad_char);
				} else {
					str += thick_pad + "["+key+"] => " + obj[key] + "\n";
				}
			}
			str += base_pad + ")\n";
		} else {
			str = obj.toString(); 
		};
		return str;
	};
	var repeat_char = function (len, char) {
		var str = "";
		for(var i=0; i < len; i++) { str += char; };
		return str;
	};
	output = formatArray(array, 0, pad_val, pad_char);
	if(return_val !== true) {
		document.write("<pre>" + output + "</pre>");
		return true;
	} else {
		return output;
	}
}
function rand( min, max ) {
	if( max ) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	} else {
		return Math.floor(Math.random() * (min + 1));
	}
}
function range ( low, high, step ) {
	var matrix = [];
	var inival, endval, plus;
	var walker = step || 1;
	var chars  = false;
	if ( !isNaN ( low ) && !isNaN ( high ) ) {
		inival = low;
		endval = high;
	} else if ( isNaN ( low ) && isNaN ( high ) ) {
		chars = true;
		inival = low.charCodeAt ( 0 );
		endval = high.charCodeAt ( 0 );
	} else {
		inival = ( isNaN ( low ) ? 0 : low );
		endval = ( isNaN ( high ) ? 0 : high );
	}
	plus = ( ( inival > endval ) ? false : true );
	if ( plus ) {
		while ( inival <= endval ) {
			matrix.push ( ( ( chars ) ? String.fromCharCode ( inival ) : inival ) );
			inival += walker;
		}
	} else {
		while ( inival >= endval ) {
			matrix.push ( ( ( chars ) ? String.fromCharCode ( inival ) : inival ) );
			inival -= walker;
		}
	}
	return matrix;
}
function require( filename ) {
	var js_code;
	var script_block = document.createElement('script');
	script_block.type = 'text/javascript';
	if(this.is_ie) {
		js_code = this.file_get_contents(filename);
		script_block.text = js_code;
	} else {
		script_block.appendChild(document.createTextNode(js_code));
	}
	if(typeof(script_block) != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(script_block);
		var cur_file = {};
		cur_file[window.location.href] = 1;
		if (!window.php_js) window.php_js = {};
		if (!window.php_js.includes) window.php_js.includes = cur_file;
		if (!window.php_js.includes[filename]) {
			return window.php_js.includes[filename] = 1;
		} else {
			return window.php_js.includes[filename]++;
		}
	}
}
function require_once(filename) {
	var cur_file = {};
	cur_file[window.location.href] = 1;
	if (!window.php_js) window.php_js = {};
	if (!window.php_js.includes) window.php_js.includes = cur_file;
	if (!window.php_js.includes[filename]) {
		if (!window.php_js.required) window.php_js.required = {};
		if (!window.php_js.required[filename]) {
			return this.require(filename);
		} else {
			return window.php_js.required[filename];
		}
	} else{
		return window.php_js.includes[filename];
	}
}
function reset ( array ) {
	var first_elm, key;
	if (array.constructor === Array){
		first_elm = array[0];
	} else {
		for (key in array){
			first_elm = array[key];
			break;
		}
	}
	return first_elm;
}
function rtrim ( str, charlist ) {
	charlist = !charlist ? ' \s\xA0' : charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
	var re = new RegExp('[' + charlist + ']+$', 'g');
	return str.replace(re, '');
}
function serialize( mixed_val ) { 
    switch (typeof(mixed_val)){
        case "number":
            if (isNaN(mixed_val) || !isFinite(mixed_val)){
                return false;
            } else{
                return (Math.floor(mixed_val) == mixed_val ? "i" : "d") + ":" + mixed_val + ";";
            }
        case "string":
            return "s:" + mixed_val.length + ":\"" + mixed_val + "\";";
        case "boolean":
            return "b:" + (mixed_val ? "1" : "0") + ";";
        case "object":
            if (mixed_val == null) {
                return "N;";
            } else if (mixed_val instanceof Array) {
                var idxobj = { idx: -1 };
		var map = []
		for(var i=0; i<mixed_val.length;i++) {
			idxobj.idx++;
                        var ser = serialize(mixed_val[i]);
			if (ser) {
                        	map.push(serialize(idxobj.idx) + ser)
			}
		}                                       
                return "a:" + mixed_val.length + ":{" + map.join("") + "}"
            }
            else {
                var class_name = get_class(mixed_val);
                if (class_name == undefined){
                    return false;
                }
                var props = new Array();
                for (var prop in mixed_val) {
                    var ser = serialize(mixed_val[prop]);
 
                    if (ser) {
                        props.push(serialize(prop) + ser);
                    }
                }
                return "O:" + class_name.length + ":\"" + class_name + "\":" + props.length + ":{" + props.join("") + "}";
            }
        case "undefined":
            return "N;";
    }
    return false;
}
function setcookie(name, value, expires, path, domain, secure) {
	expires instanceof Date ? expires = expires.toGMTString() : typeof(expires) == 'number' && (expires = (new Date(+(new Date) + expires * 1e3)).toGMTString());
	var r = [name + "=" + escape(value)], s, i;
	for(i in s = {expires: expires, path: path, domain: domain}){
		s[i] && r.push(i + "=" + s[i]);
	}
	return secure && r.push("secure"), document.cookie = r.join(";"), true;
}
function sha1 ( str ) {
	var rotate_left = function(n,s) {
			var t4 = ( n<<s ) | (n>>>(32-s));
			return t4;
		};
	var lsb_hex = function(val) {
			var str="";
			var i;
			var vh;
			var vl;

			for( i=0; i<=6; i+=2 ) {
				vh = (val>>>(i*4+4))&0x0f;
				vl = (val>>>(i*4))&0x0f;
				str += vh.toString(16) + vl.toString(16);
			}
			return str;
		};
	var cvt_hex = function(val) {
			var str="";
			var i;
			var v;
			for( i=7; i>=0; i-- ) {
				v = (val>>>(i*4))&0x0f;
				str += v.toString(16);
			}
			return str;
		};
	var blockstart;
	var i, j;
	var W = new Array(80);
	var H0 = 0x67452301;
	var H1 = 0xEFCDAB89;
	var H2 = 0x98BADCFE;
	var H3 = 0x10325476;
	var H4 = 0xC3D2E1F0;
	var A, B, C, D, E;
	var temp;
	str = this.utf8_encode(str);
	var str_len = str.length;
	var word_array = new Array();
	for( i=0; i<str_len-3; i+=4 ) {
		j = str.charCodeAt(i)<<24 | str.charCodeAt(i+1)<<16 |
		str.charCodeAt(i+2)<<8 | str.charCodeAt(i+3);
		word_array.push( j );
	}
	switch( str_len % 4 ) {
		case 0:
			i = 0x080000000;
		break;
		case 1:
			i = str.charCodeAt(str_len-1)<<24 | 0x0800000;
		break;
		case 2:
			i = str.charCodeAt(str_len-2)<<24 | str.charCodeAt(str_len-1)<<16 | 0x08000;
		break;
		case 3:
			i = str.charCodeAt(str_len-3)<<24 | str.charCodeAt(str_len-2)<<16 | str.charCodeAt(str_len-1)<<8	| 0x80;
		break;
	}
	word_array.push( i );
	while( (word_array.length % 16) != 14 ) word_array.push( 0 );
	word_array.push( str_len>>>29 );
	word_array.push( (str_len<<3)&0x0ffffffff );
	for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
		for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
		for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
		A = H0;
		B = H1;
		C = H2;
		D = H3;
		E = H4;
		for( i= 0; i<=19; i++ ) {
			temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}
		for( i=20; i<=39; i++ ) {
			temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}
		for( i=40; i<=59; i++ ) {
			temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}
		for( i=60; i<=79; i++ ) {
			temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B,30);
			B = A;
			A = temp;
		}
		H0 = (H0 + A) & 0x0ffffffff;
		H1 = (H1 + B) & 0x0ffffffff;
		H2 = (H2 + C) & 0x0ffffffff;
		H3 = (H3 + D) & 0x0ffffffff;
		H4 = (H4 + E) & 0x0ffffffff;
	}
	var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
	return temp.toLowerCase();
}
function sha1_file ( str_filename ) {
	return sha1(file_get_contents(str_filename));
}
function shuffle( array ) {
	for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
	return true;
}
function soundex( str ) {
	var i, j, l, r, p = isNaN(p) ? 4 : p > 10 ? 10 : p < 4 ? 4 : p,
	m = {BFPV: 1, CGJKQSXZ: 2, DT: 3, L: 4, MN: 5, R: 6},
	r = (s = str.toUpperCase().replace(/[^A-Z]/g, "").split("")).splice(0, 1);
	for(i = -1, l = s.length; ++i < l;){
		for(j in m){
			if(j.indexOf(s[i]) + 1 && r[r.length-1] != m[j] && r.push(m[j])){
				break;
			}
		}
	}
	return r.length > p && (r.length = p), r.join("") + (new Array(p - r.length + 1)).join("0");
}
function split( delimiter, string ) {
	return explode( delimiter, string );
}
function sprintf( ) {
	var regex = /%%|%(\d+\$)?([-+#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;
	var a = arguments, i = 0, format = a[i++];
	var pad = function(str, len, chr, leftJustify) {
		var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
		return leftJustify ? str + padding : padding + str;
	};
	var justify = function(value, prefix, leftJustify, minWidth, zeroPad) {
		var diff = minWidth - value.length;
		if (diff > 0) {
			if (leftJustify || !zeroPad) {
			value = pad(value, minWidth, ' ', leftJustify);
			} else {
			value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
			}
		}
		return value;
	};
	var formatBaseX = function(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
		var number = value >>> 0;
		prefix = prefix && number && {'2': '0b', '8': '0', '16': '0x'}[base] || '';
		value = prefix + pad(number.toString(base), precision || 0, '0', false);
		return justify(value, prefix, leftJustify, minWidth, zeroPad);
	};
	var formatString = function(value, leftJustify, minWidth, precision, zeroPad) {
		if (precision != null) {
			value = value.slice(0, precision);
		}
		return justify(value, '', leftJustify, minWidth, zeroPad);
	};
	var doFormat = function(substring, valueIndex, flags, minWidth, _, precision, type) {
		if (substring == '%%') return '%';
		var leftJustify = false, positivePrefix = '', zeroPad = false, prefixBaseX = false;
		for (var j = 0; flags && j < flags.length; j++) switch (flags.charAt(j)) {
			case ' ': positivePrefix = ' '; break;
			case '+': positivePrefix = '+'; break;
			case '-': leftJustify = true; break;
			case '0': zeroPad = true; break;
			case '#': prefixBaseX = true; break;
		}
		if (!minWidth) {
			minWidth = 0;
		} else if (minWidth == '*') {
			minWidth = +a[i++];
		} else if (minWidth.charAt(0) == '*') {
			minWidth = +a[minWidth.slice(1, -1)];
		} else {
			minWidth = +minWidth;
		}
		if (minWidth < 0) {
			minWidth = -minWidth;
			leftJustify = true;
		}
		if (!isFinite(minWidth)) {
			throw new Error('sprintf: (minimum-)width must be finite');
		}
		if (!precision) {
			precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type == 'd') ? 0 : void(0);
		} else if (precision == '*') {
			precision = +a[i++];
		} else if (precision.charAt(0) == '*') {
			precision = +a[precision.slice(1, -1)];
		} else {
			precision = +precision;
		}
		var value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

		switch (type) {
			case 's': return formatString(String(value), leftJustify, minWidth, precision, zeroPad);
			case 'c': return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
			case 'b': return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
			case 'o': return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
			case 'x': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
			case 'X': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
			case 'u': return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
			case 'i':
			case 'd': {
						var number = parseInt(+value);
						var prefix = number < 0 ? '-' : positivePrefix;
						value = prefix + pad(String(Math.abs(number)), precision, '0', false);
						return justify(value, prefix, leftJustify, minWidth, zeroPad);
					}
			case 'e':
			case 'E':
			case 'f':
			case 'F':
			case 'g':
			case 'G':
						{
						var number = +value;
						var prefix = number < 0 ? '-' : positivePrefix;
						var method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
						var textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
						value = prefix + Math.abs(number)[method](precision);
						return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
					}
			default: return substring;
		}
	};
	return format.replace(regex, doFormat);
}
function strcasecmp (f_string1, f_string2){
	var string1 = f_string1.toLowerCase();
	var string2 = f_string2.toLowerCase();
	if(string1 > string2) {
	  return 1;
	}
	else if(string1 == string2) {
	  return 0;
	}
	return -1;
}
function strcmp ( str1, str2 ) {
	var size1 = str1.charCodeAt ( 0 );
	var size2 = str2.charCodeAt ( 0 );
	return ( ( size1 == size2 ) ? 0 : ( ( size1 > size2 ) ? 1 : -1 ) );
}
function stripos ( f_haystack, f_needle, f_offset ){
	var haystack = f_haystack.toLowerCase();
	var needle = f_needle.toLowerCase();
	var index = 0;
	if(f_offset == undefined) {
		f_offset = 0;
	}
	if((index = haystack.indexOf(needle, f_offset)) > -1) {
		return index;
	}
	return false;
}
function stripslashes( str ) {
	return str.replace('/\0/g', '0').replace('/\(.)/g', '$1');
}
function strip_tags( str ){
	return str.replace(/<\/?[^>]+>/gi, '');
}
function stristr( haystack, needle, bool ) {
	var pos = 0;
	pos = haystack.toLowerCase().indexOf( needle.toLowerCase() );
	if( pos == -1 ){
		return false;
	} else{
		if( bool ){
			return haystack.substr( 0, pos );
		} else{
			return haystack.slice( pos );
		}
	}
}
function stristr( haystack, needle, bool ) {
	var pos = 0;
	pos = haystack.toLowerCase().indexOf( needle.toLowerCase() );
	if( pos == -1 ){
		return false;
	} else{
		if( bool ){
			return haystack.substr( 0, pos );
		} else{
			return haystack.slice( pos );
		}
	}
}
function strlen( string ){
	return string.length;
}
function strnatcmp ( f_string1, f_string2, f_version ) {
	if(f_version == undefined) {
		f_version = false;
	}
	var __strnatcmp_split = function( f_string ) {
			var result = new Array();
			var buffer = '';
			var chr = '';
			var text = true;
			for(var i = 0; i < f_string.length; i++){
				chr = f_string.substring(i, i + 1);
				if(chr.match(/[0-9]/)){
					if(text){
						if(buffer.length > 0){
							result[result.length] = buffer;
							buffer = '';
						}
						text = false;
					}
					buffer += chr;
				} else if((text == false) && (chr == '.') && (i < (f_string.length - 1)) && (f_string.substring(i + 1, i + 2).match(/[0-9]/))) {
					result[result.length] = buffer;
					buffer = '';
				} else {
					if(text == false) {
						if(buffer.length > 0) {
							result[result.length] = parseInt(buffer);
							buffer = '';
						}
						text = true;
					}
					buffer += chr;
				}
			}
			if(buffer.length > 0) {
				if(text) {
					result[result.length] = buffer;
				} else {
					result[result.length] = parseInt(buffer);
				}
			}
			return result;
		};
	var array1 = __strnatcmp_split(f_string1);
	var array2 = __strnatcmp_split(f_string2);
	var len = array1.length;
	var text = true;
	var result = -1;
	var r = 0;
	if(len > array2.length) {
		len = array2.length;
		result = 1;
	}
	for(i = 0; i < len; i++) {
		if(isNaN(array1[i])) {
			if(isNaN(array2[i])){
				text = true;

				if((r = this.strcmp(array1[i], array2[i])) != 0) {
					return r;
				}
			}
			else if(text){
				return 1;
			} else {
				return -1;
			}
		} else if(isNaN(array2[i])){
			if(text) {
				return -1;
			} else{
				return 1;
			}
		}else  {
			if(text || f_version){
				if((r = (array1[i] - array2[i])) != 0){
					return r;
				}
			} else {
				if((r = this.strcmp(array1[i].toString(), array2[i].toString())) != 0) {
					return r;
				}
			}
			text = false;
		}
	}
	return result;
}
function strpbrk( haystack, char_list ) {
   var lon = haystack.length;
   var lon_search = char_list.length;
   var ret = false;
   var stack = '';
   if(lon >= lon_search) {
  if(lon == lon_search) {
	  if(haystack == char_list)
		 ret = haystack;
  } else {
	  j = 0;
	  i = 0;
	  while(i < lon_search && j < lon && !ret) {
		if(char_list[i] == haystack[j]) {
		  i++;
		  if(i == lon_search) ret = true;
	  }
	j++;
	  }
	   if(ret)
	for(i = (j-lon_search); i < lon; i++)
	  stack += haystack[i];

	  if(stack != '')
		ret = stack;
	   }
		 }
  return ret;
}
function strpos( haystack, needle, offset){
	var i = haystack.indexOf( needle, offset );
	return i >= 0 ? i : false;
}
function strrev( string ){
	var ret = '', i = 0;
	for ( i = string.length-1; i >= 0; i-- ){
	   ret += string.charAt(i);
	}
	return ret;
}
function strripos( haystack, needle, offset){
	var i = haystack.toLowerCase().lastIndexOf( needle.toLowerCase(), offset );
	return i >= 0 ? i : false;
}
function strrpos( haystack, needle, offset){
	var i = haystack.lastIndexOf( needle, offset );
	return i >= 0 ? i : false;
}
function strstr( haystack, needle, bool ) {
	var pos = 0;
	pos = haystack.indexOf( needle );
	if( pos == -1 ){
		return false;
	} else{
		if( bool ){
			return haystack.substr( 0, pos );
		} else{
			return haystack.slice( pos );
		}
	}
}
function strtolower( str ) {
	return str.toLowerCase();
}
function strtoupper( str ) {
	return str.toUpperCase();
}
function str_ireplace( f_needle, f_replace, f_haystack ){
	var result = '';
	var index = 0;
	var haystack = f_haystack.toLowerCase();
	var needle = f_needle.toLowerCase();
	while((index = haystack.indexOf(needle)) > -1){
		result += f_haystack.substring(0, index);
		result += f_replace;
		haystack = haystack.substring(index + f_needle.length);
		f_haystack = f_haystack.substring(index + f_needle.length);
	}
	return result + f_haystack;
}
function str_pad( input, pad_length, pad_string, pad_type ) {
	var half = '', pad_to_go;
	var str_pad_repeater = function(s, len){
			var collect = '', i;
			while(collect.length < len) collect += s;
			collect = collect.substr(0,len);
			return collect;
		};
	if (pad_type != 'STR_PAD_LEFT' && pad_type != 'STR_PAD_RIGHT' && pad_type != 'STR_PAD_BOTH') { pad_type = 'STR_PAD_RIGHT'; }
	if ((pad_to_go = pad_length - input.length) > 0) {
		if (pad_type == 'STR_PAD_LEFT') { input = str_pad_repeater(pad_string, pad_to_go) + input; }
		else if (pad_type == 'STR_PAD_RIGHT') { input = input + str_pad_repeater(pad_string, pad_to_go); }
		else if (pad_type == 'STR_PAD_BOTH') {
			half = str_pad_repeater(pad_string, Math.ceil(pad_to_go/2));
			input = half + input + half;
			input = input.substr(0, pad_length);
		}
	}
	return input;
}
function str_repeat ( input, multiplier ) {
	var buf = '';
	for (i=0; i < multiplier; i++){
		buf += input;
	}
	return buf;
}
function str_replace ( search, replace, subject ) {
	if(!(replace instanceof Array)){
		replace=new Array(replace);
		if(search instanceof Array){
			while(search.length>replace.length){
				replace[replace.length]=replace[0];
			}
		}
	}
	if(!(search instanceof Array))search=new Array(search);
	while(search.length>replace.length){
		replace[replace.length]='';
	}
	if(subject instanceof Array){
		for(k in subject){
			subject[k]=str_replace(search,replace,subject[k]);
		}
		return subject;
	}
	for(var k=0; k<search.length; k++){
		var i = subject.indexOf(search[k]);
		while(i>-1){
			subject = subject.replace(search[k], replace[k]);
			i = subject.indexOf(search[k],i);
		}
	}
	return subject;
}
function str_rot13( str ) {
	return str.replace(/[A-Za-z]/g, function (c) {
		return String.fromCharCode((((c = c.charCodeAt(0)) & 223) - 52) % 26 + (c & 32) + 65);
	});
}
function str_split ( f_string, f_split_length, f_backwards ){
	if(f_backwards == undefined) {
		f_backwards = false;
	}
	if(f_split_length > 0){
		var result = new Array();
		if(f_backwards) {
			var r = (f_string.length % f_split_length);
			if(r > 0){
				result[result.length] = f_string.substring(0, r);
				f_string = f_string.substring(r);
			}
		}
		while(f_string.length > f_split_length) {
			result[result.length] = f_string.substring(0, f_split_length);
			f_string = f_string.substring(f_split_length);
		}
		result[result.length] = f_string;
		return result;
	}
	return false;
}
function substr( f_string, f_start, f_length ) {
	if(f_start < 0) {
		f_start += f_string.length;
	}
	if(f_length == undefined) {
		f_length = f_string.length;
	} else if(f_length < 0){
		f_length += f_string.length;
	} else {
		f_length += f_start;
	}
	if(f_length < f_start) {
		f_length = f_start;
	}
	return f_string.substring(f_start, f_length);
}
function substr_count( haystack, needle, offset, length ) {
	var pos = 0, cnt = 0;
	if(isNaN(offset)) offset = 0;
	if(isNaN(length)) length = 0;
	offset--;
	while( (offset = haystack.indexOf(needle, offset+1)) != -1 ){
		if(length > 0 && (offset+needle.length) > length){
			return false;
		} else{
			cnt++;
		}
	}
	return cnt;
}
function trim( str, charlist ) {
	charlist = !charlist ? ' \s\xA0' : charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
	var re = new RegExp('^[' + charlist + ']+|[' + charlist + ']+$', 'g');
	return str.replace(re, '');
}
function ucfirst( str ) {
	var f = str.charAt(0).toUpperCase();
	return f + str.substr(1, str.length-1);
}
function ucwords( str ) {
	return str.replace(/^(.)|\s(.)/g, function ( $1 ) { return $1.toUpperCase ( ); } );
}
function unserialize ( inp ) {
	error = 0;
	if (inp == "" || inp.length < 2) {
		errormsg = "input is too short";
		return;
	}
	var val, kret, vret, cval;
	var type = inp.charAt(0);
	var cont = inp.substring(2);
	var size = 0, divpos = 0, endcont = 0, rest = "", next = "";
	switch (type) {
	case "N":
		if (inp.charAt(1) != ";") {
			errormsg = "missing ; for null";
		}
		rest = cont;
		break;
	case "b": 
		if (!/[01];/.test(cont.substring(0,2))) {
			errormsg = "value not 0 or 1, or missing ; for boolean";
		}
		val = (cont.charAt(0) == "1");
		rest = cont.substring(1);
		break;
	case "s":
		val = "";
		divpos = cont.indexOf(":");
		if (divpos == -1) {
			errormsg = "missing : for string";
			break;
		}
		size = parseInt(cont.substring(0, divpos));
		if (size == 0) {
			if (cont.length - divpos < 4) {
				errormsg = "string is too short";
				break;
			}
			rest = cont.substring(divpos + 4);
			break;
		}
		if ((cont.length - divpos - size) < 4) {
			errormsg = "string is too short";
			break;
		}
		if (cont.substring(divpos + 2 + size, divpos + 4 + size) != "\";") {
			errormsg = "string is too long, or missing \";";
		}
		val = cont.substring(divpos + 2, divpos + 2 + size);
		rest = cont.substring(divpos + 4 + size);
		break;
	case "i":
	case "d": 
		var dotfound = 0;
		for (var i = 0; i < cont.length; i++) {
			cval = cont.charAt(i);
			if (isNaN(parseInt(cval)) && !(type == "d" && cval == "." && !dotfound++)) {
				endcont = i;
				break;
			}
		}
		if (!endcont || cont.charAt(endcont) != ";") {
			errormsg = "missing or invalid value, or missing ; for int/float";
		}
		val = cont.substring(0, endcont);
		val = (type == "i" ? parseInt(val) : parseFloat(val));
		rest = cont.substring(endcont + 1);
		break;
	case "a":
		if (cont.length < 4) {
			errormsg = "array is too short";
			return;
		}
		divpos = cont.indexOf(":", 1);
		if (divpos == -1) {
			errormsg = "missing : for array";
			return;
		}
		size = parseInt(cont.substring(1, divpos - 1));
		cont = cont.substring(divpos + 2);
		val = new Array();
		if (cont.length < 1) {
			errormsg = "array is too short";
			return;
		}
		for (var i = 0; i + 1 < size * 2; i += 2) {
			kret = unserialize(cont, 1);
			if (error || kret[0] == undefined || kret[1] == "") {
				errormsg = "missing or invalid key, or missing value for array";
				return;
			}
			vret = unserialize(kret[1], 1);
			if (error) {
				errormsg = "invalid value for array";
				return;
			}
			val[kret[0]] = vret[0];
			cont = vret[1];
		}
		if (cont.charAt(0) != "}") {
			errormsg = "missing ending }, or too many values for array";
			return;
		}
		rest = cont.substring(1);
		break;
	case "O":
		divpos = cont.indexOf(":");
		if (divpos == -1) {
			errormsg = "missing : for object";
			return;
		}
		size = parseInt(cont.substring(0, divpos));
		var objname = cont.substring(divpos + 2, divpos + 2 + size);
		if (cont.substring(divpos + 2 + size, divpos + 4 + size) != "\":") {
			errormsg = "object name is too long, or missing \":";
			return;
		}
		var objprops = unserialize("a:" + cont.substring(divpos + 4 + size), 1);
		if (error) {
			errormsg = "invalid object properties";
			return;
		}
		rest = objprops[1];
		var objout = "function " + objname + "(){";
		for (key in objprops[0]) {
			objout += "" + key + "=objprops[0]['" + key + "'];";
		}
		objout += "}val=new " + objname + "();";
		eval(objout);
		break;
	default:
		errormsg = "invalid input type";
	}
	return (arguments.length == 1 ? val : [val, rest]);
}
function utf8_decode ( str_data ) {
	var string = "", i = 0, c = c1 = c2 = 0;
	while ( i < str_data.length ) {
		c = str_data.charCodeAt(i);
		if (c < 128) {
			string += String.fromCharCode(c);
			i++;
		} else if((c > 191) && (c < 224)) {
			c2 = str_data.charCodeAt(i+1);
			string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
			i += 2;
		} else {
			c2 = str_data.charCodeAt(i+1);
			c3 = str_data.charCodeAt(i+2);
			string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
			i += 3;
		}
	}
	return string;
}
function utf8_encode ( str_data ) {
	str_data = str_data.replace(/\r\n/g,"\n");
	var utftext = "";
	for (var n = 0; n < str_data.length; n++) {
		var c = str_data.charCodeAt(n);
		if (c < 128) {
			utftext += String.fromCharCode(c);
		} else if((c > 127) && (c < 2048)) {
			utftext += String.fromCharCode((c >> 6) | 192);
			utftext += String.fromCharCode((c & 63) | 128);
		} else {
			utftext += String.fromCharCode((c >> 12) | 224);
			utftext += String.fromCharCode(((c >> 6) & 63) | 128);
			utftext += String.fromCharCode((c & 63) | 128);
		}
	}
	return utftext;
}
function wordwrap( str, int_width, str_break, cut ) {
	var i, j, s, r = str.split("\n");
	if(int_width > 0) for(i in r){
		for(s = r[i], r[i] = ""; s.length > int_width;
			j = cut ? int_width : (j = s.substr(0, int_width).match(/\S*$/)).input.length - j[0].length || int_width,
			r[i] += s.substr(0, j) + ((s = s.substr(j)).length ? str_break : "")
		);
		r[i] += s;
	}
	return r.join("\n");
}
function echo (text) {
        return document.write(text);
}
function json_decode(json_array) {
	return JSON.parse(json_array);
}
function json_encode(array) {
	return JSON.stringify(array);
}
function unset(data) {
	delete data;
}
function var_dump(obj) {
    var out = '';
    for (var i in obj) {
        out += i + ": " + obj[i] + "\n";
    }
    var pre = document.createElement('pre');
    pre.innerHTML = out;
    document.body.appendChild(pre)
}
function file_exists(filename) {
    fetch(filename).then(function(response) {
        if (!response.ok) { throw Error(); }
        return response;
    }).then(function(response) {
            return true;
    }).catch(function(error) {
            return false;
    });
}
function preg_match (regex, str) {
  if (new RegExp(regex).test(str)){
    return regex.exec(str);
  }
  return false;
}
function htmlspecialchars (string, quote_style) {    
    var histogram = {}, symbol = '', tmp_str = '', entity = '';  
    tmp_str = string.toString();    
    if (false === (histogram = get_html_translation_table('HTML_SPECIALCHARS', quote_style))) {  
        return false;  
    }     
    for (symbol in histogram) {  
        entity = histogram[symbol];  
        tmp_str = tmp_str.split(symbol).join(entity);  
    }  
    return tmp_str;  
} 
function urlencode(url) {
	return encodeURI(url);
}
function urldecode(url) {
	return decodeURI(url);
}
function $_GET(keys) {
    function getElement(arr, keys) {
        let key = keys.shift();
        return keys.length ? getElement(arr[key], keys) : arr[key];
    }
    function setElement(arr, keys, value) {
        let key = keys.shift();
        if (keys.length) {
            arr[key] = {};
            setElement(arr[key], keys, value)
        } else {    
            if (!key) {
                key = 0;
                while (key in arr) {
                    key++;
                }
            }
            arr[key] = value;
        }
    }
    let get = {};
    window.location.search.slice(1).split('&').forEach(function(item) {
        let data = item.split('=');
        let key = data[0].replace(/\[.*/, '');
        let value = data[1] ? data[1] : '';
        if (data[0] !== key) {
            let subkeys = data[0].match(/(?<=\[).*?(?=\])/g);
            get[key] = get[key] ? get[key] : {};
            setElement(get[key], subkeys, value);
        } else {
            get[key] = value;
        }
    });
    if (keys) {
        return getElement(get, keys.constructor !== Array ? keys.split() : keys);
    }
    return get;
}
function get_headers(url, format) {    
    var req = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();  
    if (!req) throw new Error('XMLHttpRequest not supported');  
    var tmp, headers, pair, i;  
    req.open('HEAD', url, false);  
    req.send(null);  
    if (req.readyState < 3) {  
        return false;  
    }  
    tmp = req.getAllResponseHeaders(); 
    tmp = tmp.split('\n');  
    tmp = array_filter(tmp, function (value) { return value.substring(1) != ''; });  
    headers = [req.status + ' ' + req.statusText];  
    for (i in tmp) {  
        if (format) {  
            pair = tmp[i].split(':');  
            headers[pair.splice(0, 1)] = pair.join(':').substring(1);  
        } else {  
            headers[headers.length] = tmp[i];  
        }  
    }  
    return headers;  
}  
function get_meta_tags(file) {  
    var fulltxt = '';  
    if (false) {   
        fulltxt = '<meta name="author" content="name">'+  
        '<meta name="keywords" content="php documentation">'+  
        '<meta name="DESCRIPTION" content="a php manual">'+  
        '<meta name="geo.position" content="49.33;-86.59">'+  
        '</head>';  
    } else {  
        fulltxt = file_get_contents(file).match(/^[^]*<\/head>/i);  
    }  
    var patt = /<meta[^>]*?>/gim;  
    var patt1 = /<meta\s+.*?name\s*=\s*(['"]?)(.*?)\1\s+.*?content\s*=\s*(['"]?)(.*?)\3/gim;  
    var patt2 = /<meta\s+.*?content\s*=\s*(['"?])(.*?)\1\s+.*?name\s*=\s*(['"]?)(.*?)\3/gim;  
    var txt, match, name, arr={};  
    while ((txt = patt.exec(fulltxt)) != null) {  
        while ((match = patt1.exec(txt)) != null) {  
            name = match[2].replace(/\W/g, '_').toLowerCase();  
            arr[name] = match[4];  
        }  
        while ((match = patt2.exec(txt)) != null) {  
            name = match[4].replace(/\W/g, '_').toLowerCase();  
            arr[name] = match[2];  
        }  
    }  
    return arr;  
}
function rawurldecode( str ) {  
    var histogram = {};  
    var ret = str.toString();   
  
    var replacer = function(search, replace, str) {  
        var tmp_arr = [];  
        tmp_arr = str.split(search);  
        return tmp_arr.join(replace);  
    };  
    histogram["'"]   = '%27';  
    histogram['(']   = '%28';  
    histogram[')']   = '%29';  
    histogram['*']   = '%2A';  
    histogram['~']   = '%7E';  
    histogram['!']   = '%21';  
  
    for (replace in histogram) {  
        search = histogram[replace]; 
        ret = replacer(search, replace, ret)  
    }  
    ret = decodeURIComponent(ret);  
  
    return ret;  
}
function rawurlencode( str ) {  
    var histogram = {}, tmp_arr = [];  
    var ret = str.toString();  
    var replacer = function(search, replace, str) {  
        var tmp_arr = [];  
        tmp_arr = str.split(search);  
        return tmp_arr.join(replace);  
    };   
    histogram["'"]   = '%27';  
    histogram['(']   = '%28';  
    histogram[')']   = '%29';  
    histogram['*']   = '%2A';   
    histogram['~']   = '%7E';  
    histogram['!']   = '%21';  
    ret = encodeURIComponent(ret);  
    ret = replacer('%20', ' ', ret);
    for (search in histogram) {  
        replace = histogram[search];  
        ret = replacer(search, replace, ret)
    }  
    return ret.replace(/(\%([a-z0-9]{2}))/g, function(full, m1, m2) {  
        return "%"+m2.toUpperCase();  
    });  
    return ret;  
}
function parse_url (str, component) {   
    var  o   = {  
        strictMode: false,  
        key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],  
        q:   {  
            name:   "queryKey",  
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g  
        },  
        parser: {  
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  
            loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }  
    };  
    var m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),  
    uri = {},  
    i   = 14;  
    while (i--) uri[o.key[i]] = m[i] || "";  
    switch (component) {  
        case 'PHP_URL_SCHEME':  
            return uri.protocol;  
        case 'PHP_URL_HOST':  
            return uri.host;  
        case 'PHP_URL_PORT':  
            return uri.port;  
        case 'PHP_URL_USER':  
            return uri.user;  
        case 'PHP_URL_PASS':  
            return uri.password;  
        case 'PHP_URL_PATH':  
            return uri.path;  
        case 'PHP_URL_QUERY':  
            return uri.query;  
        case 'PHP_URL_FRAGMENT':  
            return uri.anchor;  
        default:  
            var retArr = {};  
            if (uri.protocol !== '') retArr.scheme=uri.protocol;  
            if (uri.host !== '') retArr.host=uri.host;  
            if (uri.port !== '') retArr.port=uri.port;  
            if (uri.user !== '') retArr.user=uri.user;  
            if (uri.password !== '') retArr.pass=uri.password;  
            if (uri.path !== '') retArr.path=uri.path;  
            if (uri.query !== '') retArr.query=uri.query;  
            if (uri.anchor !== '') retArr.fragment=uri.anchor;  
            return retArr;  
    }  
}
function setrawcookie(name, value, expires, path, domain, secure) {  
    if (expires instanceof Date) {  
        expires = expires.toGMTString();  
    } else if(typeof(expires) == 'number') {  
        expires = (new Date(+(new Date) + expires * 1e3)).toGMTString();  
    }  
    var r = [name + "=" + value], s, i;  
    for(i in s = {expires: expires, path: path, domain: domain}){  
        s[i] && r.push(i + "=" + s[i]);  
    }    
    return secure && r.push("secure"), document.cookie = r.join(";"), true;  
}
function ip2long ( ip_address ) {  
    var output = false;  
    var parts = [];  
    if (ip_address.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)) {  
        parts  = ip_address.split('.');  
        output = ( parts[0] * 16777216 +  
        ( parts[1] * 65536 ) +  
        ( parts[2] * 256 ) +  
        ( parts[3] * 1 ) );  
    }  
    return output;  
}
function long2ip ( proper_address ) {   
    var output = false;    
    if ( !isNaN ( proper_address ) && ( proper_address >= 0 || proper_address <= 4294967295 ) ) {  
        output = Math.floor (proper_address / Math.pow ( 256, 3 ) ) + '.' +  
            Math.floor ( ( proper_address % Math.pow ( 256, 3 ) ) / Math.pow ( 256, 2 ) ) + '.' +  
            Math.floor ( ( ( proper_address % Math.pow ( 256, 3 ) )  % Math.pow ( 256, 2 ) ) / Math.pow ( 256, 1 ) ) + '.' +  
            Math.floor ( ( ( ( proper_address % Math.pow ( 256, 3 ) ) % Math.pow ( 256, 2 ) ) % Math.pow ( 256, 1 ) ) / Math.pow ( 256, 0 ) );  
    }   
    return output;  
}
function var_export(mixed_expression, bool_return) {  
    var retstr = "";  
    var iret = "";  
    var cnt = 0;  
    var x = [];  
    var __getType = function( inp ) {  
        var type = typeof inp, match;  
        if (type == 'object' && !inp) {  
            return 'null';  
        }  
        if (type == "object") {  
            if (!inp.constructor) {  
                return 'object';  
            }  
            var cons = inp.constructor.toString();  
            if (match = cons.match(/(\w+)\(/)) {  
                cons = match[1].toLowerCase();  
            }  
            var types = ["boolean", "number", "string", "array"];  
            for (key in types) {  
                if (cons == types[key]) {  
                    type = types[key];  
                    break;  
                }  
            }  
        }  
        return type;  
    };  
    var type = __getType(mixed_expression);  
    if( type === null) {  
        retstr = "NULL";  
    } else if(type == 'array' || type == 'object') {  
        for(i in mixed_expression) {  
            x[cnt++] = var_export(i,true)+" => "+var_export(mixed_expression[i], true);  
        }  
        iret = x.join(',\n  ');  
        retstr = "array (\n  "+iret+"\n)";  
    } else {  
        retstr = (!isNaN( mixed_expression )) ? mixed_expression : "'" + mixed_expression.replace('/(["\'\])/g', "\\$1").replace('/\0/g', "\\0") + "'";  
    }    
    if(bool_return != true) {  
        echo(retstr);  
        return null;  
    } else {  
        return retstr;  
    }  
}
function doubleval( mixed_var ) {  
    return floatval(mixed_var);  
}
function get_defined_vars() {  
    var i = '', arr = [], already = {};  
    for (i in window) {  
        try {  
            if (typeof window[i] === 'function') {  
                if (!already[i]) {  
                    already[i] = 1;  
                    arr.push(i);  
                }  
            }  
            else if (typeof window[i] === 'object') {  
                for (var j in window[i]) {  
                    if (typeof window[j] === 'function' && window[j] && !already[j]) {  
                        already[j] = 1;  
                        arr.push(j);  
                    }  
                }  
            }  
        }  
        catch (e) {  
        }  
    }  
    return arr;  
}
function is_float( mixed_var ) {  
    return parseFloat(mixed_var * 1) != parseInt(mixed_var * 1);  
}  
function gettype( mixed_var ) {  
    var type;  
    var typeOf = function (value) {  
        var s = typeof value;  
        if (s === 'object') {  
            if (value) {  
                if (typeof value.length === 'number' &&  
                        !(value.propertyIsEnumerable('length')) &&  
                        typeof value.splice === 'function') {  
                    s = 'array';  
                }  
            } else {  
                s = 'null';  
            }  
        }  
        return s;  
    }  
    switch (type = typeOf(mixed_var)) {  
        case 'number':  
            return (is_float(mixed_var)) ? 'double' : 'integer';  
            break;  
        case 'object':  
        case 'array':  
            if (is_array(mixed_var)) {  
                return 'array';  
            } else if (is_object(mixed_var)) {  
                return 'object';  
            }  
            break;  
    }  
    return type;  
}
function is_int( mixed_var ) {  
    if (typeof mixed_var !== 'number') {  
        return false;  
    }  
    if (parseFloat(mixed_var) != parseInt(mixed_var)) {  
        return false;  
    }  
    return true;  
}
function is_integer( mixed_var ) {  
    return is_int(mixed_var);  
}
function is_scalar( mixed_var ) {  
    return /boolean|number|string/.test(typeof mixed_var);  
}
function is_real( mixed_var ) {  
    return is_float(mixed_var);  
} 
function is_callable (v, syntax_only, callable_name) {  
    var name='', obj={}, method='';  
    if (typeof v === 'string') {  
        obj = window;  
        method = v;  
        name = v;  
    }  
    else if (v instanceof Array && v.length === 2 && typeof v[0] === 'object' && typeof v[1] === 'string') {  
        obj = v[0];  
        method = v[1];  
        name = (obj.constructor && obj.constructor.name)+'::'+method;  
    }  
    else {  
        return false;  
    }  
    if (syntax_only || typeof obj[method] === 'function') {  
        if (callable_name) {  
        window[callable_name] = name;  
        }  
        return true;  
    }  
    return false;  
}
function is_bool(mixed_var)  
{  
    return (typeof mixed_var == 'boolean');  
}
function is_double( mixed_var ) {  
    return is_float(mixed_var);  
} 
function is_long( mixed_var ) {  
    return is_float(mixed_var);  
}
function settype (vr, type) {  
    var is_array = function (arr) {  
        return typeof arr === 'object' && typeof arr.length === 'number' &&  
                    !(arr.propertyIsEnumerable('length')) &&  
                    typeof arr.splice === 'function';  
    };  
    var v, mtch, i, obj;  
    v = this[vr] ? this[vr] : vr;  
    try {  
        switch(type) {  
            case 'boolean':  
                if (is_array(v) && v.length === 0) {this[vr]=false;}  
                else if (v === '0') {this[vr]=false;}  
                else if (typeof v === 'object' && !is_array(v)) {  
                    var lgth = false;  
                    for (i in v) {  
                        lgth = true;  
                    }  
                    this[vr]=lgth;  
                }  
                else {this[vr] = !!v;}  
                break;  
            case 'integer':  
                if (typeof v === 'number') {this[vr]=parseInt(v, 10);}  
                else if (typeof v === 'string') {  
                    mtch = v.match(/^([+-]?)(\d+)/);  
                    if (!mtch) {this[vr]=0;}  
                    else {this[vr]=parseInt(v, 10);}  
                }  
                else if (v === true) {this[vr]=1;}  
                else if (v === false || v === null) {this[vr]=0;}  
                else if (is_array(v) && v.length === 0) {this[vr]=0;}  
                else if (typeof v === 'object') {this[vr]=1;}  
  
                break;  
            case 'float':  
                if (typeof v === 'string') {  
                    mtch = v.match(/^([+-]?)(\d+(\.\d+)?|\.\d+)([eE][+-]?\d+)?/);  
                    if (!mtch) {this[vr]=0;}  
                    else {this[vr]=parseFloat(v, 10);}  
                }  
                else if (v === true) {this[vr]=1;}  
                else if (v === false || v === null) {this[vr]=0;}  
                else if (is_array(v) && v.length === 0) {this[vr]=0;}  
                else if (typeof v === 'object') {this[vr]=1;}  
                break;  
            case 'string':  
                if (v === null || v === false) {this[vr]='';}  
                else if (is_array(v)) {this[vr]='Array';}  
                else if (typeof v === 'object') {this[vr]='Object';}  
                else if (v === true) {this[vr]='1';}  
                else {this[vr] += '';} // numbers (and functions?)  
                break;  
            case 'array':  
                if (v === null) {this[vr] = [];}  
                else if (typeof v !== 'object') {this[vr] = [v];}  
                break;  
            case 'object':  
                if (v === null) {this[vr]={};}  
                else if (is_array(v)) {  
                    for (i = 0, obj={}; i < v.length; i++) {  
                        obj[i] = v;  
                    }  
                    this[vr] = obj;  
                }  
                else if (typeof v !== 'object') {this[vr]={scalar:v};}  
                break;  
            case 'null':  
                delete this[vr];  
                break;  
        }  
        return true;  
    } catch (e) {  
        return false;  
    }  
}
function property_exists (cls, prop) {   
    cls = (typeof cls === 'string') ? window[cls] : cls;  
    if (typeof cls === 'function' && cls.toSource &&  
        cls.toSource().match(new RegExp('this\\.'+prop+'\\s'))  
    ) {  
        return true;  
    }  
    return (cls[prop] !== undefined && typeof cls[prop] !== 'function')  
        || (cls.prototype !== undefined && cls.prototype[prop] !== undefined && typeof cls.prototype[prop] !== 'function')  
        || (cls.constructor && cls.constructor[prop] !== undefined && typeof cls.constructor[prop] !== 'function');  
}
function class_exists (cls) {  
    var i = '';  
    cls = window[cls];
    if (typeof cls !== 'function') {return false;}  
    for (i in cls.prototype) {  
        return true;  
    }  
    for (i in cls) {
        if (i !== 'prototype') {  
            return true;  
        }  
    }  
    if (cls.toSource && cls.toSource().match(/this\./)) {   
        return true;  
    }  
    return false;  
}
function get_class_methods (name) {  
    var constructor, retArr={}, method = '';  
    if (typeof name === 'function') {  
        constructor = name;  
    } else if (typeof name === 'string') {  
        constructor = window[name];  
    } else if (typeof name === 'object') {  
        constructor = name;  
        for (method in constructor.constructor) {
            if (typeof constructor.constructor[method] === 'function') {  
                retArr[method] = constructor.constructor[method];  
            }  
        }   
    }  
    for (method in constructor) {  
        if (typeof constructor[method] === 'function') {  
            retArr[method] = constructor[method];  
        }  
    }   
    for (method in constructor.prototype) {  
        if (typeof constructor.prototype[method] === 'function') {  
            retArr[method] = constructor.prototype[method];  
        }  
    }  
    return retArr;  
}
function get_class_vars (name) {      
    var constructor, retArr={}, prop = '';  
    if (typeof name === 'function') {  
        constructor = name;  
    } else if (typeof name === 'string') {  
        constructor = window[name];  
    }    
    for (prop in constructor) {  
        if (typeof constructor[prop] !== 'function' && prop !== 'prototype') {  
            retArr[prop] = constructor[prop];  
        }  
    }  
    if (constructor.prototype) {  
        for (prop in constructor.prototype) {  
            if (typeof constructor.prototype[prop] !== 'function') {  
                retArr[prop] = constructor.prototype[prop];  
            }  
        }  
    }  
    return retArr;  
}
function get_declared_classes() {  
    var i = '', arr = [], already = {};  
    var j = '';  
    for (i in window) {  
        try {  
            if (typeof window[i] === 'function') {  
                if (!already[i] && class_exists(i)) {  
                    already[i] = 1;  
                    arr.push(i);  
                }  
            } else if (typeof window[i] === 'object') {  
                for (j in window[i]) {  
                    if (typeof window[j] === 'function' && window[j] && !already[j] && class_exists(j)) {  
                        already[j] = 1;  
                        arr.push(j);  
                    }  
                }  
            }  
        } catch (e) {  
  
        }  
    }  
    return arr;  
}
function get_object_vars (obj) {   
    var retArr = {}, prop = '';  
    for (prop in obj) {  
        if (typeof obj[prop] !== 'function' && prop !== 'prototype') {  
            retArr[prop] = obj[prop];  
        }  
    }  
    for (prop in obj.prototype) {  
        if (typeof obj.prototype[prop] !== 'function') {  
            retArr[prop] = obj.prototype[prop];  
        }  
    }  
    return retArr;  
}
function method_exists (obj, method) {  
    if (typeof obj === 'string') {  
        return window[obj] && typeof window[obj][method] === 'function'  
    }  
    return typeof obj[method] === 'function';  
}
function time() {      
    return Math.round(new Date().getTime()/1000);  
}
function checkdate( month, day, year ) {  
    var myDate = new Date();  
    myDate.setFullYear( year, (month - 1), day );  
    return ((myDate.getMonth()+1) == month && day<32);   
}
function getdate(timestamp) {   
    var _w = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];  
    var _m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];  
    var d = (typeof timestamp == 'number') ? new Date(timestamp * 1000) : new Date();  
    var w = d.getDay();  
    var m = d.getMonth();  
    var y = d.getFullYear();  
    var r = {};  
    r['seconds'] = d.getSeconds();  
    r['minutes'] = d.getMinutes();  
    r['hours'] = d.getHours();  
    r['mday'] = d.getDate();  
    r['wday'] = w;  
    r['mon'] = m + 1;  
    r['year'] = y;  
    r['yday'] = Math.floor((d - (new Date(y, 0, 1))) / 86400000);  
    r['weekday'] = _w[w];  
    r['month'] = _m[m];  
    r['0'] = parseInt(d.getTime() / 1000);  
    return r;  
}
function microtime(get_as_float) {
    var now = new Date().getTime() / 1000;
    var s = parseInt(now);
    return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
}
function strtotime(str, now) {  
    var i, match, s, strTmp = '', parse = '';  
    strTmp = str;  
    strTmp = strTmp.replace(/\s{2,}|^\s|\s$/g, ' '); 
    strTmp = strTmp.replace(/[\t\r\n]/g, '');  
    if (strTmp == 'now') {  
        return (new Date()).getTime();  
    } else if (!isNaN(parse = Date.parse(strTmp))) {  
        return parse/1000;  
    } else if (now) {  
        now = new Date(now);  
    } else {  
        now = new Date();  
    }  
    strTmp = strTmp.toLowerCase();  
    var process = function (m) {  
        var ago = (m[2] && m[2] == 'ago');  
        var num = (num = m[0] == 'last' ? -1 : 1) * (ago ? -1 : 1);  
        switch (m[0]) {  
            case 'last':  
            case 'next':  
                switch (m[1].substring(0, 3)) {  
                    case 'yea':  
                        now.setFullYear(now.getFullYear() + num);  
                        break;  
                    case 'mon':  
                        now.setMonth(now.getMonth() + num);  
                        break;  
                    case 'wee':  
                        now.setDate(now.getDate() + (num * 7));  
                        break;  
                    case 'day':  
                        now.setDate(now.getDate() + num);  
                        break;  
                    case 'hou':  
                        now.setHours(now.getHours() + num);  
                        break;  
                    case 'min':  
                        now.setMinutes(now.getMinutes() + num);  
                        break;  
                    case 'sec':  
                        now.setSeconds(now.getSeconds() + num);  
                        break;  
                    default:  
                        var day;  
                        if (typeof (day = __is_day[m[1].substring(0, 3)]) != 'undefined') {  
                            var diff = day - now.getDay();  
                            if (diff == 0) {  
                                diff = 7 * num;  
                            } else if (diff > 0) {  
                                if (m[0] == 'last') diff -= 7;  
                            } else {  
                                if (m[0] == 'next') diff += 7;  
                            }  
  
                            now.setDate(now.getDate() + diff);  
                        }  
                }  
  
                break;  
  
            default:  
                if (/\d+/.test(m[0])) {  
                    num *= parseInt(m[0]);  
  
                    switch (m[1].substring(0, 3)) {  
                        case 'yea':  
                            now.setFullYear(now.getFullYear() + num);  
                            break;  
                        case 'mon':  
                            now.setMonth(now.getMonth() + num);  
                            break;  
                        case 'wee':  
                            now.setDate(now.getDate() + (num * 7));  
                            break;  
                        case 'day':  
                            now.setDate(now.getDate() + num);  
                            break;  
                        case 'hou':  
                            now.setHours(now.getHours() + num);  
                            break;  
                        case 'min':  
                            now.setMinutes(now.getMinutes() + num);  
                            break;  
                        case 'sec':  
                            now.setSeconds(now.getSeconds() + num);  
                            break;  
                    }  
                } else {  
                    return false;  
                }  
  
                break;  
        }  
  
        return true;  
    }  
  
    var __is =  
    {  
        day:  
        {  
            'sun': 0,  
            'mon': 1,  
            'tue': 2,  
            'wed': 3,  
            'thu': 4,  
            'fri': 5,  
            'sat': 6  
        },  
        mon:  
        {  
            'jan': 0,  
            'feb': 1,  
            'mar': 2,  
            'apr': 3,  
            'may': 4,  
            'jun': 5,  
            'jul': 6,  
            'aug': 7,  
            'sep': 8,  
            'oct': 9,  
            'nov': 10,  
            'dec': 11  
        }  
    }  
    match = strTmp.match(/^(\d{2,4}-\d{2}-\d{2})(\s\d{1,2}:\d{1,2}(:\d{1,2})?)?$/);  
    if (match != null) {  
        if (!match[2]) {  
            match[2] = '00:00:00';  
        } else if (!match[3]) {  
            match[2] += ':00';  
        }  
        s = match[1].split(/-/g);  
        for (i in __is.mon) {  
            if (__is.mon[i] == s[1] - 1) {  
                s[1] = i;  
            }  
        }  
        return strtotime(s[2] + ' ' + s[1] + ' ' + s[0] + ' ' + match[2]);  
    }  
    var regex = '([+-]?\\d+\\s'  
    + '(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?'  
    + '|sun\.?|sunday|mon\.?|monday|tue\.?|tuesday|wed\.?|wednesday'  
    + '|thu\.?|thursday|fri\.?|friday|sat\.?|saturday)'  
    + '|(last|next)\\s'  
    + '(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?'  
    + '|sun\.?|sunday|mon\.?|monday|tue\.?|tuesday|wed\.?|wednesday'  
    + '|thu\.?|thursday|fri\.?|friday|sat\.?|saturday))'  
    + '(\\sago)?';  
    match = strTmp.match(new RegExp(regex, 'g'));  
    if (match == null) {  
        return false;  
    }  
    for (i in match) {  
        if (!process(match[i].split(' '))) {  
            return false;  
        }  
    }  
    return (now);  
}
function get_defined_functions() {  
    var i = '', arr = [], already = {};  
    for (i in window) {  
        try {  
            if (typeof window[i] === 'function') {  
                if (!already[i]) {  
                    already[i] = 1;  
                    arr.push(i);  
                }  
            }  
            else if (typeof window[i] === 'object') {  
                for (var j in window[i]) {  
                    if (typeof window[j] === 'function' && window[j] && !already[j]) {  
                        already[j] = 1;  
                        arr.push(j);  
                    }  
                }  
            }  
        }  
        catch (e) {  
        }  
    }  
    return arr;  
}
function call_user_func(cb, parameters) {  
    var func;  
    if (typeof cb == 'string') {  
        if (typeof this[cb] == 'function') {  
            func = this[cb];  
        } else {  
            func = (new Function(null, 'return ' + cb))();  
        }  
    } else if (cb instanceof Array) {  
        func = eval(cb[0]+"['"+cb[1]+"']");  
    }  
    if (typeof func != 'function') {  
        throw new Exception(func + ' is not a valid function');  
    }  
    return func.apply(null, Array.prototype.slice.call(parameters, 1));  
}
function call_user_func_array(cb, parameters) {   
    var func;  
    if (typeof cb == 'string') {  
        if (typeof this[cb] == 'function') {  
            func = this[cb];  
        } else {  
            func = (new Function(null, 'return ' + cb))();  
        }  
    } else if (cb instanceof Array) {  
        func = eval(cb[0]+"['"+cb[1]+"']");  
    }   
    if (typeof func != 'function') {  
        throw new Exception(func + ' is not a valid function');  
    }  
    return func.apply(null, parameters);  
}
function create_function (args, code) {    
    eval('var _oFunctionObject = function (' + args + ') { ' +  code + '}');  
    return _oFunctionObject;  
}
function func_get_arg(num) {  
    if (!arguments.callee.caller) {  
        try {  
            throw new Error('Either you are using this in a browser which does not support the "caller" property or you are calling this from a global context');  
            return false;  
        } catch(e){  
            return false;  
        }  
    }  
    if (num > arguments.callee.caller.arguments.length - 1) {  
        try {  
            throw new Error('Argument number is greater than the number of arguments actually passed');  
            return false;  
        } catch(e){  
            return false;  
        }  
    }  
    return arguments.callee.caller.arguments[num];  
}
function func_get_args() {  
    if (!arguments.callee.caller) {  
        try {  
            throw new Error('Either you are using this in a browser which does not support the "caller" property or you are calling this from a global context');  
            return false;  
        } catch(e){  
            return false;  
        }  
    }  
    return Array.prototype.slice.call(arguments.callee.caller.arguments);  
}
function func_num_args() {  
    if (!arguments.callee.caller) {  
        try {  
            throw new Error('Either you are using this in a browser which does not support the "caller" property or you are calling this from a global context');  
            return false;  
        } catch(e){  
            return false;  
        }  
    }  
    return arguments.callee.caller.arguments.length;  
}
function htmlspecialchars_decode(string, quote_style) {  
    var histogram = {}, symbol = '', tmp_str = '', entity = '';  
    tmp_str = string.toString();  
    if (false === (histogram = get_html_translation_table('HTML_SPECIALCHARS', quote_style))) {  
        return false;  
    }   
    delete(histogram['&']);  
    histogram['&'] = '&amp;';  
    for (symbol in histogram) {  
        entity = histogram[symbol];  
        tmp_str = tmp_str.split(entity).join(symbol);  
    }  
    return tmp_str;  
}
function chop ( str, charlist ) {  
    return rtrim(str, charlist);  
}
function get_html_translation_table(table, quote_style) {   
    var entities = {}, histogram = {}, decimal = 0, symbol = '';  
    var constMappingTable = {}, constMappingQuoteStyle = {};  
    var useTable = {}, useQuoteStyle = {};  
    useTable      = (table ? table.toUpperCase() : 'HTML_SPECIALCHARS');  
    useQuoteStyle = (quote_style ? quote_style.toUpperCase() : 'ENT_COMPAT');  
    constMappingTable[0]      = 'HTML_SPECIALCHARS';  
    constMappingTable[1]      = 'HTML_ENTITIES';  
    constMappingQuoteStyle[0] = 'ENT_NOQUOTES';  
    constMappingQuoteStyle[2] = 'ENT_COMPAT';  
    constMappingQuoteStyle[3] = 'ENT_QUOTES';   
    if (!isNaN(useTable)) {  
        useTable = constMappingTable[useTable];  
    }  
    if (!isNaN(useQuoteStyle)) {  
        useQuoteStyle = constMappingQuoteStyle[useQuoteStyle];  
    }  
    if (useQuoteStyle != 'ENT_NOQUOTES') {  
        entities['34'] = '&quot;';  
    }  
    if (useQuoteStyle == 'ENT_QUOTES') {  
        entities['39'] = '&#039;';  
    }  
    if (useTable == 'HTML_SPECIALCHARS') {  
        entities['38'] = '&amp;';  
        entities['60'] = '&lt;';  
        entities['62'] = '&gt;';  
    } else if (useTable == 'HTML_ENTITIES') {  
        entities['38']  = '&amp;';  
        entities['60']  = '&lt;';  
        entities['62']  = '&gt;';  
        entities['160'] = '&nbsp;';  
        entities['161'] = '&iexcl;';  
        entities['162'] = '&cent;';  
        entities['163'] = '&pound;';  
        entities['164'] = '&curren;';  
        entities['165'] = '&yen;';  
        entities['166'] = '&brvbar;';  
        entities['167'] = '&sect;';  
        entities['168'] = '&uml;';  
        entities['169'] = '&copy;';  
        entities['170'] = '&ordf;';  
        entities['171'] = '&laquo;';  
        entities['172'] = '&not;';  
        entities['173'] = '&shy;';  
        entities['174'] = '&reg;';  
        entities['175'] = '&macr;';  
        entities['176'] = '&deg;';  
        entities['177'] = '&plusmn;';  
        entities['178'] = '&sup2;';  
        entities['179'] = '&sup3;';  
        entities['180'] = '&acute;';  
        entities['181'] = '&micro;';  
        entities['182'] = '&para;';  
        entities['183'] = '&middot;';  
        entities['184'] = '&cedil;';  
        entities['185'] = '&sup1;';  
        entities['186'] = '&ordm;';  
        entities['187'] = '&raquo;';  
        entities['188'] = '&frac14;';  
        entities['189'] = '&frac12;';  
        entities['190'] = '&frac34;';  
        entities['191'] = '&iquest;';  
        entities['192'] = '&Agrave;';  
        entities['193'] = '&Aacute;';  
        entities['194'] = '&Acirc;';  
        entities['195'] = '&Atilde;';  
        entities['196'] = '&Auml;';  
        entities['197'] = '&Aring;';  
        entities['198'] = '&AElig;';  
        entities['199'] = '&Ccedil;';  
        entities['200'] = '&Egrave;';  
        entities['201'] = '&Eacute;';  
        entities['202'] = '&Ecirc;';  
        entities['203'] = '&Euml;';  
        entities['204'] = '&Igrave;';  
        entities['205'] = '&Iacute;';  
        entities['206'] = '&Icirc;';  
        entities['207'] = '&Iuml;';  
        entities['208'] = '&ETH;';  
        entities['209'] = '&Ntilde;';  
        entities['210'] = '&Ograve;';  
        entities['211'] = '&Oacute;';  
        entities['212'] = '&Ocirc;';  
        entities['213'] = '&Otilde;';  
        entities['214'] = '&Ouml;';  
        entities['215'] = '&times;';  
        entities['216'] = '&Oslash;';  
        entities['217'] = '&Ugrave;';  
        entities['218'] = '&Uacute;';  
        entities['219'] = '&Ucirc;';  
        entities['220'] = '&Uuml;';  
        entities['221'] = '&Yacute;';  
        entities['222'] = '&THORN;';  
        entities['223'] = '&szlig;';  
        entities['224'] = '&agrave;';  
        entities['225'] = '&aacute;';  
        entities['226'] = '&acirc;';  
        entities['227'] = '&atilde;';  
        entities['228'] = '&auml;';  
        entities['229'] = '&aring;';  
        entities['230'] = '&aelig;';  
        entities['231'] = '&ccedil;';  
        entities['232'] = '&egrave;';  
        entities['233'] = '&eacute;';  
        entities['234'] = '&ecirc;';  
        entities['235'] = '&euml;';  
        entities['236'] = '&igrave;';  
        entities['237'] = '&iacute;';  
        entities['238'] = '&icirc;';  
        entities['239'] = '&iuml;';  
        entities['240'] = '&eth;';  
        entities['241'] = '&ntilde;';  
        entities['242'] = '&ograve;';  
        entities['243'] = '&oacute;';  
        entities['244'] = '&ocirc;';  
        entities['245'] = '&otilde;';  
        entities['246'] = '&ouml;';  
        entities['247'] = '&divide;';  
        entities['248'] = '&oslash;';  
        entities['249'] = '&ugrave;';  
        entities['250'] = '&uacute;';  
        entities['251'] = '&ucirc;';  
        entities['252'] = '&uuml;';  
        entities['253'] = '&yacute;';  
        entities['254'] = '&thorn;';  
        entities['255'] = '&yuml;';  
    } else {  
        throw Error("Table: "+useTable+' not supported');  
        return false;  
    }   
    for (decimal in entities) {  
        symbol = String.fromCharCode(decimal);  
        histogram[symbol] = entities[decimal];  
    }  
    return histogram;  
}
function html_entity_decode( string, quote_style ) {  
    var histogram = {}, symbol = '', tmp_str = '', entity = '';  
    tmp_str = string.toString();  
    if (false === (histogram = get_html_translation_table('HTML_ENTITIES', quote_style))) {  
        return false;  
    }  
    delete(histogram['&']);  
    histogram['&'] = '&amp;';  
    for (symbol in histogram) {  
        entity = histogram[symbol];  
        tmp_str = tmp_str.split(entity).join(symbol);  
    }   
    return tmp_str;  
}
function utf8_encode ( string ) {  
    string = (string+'').replace(/\r\n/g, "\n").replace(/\r/g, "\n");  
    var utftext = "";  
    var start, end;  
    var stringl = 0;  
    start = end = 0;  
    stringl = string.length;  
    for (var n = 0; n < stringl; n++) {  
        var c1 = string.charCodeAt(n);  
        var enc = null;  
        if (c1 < 128) {  
            end++;  
        } else if((c1 > 127) && (c1 < 2048)) {  
            enc = String.fromCharCode((c1 >> 6) | 192) + String.fromCharCode((c1 & 63) | 128);  
        } else {  
            enc = String.fromCharCode((c1 >> 12) | 224) + String.fromCharCode(((c1 >> 6) & 63) | 128) + String.fromCharCode((c1 & 63) | 128);  
        }  
        if (enc != null) {  
            if (end > start) {  
                utftext += string.substring(start, end);  
            }  
            utftext += enc;  
            start = end = n+1;  
        }  
    }  
    if (end > start) {  
        utftext += string.substring(start, string.length);  
    }  
    return utftext;  
}
function utf8_decode ( str_data ) {  
    var tmp_arr = [], i = ac = c1 = c2 = c3 = 0;  
    str_data += '';  
    while ( i < str_data.length ) {  
        c1 = str_data.charCodeAt(i);  
        if (c1 < 128) {  
            tmp_arr[ac++] = String.fromCharCode(c1);  
            i++;  
        } else if ((c1 > 191) && (c1 < 224)) {  
            c2 = str_data.charCodeAt(i+1);  
            tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));  
            i += 2;  
        } else {  
            c2 = str_data.charCodeAt(i+1);  
            c3 = str_data.charCodeAt(i+2);  
            tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
            i += 3;  
        }  
    }  
    return tmp_arr.join('');  
}  
function usleep(microseconds) {  
    var start = new Date().getTime();  
    while (new Date() < (start + microseconds/1000));  
    return true;  
}
function time_sleep_until(timestamp) {  
    while (new Date() < timestamp*1000);  
    return true;  
}
function time_nanosleep(seconds, nanosecs) {  
    var start = new Date().getTime();  
    while (new Date() < (start + seconds*1000+nanosecs/1000000));  
    return true;  
}
function sleep(seconds) {  
    var start = new Date().getTime();  
    while (new Date() < start + seconds*1000);  
    return 0;  
}
function php_strip_whitespace (file) {   
    try {  
        var str = file_get_contents(file);  
    } catch (e) {  
        return '';  
    }  
    return str.replace(/\/\/.*?\n/g, '').replace(/\/\*[^]*?\*\//g, '').replace(/[ \f\r\t\v\u00A0\u2028\u2029]+/g, ' ').replace(/\s*\n+/g, '\n').replace(/^\s+/gm, '').replace(/\s*$/gm, '');  
}
function exit( status ) {   
    var i;  
    if (typeof status === 'string') {  
        alert(status);  
    }  
    window.addEventListener('error', function (e) {e.preventDefault();e.stopPropagation();}, false);  
    var handlers = [  
        'copy', 'cut', 'paste',  
        'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',  
        'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',  
        'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'  
    ];  
    function stopPropagation (e) {  
        e.stopPropagation();  
    }  
    for (i=0; i < handlers.length; i++) {  
        window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);  
    }  
    if (window.stop) {  
        window.stop();  
    }  
    throw '';  
}
function die( status ) {   
    return exit(status);  
}
function constant(name) {   
    if (window[name] === undefined) {  
        return null;  
    }  
  
    return window[name];  
}  
