var availableTagsBasic = [
            /*****Basic Language *****/
			/* statements */
			'if','then','for','wend','while',
			'else','elseif','select','case','end select',
			'until','next','step','to','end if', 'call',
			/* keywords */
			'sub', 'end sub', 'function', 'end function', 'exit',
			'exit function', 'dim', 'redim', 'shared', 'const',
			'is', 'absolute', 'access', 'any', 'append', 'as',
			'base', 'beep', 'binary', 'bload', 'bsave', 'chain',
			'chdir', 'circle', 'clear', 'close', 'cls', 'color',
			'com', 'common', 'data', 'date', 'declare', 'def',
			'defdbl', 'defint', 'deflng', 'defsng', 'defstr',
			'double', 'draw', 'environ', 'erase', 'error', 'field',
			'files', 'fn', 'get', 'gosub', 'goto', 'integer', 'key',
			'kill', 'let', 'line', 'list', 'locate', 'lock', 'long',
			'lprint', 'lset', 'mkdir', 'name', 'off', 'on', 'open',
			'option', 'out', 'output', 'paint', 'palette', 'pcopy',
			'poke', 'preset', 'print', 'pset', 'put', 'random',
			'randomize', 'read', 'reset', 'restore', 'resume',
			'return', 'rmdir', 'rset', 'run', 'screen', 'seg',
			'shell', 'single', 'sleep', 'sound', 'static', 'stop',
			'strig', 'string', 'swap', 'system', 'time', 'timer',
			'troff', 'tron', 'type', 'unlock', 'using', 'view',
			'wait', 'width', 'window', 'write',
			/* functions */
			'abs', 'asc', 'atn', 'cdbl', 'chr', 'cint', 'clng',
			'cos', 'csng', 'csrlin', 'cvd', 'cvdmbf', 'cvi', 'cvl',
			'cvs', 'cvsmbf', 'eof', 'erdev', 'erl', 'err', 'exp',
			'fileattr', 'fix', 'fre', 'freefile', 'hex', 'inkey',
			'inp', 'input', 'instr', 'int', 'ioctl', 'lbound',
			'lcase', 'left', 'len', 'loc', 'lof', 'log', 'lpos',
			'ltrim', 'mid', 'mkd', 'mkdmbf', 'mki', 'mkl', 'mks',
			'mksmbf', 'oct', 'peek', 'pen', 'play', 'pmap', 'point',
			'pos', 'right', 'rnd', 'rtrim', 'seek', 'sgn', 'sin',
			'space', 'spc', 'sqr', 'stick', 'str', 'tab', 'tan',
			'ubound', 'ucase', 'val', 'varptr', 'varseg',
			/* operators */
			'and', 'eqv', 'imp', 'mod', 'not', 'or', 'xor'
			/*****End Basic Language *****/
			];
			
			/*****Brainfuck Language *****/			
var availableTagsBrainfuck = [
			/*DELIMITERS*/
			'[]',
			/*REGEXPS */
			'search'
			,'class' , 'bfispis'
			,'modifiers' , 'g'
			,'execute' 
			/*bfupis */
			,'bfupis' 			
			, 'bfupis'			
			, 'before'
			/*bfmemory */
			,'bfmemory',			
			
];
			/*****End Brainfuck Language *****/

		/*****C Language *****/
var availableTagsC = [			
			/*constants */
			'NULL', 'false', 'stdin', 'stdout', 'stderr', 'true',
		/*types */
			'FILE', 'auto', 'char', 'const', 'double',
			'extern', 'float', 'inline', 'int', 'long', 'register',
			'short', 'signed', 'size_t', 'static', 'struct',
			'time_t', 'typedef', 'union', 'unsigned', 'void',
			'volatile',
		/*statements */
			'do', 'else', 'enum', 'for', 'goto', 'if', 'sizeof',
			'switch', 'while',
 		/*keywords */
			'break', 'case', 'continue', 'default', 'delete',
			'return',					
		/*precompiler */
			'search', '()','[]','{}','\r','\n'
			,'class' , 'precompiler'
			,'modifiers' 
			,'execute' , 'before'
			,'include'
			
			];
		
		/*****Coud Fusion Language *****/
var availableTagsCoudFusion = [

	/*KEYWORDS*/
		/*statements*/
			'include', 'require', 'include_once', 'require_once',
			'for', 'foreach', 'as', 'if', 'elseif', 'else', 'while', 'do', 'endwhile',
            'endif', 'switch', 'case', 'endswitch',
			'return', 'break', 'continue',
		
		/*reserved*/
			'AND', 'break', 'case', 'CONTAIN', 'CONTAINS', 'continue', 'default', 'do', 
			'DOES', 'else', 'EQ', 'EQUAL', 'EQUALTO', 'EQV', 'FALSE', 'for', 'GE', 
			'GREATER', 'GT', 'GTE', 'if', 'IMP', 'in', 'IS', 'LE', 'LESS', 'LT', 'LTE', 
			'MOD', 'NEQ', 'NOT', 'OR', 'return', 'switch', 'THAN', 'TO', 'TRUE', 'var', 
			'while', 'XOR',
		
		/* functions*/
			'Abs', 'ACos', 'ArrayAppend', 'ArrayAvg', 'ArrayClear', 'ArrayDeleteAt', 'ArrayInsertAt', 
			'ArrayIsEmpty', 'ArrayLen', 'ArrayMax', 'ArrayMin', 'ArrayNew', 'ArrayPrepend', 'ArrayResize', 
			'ArraySet', 'ArraySort', 'ArraySum', 'ArraySwap', 'ArrayToList', 'Asc', 'ASin', 'Atn', 'AuthenticatedContext', 
			'AuthenticatedUser', 'BitAnd', 'BitMaskClear', 'BitMaskRead', 'BitMaskSet', 'BitNot', 'BitOr', 
			'BitSHLN', 'BitSHRN', 'BitXor', 'Ceiling', 'Chr', 'CJustify', 'Compare', 'CompareNoCase', 'Cos', 
			'CreateDate', 'CreateDateTime', 'CreateODBCDate', 'CreateODBCDateTime', 'CreateODBCTime', 
			'CreateTime', 'CreateTimeSpan', 'DateAdd', 'DateCompare', 'DateConvert', 'DateDiff', 
			'DateFormat', 'DatePart', 'Day', 'DayOfWeek', 'DayOfWeekAsString', 'DayOfYear', 'DaysInMonth', 
			'DaysInYear', 'DE', 'DecimalFormat', 'DecrementValue', 'Decrypt', 'DeleteClientVariable', 
			'DirectoryExists', 'DollarFormat', 'Duplicate', 'Encrypt', 'Evaluate', 'Exp', 'ExpandPath', 
			'FileExists', 'Find', 'FindNoCase', 'FindOneOf', 'FirstDayOfMonth', 'Fix', 'FormatBaseN', 
			'GetBaseTagData', 'GetBaseTagList', 'GetBaseTemplatePath', 'GetClientVariablesList', 
			'GetCurrentTemplatePath', 'GetDirectoryFromPath', 'GetException', 'GetFileFromPath', 
			'GetFunctionList', 'GetHttpTimeString', 'GetHttpRequestData', 'GetLocale', 'GetMetricData', 
			'GetProfileString', 'GetTempDirectory', 'GetTempFile', 'GetTemplatePath', 'GetTickCount', 
			'GetTimeZoneInfo', 'GetToken', 'Hash', 'Hour', 'HTMLCodeFormat', 'HTMLEditFormat', 'IIf', 
			'IncrementValue', 'InputBaseN', 'Insert', 'Int', 'IsArray', 'IsAuthenticated', 'IsAuthorized', 
			'IsBoolean', 'IsBinary', 'IsCustomFunction', 'IsDate', 'IsDebugMode', 'IsDefined', 'IsLeapYear', 
			'IsNumeric', 'IsNumericDate', 'IsProtected', 'IsQuery', 'IsSimpleValue', 'IsStruct', 'IsWDDX', 
			'JavaCast', 'JSStringFormat', 'LCase', 'Left', 'Len', 'ListAppend', 'ListChangeDelims', 
			'ListContains', 'ListContainsNoCase', 'ListDeleteAt', 'ListFind', 'ListFindNoCase', 'ListFirst', 
			'ListGetAt', 'ListInsertAt', 'ListLast', 'ListLen', 'ListPrepend', 'ListQualify', 'ListRest', 
			'ListSetAt', 'ListSort', 'ListToArray', 'ListValueCount', 'ListValueCountNoCase', 'LJustify', 
			'Log', 'Log10', 'LSCurrencyFormat', 'LSDateFormat', 'LSEuroCurrencyFormat', 'LSIsCurrency', 
			'LSIsDate', 'LSIsNumeric', 'LSNumberFormat', 'LSParseCurrency', 'LSParseDateTime', 'LSParseNumber', 
			'LSTimeFormat', 'LTrim', 'Max', 'Mid', 'Min', 'Minute', 'Month', 'MonthAsString', 'Now', 'NumberFormat', 
			'ParagraphFormat', 'ParameterExists', 'ParseDateTime', 'Pi', 'PreserveSingleQuotes', 'Quarter', 
			'QueryAddRow', 'QueryNew', 'QuerySetCell', 'QuotedValueList', 'Rand', 'Randomize', 'RandRange', 
			'REFind', 'REFindNoCase', 'RemoveChars', 'RepeatString', 'Replace', 'ReplaceList', 'ReplaceNoCase', 
			'REReplace', 'REReplaceNoCase', 'Reverse', 'Right', 'RJustify', 'Round', 'RTrim', 'Second', 'SetLocale', 
			'SetProfileString', 'SetVariable', 'Sgn', 'Sin', 'SpanExcluding', 'SpanIncluding', 'Sqr', 'StripCR', 
			'StructAppend', 'StructClear', 'StructCopy', 'StructCount', 'StructDelete', 'StructFind', 'StructFindKey', 
			'StructFindValue', 'StructGet', 'StructInsert', 'StructIsEmpty', 'StructKeyArray', 'StructKeyExists', 
			'StructKeyList', 'StructNew', 'StructSort', 'StructUpdate', 'Tan', 'TimeFormat', 'ToBase64', 'ToBinary', 
			'ToString', 'Trim', 'UCase', 'URLDecode', 'URLEncodedFormat', 'Val', 'ValueList', 'Week', 'WriteOutput', 
			'XMLFormat', 'Year', 'YesNoFormat',	
	
	/*DELIMITERS*/
		'()', '[]', '{}',
	
	/*REGEXPS*/
		/*doctype*/
			'search' 
			,'class' , 'doctype'
			,'modifiers' 
			,'execute', 'before',		
			'cftags'
			,'gi'				
			,'cftags2'			

];

/*****C++ Language *****/
var availableTagsCPP = [
	/*KEYWORDS*/
		/*constants*/
			'NULL', 'false', 'std', 'stdin', 'stdout', 'stderr',
			'true',		
		/* types' */
			'FILE', 'auto', 'char', 'class', 'const', 'double',
			'extern', 'float', 'friend', 'inline', 'int',
			'iterator', 'long', 'map', 'operator', 'queue',
			'register', 'short', 'signed', 'size_t', 'stack',
			'static', 'string', 'struct', 'time_t', 'typedef',
			'union', 'unsigned', 'vector', 'void', 'volatile',
		
		/*statements*/
			'catch', 'do', 'else', 'enum', 'for', 'goto', 'if',
			'sizeof', 'switch', 'this', 'throw', 'try', 'while',
		
 		/*keywords*/
			'break', 'case', 'continue', 'default', 'delete',
			'namespace', 'new', 'private', 'protected', 'public',
			'return', 'using',
	
	/*DELIMITERS*/
		'()', '[]', '{}',
	
	/*REGEXPS*/
		/*precompiler*/
			'search' 
			,'class' , 'precompiler'
			,'modifiers' 
			,'execute' , 'before'
];

/*****CSS Language *****/
var availableTagsCss = [
		/*KEYWORDS'*/
		/* attributes */
			'aqua', 'azimuth', 'background-attachment', 'background-color',
			'background-image', 'background-position', 'background-repeat',
			'background', 'border-bottom-color', 'border-bottom-style',
			'border-bottom-width', 'border-left-color', 'border-left-style',
			'border-left-width', 'border-right', 'border-right-color',
			'border-right-style', 'border-right-width', 'border-top-color',
			'border-top-style', 'border-top-width','border-bottom', 'border-collapse',
			'border-left', 'border-width', 'border-color', 'border-spacing',
			'border-style', 'border-top', 'border',  'caption-side',
			'clear', 'clip', 'color', 'content', 'counter-increment', 'counter-reset',
			'cue-after', 'cue-before', 'cue', 'cursor', 'direction', 'display',
			'elevation', 'empty-cells', 'float', 'font-family', 'font-size',
			'font-size-adjust', 'font-stretch', 'font-style', 'font-variant',
			'font-weight', 'font', 'height', 'letter-spacing', 'line-height',
			'list-style', 'list-style-image', 'list-style-position', 'list-style-type',
			'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'margin',
			'marker-offset', 'marks', 'max-height', 'max-width', 'min-height',
			'min-width', 'opacity', 'orphans', 'outline', 'outline-color', 'outline-style',
			'outline-width', 'overflow', 'padding-bottom', 'padding-left',
			'padding-right', 'padding-top', 'padding', 'page', 'page-break-after',
			'page-break-before', 'page-break-inside', 'pause-after', 'pause-before',
			'pause', 'pitch', 'pitch-range',  'play-during', 'position', 'quotes',
			'richness', 'right', 'size', 'speak-header', 'speak-numeral', 'speak-punctuation',
			'speak', 'speech-rate', 'stress', 'table-layout', 'text-align', 'text-decoration',
			'text-indent', 'text-shadow', 'text-transform', 'top', 'unicode-bidi',
			'vertical-align', 'visibility', 'voice-family', 'volume', 'white-space', 'widows',
			'width', 'word-spacing', 'z-index', 'bottom', 'left',
		
		/*values*/
			'above', 'absolute', 'always', 'armenian', 'aural', 'auto', 'avoid',
			'baseline', 'behind', 'below', 'bidi-override', 'black', 'blue', 'blink', 'block', 'bold', 'bolder', 'both',
			'capitalize', 'center-left', 'center-right', 'center', 'circle', 'cjk-ideographic', 
            'close-quote', 'collapse', 'condensed', 'continuous', 'crop', 'crosshair', 'cross', 'cursive',
			'dashed', 'decimal-leading-zero', 'decimal', 'default', 'digits', 'disc', 'dotted', 'double',
			'e-resize', 'embed', 'extra-condensed', 'extra-expanded', 'expanded',
			'fantasy', 'far-left', 'far-right', 'faster', 'fast', 'fixed', 'fuchsia',
			'georgian', 'gray', 'green', 'groove', 'hebrew', 'help', 'hidden', 'hide', 'higher',
			'high', 'hiragana-iroha', 'hiragana', 'icon', 'inherit', 'inline-table', 'inline',
			'inset', 'inside', 'invert', 'italic', 'justify', 'katakana-iroha', 'katakana',
			'landscape', 'larger', 'large', 'left-side', 'leftwards', 'level', 'lighter', 'lime', 'line-through', 'list-item', 'loud', 'lower-alpha', 'lower-greek', 'lower-roman', 'lowercase', 'ltr', 'lower', 'low',
			'maroon', 'medium', 'message-box', 'middle', 'mix', 'monospace',
			'n-resize', 'narrower', 'navy', 'ne-resize', 'no-close-quote', 'no-open-quote', 'no-repeat', 'none', 'normal', 'nowrap', 'nw-resize',
			'oblique', 'olive', 'once', 'open-quote', 'outset', 'outside', 'overline',
			'pointer', 'portrait', 'purple', 'px',
			'red', 'relative', 'repeat-x', 'repeat-y', 'repeat', 'rgb', 'ridge', 'right-side', 'rightwards',
			's-resize', 'sans-serif', 'scroll', 'se-resize', 'semi-condensed', 'semi-expanded', 'separate', 'serif', 'show', 'silent', 'silver', 'slow', 'slower', 'small-caps', 'small-caption', 'smaller', 'soft', 'solid', 'spell-out', 'square',
			'static', 'status-bar', 'super', 'sw-resize',
			'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row', 'table-row-group', 'teal', 'text', 'text-bottom', 'text-top', 'thick', 'thin', 'transparent',
			'ultra-condensed', 'ultra-expanded', 'underline', 'upper-alpha', 'upper-latin', 'upper-roman', 'uppercase', 'url',
			'visible',
			'w-resize', 'wait', 'white', 'wider',
			'x-fast', 'x-high', 'x-large', 'x-loud', 'x-low', 'x-small', 'x-soft', 'xx-large', 'xx-small',
			'yellow', 'yes',
		
		/*specials*/
			'important!',			
	

];