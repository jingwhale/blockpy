JavaScript debugger enabled
/*     1 */ $compiledmod = function() {
/*     2 */     var $scope120 = (function($modname) {
/*     3 */         var $loadname122, $loadname123, $loadname124, $loadname122, $loadname123, $loadname124, $call125, $loadname127, $loadname127, $lattr128, $str129, $loadname131, $loadname132, $loadname133, $loadname131, $loadname132, $loadname133, $lattr134, $loadname138, $loadname139, $str140, $loadname144, $loadname145, $loadname147, $loadname148, $loadname147, $loadname148, $lattr149, $loadname151, $loadname152, $loadname151, $loadname152, $lattr153, $loadname155, $loadname155, $lattr156, $loadname155, $lattr156, $lsubscr157, $loadname155, $lattr156, $lsubscr157, $lattr158, $loadname155, $lattr156, $lsubscr157, $lattr158, $lattr159, $loadname155, $lattr156, $lsubscr157, $lattr158, $lattr159, $lattr160, $compareres161, $loadname165, $str166, $loadname167, $loadname165, $str166, $loadname167, $lattr168, $loadname165, $str166, $loadname167, $lattr168, $lsubscr169, $loadname165, $str166, $loadname167, $lattr168, $lsubscr169, $lattr170, $loadname172, $loadname172, $lattr173, $loadname172, $lattr173, $lsubscr174, $loadname172, $lattr173, $lsubscr174, $lattr175, $compareres176, $loadname180, $loadname180, $lattr181, $loadname180, $lattr181, $lsubscr182, $loadname180, $lattr181, $lsubscr182, $lattr183, $compareres184, $loadname188, $loadname188, $lattr189, $loadname188, $lattr189, $lsubscr190, $loadname188, $lattr189, $lsubscr190, $lattr191, $compareres192, $loadname196, $loadname196, $lattr197, $loadname196, $lattr197, $lsubscr198, $loadname196, $lattr197, $lsubscr198, $lattr199, $compareres200, $loadname204, $str205, $loadname208, $loadname208, $lattr209, $loadname210, $loadname212, $str213, $binop214, $loadname216, $loadname217, $loadname219, $str220, $loadname221, $str222, $loadname224, $str225, $loadname226, $loadname224, $str225, $loadname226, $lattr227, $loadname224, $str225, $loadname226, $lattr227, $lsubscr228, $str229, $loadname231, $str232, $loadname233, $loadname231, $str232, $loadname233, $lattr234, $loadname231, $str232, $loadname233, $lattr234, $lsubscr235, $loadname231, $str232, $loadname233, $lattr234, $lsubscr235, $lattr236, $loadname231, $str232, $loadname233, $lattr234, $lsubscr235, $lattr236, $lsubscr237, $str238, $loadname240, $loadname241, $loadname240, $loadname241, $lattr242, $loadname243, $loadname240, $loadname241, $lattr242, $loadname243, $call244, $loadname246, $loadname246, $lattr247, $str248, $loadname250, $str251, $loadname252, $loadname250, $str251, $loadname252, $lattr253, $loadname254, $loadname250, $str251, $loadname252, $lattr253, $loadname254, $lattr255, $loadname250, $str251, $loadname252, $lattr253, $loadname254, $lattr255, $lsubscr256, $loadname250, $str251, $loadname252, $lattr253, $loadname254, $lattr255, $lsubscr256, $call257, $loadname259, $str260, $loadname261, $loadname259, $str260, $loadname261, $lattr262, $loadname263, $loadname259, $str260, $loadname261, $lattr262, $loadname263, $call264, $loadname266, $str267, $loadname268, $loadname266, $str267, $loadname268, $lattr269, $loadname270, $loadname266, $str267, $loadname268, $lattr269, $loadname270, $call271, $loadname273, $loadname274, $loadname273, $loadname274, $lattr275, $loadname276, $loadname273, $loadname274, $lattr275, $loadname276, $call277, $loadname279, $str280, $binop281, $loadname283, $loadname299, $loadname301, $loadname301, $lattr302, $str303, $loadname305, $loadname305, $lattr306, $loadname307, $loadname309, $loadname309, $lattr310, $compareres311, $loadname309, $lattr310, $compareres311, $jfalse312, $jtrue313, $str314, $loadname315, $loadname316, $loadname309, $lattr310, $compareres311, $jfalse312, $jtrue313, $str314, $loadname315, $loadname316, $lattr317, $loadname320, $str321;
/*     4 */         var $wakeFromSuspension = function() {
/*     5 */             var susp = $scope120.$wakingSuspension;
/*     6 */             delete $scope120.$wakingSuspension;
/*     7 */             $blk = susp.$blk;
/*     8 */             $loc = susp.$loc;
/*     9 */             $gbl = susp.$gbl;
/*    10 */             $exc = susp.$exc;
/*    11 */             $err = susp.$err;
/*    12 */             $postfinally = susp.$postfinally;
/*    13 */             $currLineNo = susp.$lineno;
/*    14 */             $currColNo = susp.$colno;
/*    15 */             Sk.lastYield = Date.now();
/*    16 */             $loadname122 = susp.$tmps.$loadname122;
/*    17 */             $loadname123 = susp.$tmps.$loadname123;
/*    18 */             $loadname124 = susp.$tmps.$loadname124;
/*    19 */             $call125 = susp.$tmps.$call125;
/*    20 */             $loadname127 = susp.$tmps.$loadname127;
/*    21 */             $lattr128 = susp.$tmps.$lattr128;
/*    22 */             $str129 = susp.$tmps.$str129;
/*    23 */             $loadname131 = susp.$tmps.$loadname131;
/*    24 */             $loadname132 = susp.$tmps.$loadname132;
/*    25 */             $loadname133 = susp.$tmps.$loadname133;
/*    26 */             $lattr134 = susp.$tmps.$lattr134;
/*    27 */             $loadname138 = susp.$tmps.$loadname138;
/*    28 */             $loadname139 = susp.$tmps.$loadname139;
/*    29 */             $str140 = susp.$tmps.$str140;
/*    30 */             $loadname144 = susp.$tmps.$loadname144;
/*    31 */             $loadname145 = susp.$tmps.$loadname145;
/*    32 */             $loadname147 = susp.$tmps.$loadname147;
/*    33 */             $loadname148 = susp.$tmps.$loadname148;
/*    34 */             $lattr149 = susp.$tmps.$lattr149;
/*    35 */             $loadname151 = susp.$tmps.$loadname151;
/*    36 */             $loadname152 = susp.$tmps.$loadname152;
/*    37 */             $lattr153 = susp.$tmps.$lattr153;
/*    38 */             $loadname155 = susp.$tmps.$loadname155;
/*    39 */             $lattr156 = susp.$tmps.$lattr156;
/*    40 */             $lsubscr157 = susp.$tmps.$lsubscr157;
/*    41 */             $lattr158 = susp.$tmps.$lattr158;
/*    42 */             $lattr159 = susp.$tmps.$lattr159;
/*    43 */             $lattr160 = susp.$tmps.$lattr160;
/*    44 */             $compareres161 = susp.$tmps.$compareres161;
/*    45 */             $loadname165 = susp.$tmps.$loadname165;
/*    46 */             $str166 = susp.$tmps.$str166;
/*    47 */             $loadname167 = susp.$tmps.$loadname167;
/*    48 */             $lattr168 = susp.$tmps.$lattr168;
/*    49 */             $lsubscr169 = susp.$tmps.$lsubscr169;
/*    50 */             $lattr170 = susp.$tmps.$lattr170;
/*    51 */             $loadname172 = susp.$tmps.$loadname172;
/*    52 */             $lattr173 = susp.$tmps.$lattr173;
/*    53 */             $lsubscr174 = susp.$tmps.$lsubscr174;
/*    54 */             $lattr175 = susp.$tmps.$lattr175;
/*    55 */             $compareres176 = susp.$tmps.$compareres176;
/*    56 */             $loadname180 = susp.$tmps.$loadname180;
/*    57 */             $lattr181 = susp.$tmps.$lattr181;
/*    58 */             $lsubscr182 = susp.$tmps.$lsubscr182;
/*    59 */             $lattr183 = susp.$tmps.$lattr183;
/*    60 */             $compareres184 = susp.$tmps.$compareres184;
/*    61 */             $loadname188 = susp.$tmps.$loadname188;
/*    62 */             $lattr189 = susp.$tmps.$lattr189;
/*    63 */             $lsubscr190 = susp.$tmps.$lsubscr190;
/*    64 */             $lattr191 = susp.$tmps.$lattr191;
/*    65 */             $compareres192 = susp.$tmps.$compareres192;
/*    66 */             $loadname196 = susp.$tmps.$loadname196;
/*    67 */             $lattr197 = susp.$tmps.$lattr197;
/*    68 */             $lsubscr198 = susp.$tmps.$lsubscr198;
/*    69 */             $lattr199 = susp.$tmps.$lattr199;
/*    70 */             $compareres200 = susp.$tmps.$compareres200;
/*    71 */             $loadname204 = susp.$tmps.$loadname204;
/*    72 */             $str205 = susp.$tmps.$str205;
/*    73 */             $loadname208 = susp.$tmps.$loadname208;
/*    74 */             $lattr209 = susp.$tmps.$lattr209;
/*    75 */             $loadname210 = susp.$tmps.$loadname210;
/*    76 */             $loadname212 = susp.$tmps.$loadname212;
/*    77 */             $str213 = susp.$tmps.$str213;
/*    78 */             $binop214 = susp.$tmps.$binop214;
/*    79 */             $loadname216 = susp.$tmps.$loadname216;
/*    80 */             $loadname217 = susp.$tmps.$loadname217;
/*    81 */             $loadname219 = susp.$tmps.$loadname219;
/*    82 */             $str220 = susp.$tmps.$str220;
/*    83 */             $loadname221 = susp.$tmps.$loadname221;
/*    84 */             $str222 = susp.$tmps.$str222;
/*    85 */             $loadname224 = susp.$tmps.$loadname224;
/*    86 */             $str225 = susp.$tmps.$str225;
/*    87 */             $loadname226 = susp.$tmps.$loadname226;
/*    88 */             $lattr227 = susp.$tmps.$lattr227;
/*    89 */             $lsubscr228 = susp.$tmps.$lsubscr228;
/*    90 */             $str229 = susp.$tmps.$str229;
/*    91 */             $loadname231 = susp.$tmps.$loadname231;
/*    92 */             $str232 = susp.$tmps.$str232;
/*    93 */             $loadname233 = susp.$tmps.$loadname233;
/*    94 */             $lattr234 = susp.$tmps.$lattr234;
/*    95 */             $lsubscr235 = susp.$tmps.$lsubscr235;
/*    96 */             $lattr236 = susp.$tmps.$lattr236;
/*    97 */             $lsubscr237 = susp.$tmps.$lsubscr237;
/*    98 */             $str238 = susp.$tmps.$str238;
/*    99 */             $loadname240 = susp.$tmps.$loadname240;
/*   100 */             $loadname241 = susp.$tmps.$loadname241;
/*   101 */             $lattr242 = susp.$tmps.$lattr242;
/*   102 */             $loadname243 = susp.$tmps.$loadname243;
/*   103 */             $call244 = susp.$tmps.$call244;
/*   104 */             $loadname246 = susp.$tmps.$loadname246;
/*   105 */             $lattr247 = susp.$tmps.$lattr247;
/*   106 */             $str248 = susp.$tmps.$str248;
/*   107 */             $loadname250 = susp.$tmps.$loadname250;
/*   108 */             $str251 = susp.$tmps.$str251;
/*   109 */             $loadname252 = susp.$tmps.$loadname252;
/*   110 */             $lattr253 = susp.$tmps.$lattr253;
/*   111 */             $loadname254 = susp.$tmps.$loadname254;
/*   112 */             $lattr255 = susp.$tmps.$lattr255;
/*   113 */             $lsubscr256 = susp.$tmps.$lsubscr256;
/*   114 */             $call257 = susp.$tmps.$call257;
/*   115 */             $loadname259 = susp.$tmps.$loadname259;
/*   116 */             $str260 = susp.$tmps.$str260;
/*   117 */             $loadname261 = susp.$tmps.$loadname261;
/*   118 */             $lattr262 = susp.$tmps.$lattr262;
/*   119 */             $loadname263 = susp.$tmps.$loadname263;
/*   120 */             $call264 = susp.$tmps.$call264;
/*   121 */             $loadname266 = susp.$tmps.$loadname266;
/*   122 */             $str267 = susp.$tmps.$str267;
/*   123 */             $loadname268 = susp.$tmps.$loadname268;
/*   124 */             $lattr269 = susp.$tmps.$lattr269;
/*   125 */             $loadname270 = susp.$tmps.$loadname270;
/*   126 */             $call271 = susp.$tmps.$call271;
/*   127 */             $loadname273 = susp.$tmps.$loadname273;
/*   128 */             $loadname274 = susp.$tmps.$loadname274;
/*   129 */             $lattr275 = susp.$tmps.$lattr275;
/*   130 */             $loadname276 = susp.$tmps.$loadname276;
/*   131 */             $call277 = susp.$tmps.$call277;
/*   132 */             $loadname279 = susp.$tmps.$loadname279;
/*   133 */             $str280 = susp.$tmps.$str280;
/*   134 */             $binop281 = susp.$tmps.$binop281;
/*   135 */             $loadname283 = susp.$tmps.$loadname283;
/*   136 */             $loadname299 = susp.$tmps.$loadname299;
/*   137 */             $loadname301 = susp.$tmps.$loadname301;
/*   138 */             $lattr302 = susp.$tmps.$lattr302;
/*   139 */             $str303 = susp.$tmps.$str303;
/*   140 */             $loadname305 = susp.$tmps.$loadname305;
/*   141 */             $lattr306 = susp.$tmps.$lattr306;
/*   142 */             $loadname307 = susp.$tmps.$loadname307;
/*   143 */             $loadname309 = susp.$tmps.$loadname309;
/*   144 */             $lattr310 = susp.$tmps.$lattr310;
/*   145 */             $compareres311 = susp.$tmps.$compareres311;
/*   146 */             $jfalse312 = susp.$tmps.$jfalse312;
/*   147 */             $jtrue313 = susp.$tmps.$jtrue313;
/*   148 */             $str314 = susp.$tmps.$str314;
/*   149 */             $loadname315 = susp.$tmps.$loadname315;
/*   150 */             $loadname316 = susp.$tmps.$loadname316;
/*   151 */             $lattr317 = susp.$tmps.$lattr317;
/*   152 */             $loadname320 = susp.$tmps.$loadname320;
/*   153 */             $str321 = susp.$tmps.$str321;
/*   154 */             try {
/*   155 */                 $ret = susp.child.resume();
/*   156 */             } catch (err) {
/*   157 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*   158 */                     Sk.execStart = Date.now()
/*   159 */                 }
/*   160 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   161 */                     err = new Sk.builtin.ExternalError(err);
/*   162 */                 }
/*   163 */                 err.traceback.push({
/*   164 */                     lineno: $currLineNo,
/*   165 */                     colno: $currColNo,
/*   166 */                     filename: 'test/test_ast.py'
/*   167 */                 });
/*   168 */                 if ($exc.length > 0) {
/*   169 */                     $err = err;
/*   170 */                     $blk = $exc.pop();
/*   171 */                 } else {
/*   172 */                     throw err;
/*   173 */                 }
/*   174 */             }
/*   175 */         };
/*   176 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   177 */             var susp = new Sk.misceval.Suspension();
/*   178 */             susp.child = $child;
/*   179 */             susp.resume = function() {
/*   180 */                 $scope120.$wakingSuspension = susp;
/*   181 */                 return $scope120();
/*   182 */             };
/*   183 */             susp.data = susp.child.data;
/*   184 */             susp.$blk = $blk;
/*   185 */             susp.$loc = $loc;
/*   186 */             susp.$gbl = $gbl;
/*   187 */             susp.$exc = $exc;
/*   188 */             susp.$err = $err;
/*   189 */             susp.$postfinally = $postfinally;
/*   190 */             susp.$filename = $filename;
/*   191 */             susp.$lineno = $lineno;
/*   192 */             susp.$colno = $colno;
/*   193 */             susp.optional = susp.child.optional;
/*   194 */             susp.$tmps = {
/*   195 */                 "$loadname122": $loadname122,
/*   196 */                 "$loadname123": $loadname123,
/*   197 */                 "$loadname124": $loadname124,
/*   198 */                 "$call125": $call125,
/*   199 */                 "$loadname127": $loadname127,
/*   200 */                 "$lattr128": $lattr128,
/*   201 */                 "$str129": $str129,
/*   202 */                 "$loadname131": $loadname131,
/*   203 */                 "$loadname132": $loadname132,
/*   204 */                 "$loadname133": $loadname133,
/*   205 */                 "$lattr134": $lattr134,
/*   206 */                 "$loadname138": $loadname138,
/*   207 */                 "$loadname139": $loadname139,
/*   208 */                 "$str140": $str140,
/*   209 */                 "$loadname144": $loadname144,
/*   210 */                 "$loadname145": $loadname145,
/*   211 */                 "$loadname147": $loadname147,
/*   212 */                 "$loadname148": $loadname148,
/*   213 */                 "$lattr149": $lattr149,
/*   214 */                 "$loadname151": $loadname151,
/*   215 */                 "$loadname152": $loadname152,
/*   216 */                 "$lattr153": $lattr153,
/*   217 */                 "$loadname155": $loadname155,
/*   218 */                 "$lattr156": $lattr156,
/*   219 */                 "$lsubscr157": $lsubscr157,
/*   220 */                 "$lattr158": $lattr158,
/*   221 */                 "$lattr159": $lattr159,
/*   222 */                 "$lattr160": $lattr160,
/*   223 */                 "$compareres161": $compareres161,
/*   224 */                 "$loadname165": $loadname165,
/*   225 */                 "$str166": $str166,
/*   226 */                 "$loadname167": $loadname167,
/*   227 */                 "$lattr168": $lattr168,
/*   228 */                 "$lsubscr169": $lsubscr169,
/*   229 */                 "$lattr170": $lattr170,
/*   230 */                 "$loadname172": $loadname172,
/*   231 */                 "$lattr173": $lattr173,
/*   232 */                 "$lsubscr174": $lsubscr174,
/*   233 */                 "$lattr175": $lattr175,
/*   234 */                 "$compareres176": $compareres176,
/*   235 */                 "$loadname180": $loadname180,
/*   236 */                 "$lattr181": $lattr181,
/*   237 */                 "$lsubscr182": $lsubscr182,
/*   238 */                 "$lattr183": $lattr183,
/*   239 */                 "$compareres184": $compareres184,
/*   240 */                 "$loadname188": $loadname188,
/*   241 */                 "$lattr189": $lattr189,
/*   242 */                 "$lsubscr190": $lsubscr190,
/*   243 */                 "$lattr191": $lattr191,
/*   244 */                 "$compareres192": $compareres192,
/*   245 */                 "$loadname196": $loadname196,
/*   246 */                 "$lattr197": $lattr197,
/*   247 */                 "$lsubscr198": $lsubscr198,
/*   248 */                 "$lattr199": $lattr199,
/*   249 */                 "$compareres200": $compareres200,
/*   250 */                 "$loadname204": $loadname204,
/*   251 */                 "$str205": $str205,
/*   252 */                 "$loadname208": $loadname208,
/*   253 */                 "$lattr209": $lattr209,
/*   254 */                 "$loadname210": $loadname210,
/*   255 */                 "$loadname212": $loadname212,
/*   256 */                 "$str213": $str213,
/*   257 */                 "$binop214": $binop214,
/*   258 */                 "$loadname216": $loadname216,
/*   259 */                 "$loadname217": $loadname217,
/*   260 */                 "$loadname219": $loadname219,
/*   261 */                 "$str220": $str220,
/*   262 */                 "$loadname221": $loadname221,
/*   263 */                 "$str222": $str222,
/*   264 */                 "$loadname224": $loadname224,
/*   265 */                 "$str225": $str225,
/*   266 */                 "$loadname226": $loadname226,
/*   267 */                 "$lattr227": $lattr227,
/*   268 */                 "$lsubscr228": $lsubscr228,
/*   269 */                 "$str229": $str229,
/*   270 */                 "$loadname231": $loadname231,
/*   271 */                 "$str232": $str232,
/*   272 */                 "$loadname233": $loadname233,
/*   273 */                 "$lattr234": $lattr234,
/*   274 */                 "$lsubscr235": $lsubscr235,
/*   275 */                 "$lattr236": $lattr236,
/*   276 */                 "$lsubscr237": $lsubscr237,
/*   277 */                 "$str238": $str238,
/*   278 */                 "$loadname240": $loadname240,
/*   279 */                 "$loadname241": $loadname241,
/*   280 */                 "$lattr242": $lattr242,
/*   281 */                 "$loadname243": $loadname243,
/*   282 */                 "$call244": $call244,
/*   283 */                 "$loadname246": $loadname246,
/*   284 */                 "$lattr247": $lattr247,
/*   285 */                 "$str248": $str248,
/*   286 */                 "$loadname250": $loadname250,
/*   287 */                 "$str251": $str251,
/*   288 */                 "$loadname252": $loadname252,
/*   289 */                 "$lattr253": $lattr253,
/*   290 */                 "$loadname254": $loadname254,
/*   291 */                 "$lattr255": $lattr255,
/*   292 */                 "$lsubscr256": $lsubscr256,
/*   293 */                 "$call257": $call257,
/*   294 */                 "$loadname259": $loadname259,
/*   295 */                 "$str260": $str260,
/*   296 */                 "$loadname261": $loadname261,
/*   297 */                 "$lattr262": $lattr262,
/*   298 */                 "$loadname263": $loadname263,
/*   299 */                 "$call264": $call264,
/*   300 */                 "$loadname266": $loadname266,
/*   301 */                 "$str267": $str267,
/*   302 */                 "$loadname268": $loadname268,
/*   303 */                 "$lattr269": $lattr269,
/*   304 */                 "$loadname270": $loadname270,
/*   305 */                 "$call271": $call271,
/*   306 */                 "$loadname273": $loadname273,
/*   307 */                 "$loadname274": $loadname274,
/*   308 */                 "$lattr275": $lattr275,
/*   309 */                 "$loadname276": $loadname276,
/*   310 */                 "$call277": $call277,
/*   311 */                 "$loadname279": $loadname279,
/*   312 */                 "$str280": $str280,
/*   313 */                 "$binop281": $binop281,
/*   314 */                 "$loadname283": $loadname283,
/*   315 */                 "$loadname299": $loadname299,
/*   316 */                 "$loadname301": $loadname301,
/*   317 */                 "$lattr302": $lattr302,
/*   318 */                 "$str303": $str303,
/*   319 */                 "$loadname305": $loadname305,
/*   320 */                 "$lattr306": $lattr306,
/*   321 */                 "$loadname307": $loadname307,
/*   322 */                 "$loadname309": $loadname309,
/*   323 */                 "$lattr310": $lattr310,
/*   324 */                 "$compareres311": $compareres311,
/*   325 */                 "$jfalse312": $jfalse312,
/*   326 */                 "$jtrue313": $jtrue313,
/*   327 */                 "$str314": $str314,
/*   328 */                 "$loadname315": $loadname315,
/*   329 */                 "$loadname316": $loadname316,
/*   330 */                 "$lattr317": $lattr317,
/*   331 */                 "$loadname320": $loadname320,
/*   332 */                 "$str321": $str321
/*   333 */             };
/*   334 */             return susp;
/*   335 */         };
/*   336 */         var $gbl = {},
/*   337 */             $blk = 0,
/*   338 */             $exc = [],
/*   339 */             $loc = $gbl,
/*   340 */             $err = undefined;
/*   341 */         $gbl.__name__ = $modname;
/*   342 */         $loc.__file__ = new Sk.builtins.str('test/test_ast.py');
/*   343 */         var $ret = undefined,
/*   344 */             $postfinally = undefined,
/*   345 */             $currLineNo = undefined,
/*   346 */             $currColNo = undefined;
/*   347 */         if (typeof Sk.execStart === 'undefined') {
/*   348 */             Sk.execStart = Date.now()
/*   349 */         }
/*   350 */         if (typeof Sk.lastYield === 'undefined') {
/*   351 */             Sk.lastYield = Date.now()
/*   352 */         }
/*   353 */         if ($scope120.$wakingSuspension !== undefined) {
/*   354 */             $wakeFromSuspension();
/*   355 */         }
/*   356 */         if (Sk.retainGlobals) {
/*   357 */             if (Sk.globals) {
/*   358 */                 $gbl = Sk.globals;
/*   359 */                 Sk.globals = $gbl;
/*   360 */                 $loc = $gbl;
/*   361 */             } else {
/*   362 */                 Sk.globals = $gbl;
/*   363 */             }
/*   364 */         } else {
/*   365 */             Sk.globals = $gbl;
/*   366 */         }
/*   367 */         while (true) {
/*   368 */             try {
/*   369 */                 var $dateNow = Date.now();
/*   370 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*   371 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   372 */                 }
/*   373 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   374 */                     var $susp = $saveSuspension({
/*   375 */                         data: {
/*   376 */                             type: 'Sk.yield'
/*   377 */                         },
/*   378 */                         resume: function() {}
/*   379 */                     }, 'test/test_ast.py', $currLineNo, $currColNo);
/*   380 */                     $susp.$blk = $blk;
/*   381 */                     $susp.optional = true;
/*   382 */                     return $susp;
/*   383 */                 }
/*   384 */                 switch ($blk) {
/*   385 */                 case 0:
/*   386 */                     /* --- module entry --- */
/*   387 */                     //
/*   388 */                     // line 1:
/*   389 */                     // import ast
/*   390 */                     // ^
/*   391 */                     //
/*   392 */                     Sk.currLineNo = 1;
/*   393 */                     Sk.currColNo = 0;
/*   394 */ 
/*   395 */ 
/*   396 */                     Sk.currFilename = 'test/test_ast.py';
/*   397 */ 
/*   398 */ 
/*   399 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   400 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*   401 */                     }
/*   402 */                     $currLineNo = 1;
/*   403 */                     $currColNo = 0;
/*   404 */ 
/*   405 */                     $ret = Sk.builtin.__import__('ast', $gbl, $loc, []);
/*   406 */                     $blk = 1; /* allowing case fallthrough */
/*   407 */                 case 1:
/*   408 */                     /* --- function return or resume suspension --- */
/*   409 */                     if ($ret && $ret.$isSuspension) {
/*   410 */                         return $saveSuspension($ret, 'test/test_ast.py', 1, 0);
/*   411 */                     }
/*   412 */                     var $module121 = $ret;
/*   413 */                     $loc.ast = $module121;
/*   414 */                     //
/*   415 */                     // line 3:
/*   416 */                     // print(dir(ast))
/*   417 */                     // ^
/*   418 */                     //
/*   419 */                     Sk.currLineNo = 3;
/*   420 */                     Sk.currColNo = 0;
/*   421 */ 
/*   422 */ 
/*   423 */                     Sk.currFilename = 'test/test_ast.py';
/*   424 */ 
/*   425 */ 
/*   426 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   427 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*   428 */                     }
/*   429 */                     $currLineNo = 3;
/*   430 */                     $currColNo = 0;
/*   431 */ 
/*   432 */                     var $loadname122 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*   433 */                     var $loadname123 = $loc.dir !== undefined ? $loc.dir : Sk.misceval.loadname('dir', $gbl);;
/*   434 */                     var $loadname124 = $loc.ast !== undefined ? $loc.ast : Sk.misceval.loadname('ast', $gbl);;
/*   435 */                     $ret;
/*   436 */                     $ret = Sk.misceval.callsimOrSuspend($loadname123, $loadname124);
/*   437 */                     $blk = 2; /* allowing case fallthrough */
/*   438 */                 case 2:
/*   439 */                     /* --- function return or resume suspension --- */
/*   440 */                     if ($ret && $ret.$isSuspension) {
/*   441 */                         return $saveSuspension($ret, 'test/test_ast.py', 3, 6);
/*   442 */                     }
/*   443 */                     var $call125 = $ret;
/*   444 */                     //
/*   445 */                     // line 3:
/*   446 */                     // print(dir(ast))
/*   447 */                     //       ^
/*   448 */                     //
/*   449 */                     Sk.currLineNo = 3;
/*   450 */                     Sk.currColNo = 6;
/*   451 */ 
/*   452 */ 
/*   453 */                     Sk.currFilename = 'test/test_ast.py';
/*   454 */ 
/*   455 */                     $currLineNo = 3;
/*   456 */                     $currColNo = 6;
/*   457 */ 
/*   458 */                     $ret;
/*   459 */                     $ret = Sk.misceval.callsimOrSuspend($loadname122, $call125);
/*   460 */                     $blk = 3; /* allowing case fallthrough */
/*   461 */                 case 3:
/*   462 */                     /* --- function return or resume suspension --- */
/*   463 */                     if ($ret && $ret.$isSuspension) {
/*   464 */                         return $saveSuspension($ret, 'test/test_ast.py', 3, 0);
/*   465 */                     }
/*   466 */                     var $call126 = $ret;
/*   467 */                     //
/*   468 */                     // line 3:
/*   469 */                     // print(dir(ast))
/*   470 */                     // ^
/*   471 */                     //
/*   472 */                     Sk.currLineNo = 3;
/*   473 */                     Sk.currColNo = 0;
/*   474 */ 
/*   475 */ 
/*   476 */                     Sk.currFilename = 'test/test_ast.py';
/*   477 */ 
/*   478 */                     $currLineNo = 3;
/*   479 */                     $currColNo = 0;
/*   480 */ 
/*   481 */ 
/*   482 */                     //
/*   483 */                     // line 5:
/*   484 */                     // addition = ast.parse("1 + 2")
/*   485 */                     // ^
/*   486 */                     //
/*   487 */                     Sk.currLineNo = 5;
/*   488 */                     Sk.currColNo = 0;
/*   489 */ 
/*   490 */ 
/*   491 */                     Sk.currFilename = 'test/test_ast.py';
/*   492 */ 
/*   493 */ 
/*   494 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   495 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*   496 */                     }
/*   497 */                     $currLineNo = 5;
/*   498 */                     $currColNo = 0;
/*   499 */ 
/*   500 */                     var $loadname127 = $loc.ast !== undefined ? $loc.ast : Sk.misceval.loadname('ast', $gbl);;
/*   501 */                     $ret = Sk.abstr.gattr($loadname127, 'parse', true);
/*   502 */                     $blk = 4; /* allowing case fallthrough */
/*   503 */                 case 4:
/*   504 */                     /* --- function return or resume suspension --- */
/*   505 */                     if ($ret && $ret.$isSuspension) {
/*   506 */                         return $saveSuspension($ret, 'test/test_ast.py', 5, 11);
/*   507 */                     }
/*   508 */                     var $lattr128 = $ret;
/*   509 */                     var $str129 = new Sk.builtins['str']('1 + 2');
/*   510 */                     $ret;
/*   511 */                     $ret = Sk.misceval.callsimOrSuspend($lattr128, $str129);
/*   512 */                     $blk = 5; /* allowing case fallthrough */
/*   513 */                 case 5:
/*   514 */                     /* --- function return or resume suspension --- */
/*   515 */                     if ($ret && $ret.$isSuspension) {
/*   516 */                         return $saveSuspension($ret, 'test/test_ast.py', 5, 11);
/*   517 */                     }
/*   518 */                     var $call130 = $ret;
/*   519 */                     //
/*   520 */                     // line 5:
/*   521 */                     // addition = ast.parse("1 + 2")
/*   522 */                     //            ^
/*   523 */                     //
/*   524 */                     Sk.currLineNo = 5;
/*   525 */                     Sk.currColNo = 11;
/*   526 */ 
/*   527 */ 
/*   528 */                     Sk.currFilename = 'test/test_ast.py';
/*   529 */ 
/*   530 */                     $currLineNo = 5;
/*   531 */                     $currColNo = 11;
/*   532 */ 
/*   533 */                     $loc.addition = $call130;
/*   534 */                     //
/*   535 */                     // line 7:
/*   536 */                     // assert isinstance(addition, ast.Module), "Unable to parse addition"
/*   537 */                     // ^
/*   538 */                     //
/*   539 */                     Sk.currLineNo = 7;
/*   540 */                     Sk.currColNo = 0;
/*   541 */ 
/*   542 */ 
/*   543 */                     Sk.currFilename = 'test/test_ast.py';
/*   544 */ 
/*   545 */ 
/*   546 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   547 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*   548 */                     }
/*   549 */                     $currLineNo = 7;
/*   550 */                     $currColNo = 0;
/*   551 */ 
/*   552 */                     var $loadname131 = $loc.isinstance !== undefined ? $loc.isinstance : Sk.misceval.loadname('isinstance', $gbl);;
/*   553 */                     var $loadname132 = $loc.addition !== undefined ? $loc.addition : Sk.misceval.loadname('addition', $gbl);;
/*   554 */                     var $loadname133 = $loc.ast !== undefined ? $loc.ast : Sk.misceval.loadname('ast', $gbl);;
/*   555 */                     $ret = Sk.abstr.gattr($loadname133, 'Module', true);
/*   556 */                     $blk = 6; /* allowing case fallthrough */
/*   557 */                 case 6:
/*   558 */                     /* --- function return or resume suspension --- */
/*   559 */                     if ($ret && $ret.$isSuspension) {
/*   560 */                         return $saveSuspension($ret, 'test/test_ast.py', 7, 28);
/*   561 */                     }
/*   562 */                     var $lattr134 = $ret;
/*   563 */                     $ret;
/*   564 */                     $ret = Sk.misceval.callsimOrSuspend($loadname131, $loadname132, $lattr134);
/*   565 */                     $blk = 7; /* allowing case fallthrough */
/*   566 */                 case 7:
/*   567 */                     /* --- function return or resume suspension --- */
/*   568 */                     if ($ret && $ret.$isSuspension) {
/*   569 */                         return $saveSuspension($ret, 'test/test_ast.py', 7, 7);
/*   570 */                     }
/*   571 */                     var $call135 = $ret;
/*   572 */                     //
/*   573 */                     // line 7:
/*   574 */                     // assert isinstance(addition, ast.Module), "Unable to parse addition"
/*   575 */                     //        ^
/*   576 */                     //
/*   577 */                     Sk.currLineNo = 7;
/*   578 */                     Sk.currColNo = 7;
/*   579 */ 
/*   580 */ 
/*   581 */                     Sk.currFilename = 'test/test_ast.py';
/*   582 */ 
/*   583 */                     $currLineNo = 7;
/*   584 */                     $currColNo = 7;
/*   585 */ 
/*   586 */                     var $jtrue136 = ($call135 === true || Sk.misceval.isTrue($call135));
/*   587 */                     if ($jtrue136) { /*test passed */
/*   588 */                         $blk = 8;
/*   589 */                         continue;
/*   590 */                     }
/*   591 */                     var $str137 = new Sk.builtins['str']('Unable to parse addition');
/*   592 */                     throw new Sk.builtin.AssertionError($str137);
/*   593 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   594 */                 case 8:
/*   595 */                     /* --- end --- */
/*   596 */                     //
/*   597 */                     // line 8:
/*   598 */                     // assert hasattr(addition, 'body'), "Module has no body"
/*   599 */                     // ^
/*   600 */                     //
/*   601 */                     Sk.currLineNo = 8;
/*   602 */                     Sk.currColNo = 0;
/*   603 */ 
/*   604 */ 
/*   605 */                     Sk.currFilename = 'test/test_ast.py';
/*   606 */ 
/*   607 */ 
/*   608 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   609 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*   610 */                     }
/*   611 */                     $currLineNo = 8;
/*   612 */                     $currColNo = 0;
/*   613 */ 
/*   614 */                     var $loadname138 = $loc.hasattr !== undefined ? $loc.hasattr : Sk.misceval.loadname('hasattr', $gbl);;
/*   615 */                     var $loadname139 = $loc.addition !== undefined ? $loc.addition : Sk.misceval.loadname('addition', $gbl);;
/*   616 */                     var $str140 = new Sk.builtins['str']('body');
/*   617 */                     $ret;
/*   618 */                     $ret = Sk.misceval.callsimOrSuspend($loadname138, $loadname139, $str140);
/*   619 */                     $blk = 9; /* allowing case fallthrough */
/*   620 */                 case 9:
/*   621 */                     /* --- function return or resume suspension --- */
/*   622 */                     if ($ret && $ret.$isSuspension) {
/*   623 */                         return $saveSuspension($ret, 'test/test_ast.py', 8, 7);
/*   624 */                     }
/*   625 */                     var $call141 = $ret;
/*   626 */                     //
/*   627 */                     // line 8:
/*   628 */                     // assert hasattr(addition, 'body'), "Module has no body"
/*   629 */                     //        ^
/*   630 */                     //
/*   631 */                     Sk.currLineNo = 8;
/*   632 */                     Sk.currColNo = 7;
/*   633 */ 
/*   634 */ 
/*   635 */                     Sk.currFilename = 'test/test_ast.py';
/*   636 */ 
/*   637 */                     $currLineNo = 8;
/*   638 */                     $currColNo = 7;
/*   639 */ 
/*   640 */                     var $jtrue142 = ($call141 === true || Sk.misceval.isTrue($call141));
/*   641 */                     if ($jtrue142) { /*test passed */
/*   642 */                         $blk = 10;
/*   643 */                         continue;
/*   644 */                     }
/*   645 */                     var $str143 = new Sk.builtins['str']('Module has no body');
/*   646 */                     throw new Sk.builtin.AssertionError($str143);
/*   647 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   648 */                 case 10:
/*   649 */                     /* --- end --- */
/*   650 */                     //
/*   651 */                     // line 9:
/*   652 */                     // print(addition)
/*   653 */                     // ^
/*   654 */                     //
/*   655 */                     Sk.currLineNo = 9;
/*   656 */                     Sk.currColNo = 0;
/*   657 */ 
/*   658 */ 
/*   659 */                     Sk.currFilename = 'test/test_ast.py';
/*   660 */ 
/*   661 */ 
/*   662 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   663 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*   664 */                     }
/*   665 */                     $currLineNo = 9;
/*   666 */                     $currColNo = 0;
/*   667 */ 
/*   668 */                     var $loadname144 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*   669 */                     var $loadname145 = $loc.addition !== undefined ? $loc.addition : Sk.misceval.loadname('addition', $gbl);;
/*   670 */                     $ret;
/*   671 */                     $ret = Sk.misceval.callsimOrSuspend($loadname144, $loadname145);
/*   672 */                     $blk = 11; /* allowing case fallthrough */
/*   673 */                 case 11:
/*   674 */                     /* --- function return or resume suspension --- */
/*   675 */                     if ($ret && $ret.$isSuspension) {
/*   676 */                         return $saveSuspension($ret, 'test/test_ast.py', 9, 0);
/*   677 */                     }
/*   678 */                     var $call146 = $ret;
/*   679 */                     //
/*   680 */                     // line 9:
/*   681 */                     // print(addition)
/*   682 */                     // ^
/*   683 */                     //
/*   684 */                     Sk.currLineNo = 9;
/*   685 */                     Sk.currColNo = 0;
/*   686 */ 
/*   687 */ 
/*   688 */                     Sk.currFilename = 'test/test_ast.py';
/*   689 */ 
/*   690 */                     $currLineNo = 9;
/*   691 */                     $currColNo = 0;
/*   692 */ 
/*   693 */ 
/*   694 */                     //
/*   695 */                     // line 10:
/*   696 */                     // print(addition._fields)
/*   697 */                     // ^
/*   698 */                     //
/*   699 */                     Sk.currLineNo = 10;
/*   700 */                     Sk.currColNo = 0;
/*   701 */ 
/*   702 */ 
/*   703 */                     Sk.currFilename = 'test/test_ast.py';
/*   704 */ 
/*   705 */ 
/*   706 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   707 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*   708 */                     }
/*   709 */                     $currLineNo = 10;
/*   710 */                     $currColNo = 0;
/*   711 */ 
/*   712 */                     var $loadname147 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*   713 */                     var $loadname148 = $loc.addition !== undefined ? $loc.addition : Sk.misceval.loadname('addition', $gbl);;
/*   714 */                     $ret = Sk.abstr.gattr($loadname148, '_fields', true);
/*   715 */                     $blk = 12; /* allowing case fallthrough */
/*   716 */                 case 12:
/*   717 */                     /* --- function return or resume suspension --- */
/*   718 */                     if ($ret && $ret.$isSuspension) {
/*   719 */                         return $saveSuspension($ret, 'test/test_ast.py', 10, 6);
/*   720 */                     }
/*   721 */                     var $lattr149 = $ret;
/*   722 */                     $ret;
/*   723 */                     $ret = Sk.misceval.callsimOrSuspend($loadname147, $lattr149);
/*   724 */                     $blk = 13; /* allowing case fallthrough */
/*   725 */                 case 13:
/*   726 */                     /* --- function return or resume suspension --- */
/*   727 */                     if ($ret && $ret.$isSuspension) {
/*   728 */                         return $saveSuspension($ret, 'test/test_ast.py', 10, 0);
/*   729 */                     }
/*   730 */                     var $call150 = $ret;
/*   731 */                     //
/*   732 */                     // line 10:
/*   733 */                     // print(addition._fields)
/*   734 */                     // ^
/*   735 */                     //
/*   736 */                     Sk.currLineNo = 10;
/*   737 */                     Sk.currColNo = 0;
/*   738 */ 
/*   739 */ 
/*   740 */                     Sk.currFilename = 'test/test_ast.py';
/*   741 */ 
/*   742 */                     $currLineNo = 10;
/*   743 */                     $currColNo = 0;
/*   744 */ 
/*   745 */ 
/*   746 */                     //
/*   747 */                     // line 11:
/*   748 */                     // print(addition.body)
/*   749 */                     // ^
/*   750 */                     //
/*   751 */                     Sk.currLineNo = 11;
/*   752 */                     Sk.currColNo = 0;
/*   753 */ 
/*   754 */ 
/*   755 */                     Sk.currFilename = 'test/test_ast.py';
/*   756 */ 
/*   757 */ 
/*   758 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   759 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*   760 */                     }
/*   761 */                     $currLineNo = 11;
/*   762 */                     $currColNo = 0;
/*   763 */ 
/*   764 */                     var $loadname151 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*   765 */                     var $loadname152 = $loc.addition !== undefined ? $loc.addition : Sk.misceval.loadname('addition', $gbl);;
/*   766 */                     $ret = Sk.abstr.gattr($loadname152, 'body', true);
/*   767 */                     $blk = 14; /* allowing case fallthrough */
/*   768 */                 case 14:
/*   769 */                     /* --- function return or resume suspension --- */
/*   770 */                     if ($ret && $ret.$isSuspension) {
/*   771 */                         return $saveSuspension($ret, 'test/test_ast.py', 11, 6);
/*   772 */                     }
/*   773 */                     var $lattr153 = $ret;
/*   774 */                     $ret;
/*   775 */                     $ret = Sk.misceval.callsimOrSuspend($loadname151, $lattr153);
/*   776 */                     $blk = 15; /* allowing case fallthrough */
/*   777 */                 case 15:
/*   778 */                     /* --- function return or resume suspension --- */
/*   779 */                     if ($ret && $ret.$isSuspension) {
/*   780 */                         return $saveSuspension($ret, 'test/test_ast.py', 11, 0);
/*   781 */                     }
/*   782 */                     var $call154 = $ret;
/*   783 */                     //
/*   784 */                     // line 11:
/*   785 */                     // print(addition.body)
/*   786 */                     // ^
/*   787 */                     //
/*   788 */                     Sk.currLineNo = 11;
/*   789 */                     Sk.currColNo = 0;
/*   790 */ 
/*   791 */ 
/*   792 */                     Sk.currFilename = 'test/test_ast.py';
/*   793 */ 
/*   794 */                     $currLineNo = 11;
/*   795 */                     $currColNo = 0;
/*   796 */ 
/*   797 */ 
/*   798 */                     //
/*   799 */                     // line 12:
/*   800 */                     // assert addition.body[0].value.left.n == 1, "Parsed Addition wasn't correct"
/*   801 */                     // ^
/*   802 */                     //
/*   803 */                     Sk.currLineNo = 12;
/*   804 */                     Sk.currColNo = 0;
/*   805 */ 
/*   806 */ 
/*   807 */                     Sk.currFilename = 'test/test_ast.py';
/*   808 */ 
/*   809 */ 
/*   810 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   811 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*   812 */                     }
/*   813 */                     $currLineNo = 12;
/*   814 */                     $currColNo = 0;
/*   815 */ 
/*   816 */                     var $loadname155 = $loc.addition !== undefined ? $loc.addition : Sk.misceval.loadname('addition', $gbl);;
/*   817 */                     $ret = Sk.abstr.gattr($loadname155, 'body', true);
/*   818 */                     $blk = 16; /* allowing case fallthrough */
/*   819 */                 case 16:
/*   820 */                     /* --- function return or resume suspension --- */
/*   821 */                     if ($ret && $ret.$isSuspension) {
/*   822 */                         return $saveSuspension($ret, 'test/test_ast.py', 12, 7);
/*   823 */                     }
/*   824 */                     var $lattr156 = $ret;
/*   825 */                     $ret = Sk.abstr.objectGetItem($lattr156, new Sk.builtin.int_(0), true);
/*   826 */                     $blk = 17; /* allowing case fallthrough */
/*   827 */                 case 17:
/*   828 */                     /* --- function return or resume suspension --- */
/*   829 */                     if ($ret && $ret.$isSuspension) {
/*   830 */                         return $saveSuspension($ret, 'test/test_ast.py', $currLineNo, $currColNo);
/*   831 */                     }
/*   832 */                     var $lsubscr157 = $ret;
/*   833 */                     $ret = Sk.abstr.gattr($lsubscr157, 'value', true);
/*   834 */                     $blk = 18; /* allowing case fallthrough */
/*   835 */                 case 18:
/*   836 */                     /* --- function return or resume suspension --- */
/*   837 */                     if ($ret && $ret.$isSuspension) {
/*   838 */                         return $saveSuspension($ret, 'test/test_ast.py', 12, 7);
/*   839 */                     }
/*   840 */                     var $lattr158 = $ret;
/*   841 */                     $ret = Sk.abstr.gattr($lattr158, 'left', true);
/*   842 */                     $blk = 19; /* allowing case fallthrough */
/*   843 */                 case 19:
/*   844 */                     /* --- function return or resume suspension --- */
/*   845 */                     if ($ret && $ret.$isSuspension) {
/*   846 */                         return $saveSuspension($ret, 'test/test_ast.py', 12, 7);
/*   847 */                     }
/*   848 */                     var $lattr159 = $ret;
/*   849 */                     $ret = Sk.abstr.gattr($lattr159, 'n', true);
/*   850 */                     $blk = 20; /* allowing case fallthrough */
/*   851 */                 case 20:
/*   852 */                     /* --- function return or resume suspension --- */
/*   853 */                     if ($ret && $ret.$isSuspension) {
/*   854 */                         return $saveSuspension($ret, 'test/test_ast.py', 12, 7);
/*   855 */                     }
/*   856 */                     var $lattr160 = $ret;
/*   857 */                     var $compareres161 = null;
/*   858 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr160, new Sk.builtin.int_(1), 'Eq', true));
/*   859 */                     $blk = 22; /* allowing case fallthrough */
/*   860 */                 case 22:
/*   861 */                     /* --- function return or resume suspension --- */
/*   862 */                     if ($ret && $ret.$isSuspension) {
/*   863 */                         return $saveSuspension($ret, 'test/test_ast.py', 12, 7);
/*   864 */                     }
/*   865 */                     $compareres161 = $ret;
/*   866 */                     var $jfalse162 = ($ret === false || !Sk.misceval.isTrue($ret));
/*   867 */                     if ($jfalse162) { /*test failed */
/*   868 */                         $blk = 21;
/*   869 */                         continue;
/*   870 */                     }
/*   871 */                     $blk = 21; /* allowing case fallthrough */
/*   872 */                 case 21:
/*   873 */                     /* --- done --- */
/*   874 */                     var $jtrue163 = ($compareres161 === true || Sk.misceval.isTrue($compareres161));
/*   875 */                     if ($jtrue163) { /*test passed */
/*   876 */                         $blk = 23;
/*   877 */                         continue;
/*   878 */                     }
/*   879 */                     var $str164 = new Sk.builtins['str']("Parsed Addition wasn't correct");
/*   880 */                     throw new Sk.builtin.AssertionError($str164);
/*   881 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   882 */                 case 23:
/*   883 */                     /* --- end --- */
/*   884 */                     //
/*   885 */                     // line 13:
/*   886 */                     // print("lineno", addition.body[0].lineno)
/*   887 */                     // ^
/*   888 */                     //
/*   889 */                     Sk.currLineNo = 13;
/*   890 */                     Sk.currColNo = 0;
/*   891 */ 
/*   892 */ 
/*   893 */                     Sk.currFilename = 'test/test_ast.py';
/*   894 */ 
/*   895 */ 
/*   896 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   897 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*   898 */                     }
/*   899 */                     $currLineNo = 13;
/*   900 */                     $currColNo = 0;
/*   901 */ 
/*   902 */                     var $loadname165 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*   903 */                     var $str166 = new Sk.builtins['str']('lineno');
/*   904 */                     var $loadname167 = $loc.addition !== undefined ? $loc.addition : Sk.misceval.loadname('addition', $gbl);;
/*   905 */                     $ret = Sk.abstr.gattr($loadname167, 'body', true);
/*   906 */                     $blk = 24; /* allowing case fallthrough */
/*   907 */                 case 24:
/*   908 */                     /* --- function return or resume suspension --- */
/*   909 */                     if ($ret && $ret.$isSuspension) {
/*   910 */                         return $saveSuspension($ret, 'test/test_ast.py', 13, 16);
/*   911 */                     }
/*   912 */                     var $lattr168 = $ret;
/*   913 */                     $ret = Sk.abstr.objectGetItem($lattr168, new Sk.builtin.int_(0), true);
/*   914 */                     $blk = 25; /* allowing case fallthrough */
/*   915 */                 case 25:
/*   916 */                     /* --- function return or resume suspension --- */
/*   917 */                     if ($ret && $ret.$isSuspension) {
/*   918 */                         return $saveSuspension($ret, 'test/test_ast.py', $currLineNo, $currColNo);
/*   919 */                     }
/*   920 */                     var $lsubscr169 = $ret;
/*   921 */                     $ret = Sk.abstr.gattr($lsubscr169, 'lineno', true);
/*   922 */                     $blk = 26; /* allowing case fallthrough */
/*   923 */                 case 26:
/*   924 */                     /* --- function return or resume suspension --- */
/*   925 */                     if ($ret && $ret.$isSuspension) {
/*   926 */                         return $saveSuspension($ret, 'test/test_ast.py', 13, 16);
/*   927 */                     }
/*   928 */                     var $lattr170 = $ret;
/*   929 */                     $ret;
/*   930 */                     $ret = Sk.misceval.callsimOrSuspend($loadname165, $str166, $lattr170);
/*   931 */                     $blk = 27; /* allowing case fallthrough */
/*   932 */                 case 27:
/*   933 */                     /* --- function return or resume suspension --- */
/*   934 */                     if ($ret && $ret.$isSuspension) {
/*   935 */                         return $saveSuspension($ret, 'test/test_ast.py', 13, 0);
/*   936 */                     }
/*   937 */                     var $call171 = $ret;
/*   938 */                     //
/*   939 */                     // line 13:
/*   940 */                     // print("lineno", addition.body[0].lineno)
/*   941 */                     // ^
/*   942 */                     //
/*   943 */                     Sk.currLineNo = 13;
/*   944 */                     Sk.currColNo = 0;
/*   945 */ 
/*   946 */ 
/*   947 */                     Sk.currFilename = 'test/test_ast.py';
/*   948 */ 
/*   949 */                     $currLineNo = 13;
/*   950 */                     $currColNo = 0;
/*   951 */ 
/*   952 */ 
/*   953 */                     //
/*   954 */                     // line 14:
/*   955 */                     // assert addition.body[0].lineno == 1, "Addition's lineno was not 1"
/*   956 */                     // ^
/*   957 */                     //
/*   958 */                     Sk.currLineNo = 14;
/*   959 */                     Sk.currColNo = 0;
/*   960 */ 
/*   961 */ 
/*   962 */                     Sk.currFilename = 'test/test_ast.py';
/*   963 */ 
/*   964 */ 
/*   965 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   966 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*   967 */                     }
/*   968 */                     $currLineNo = 14;
/*   969 */                     $currColNo = 0;
/*   970 */ 
/*   971 */                     var $loadname172 = $loc.addition !== undefined ? $loc.addition : Sk.misceval.loadname('addition', $gbl);;
/*   972 */                     $ret = Sk.abstr.gattr($loadname172, 'body', true);
/*   973 */                     $blk = 28; /* allowing case fallthrough */
/*   974 */                 case 28:
/*   975 */                     /* --- function return or resume suspension --- */
/*   976 */                     if ($ret && $ret.$isSuspension) {
/*   977 */                         return $saveSuspension($ret, 'test/test_ast.py', 14, 7);
/*   978 */                     }
/*   979 */                     var $lattr173 = $ret;
/*   980 */                     $ret = Sk.abstr.objectGetItem($lattr173, new Sk.builtin.int_(0), true);
/*   981 */                     $blk = 29; /* allowing case fallthrough */
/*   982 */                 case 29:
/*   983 */                     /* --- function return or resume suspension --- */
/*   984 */                     if ($ret && $ret.$isSuspension) {
/*   985 */                         return $saveSuspension($ret, 'test/test_ast.py', $currLineNo, $currColNo);
/*   986 */                     }
/*   987 */                     var $lsubscr174 = $ret;
/*   988 */                     $ret = Sk.abstr.gattr($lsubscr174, 'lineno', true);
/*   989 */                     $blk = 30; /* allowing case fallthrough */
/*   990 */                 case 30:
/*   991 */                     /* --- function return or resume suspension --- */
/*   992 */                     if ($ret && $ret.$isSuspension) {
/*   993 */                         return $saveSuspension($ret, 'test/test_ast.py', 14, 7);
/*   994 */                     }
/*   995 */                     var $lattr175 = $ret;
/*   996 */                     var $compareres176 = null;
/*   997 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr175, new Sk.builtin.int_(1), 'Eq', true));
/*   998 */                     $blk = 32; /* allowing case fallthrough */
/*   999 */                 case 32:
/*  1000 */                     /* --- function return or resume suspension --- */
/*  1001 */                     if ($ret && $ret.$isSuspension) {
/*  1002 */                         return $saveSuspension($ret, 'test/test_ast.py', 14, 7);
/*  1003 */                     }
/*  1004 */                     $compareres176 = $ret;
/*  1005 */                     var $jfalse177 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1006 */                     if ($jfalse177) { /*test failed */
/*  1007 */                         $blk = 31;
/*  1008 */                         continue;
/*  1009 */                     }
/*  1010 */                     $blk = 31; /* allowing case fallthrough */
/*  1011 */                 case 31:
/*  1012 */                     /* --- done --- */
/*  1013 */                     var $jtrue178 = ($compareres176 === true || Sk.misceval.isTrue($compareres176));
/*  1014 */                     if ($jtrue178) { /*test passed */
/*  1015 */                         $blk = 33;
/*  1016 */                         continue;
/*  1017 */                     }
/*  1018 */                     var $str179 = new Sk.builtins['str']("Addition's lineno was not 1");
/*  1019 */                     throw new Sk.builtin.AssertionError($str179);
/*  1020 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1021 */                 case 33:
/*  1022 */                     /* --- end --- */
/*  1023 */                     //
/*  1024 */                     // line 15:
/*  1025 */                     // assert addition.body[0].col_offset == 0, "Addition's col_offset was not 0"
/*  1026 */                     // ^
/*  1027 */                     //
/*  1028 */                     Sk.currLineNo = 15;
/*  1029 */                     Sk.currColNo = 0;
/*  1030 */ 
/*  1031 */ 
/*  1032 */                     Sk.currFilename = 'test/test_ast.py';
/*  1033 */ 
/*  1034 */ 
/*  1035 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1036 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1037 */                     }
/*  1038 */                     $currLineNo = 15;
/*  1039 */                     $currColNo = 0;
/*  1040 */ 
/*  1041 */                     var $loadname180 = $loc.addition !== undefined ? $loc.addition : Sk.misceval.loadname('addition', $gbl);;
/*  1042 */                     $ret = Sk.abstr.gattr($loadname180, 'body', true);
/*  1043 */                     $blk = 34; /* allowing case fallthrough */
/*  1044 */                 case 34:
/*  1045 */                     /* --- function return or resume suspension --- */
/*  1046 */                     if ($ret && $ret.$isSuspension) {
/*  1047 */                         return $saveSuspension($ret, 'test/test_ast.py', 15, 7);
/*  1048 */                     }
/*  1049 */                     var $lattr181 = $ret;
/*  1050 */                     $ret = Sk.abstr.objectGetItem($lattr181, new Sk.builtin.int_(0), true);
/*  1051 */                     $blk = 35; /* allowing case fallthrough */
/*  1052 */                 case 35:
/*  1053 */                     /* --- function return or resume suspension --- */
/*  1054 */                     if ($ret && $ret.$isSuspension) {
/*  1055 */                         return $saveSuspension($ret, 'test/test_ast.py', $currLineNo, $currColNo);
/*  1056 */                     }
/*  1057 */                     var $lsubscr182 = $ret;
/*  1058 */                     $ret = Sk.abstr.gattr($lsubscr182, 'col_offset', true);
/*  1059 */                     $blk = 36; /* allowing case fallthrough */
/*  1060 */                 case 36:
/*  1061 */                     /* --- function return or resume suspension --- */
/*  1062 */                     if ($ret && $ret.$isSuspension) {
/*  1063 */                         return $saveSuspension($ret, 'test/test_ast.py', 15, 7);
/*  1064 */                     }
/*  1065 */                     var $lattr183 = $ret;
/*  1066 */                     var $compareres184 = null;
/*  1067 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr183, new Sk.builtin.int_(0), 'Eq', true));
/*  1068 */                     $blk = 38; /* allowing case fallthrough */
/*  1069 */                 case 38:
/*  1070 */                     /* --- function return or resume suspension --- */
/*  1071 */                     if ($ret && $ret.$isSuspension) {
/*  1072 */                         return $saveSuspension($ret, 'test/test_ast.py', 15, 7);
/*  1073 */                     }
/*  1074 */                     $compareres184 = $ret;
/*  1075 */                     var $jfalse185 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1076 */                     if ($jfalse185) { /*test failed */
/*  1077 */                         $blk = 37;
/*  1078 */                         continue;
/*  1079 */                     }
/*  1080 */                     $blk = 37; /* allowing case fallthrough */
/*  1081 */                 case 37:
/*  1082 */                     /* --- done --- */
/*  1083 */                     var $jtrue186 = ($compareres184 === true || Sk.misceval.isTrue($compareres184));
/*  1084 */                     if ($jtrue186) { /*test passed */
/*  1085 */                         $blk = 39;
/*  1086 */                         continue;
/*  1087 */                     }
/*  1088 */                     var $str187 = new Sk.builtins['str']("Addition's col_offset was not 0");
/*  1089 */                     throw new Sk.builtin.AssertionError($str187);
/*  1090 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1091 */                 case 39:
/*  1092 */                     /* --- end --- */
/*  1093 */                     //
/*  1094 */                     // line 16:
/*  1095 */                     // assert addition.body[0].col_endoffset == 1, "Addition's col_endoffset was not 1"
/*  1096 */                     // ^
/*  1097 */                     //
/*  1098 */                     Sk.currLineNo = 16;
/*  1099 */                     Sk.currColNo = 0;
/*  1100 */ 
/*  1101 */ 
/*  1102 */                     Sk.currFilename = 'test/test_ast.py';
/*  1103 */ 
/*  1104 */ 
/*  1105 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1106 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1107 */                     }
/*  1108 */                     $currLineNo = 16;
/*  1109 */                     $currColNo = 0;
/*  1110 */ 
/*  1111 */                     var $loadname188 = $loc.addition !== undefined ? $loc.addition : Sk.misceval.loadname('addition', $gbl);;
/*  1112 */                     $ret = Sk.abstr.gattr($loadname188, 'body', true);
/*  1113 */                     $blk = 40; /* allowing case fallthrough */
/*  1114 */                 case 40:
/*  1115 */                     /* --- function return or resume suspension --- */
/*  1116 */                     if ($ret && $ret.$isSuspension) {
/*  1117 */                         return $saveSuspension($ret, 'test/test_ast.py', 16, 7);
/*  1118 */                     }
/*  1119 */                     var $lattr189 = $ret;
/*  1120 */                     $ret = Sk.abstr.objectGetItem($lattr189, new Sk.builtin.int_(0), true);
/*  1121 */                     $blk = 41; /* allowing case fallthrough */
/*  1122 */                 case 41:
/*  1123 */                     /* --- function return or resume suspension --- */
/*  1124 */                     if ($ret && $ret.$isSuspension) {
/*  1125 */                         return $saveSuspension($ret, 'test/test_ast.py', $currLineNo, $currColNo);
/*  1126 */                     }
/*  1127 */                     var $lsubscr190 = $ret;
/*  1128 */                     $ret = Sk.abstr.gattr($lsubscr190, 'col_endoffset', true);
/*  1129 */                     $blk = 42; /* allowing case fallthrough */
/*  1130 */                 case 42:
/*  1131 */                     /* --- function return or resume suspension --- */
/*  1132 */                     if ($ret && $ret.$isSuspension) {
/*  1133 */                         return $saveSuspension($ret, 'test/test_ast.py', 16, 7);
/*  1134 */                     }
/*  1135 */                     var $lattr191 = $ret;
/*  1136 */                     var $compareres192 = null;
/*  1137 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr191, new Sk.builtin.int_(1), 'Eq', true));
/*  1138 */                     $blk = 44; /* allowing case fallthrough */
/*  1139 */                 case 44:
/*  1140 */                     /* --- function return or resume suspension --- */
/*  1141 */                     if ($ret && $ret.$isSuspension) {
/*  1142 */                         return $saveSuspension($ret, 'test/test_ast.py', 16, 7);
/*  1143 */                     }
/*  1144 */                     $compareres192 = $ret;
/*  1145 */                     var $jfalse193 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1146 */                     if ($jfalse193) { /*test failed */
/*  1147 */                         $blk = 43;
/*  1148 */                         continue;
/*  1149 */                     }
/*  1150 */                     $blk = 43; /* allowing case fallthrough */
/*  1151 */                 case 43:
/*  1152 */                     /* --- done --- */
/*  1153 */                     var $jtrue194 = ($compareres192 === true || Sk.misceval.isTrue($compareres192));
/*  1154 */                     if ($jtrue194) { /*test passed */
/*  1155 */                         $blk = 45;
/*  1156 */                         continue;
/*  1157 */                     }
/*  1158 */                     var $str195 = new Sk.builtins['str']("Addition's col_endoffset was not 1");
/*  1159 */                     throw new Sk.builtin.AssertionError($str195);
/*  1160 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1161 */                 case 45:
/*  1162 */                     /* --- end --- */
/*  1163 */                     //
/*  1164 */                     // line 17:
/*  1165 */                     // assert addition.body[0].endlineno == 1, "Addition's endlineno was not 1"
/*  1166 */                     // ^
/*  1167 */                     //
/*  1168 */                     Sk.currLineNo = 17;
/*  1169 */                     Sk.currColNo = 0;
/*  1170 */ 
/*  1171 */ 
/*  1172 */                     Sk.currFilename = 'test/test_ast.py';
/*  1173 */ 
/*  1174 */ 
/*  1175 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1176 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1177 */                     }
/*  1178 */                     $currLineNo = 17;
/*  1179 */                     $currColNo = 0;
/*  1180 */ 
/*  1181 */                     var $loadname196 = $loc.addition !== undefined ? $loc.addition : Sk.misceval.loadname('addition', $gbl);;
/*  1182 */                     $ret = Sk.abstr.gattr($loadname196, 'body', true);
/*  1183 */                     $blk = 46; /* allowing case fallthrough */
/*  1184 */                 case 46:
/*  1185 */                     /* --- function return or resume suspension --- */
/*  1186 */                     if ($ret && $ret.$isSuspension) {
/*  1187 */                         return $saveSuspension($ret, 'test/test_ast.py', 17, 7);
/*  1188 */                     }
/*  1189 */                     var $lattr197 = $ret;
/*  1190 */                     $ret = Sk.abstr.objectGetItem($lattr197, new Sk.builtin.int_(0), true);
/*  1191 */                     $blk = 47; /* allowing case fallthrough */
/*  1192 */                 case 47:
/*  1193 */                     /* --- function return or resume suspension --- */
/*  1194 */                     if ($ret && $ret.$isSuspension) {
/*  1195 */                         return $saveSuspension($ret, 'test/test_ast.py', $currLineNo, $currColNo);
/*  1196 */                     }
/*  1197 */                     var $lsubscr198 = $ret;
/*  1198 */                     $ret = Sk.abstr.gattr($lsubscr198, 'endlineno', true);
/*  1199 */                     $blk = 48; /* allowing case fallthrough */
/*  1200 */                 case 48:
/*  1201 */                     /* --- function return or resume suspension --- */
/*  1202 */                     if ($ret && $ret.$isSuspension) {
/*  1203 */                         return $saveSuspension($ret, 'test/test_ast.py', 17, 7);
/*  1204 */                     }
/*  1205 */                     var $lattr199 = $ret;
/*  1206 */                     var $compareres200 = null;
/*  1207 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr199, new Sk.builtin.int_(1), 'Eq', true));
/*  1208 */                     $blk = 50; /* allowing case fallthrough */
/*  1209 */                 case 50:
/*  1210 */                     /* --- function return or resume suspension --- */
/*  1211 */                     if ($ret && $ret.$isSuspension) {
/*  1212 */                         return $saveSuspension($ret, 'test/test_ast.py', 17, 7);
/*  1213 */                     }
/*  1214 */                     $compareres200 = $ret;
/*  1215 */                     var $jfalse201 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1216 */                     if ($jfalse201) { /*test failed */
/*  1217 */                         $blk = 49;
/*  1218 */                         continue;
/*  1219 */                     }
/*  1220 */                     $blk = 49; /* allowing case fallthrough */
/*  1221 */                 case 49:
/*  1222 */                     /* --- done --- */
/*  1223 */                     var $jtrue202 = ($compareres200 === true || Sk.misceval.isTrue($compareres200));
/*  1224 */                     if ($jtrue202) { /*test passed */
/*  1225 */                         $blk = 51;
/*  1226 */                         continue;
/*  1227 */                     }
/*  1228 */                     var $str203 = new Sk.builtins['str']("Addition's endlineno was not 1");
/*  1229 */                     throw new Sk.builtin.AssertionError($str203);
/*  1230 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1231 */                 case 51:
/*  1232 */                     /* --- end --- */
/*  1233 */                     //
/*  1234 */                     // line 19:
/*  1235 */                     // print("1 + 2")
/*  1236 */                     // ^
/*  1237 */                     //
/*  1238 */                     Sk.currLineNo = 19;
/*  1239 */                     Sk.currColNo = 0;
/*  1240 */ 
/*  1241 */ 
/*  1242 */                     Sk.currFilename = 'test/test_ast.py';
/*  1243 */ 
/*  1244 */ 
/*  1245 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1246 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1247 */                     }
/*  1248 */                     $currLineNo = 19;
/*  1249 */                     $currColNo = 0;
/*  1250 */ 
/*  1251 */                     var $loadname204 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*  1252 */                     var $str205 = new Sk.builtins['str']('1 + 2');
/*  1253 */                     $ret;
/*  1254 */                     $ret = Sk.misceval.callsimOrSuspend($loadname204, $str205);
/*  1255 */                     $blk = 52; /* allowing case fallthrough */
/*  1256 */                 case 52:
/*  1257 */                     /* --- function return or resume suspension --- */
/*  1258 */                     if ($ret && $ret.$isSuspension) {
/*  1259 */                         return $saveSuspension($ret, 'test/test_ast.py', 19, 0);
/*  1260 */                     }
/*  1261 */                     var $call206 = $ret;
/*  1262 */                     //
/*  1263 */                     // line 19:
/*  1264 */                     // print("1 + 2")
/*  1265 */                     // ^
/*  1266 */                     //
/*  1267 */                     Sk.currLineNo = 19;
/*  1268 */                     Sk.currColNo = 0;
/*  1269 */ 
/*  1270 */ 
/*  1271 */                     Sk.currFilename = 'test/test_ast.py';
/*  1272 */ 
/*  1273 */                     $currLineNo = 19;
/*  1274 */                     $currColNo = 0;
/*  1275 */ 
/*  1276 */ 
/*  1277 */                     //
/*  1278 */                     // line 22:
/*  1279 */                     // FOR_CODE = "for x in y:\n    a = 0"
/*  1280 */                     // ^
/*  1281 */                     //
/*  1282 */                     Sk.currLineNo = 22;
/*  1283 */                     Sk.currColNo = 0;
/*  1284 */ 
/*  1285 */ 
/*  1286 */                     Sk.currFilename = 'test/test_ast.py';
/*  1287 */ 
/*  1288 */ 
/*  1289 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1290 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1291 */                     }
/*  1292 */                     $currLineNo = 22;
/*  1293 */                     $currColNo = 0;
/*  1294 */ 
/*  1295 */                     var $str207 = new Sk.builtins['str']('for x in y:\n    a = 0');
/*  1296 */                     $loc.FOR_CODE = $str207;
/*  1297 */                     //
/*  1298 */                     // line 23:
/*  1299 */                     // for_loop = ast.parse(FOR_CODE)
/*  1300 */                     // ^
/*  1301 */                     //
/*  1302 */                     Sk.currLineNo = 23;
/*  1303 */                     Sk.currColNo = 0;
/*  1304 */ 
/*  1305 */ 
/*  1306 */                     Sk.currFilename = 'test/test_ast.py';
/*  1307 */ 
/*  1308 */ 
/*  1309 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1310 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1311 */                     }
/*  1312 */                     $currLineNo = 23;
/*  1313 */                     $currColNo = 0;
/*  1314 */ 
/*  1315 */                     var $loadname208 = $loc.ast !== undefined ? $loc.ast : Sk.misceval.loadname('ast', $gbl);;
/*  1316 */                     $ret = Sk.abstr.gattr($loadname208, 'parse', true);
/*  1317 */                     $blk = 53; /* allowing case fallthrough */
/*  1318 */                 case 53:
/*  1319 */                     /* --- function return or resume suspension --- */
/*  1320 */                     if ($ret && $ret.$isSuspension) {
/*  1321 */                         return $saveSuspension($ret, 'test/test_ast.py', 23, 11);
/*  1322 */                     }
/*  1323 */                     var $lattr209 = $ret;
/*  1324 */                     var $loadname210 = $loc.FOR_CODE !== undefined ? $loc.FOR_CODE : Sk.misceval.loadname('FOR_CODE', $gbl);;
/*  1325 */                     $ret;
/*  1326 */                     $ret = Sk.misceval.callsimOrSuspend($lattr209, $loadname210);
/*  1327 */                     $blk = 54; /* allowing case fallthrough */
/*  1328 */                 case 54:
/*  1329 */                     /* --- function return or resume suspension --- */
/*  1330 */                     if ($ret && $ret.$isSuspension) {
/*  1331 */                         return $saveSuspension($ret, 'test/test_ast.py', 23, 11);
/*  1332 */                     }
/*  1333 */                     var $call211 = $ret;
/*  1334 */                     //
/*  1335 */                     // line 23:
/*  1336 */                     // for_loop = ast.parse(FOR_CODE)
/*  1337 */                     //            ^
/*  1338 */                     //
/*  1339 */                     Sk.currLineNo = 23;
/*  1340 */                     Sk.currColNo = 11;
/*  1341 */ 
/*  1342 */ 
/*  1343 */                     Sk.currFilename = 'test/test_ast.py';
/*  1344 */ 
/*  1345 */                     $currLineNo = 23;
/*  1346 */                     $currColNo = 11;
/*  1347 */ 
/*  1348 */                     $loc.for_loop = $call211;
/*  1349 */                     //
/*  1350 */                     // line 24:
/*  1351 */                     // print("*"*20)
/*  1352 */                     // ^
/*  1353 */                     //
/*  1354 */                     Sk.currLineNo = 24;
/*  1355 */                     Sk.currColNo = 0;
/*  1356 */ 
/*  1357 */ 
/*  1358 */                     Sk.currFilename = 'test/test_ast.py';
/*  1359 */ 
/*  1360 */ 
/*  1361 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1362 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1363 */                     }
/*  1364 */                     $currLineNo = 24;
/*  1365 */                     $currColNo = 0;
/*  1366 */ 
/*  1367 */                     var $loadname212 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*  1368 */                     var $str213 = new Sk.builtins['str']('*');
/*  1369 */                     var $binop214 = Sk.abstr.numberBinOp($str213, new Sk.builtin.int_(20), 'Mult');
/*  1370 */                     $ret;
/*  1371 */                     $ret = Sk.misceval.callsimOrSuspend($loadname212, $binop214);
/*  1372 */                     $blk = 55; /* allowing case fallthrough */
/*  1373 */                 case 55:
/*  1374 */                     /* --- function return or resume suspension --- */
/*  1375 */                     if ($ret && $ret.$isSuspension) {
/*  1376 */                         return $saveSuspension($ret, 'test/test_ast.py', 24, 0);
/*  1377 */                     }
/*  1378 */                     var $call215 = $ret;
/*  1379 */                     //
/*  1380 */                     // line 24:
/*  1381 */                     // print("*"*20)
/*  1382 */                     // ^
/*  1383 */                     //
/*  1384 */                     Sk.currLineNo = 24;
/*  1385 */                     Sk.currColNo = 0;
/*  1386 */ 
/*  1387 */ 
/*  1388 */                     Sk.currFilename = 'test/test_ast.py';
/*  1389 */ 
/*  1390 */                     $currLineNo = 24;
/*  1391 */                     $currColNo = 0;
/*  1392 */ 
/*  1393 */ 
/*  1394 */                     //
/*  1395 */                     // line 25:
/*  1396 */                     // print(FOR_CODE)
/*  1397 */                     // ^
/*  1398 */                     //
/*  1399 */                     Sk.currLineNo = 25;
/*  1400 */                     Sk.currColNo = 0;
/*  1401 */ 
/*  1402 */ 
/*  1403 */                     Sk.currFilename = 'test/test_ast.py';
/*  1404 */ 
/*  1405 */ 
/*  1406 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1407 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1408 */                     }
/*  1409 */                     $currLineNo = 25;
/*  1410 */                     $currColNo = 0;
/*  1411 */ 
/*  1412 */                     var $loadname216 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*  1413 */                     var $loadname217 = $loc.FOR_CODE !== undefined ? $loc.FOR_CODE : Sk.misceval.loadname('FOR_CODE', $gbl);;
/*  1414 */                     $ret;
/*  1415 */                     $ret = Sk.misceval.callsimOrSuspend($loadname216, $loadname217);
/*  1416 */                     $blk = 56; /* allowing case fallthrough */
/*  1417 */                 case 56:
/*  1418 */                     /* --- function return or resume suspension --- */
/*  1419 */                     if ($ret && $ret.$isSuspension) {
/*  1420 */                         return $saveSuspension($ret, 'test/test_ast.py', 25, 0);
/*  1421 */                     }
/*  1422 */                     var $call218 = $ret;
/*  1423 */                     //
/*  1424 */                     // line 25:
/*  1425 */                     // print(FOR_CODE)
/*  1426 */                     // ^
/*  1427 */                     //
/*  1428 */                     Sk.currLineNo = 25;
/*  1429 */                     Sk.currColNo = 0;
/*  1430 */ 
/*  1431 */ 
/*  1432 */                     Sk.currFilename = 'test/test_ast.py';
/*  1433 */ 
/*  1434 */                     $currLineNo = 25;
/*  1435 */                     $currColNo = 0;
/*  1436 */ 
/*  1437 */ 
/*  1438 */                     //
/*  1439 */                     // line 26:
/*  1440 */                     // print("FOR", for_loop, "should be Module")
/*  1441 */                     // ^
/*  1442 */                     //
/*  1443 */                     Sk.currLineNo = 26;
/*  1444 */                     Sk.currColNo = 0;
/*  1445 */ 
/*  1446 */ 
/*  1447 */                     Sk.currFilename = 'test/test_ast.py';
/*  1448 */ 
/*  1449 */ 
/*  1450 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1451 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1452 */                     }
/*  1453 */                     $currLineNo = 26;
/*  1454 */                     $currColNo = 0;
/*  1455 */ 
/*  1456 */                     var $loadname219 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*  1457 */                     var $str220 = new Sk.builtins['str']('FOR');
/*  1458 */                     var $loadname221 = $loc.for_loop !== undefined ? $loc.for_loop : Sk.misceval.loadname('for_loop', $gbl);;
/*  1459 */                     var $str222 = new Sk.builtins['str']('should be Module');
/*  1460 */                     $ret;
/*  1461 */                     $ret = Sk.misceval.callsimOrSuspend($loadname219, $str220, $loadname221, $str222);
/*  1462 */                     $blk = 57; /* allowing case fallthrough */
/*  1463 */                 case 57:
/*  1464 */                     /* --- function return or resume suspension --- */
/*  1465 */                     if ($ret && $ret.$isSuspension) {
/*  1466 */                         return $saveSuspension($ret, 'test/test_ast.py', 26, 0);
/*  1467 */                     }
/*  1468 */                     var $call223 = $ret;
/*  1469 */                     //
/*  1470 */                     // line 26:
/*  1471 */                     // print("FOR", for_loop, "should be Module")
/*  1472 */                     // ^
/*  1473 */                     //
/*  1474 */                     Sk.currLineNo = 26;
/*  1475 */                     Sk.currColNo = 0;
/*  1476 */ 
/*  1477 */ 
/*  1478 */                     Sk.currFilename = 'test/test_ast.py';
/*  1479 */ 
/*  1480 */                     $currLineNo = 26;
/*  1481 */                     $currColNo = 0;
/*  1482 */ 
/*  1483 */ 
/*  1484 */                     //
/*  1485 */                     // line 27:
/*  1486 */                     // print("FOR", for_loop.body[0], "should be For")
/*  1487 */                     // ^
/*  1488 */                     //
/*  1489 */                     Sk.currLineNo = 27;
/*  1490 */                     Sk.currColNo = 0;
/*  1491 */ 
/*  1492 */ 
/*  1493 */                     Sk.currFilename = 'test/test_ast.py';
/*  1494 */ 
/*  1495 */ 
/*  1496 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1497 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1498 */                     }
/*  1499 */                     $currLineNo = 27;
/*  1500 */                     $currColNo = 0;
/*  1501 */ 
/*  1502 */                     var $loadname224 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*  1503 */                     var $str225 = new Sk.builtins['str']('FOR');
/*  1504 */                     var $loadname226 = $loc.for_loop !== undefined ? $loc.for_loop : Sk.misceval.loadname('for_loop', $gbl);;
/*  1505 */                     $ret = Sk.abstr.gattr($loadname226, 'body', true);
/*  1506 */                     $blk = 58; /* allowing case fallthrough */
/*  1507 */                 case 58:
/*  1508 */                     /* --- function return or resume suspension --- */
/*  1509 */                     if ($ret && $ret.$isSuspension) {
/*  1510 */                         return $saveSuspension($ret, 'test/test_ast.py', 27, 13);
/*  1511 */                     }
/*  1512 */                     var $lattr227 = $ret;
/*  1513 */                     $ret = Sk.abstr.objectGetItem($lattr227, new Sk.builtin.int_(0), true);
/*  1514 */                     $blk = 59; /* allowing case fallthrough */
/*  1515 */                 case 59:
/*  1516 */                     /* --- function return or resume suspension --- */
/*  1517 */                     if ($ret && $ret.$isSuspension) {
/*  1518 */                         return $saveSuspension($ret, 'test/test_ast.py', $currLineNo, $currColNo);
/*  1519 */                     }
/*  1520 */                     var $lsubscr228 = $ret;
/*  1521 */                     var $str229 = new Sk.builtins['str']('should be For');
/*  1522 */                     $ret;
/*  1523 */                     $ret = Sk.misceval.callsimOrSuspend($loadname224, $str225, $lsubscr228, $str229);
/*  1524 */                     $blk = 60; /* allowing case fallthrough */
/*  1525 */                 case 60:
/*  1526 */                     /* --- function return or resume suspension --- */
/*  1527 */                     if ($ret && $ret.$isSuspension) {
/*  1528 */                         return $saveSuspension($ret, 'test/test_ast.py', 27, 0);
/*  1529 */                     }
/*  1530 */                     var $call230 = $ret;
/*  1531 */                     //
/*  1532 */                     // line 27:
/*  1533 */                     // print("FOR", for_loop.body[0], "should be For")
/*  1534 */                     // ^
/*  1535 */                     //
/*  1536 */                     Sk.currLineNo = 27;
/*  1537 */                     Sk.currColNo = 0;
/*  1538 */ 
/*  1539 */ 
/*  1540 */                     Sk.currFilename = 'test/test_ast.py';
/*  1541 */ 
/*  1542 */                     $currLineNo = 27;
/*  1543 */                     $currColNo = 0;
/*  1544 */ 
/*  1545 */ 
/*  1546 */                     //
/*  1547 */                     // line 28:
/*  1548 */                     // print("FOR", for_loop.body[0].body[0], "should be Assign")
/*  1549 */                     // ^
/*  1550 */                     //
/*  1551 */                     Sk.currLineNo = 28;
/*  1552 */                     Sk.currColNo = 0;
/*  1553 */ 
/*  1554 */ 
/*  1555 */                     Sk.currFilename = 'test/test_ast.py';
/*  1556 */ 
/*  1557 */ 
/*  1558 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1559 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1560 */                     }
/*  1561 */                     $currLineNo = 28;
/*  1562 */                     $currColNo = 0;
/*  1563 */ 
/*  1564 */                     var $loadname231 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*  1565 */                     var $str232 = new Sk.builtins['str']('FOR');
/*  1566 */                     var $loadname233 = $loc.for_loop !== undefined ? $loc.for_loop : Sk.misceval.loadname('for_loop', $gbl);;
/*  1567 */                     $ret = Sk.abstr.gattr($loadname233, 'body', true);
/*  1568 */                     $blk = 61; /* allowing case fallthrough */
/*  1569 */                 case 61:
/*  1570 */                     /* --- function return or resume suspension --- */
/*  1571 */                     if ($ret && $ret.$isSuspension) {
/*  1572 */                         return $saveSuspension($ret, 'test/test_ast.py', 28, 13);
/*  1573 */                     }
/*  1574 */                     var $lattr234 = $ret;
/*  1575 */                     $ret = Sk.abstr.objectGetItem($lattr234, new Sk.builtin.int_(0), true);
/*  1576 */                     $blk = 62; /* allowing case fallthrough */
/*  1577 */                 case 62:
/*  1578 */                     /* --- function return or resume suspension --- */
/*  1579 */                     if ($ret && $ret.$isSuspension) {
/*  1580 */                         return $saveSuspension($ret, 'test/test_ast.py', $currLineNo, $currColNo);
/*  1581 */                     }
/*  1582 */                     var $lsubscr235 = $ret;
/*  1583 */                     $ret = Sk.abstr.gattr($lsubscr235, 'body', true);
/*  1584 */                     $blk = 63; /* allowing case fallthrough */
/*  1585 */                 case 63:
/*  1586 */                     /* --- function return or resume suspension --- */
/*  1587 */                     if ($ret && $ret.$isSuspension) {
/*  1588 */                         return $saveSuspension($ret, 'test/test_ast.py', 28, 13);
/*  1589 */                     }
/*  1590 */                     var $lattr236 = $ret;
/*  1591 */                     $ret = Sk.abstr.objectGetItem($lattr236, new Sk.builtin.int_(0), true);
/*  1592 */                     $blk = 64; /* allowing case fallthrough */
/*  1593 */                 case 64:
/*  1594 */                     /* --- function return or resume suspension --- */
/*  1595 */                     if ($ret && $ret.$isSuspension) {
/*  1596 */                         return $saveSuspension($ret, 'test/test_ast.py', $currLineNo, $currColNo);
/*  1597 */                     }
/*  1598 */                     var $lsubscr237 = $ret;
/*  1599 */                     var $str238 = new Sk.builtins['str']('should be Assign');
/*  1600 */                     $ret;
/*  1601 */                     $ret = Sk.misceval.callsimOrSuspend($loadname231, $str232, $lsubscr237, $str238);
/*  1602 */                     $blk = 65; /* allowing case fallthrough */
/*  1603 */                 case 65:
/*  1604 */                     /* --- function return or resume suspension --- */
/*  1605 */                     if ($ret && $ret.$isSuspension) {
/*  1606 */                         return $saveSuspension($ret, 'test/test_ast.py', 28, 0);
/*  1607 */                     }
/*  1608 */                     var $call239 = $ret;
/*  1609 */                     //
/*  1610 */                     // line 28:
/*  1611 */                     // print("FOR", for_loop.body[0].body[0], "should be Assign")
/*  1612 */                     // ^
/*  1613 */                     //
/*  1614 */                     Sk.currLineNo = 28;
/*  1615 */                     Sk.currColNo = 0;
/*  1616 */ 
/*  1617 */ 
/*  1618 */                     Sk.currFilename = 'test/test_ast.py';
/*  1619 */ 
/*  1620 */                     $currLineNo = 28;
/*  1621 */                     $currColNo = 0;
/*  1622 */ 
/*  1623 */ 
/*  1624 */                     //
/*  1625 */                     // line 30:
/*  1626 */                     // print(ast.dump(for_loop))
/*  1627 */                     // ^
/*  1628 */                     //
/*  1629 */                     Sk.currLineNo = 30;
/*  1630 */                     Sk.currColNo = 0;
/*  1631 */ 
/*  1632 */ 
/*  1633 */                     Sk.currFilename = 'test/test_ast.py';
/*  1634 */ 
/*  1635 */ 
/*  1636 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1637 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1638 */                     }
/*  1639 */                     $currLineNo = 30;
/*  1640 */                     $currColNo = 0;
/*  1641 */ 
/*  1642 */                     var $loadname240 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*  1643 */                     var $loadname241 = $loc.ast !== undefined ? $loc.ast : Sk.misceval.loadname('ast', $gbl);;
/*  1644 */                     $ret = Sk.abstr.gattr($loadname241, 'dump', true);
/*  1645 */                     $blk = 66; /* allowing case fallthrough */
/*  1646 */                 case 66:
/*  1647 */                     /* --- function return or resume suspension --- */
/*  1648 */                     if ($ret && $ret.$isSuspension) {
/*  1649 */                         return $saveSuspension($ret, 'test/test_ast.py', 30, 6);
/*  1650 */                     }
/*  1651 */                     var $lattr242 = $ret;
/*  1652 */                     var $loadname243 = $loc.for_loop !== undefined ? $loc.for_loop : Sk.misceval.loadname('for_loop', $gbl);;
/*  1653 */                     $ret;
/*  1654 */                     $ret = Sk.misceval.callsimOrSuspend($lattr242, $loadname243);
/*  1655 */                     $blk = 67; /* allowing case fallthrough */
/*  1656 */                 case 67:
/*  1657 */                     /* --- function return or resume suspension --- */
/*  1658 */                     if ($ret && $ret.$isSuspension) {
/*  1659 */                         return $saveSuspension($ret, 'test/test_ast.py', 30, 6);
/*  1660 */                     }
/*  1661 */                     var $call244 = $ret;
/*  1662 */                     //
/*  1663 */                     // line 30:
/*  1664 */                     // print(ast.dump(for_loop))
/*  1665 */                     //       ^
/*  1666 */                     //
/*  1667 */                     Sk.currLineNo = 30;
/*  1668 */                     Sk.currColNo = 6;
/*  1669 */ 
/*  1670 */ 
/*  1671 */                     Sk.currFilename = 'test/test_ast.py';
/*  1672 */ 
/*  1673 */                     $currLineNo = 30;
/*  1674 */                     $currColNo = 6;
/*  1675 */ 
/*  1676 */                     $ret;
/*  1677 */                     $ret = Sk.misceval.callsimOrSuspend($loadname240, $call244);
/*  1678 */                     $blk = 68; /* allowing case fallthrough */
/*  1679 */                 case 68:
/*  1680 */                     /* --- function return or resume suspension --- */
/*  1681 */                     if ($ret && $ret.$isSuspension) {
/*  1682 */                         return $saveSuspension($ret, 'test/test_ast.py', 30, 0);
/*  1683 */                     }
/*  1684 */                     var $call245 = $ret;
/*  1685 */                     //
/*  1686 */                     // line 30:
/*  1687 */                     // print(ast.dump(for_loop))
/*  1688 */                     // ^
/*  1689 */                     //
/*  1690 */                     Sk.currLineNo = 30;
/*  1691 */                     Sk.currColNo = 0;
/*  1692 */ 
/*  1693 */ 
/*  1694 */                     Sk.currFilename = 'test/test_ast.py';
/*  1695 */ 
/*  1696 */                     $currLineNo = 30;
/*  1697 */                     $currColNo = 0;
/*  1698 */ 
/*  1699 */ 
/*  1700 */                     //
/*  1701 */                     // line 33:
/*  1702 */                     // multiline = ast.parse("""for x in y:
/*  1703 */                     // ^
/*  1704 */                     //
/*  1705 */                     Sk.currLineNo = 33;
/*  1706 */                     Sk.currColNo = 0;
/*  1707 */ 
/*  1708 */ 
/*  1709 */                     Sk.currFilename = 'test/test_ast.py';
/*  1710 */ 
/*  1711 */ 
/*  1712 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1713 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1714 */                     }
/*  1715 */                     $currLineNo = 33;
/*  1716 */                     $currColNo = 0;
/*  1717 */ 
/*  1718 */                     var $loadname246 = $loc.ast !== undefined ? $loc.ast : Sk.misceval.loadname('ast', $gbl);;
/*  1719 */                     $ret = Sk.abstr.gattr($loadname246, 'parse', true);
/*  1720 */                     $blk = 69; /* allowing case fallthrough */
/*  1721 */                 case 69:
/*  1722 */                     /* --- function return or resume suspension --- */
/*  1723 */                     if ($ret && $ret.$isSuspension) {
/*  1724 */                         return $saveSuspension($ret, 'test/test_ast.py', 33, 12);
/*  1725 */                     }
/*  1726 */                     var $lattr247 = $ret;
/*  1727 */                     var $str248 = new Sk.builtins['str']('for x in y:\n   a + 1 - 3\nif x:\n   try:\n       a = 7\n   except:\n       False\ndef T():\n    while Banana():\n        return 7\nclass X(basic):\n    def define(apple, banana):\n        this.__init__(7, 3, 4)\n\'\'\'HEY\'\'\' or (1 and 2)\nassert EXPLODE()\none += one\none -= one\none | one\na[0] += 100\n5 < 3\nnot True\ndel apple["Hearted"]\nimport garbage\n8 is 7\n');
/*  1728 */                     $ret;
/*  1729 */                     $ret = Sk.misceval.callsimOrSuspend($lattr247, $str248);
/*  1730 */                     $blk = 70; /* allowing case fallthrough */
/*  1731 */                 case 70:
/*  1732 */                     /* --- function return or resume suspension --- */
/*  1733 */                     if ($ret && $ret.$isSuspension) {
/*  1734 */                         return $saveSuspension($ret, 'test/test_ast.py', 33, 12);
/*  1735 */                     }
/*  1736 */                     var $call249 = $ret;
/*  1737 */                     //
/*  1738 */                     // line 33:
/*  1739 */                     // multiline = ast.parse("""for x in y:
/*  1740 */                     //             ^
/*  1741 */                     //
/*  1742 */                     Sk.currLineNo = 33;
/*  1743 */                     Sk.currColNo = 12;
/*  1744 */ 
/*  1745 */ 
/*  1746 */                     Sk.currFilename = 'test/test_ast.py';
/*  1747 */ 
/*  1748 */                     $currLineNo = 33;
/*  1749 */                     $currColNo = 12;
/*  1750 */ 
/*  1751 */                     $loc.multiline = $call249;
/*  1752 */                     //
/*  1753 */                     // line 59:
/*  1754 */                     // print("iter_fields:", ast.iter_fields(multiline.body[0]))
/*  1755 */                     // ^
/*  1756 */                     //
/*  1757 */                     Sk.currLineNo = 59;
/*  1758 */                     Sk.currColNo = 0;
/*  1759 */ 
/*  1760 */ 
/*  1761 */                     Sk.currFilename = 'test/test_ast.py';
/*  1762 */ 
/*  1763 */ 
/*  1764 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1765 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1766 */                     }
/*  1767 */                     $currLineNo = 59;
/*  1768 */                     $currColNo = 0;
/*  1769 */ 
/*  1770 */                     var $loadname250 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*  1771 */                     var $str251 = new Sk.builtins['str']('iter_fields:');
/*  1772 */                     var $loadname252 = $loc.ast !== undefined ? $loc.ast : Sk.misceval.loadname('ast', $gbl);;
/*  1773 */                     $ret = Sk.abstr.gattr($loadname252, 'iter_fields', true);
/*  1774 */                     $blk = 71; /* allowing case fallthrough */
/*  1775 */                 case 71:
/*  1776 */                     /* --- function return or resume suspension --- */
/*  1777 */                     if ($ret && $ret.$isSuspension) {
/*  1778 */                         return $saveSuspension($ret, 'test/test_ast.py', 59, 22);
/*  1779 */                     }
/*  1780 */                     var $lattr253 = $ret;
/*  1781 */                     var $loadname254 = $loc.multiline !== undefined ? $loc.multiline : Sk.misceval.loadname('multiline', $gbl);;
/*  1782 */                     $ret = Sk.abstr.gattr($loadname254, 'body', true);
/*  1783 */                     $blk = 72; /* allowing case fallthrough */
/*  1784 */                 case 72:
/*  1785 */                     /* --- function return or resume suspension --- */
/*  1786 */                     if ($ret && $ret.$isSuspension) {
/*  1787 */                         return $saveSuspension($ret, 'test/test_ast.py', 59, 38);
/*  1788 */                     }
/*  1789 */                     var $lattr255 = $ret;
/*  1790 */                     $ret = Sk.abstr.objectGetItem($lattr255, new Sk.builtin.int_(0), true);
/*  1791 */                     $blk = 73; /* allowing case fallthrough */
/*  1792 */                 case 73:
/*  1793 */                     /* --- function return or resume suspension --- */
/*  1794 */                     if ($ret && $ret.$isSuspension) {
/*  1795 */                         return $saveSuspension($ret, 'test/test_ast.py', $currLineNo, $currColNo);
/*  1796 */                     }
/*  1797 */                     var $lsubscr256 = $ret;
/*  1798 */                     $ret;
/*  1799 */                     $ret = Sk.misceval.callsimOrSuspend($lattr253, $lsubscr256);
/*  1800 */                     $blk = 74; /* allowing case fallthrough */
/*  1801 */                 case 74:
/*  1802 */                     /* --- function return or resume suspension --- */
/*  1803 */                     if ($ret && $ret.$isSuspension) {
/*  1804 */                         return $saveSuspension($ret, 'test/test_ast.py', 59, 22);
/*  1805 */                     }
/*  1806 */                     var $call257 = $ret;
/*  1807 */                     //
/*  1808 */                     // line 59:
/*  1809 */                     // print("iter_fields:", ast.iter_fields(multiline.body[0]))
/*  1810 */                     //                       ^
/*  1811 */                     //
/*  1812 */                     Sk.currLineNo = 59;
/*  1813 */                     Sk.currColNo = 22;
/*  1814 */ 
/*  1815 */ 
/*  1816 */                     Sk.currFilename = 'test/test_ast.py';
/*  1817 */ 
/*  1818 */                     $currLineNo = 59;
/*  1819 */                     $currColNo = 22;
/*  1820 */ 
/*  1821 */                     $ret;
/*  1822 */                     $ret = Sk.misceval.callsimOrSuspend($loadname250, $str251, $call257);
/*  1823 */                     $blk = 75; /* allowing case fallthrough */
/*  1824 */                 case 75:
/*  1825 */                     /* --- function return or resume suspension --- */
/*  1826 */                     if ($ret && $ret.$isSuspension) {
/*  1827 */                         return $saveSuspension($ret, 'test/test_ast.py', 59, 0);
/*  1828 */                     }
/*  1829 */                     var $call258 = $ret;
/*  1830 */                     //
/*  1831 */                     // line 59:
/*  1832 */                     // print("iter_fields:", ast.iter_fields(multiline.body[0]))
/*  1833 */                     // ^
/*  1834 */                     //
/*  1835 */                     Sk.currLineNo = 59;
/*  1836 */                     Sk.currColNo = 0;
/*  1837 */ 
/*  1838 */ 
/*  1839 */                     Sk.currFilename = 'test/test_ast.py';
/*  1840 */ 
/*  1841 */                     $currLineNo = 59;
/*  1842 */                     $currColNo = 0;
/*  1843 */ 
/*  1844 */ 
/*  1845 */                     //
/*  1846 */                     // line 61:
/*  1847 */                     // print("iter_child_nodes:", ast.iter_child_nodes(multiline))
/*  1848 */                     // ^
/*  1849 */                     //
/*  1850 */                     Sk.currLineNo = 61;
/*  1851 */                     Sk.currColNo = 0;
/*  1852 */ 
/*  1853 */ 
/*  1854 */                     Sk.currFilename = 'test/test_ast.py';
/*  1855 */ 
/*  1856 */ 
/*  1857 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1858 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1859 */                     }
/*  1860 */                     $currLineNo = 61;
/*  1861 */                     $currColNo = 0;
/*  1862 */ 
/*  1863 */                     var $loadname259 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*  1864 */                     var $str260 = new Sk.builtins['str']('iter_child_nodes:');
/*  1865 */                     var $loadname261 = $loc.ast !== undefined ? $loc.ast : Sk.misceval.loadname('ast', $gbl);;
/*  1866 */                     $ret = Sk.abstr.gattr($loadname261, 'iter_child_nodes', true);
/*  1867 */                     $blk = 76; /* allowing case fallthrough */
/*  1868 */                 case 76:
/*  1869 */                     /* --- function return or resume suspension --- */
/*  1870 */                     if ($ret && $ret.$isSuspension) {
/*  1871 */                         return $saveSuspension($ret, 'test/test_ast.py', 61, 27);
/*  1872 */                     }
/*  1873 */                     var $lattr262 = $ret;
/*  1874 */                     var $loadname263 = $loc.multiline !== undefined ? $loc.multiline : Sk.misceval.loadname('multiline', $gbl);;
/*  1875 */                     $ret;
/*  1876 */                     $ret = Sk.misceval.callsimOrSuspend($lattr262, $loadname263);
/*  1877 */                     $blk = 77; /* allowing case fallthrough */
/*  1878 */                 case 77:
/*  1879 */                     /* --- function return or resume suspension --- */
/*  1880 */                     if ($ret && $ret.$isSuspension) {
/*  1881 */                         return $saveSuspension($ret, 'test/test_ast.py', 61, 27);
/*  1882 */                     }
/*  1883 */                     var $call264 = $ret;
/*  1884 */                     //
/*  1885 */                     // line 61:
/*  1886 */                     // print("iter_child_nodes:", ast.iter_child_nodes(multiline))
/*  1887 */                     //                            ^
/*  1888 */                     //
/*  1889 */                     Sk.currLineNo = 61;
/*  1890 */                     Sk.currColNo = 27;
/*  1891 */ 
/*  1892 */ 
/*  1893 */                     Sk.currFilename = 'test/test_ast.py';
/*  1894 */ 
/*  1895 */                     $currLineNo = 61;
/*  1896 */                     $currColNo = 27;
/*  1897 */ 
/*  1898 */                     $ret;
/*  1899 */                     $ret = Sk.misceval.callsimOrSuspend($loadname259, $str260, $call264);
/*  1900 */                     $blk = 78; /* allowing case fallthrough */
/*  1901 */                 case 78:
/*  1902 */                     /* --- function return or resume suspension --- */
/*  1903 */                     if ($ret && $ret.$isSuspension) {
/*  1904 */                         return $saveSuspension($ret, 'test/test_ast.py', 61, 0);
/*  1905 */                     }
/*  1906 */                     var $call265 = $ret;
/*  1907 */                     //
/*  1908 */                     // line 61:
/*  1909 */                     // print("iter_child_nodes:", ast.iter_child_nodes(multiline))
/*  1910 */                     // ^
/*  1911 */                     //
/*  1912 */                     Sk.currLineNo = 61;
/*  1913 */                     Sk.currColNo = 0;
/*  1914 */ 
/*  1915 */ 
/*  1916 */                     Sk.currFilename = 'test/test_ast.py';
/*  1917 */ 
/*  1918 */                     $currLineNo = 61;
/*  1919 */                     $currColNo = 0;
/*  1920 */ 
/*  1921 */ 
/*  1922 */                     //
/*  1923 */                     // line 63:
/*  1924 */                     // print("walk:", ast.walk(multiline))
/*  1925 */                     // ^
/*  1926 */                     //
/*  1927 */                     Sk.currLineNo = 63;
/*  1928 */                     Sk.currColNo = 0;
/*  1929 */ 
/*  1930 */ 
/*  1931 */                     Sk.currFilename = 'test/test_ast.py';
/*  1932 */ 
/*  1933 */ 
/*  1934 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1935 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  1936 */                     }
/*  1937 */                     $currLineNo = 63;
/*  1938 */                     $currColNo = 0;
/*  1939 */ 
/*  1940 */                     var $loadname266 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*  1941 */                     var $str267 = new Sk.builtins['str']('walk:');
/*  1942 */                     var $loadname268 = $loc.ast !== undefined ? $loc.ast : Sk.misceval.loadname('ast', $gbl);;
/*  1943 */                     $ret = Sk.abstr.gattr($loadname268, 'walk', true);
/*  1944 */                     $blk = 79; /* allowing case fallthrough */
/*  1945 */                 case 79:
/*  1946 */                     /* --- function return or resume suspension --- */
/*  1947 */                     if ($ret && $ret.$isSuspension) {
/*  1948 */                         return $saveSuspension($ret, 'test/test_ast.py', 63, 15);
/*  1949 */                     }
/*  1950 */                     var $lattr269 = $ret;
/*  1951 */                     var $loadname270 = $loc.multiline !== undefined ? $loc.multiline : Sk.misceval.loadname('multiline', $gbl);;
/*  1952 */                     $ret;
/*  1953 */                     $ret = Sk.misceval.callsimOrSuspend($lattr269, $loadname270);
/*  1954 */                     $blk = 80; /* allowing case fallthrough */
/*  1955 */                 case 80:
/*  1956 */                     /* --- function return or resume suspension --- */
/*  1957 */                     if ($ret && $ret.$isSuspension) {
/*  1958 */                         return $saveSuspension($ret, 'test/test_ast.py', 63, 15);
/*  1959 */                     }
/*  1960 */                     var $call271 = $ret;
/*  1961 */                     //
/*  1962 */                     // line 63:
/*  1963 */                     // print("walk:", ast.walk(multiline))
/*  1964 */                     //                ^
/*  1965 */                     //
/*  1966 */                     Sk.currLineNo = 63;
/*  1967 */                     Sk.currColNo = 15;
/*  1968 */ 
/*  1969 */ 
/*  1970 */                     Sk.currFilename = 'test/test_ast.py';
/*  1971 */ 
/*  1972 */                     $currLineNo = 63;
/*  1973 */                     $currColNo = 15;
/*  1974 */ 
/*  1975 */                     $ret;
/*  1976 */                     $ret = Sk.misceval.callsimOrSuspend($loadname266, $str267, $call271);
/*  1977 */                     $blk = 81; /* allowing case fallthrough */
/*  1978 */                 case 81:
/*  1979 */                     /* --- function return or resume suspension --- */
/*  1980 */                     if ($ret && $ret.$isSuspension) {
/*  1981 */                         return $saveSuspension($ret, 'test/test_ast.py', 63, 0);
/*  1982 */                     }
/*  1983 */                     var $call272 = $ret;
/*  1984 */                     //
/*  1985 */                     // line 63:
/*  1986 */                     // print("walk:", ast.walk(multiline))
/*  1987 */                     // ^
/*  1988 */                     //
/*  1989 */                     Sk.currLineNo = 63;
/*  1990 */                     Sk.currColNo = 0;
/*  1991 */ 
/*  1992 */ 
/*  1993 */                     Sk.currFilename = 'test/test_ast.py';
/*  1994 */ 
/*  1995 */                     $currLineNo = 63;
/*  1996 */                     $currColNo = 0;
/*  1997 */ 
/*  1998 */ 
/*  1999 */                     //
/*  2000 */                     // line 65:
/*  2001 */                     // print(ast.dump(multiline, True, False))
/*  2002 */                     // ^
/*  2003 */                     //
/*  2004 */                     Sk.currLineNo = 65;
/*  2005 */                     Sk.currColNo = 0;
/*  2006 */ 
/*  2007 */ 
/*  2008 */                     Sk.currFilename = 'test/test_ast.py';
/*  2009 */ 
/*  2010 */ 
/*  2011 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  2012 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  2013 */                     }
/*  2014 */                     $currLineNo = 65;
/*  2015 */                     $currColNo = 0;
/*  2016 */ 
/*  2017 */                     var $loadname273 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*  2018 */                     var $loadname274 = $loc.ast !== undefined ? $loc.ast : Sk.misceval.loadname('ast', $gbl);;
/*  2019 */                     $ret = Sk.abstr.gattr($loadname274, 'dump', true);
/*  2020 */                     $blk = 82; /* allowing case fallthrough */
/*  2021 */                 case 82:
/*  2022 */                     /* --- function return or resume suspension --- */
/*  2023 */                     if ($ret && $ret.$isSuspension) {
/*  2024 */                         return $saveSuspension($ret, 'test/test_ast.py', 65, 6);
/*  2025 */                     }
/*  2026 */                     var $lattr275 = $ret;
/*  2027 */                     var $loadname276 = $loc.multiline !== undefined ? $loc.multiline : Sk.misceval.loadname('multiline', $gbl);;
/*  2028 */                     $ret;
/*  2029 */                     $ret = Sk.misceval.callsimOrSuspend($lattr275, $loadname276, Sk.builtin.bool.true$, Sk.builtin.bool.false$);
/*  2030 */                     $blk = 83; /* allowing case fallthrough */
/*  2031 */                 case 83:
/*  2032 */                     /* --- function return or resume suspension --- */
/*  2033 */                     if ($ret && $ret.$isSuspension) {
/*  2034 */                         return $saveSuspension($ret, 'test/test_ast.py', 65, 6);
/*  2035 */                     }
/*  2036 */                     var $call277 = $ret;
/*  2037 */                     //
/*  2038 */                     // line 65:
/*  2039 */                     // print(ast.dump(multiline, True, False))
/*  2040 */                     //       ^
/*  2041 */                     //
/*  2042 */                     Sk.currLineNo = 65;
/*  2043 */                     Sk.currColNo = 6;
/*  2044 */ 
/*  2045 */ 
/*  2046 */                     Sk.currFilename = 'test/test_ast.py';
/*  2047 */ 
/*  2048 */                     $currLineNo = 65;
/*  2049 */                     $currColNo = 6;
/*  2050 */ 
/*  2051 */                     $ret;
/*  2052 */                     $ret = Sk.misceval.callsimOrSuspend($loadname273, $call277);
/*  2053 */                     $blk = 84; /* allowing case fallthrough */
/*  2054 */                 case 84:
/*  2055 */                     /* --- function return or resume suspension --- */
/*  2056 */                     if ($ret && $ret.$isSuspension) {
/*  2057 */                         return $saveSuspension($ret, 'test/test_ast.py', 65, 0);
/*  2058 */                     }
/*  2059 */                     var $call278 = $ret;
/*  2060 */                     //
/*  2061 */                     // line 65:
/*  2062 */                     // print(ast.dump(multiline, True, False))
/*  2063 */                     // ^
/*  2064 */                     //
/*  2065 */                     Sk.currLineNo = 65;
/*  2066 */                     Sk.currColNo = 0;
/*  2067 */ 
/*  2068 */ 
/*  2069 */                     Sk.currFilename = 'test/test_ast.py';
/*  2070 */ 
/*  2071 */                     $currLineNo = 65;
/*  2072 */                     $currColNo = 0;
/*  2073 */ 
/*  2074 */ 
/*  2075 */                     //
/*  2076 */                     // line 66:
/*  2077 */                     // print("*"*40)
/*  2078 */                     // ^
/*  2079 */                     //
/*  2080 */                     Sk.currLineNo = 66;
/*  2081 */                     Sk.currColNo = 0;
/*  2082 */ 
/*  2083 */ 
/*  2084 */                     Sk.currFilename = 'test/test_ast.py';
/*  2085 */ 
/*  2086 */ 
/*  2087 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  2088 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  2089 */                     }
/*  2090 */                     $currLineNo = 66;
/*  2091 */                     $currColNo = 0;
/*  2092 */ 
/*  2093 */                     var $loadname279 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*  2094 */                     var $str280 = new Sk.builtins['str']('*');
/*  2095 */                     var $binop281 = Sk.abstr.numberBinOp($str280, new Sk.builtin.int_(40), 'Mult');
/*  2096 */                     $ret;
/*  2097 */                     $ret = Sk.misceval.callsimOrSuspend($loadname279, $binop281);
/*  2098 */                     $blk = 85; /* allowing case fallthrough */
/*  2099 */                 case 85:
/*  2100 */                     /* --- function return or resume suspension --- */
/*  2101 */                     if ($ret && $ret.$isSuspension) {
/*  2102 */                         return $saveSuspension($ret, 'test/test_ast.py', 66, 0);
/*  2103 */                     }
/*  2104 */                     var $call282 = $ret;
/*  2105 */                     //
/*  2106 */                     // line 66:
/*  2107 */                     // print("*"*40)
/*  2108 */                     // ^
/*  2109 */                     //
/*  2110 */                     Sk.currLineNo = 66;
/*  2111 */                     Sk.currColNo = 0;
/*  2112 */ 
/*  2113 */ 
/*  2114 */                     Sk.currFilename = 'test/test_ast.py';
/*  2115 */ 
/*  2116 */                     $currLineNo = 66;
/*  2117 */                     $currColNo = 0;
/*  2118 */ 
/*  2119 */ 
/*  2120 */                     //
/*  2121 */                     // line 67:
/*  2122 */                     // class VisitStuff(ast.NodeVisitor):
/*  2123 */                     // ^
/*  2124 */                     //
/*  2125 */                     Sk.currLineNo = 67;
/*  2126 */                     Sk.currColNo = 0;
/*  2127 */ 
/*  2128 */ 
/*  2129 */                     Sk.currFilename = 'test/test_ast.py';
/*  2130 */ 
/*  2131 */ 
/*  2132 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  2133 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  2134 */                     }
/*  2135 */                     $currLineNo = 67;
/*  2136 */                     $currColNo = 0;
/*  2137 */ 
/*  2138 */                     var $loadname283 = $loc.ast !== undefined ? $loc.ast : Sk.misceval.loadname('ast', $gbl);;
/*  2139 */                     $ret = Sk.abstr.gattr($loadname283, 'NodeVisitor', true);
/*  2140 */                     $blk = 86; /* allowing case fallthrough */
/*  2141 */                 case 86:
/*  2142 */                     /* --- function return or resume suspension --- */
/*  2143 */                     if ($ret && $ret.$isSuspension) {
/*  2144 */                         return $saveSuspension($ret, 'test/test_ast.py', 67, 17);
/*  2145 */                     }
/*  2146 */                     var $lattr284 = $ret;
/*  2147 */                     $scope285.co_name = new Sk.builtins['str']('VisitStuff');
/*  2148 */                     var $built298 = Sk.misceval.buildClass($gbl, $scope285, 'VisitStuff', [$lattr284]);
/*  2149 */                     $loc.VisitStuff = $built298;
/*  2150 */                     //
/*  2151 */                     // line 73:
/*  2152 */                     // vs = VisitStuff()
/*  2153 */                     // ^
/*  2154 */                     //
/*  2155 */                     Sk.currLineNo = 73;
/*  2156 */                     Sk.currColNo = 0;
/*  2157 */ 
/*  2158 */ 
/*  2159 */                     Sk.currFilename = 'test/test_ast.py';
/*  2160 */ 
/*  2161 */ 
/*  2162 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  2163 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  2164 */                     }
/*  2165 */                     $currLineNo = 73;
/*  2166 */                     $currColNo = 0;
/*  2167 */ 
/*  2168 */                     var $loadname299 = $loc.VisitStuff !== undefined ? $loc.VisitStuff : Sk.misceval.loadname('VisitStuff', $gbl);;
/*  2169 */                     $ret;
/*  2170 */                     $ret = Sk.misceval.callsimOrSuspend($loadname299);
/*  2171 */                     $blk = 87; /* allowing case fallthrough */
/*  2172 */                 case 87:
/*  2173 */                     /* --- function return or resume suspension --- */
/*  2174 */                     if ($ret && $ret.$isSuspension) {
/*  2175 */                         return $saveSuspension($ret, 'test/test_ast.py', 73, 5);
/*  2176 */                     }
/*  2177 */                     var $call300 = $ret;
/*  2178 */                     //
/*  2179 */                     // line 73:
/*  2180 */                     // vs = VisitStuff()
/*  2181 */                     //      ^
/*  2182 */                     //
/*  2183 */                     Sk.currLineNo = 73;
/*  2184 */                     Sk.currColNo = 5;
/*  2185 */ 
/*  2186 */ 
/*  2187 */                     Sk.currFilename = 'test/test_ast.py';
/*  2188 */ 
/*  2189 */                     $currLineNo = 73;
/*  2190 */                     $currColNo = 5;
/*  2191 */ 
/*  2192 */                     $loc.vs = $call300;
/*  2193 */                     //
/*  2194 */                     // line 74:
/*  2195 */                     // p = ast.parse('''a = 0\nprint(a+5) or 5''')
/*  2196 */                     // ^
/*  2197 */                     //
/*  2198 */                     Sk.currLineNo = 74;
/*  2199 */                     Sk.currColNo = 0;
/*  2200 */ 
/*  2201 */ 
/*  2202 */                     Sk.currFilename = 'test/test_ast.py';
/*  2203 */ 
/*  2204 */ 
/*  2205 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  2206 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  2207 */                     }
/*  2208 */                     $currLineNo = 74;
/*  2209 */                     $currColNo = 0;
/*  2210 */ 
/*  2211 */                     var $loadname301 = $loc.ast !== undefined ? $loc.ast : Sk.misceval.loadname('ast', $gbl);;
/*  2212 */                     $ret = Sk.abstr.gattr($loadname301, 'parse', true);
/*  2213 */                     $blk = 88; /* allowing case fallthrough */
/*  2214 */                 case 88:
/*  2215 */                     /* --- function return or resume suspension --- */
/*  2216 */                     if ($ret && $ret.$isSuspension) {
/*  2217 */                         return $saveSuspension($ret, 'test/test_ast.py', 74, 4);
/*  2218 */                     }
/*  2219 */                     var $lattr302 = $ret;
/*  2220 */                     var $str303 = new Sk.builtins['str']('a = 0\nprint(a+5) or 5');
/*  2221 */                     $ret;
/*  2222 */                     $ret = Sk.misceval.callsimOrSuspend($lattr302, $str303);
/*  2223 */                     $blk = 89; /* allowing case fallthrough */
/*  2224 */                 case 89:
/*  2225 */                     /* --- function return or resume suspension --- */
/*  2226 */                     if ($ret && $ret.$isSuspension) {
/*  2227 */                         return $saveSuspension($ret, 'test/test_ast.py', 74, 4);
/*  2228 */                     }
/*  2229 */                     var $call304 = $ret;
/*  2230 */                     //
/*  2231 */                     // line 74:
/*  2232 */                     // p = ast.parse('''a = 0\nprint(a+5) or 5''')
/*  2233 */                     //     ^
/*  2234 */                     //
/*  2235 */                     Sk.currLineNo = 74;
/*  2236 */                     Sk.currColNo = 4;
/*  2237 */ 
/*  2238 */ 
/*  2239 */                     Sk.currFilename = 'test/test_ast.py';
/*  2240 */ 
/*  2241 */                     $currLineNo = 74;
/*  2242 */                     $currColNo = 4;
/*  2243 */ 
/*  2244 */                     $loc.p = $call304;
/*  2245 */                     //
/*  2246 */                     // line 75:
/*  2247 */                     // vs.visit(p)
/*  2248 */                     // ^
/*  2249 */                     //
/*  2250 */                     Sk.currLineNo = 75;
/*  2251 */                     Sk.currColNo = 0;
/*  2252 */ 
/*  2253 */ 
/*  2254 */                     Sk.currFilename = 'test/test_ast.py';
/*  2255 */ 
/*  2256 */ 
/*  2257 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  2258 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  2259 */                     }
/*  2260 */                     $currLineNo = 75;
/*  2261 */                     $currColNo = 0;
/*  2262 */ 
/*  2263 */                     var $loadname305 = $loc.vs !== undefined ? $loc.vs : Sk.misceval.loadname('vs', $gbl);;
/*  2264 */                     $ret = Sk.abstr.gattr($loadname305, 'visit', true);
/*  2265 */                     $blk = 90; /* allowing case fallthrough */
/*  2266 */                 case 90:
/*  2267 */                     /* --- function return or resume suspension --- */
/*  2268 */                     if ($ret && $ret.$isSuspension) {
/*  2269 */                         return $saveSuspension($ret, 'test/test_ast.py', 75, 0);
/*  2270 */                     }
/*  2271 */                     var $lattr306 = $ret;
/*  2272 */                     var $loadname307 = $loc.p !== undefined ? $loc.p : Sk.misceval.loadname('p', $gbl);;
/*  2273 */                     $ret;
/*  2274 */                     $ret = Sk.misceval.callsimOrSuspend($lattr306, $loadname307);
/*  2275 */                     $blk = 91; /* allowing case fallthrough */
/*  2276 */                 case 91:
/*  2277 */                     /* --- function return or resume suspension --- */
/*  2278 */                     if ($ret && $ret.$isSuspension) {
/*  2279 */                         return $saveSuspension($ret, 'test/test_ast.py', 75, 0);
/*  2280 */                     }
/*  2281 */                     var $call308 = $ret;
/*  2282 */                     //
/*  2283 */                     // line 75:
/*  2284 */                     // vs.visit(p)
/*  2285 */                     // ^
/*  2286 */                     //
/*  2287 */                     Sk.currLineNo = 75;
/*  2288 */                     Sk.currColNo = 0;
/*  2289 */ 
/*  2290 */ 
/*  2291 */                     Sk.currFilename = 'test/test_ast.py';
/*  2292 */ 
/*  2293 */                     $currLineNo = 75;
/*  2294 */                     $currColNo = 0;
/*  2295 */ 
/*  2296 */ 
/*  2297 */                     //
/*  2298 */                     // line 76:
/*  2299 */                     // assert vs.nums == 3, "Did not find 3 nums, only: "+str(vs.nums)
/*  2300 */                     // ^
/*  2301 */                     //
/*  2302 */                     Sk.currLineNo = 76;
/*  2303 */                     Sk.currColNo = 0;
/*  2304 */ 
/*  2305 */ 
/*  2306 */                     Sk.currFilename = 'test/test_ast.py';
/*  2307 */ 
/*  2308 */ 
/*  2309 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  2310 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  2311 */                     }
/*  2312 */                     $currLineNo = 76;
/*  2313 */                     $currColNo = 0;
/*  2314 */ 
/*  2315 */                     var $loadname309 = $loc.vs !== undefined ? $loc.vs : Sk.misceval.loadname('vs', $gbl);;
/*  2316 */                     $ret = Sk.abstr.gattr($loadname309, 'nums', true);
/*  2317 */                     $blk = 92; /* allowing case fallthrough */
/*  2318 */                 case 92:
/*  2319 */                     /* --- function return or resume suspension --- */
/*  2320 */                     if ($ret && $ret.$isSuspension) {
/*  2321 */                         return $saveSuspension($ret, 'test/test_ast.py', 76, 7);
/*  2322 */                     }
/*  2323 */                     var $lattr310 = $ret;
/*  2324 */                     var $compareres311 = null;
/*  2325 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr310, new Sk.builtin.int_(3), 'Eq', true));
/*  2326 */                     $blk = 94; /* allowing case fallthrough */
/*  2327 */                 case 94:
/*  2328 */                     /* --- function return or resume suspension --- */
/*  2329 */                     if ($ret && $ret.$isSuspension) {
/*  2330 */                         return $saveSuspension($ret, 'test/test_ast.py', 76, 7);
/*  2331 */                     }
/*  2332 */                     $compareres311 = $ret;
/*  2333 */                     var $jfalse312 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  2334 */                     if ($jfalse312) { /*test failed */
/*  2335 */                         $blk = 93;
/*  2336 */                         continue;
/*  2337 */                     }
/*  2338 */                     $blk = 93; /* allowing case fallthrough */
/*  2339 */                 case 93:
/*  2340 */                     /* --- done --- */
/*  2341 */                     var $jtrue313 = ($compareres311 === true || Sk.misceval.isTrue($compareres311));
/*  2342 */                     if ($jtrue313) { /*test passed */
/*  2343 */                         $blk = 95;
/*  2344 */                         continue;
/*  2345 */                     }
/*  2346 */                     var $str314 = new Sk.builtins['str']('Did not find 3 nums, only: ');
/*  2347 */                     var $loadname315 = $loc.str !== undefined ? $loc.str : Sk.misceval.loadname('str', $gbl);;
/*  2348 */                     var $loadname316 = $loc.vs !== undefined ? $loc.vs : Sk.misceval.loadname('vs', $gbl);;
/*  2349 */                     $ret = Sk.abstr.gattr($loadname316, 'nums', true);
/*  2350 */                     $blk = 96; /* allowing case fallthrough */
/*  2351 */                 case 96:
/*  2352 */                     /* --- function return or resume suspension --- */
/*  2353 */                     if ($ret && $ret.$isSuspension) {
/*  2354 */                         return $saveSuspension($ret, 'test/test_ast.py', 76, 55);
/*  2355 */                     }
/*  2356 */                     var $lattr317 = $ret;
/*  2357 */                     $ret;
/*  2358 */                     $ret = Sk.misceval.callsimOrSuspend($loadname315, $lattr317);
/*  2359 */                     $blk = 97; /* allowing case fallthrough */
/*  2360 */                 case 97:
/*  2361 */                     /* --- function return or resume suspension --- */
/*  2362 */                     if ($ret && $ret.$isSuspension) {
/*  2363 */                         return $saveSuspension($ret, 'test/test_ast.py', 76, 51);
/*  2364 */                     }
/*  2365 */                     var $call318 = $ret;
/*  2366 */                     //
/*  2367 */                     // line 76:
/*  2368 */                     // assert vs.nums == 3, "Did not find 3 nums, only: "+str(vs.nums)
/*  2369 */                     //                                                    ^
/*  2370 */                     //
/*  2371 */                     Sk.currLineNo = 76;
/*  2372 */                     Sk.currColNo = 51;
/*  2373 */ 
/*  2374 */ 
/*  2375 */                     Sk.currFilename = 'test/test_ast.py';
/*  2376 */ 
/*  2377 */                     $currLineNo = 76;
/*  2378 */                     $currColNo = 51;
/*  2379 */ 
/*  2380 */                     var $binop319 = Sk.abstr.numberBinOp($str314, $call318, 'Add');
/*  2381 */                     throw new Sk.builtin.AssertionError($binop319);
/*  2382 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2383 */                 case 95:
/*  2384 */                     /* --- end --- */
/*  2385 */                     //
/*  2386 */                     // line 79:
/*  2387 */                     // print("All tests complete.")
/*  2388 */                     // ^
/*  2389 */                     //
/*  2390 */                     Sk.currLineNo = 79;
/*  2391 */                     Sk.currColNo = 0;
/*  2392 */ 
/*  2393 */ 
/*  2394 */                     Sk.currFilename = 'test/test_ast.py';
/*  2395 */ 
/*  2396 */ 
/*  2397 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  2398 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  2399 */                     }
/*  2400 */                     $currLineNo = 79;
/*  2401 */                     $currColNo = 0;
/*  2402 */ 
/*  2403 */                     var $loadname320 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname('print', $gbl);;
/*  2404 */                     var $str321 = new Sk.builtins['str']('All tests complete.');
/*  2405 */                     $ret;
/*  2406 */                     $ret = Sk.misceval.callsimOrSuspend($loadname320, $str321);
/*  2407 */                     $blk = 98; /* allowing case fallthrough */
/*  2408 */                 case 98:
/*  2409 */                     /* --- function return or resume suspension --- */
/*  2410 */                     if ($ret && $ret.$isSuspension) {
/*  2411 */                         return $saveSuspension($ret, 'test/test_ast.py', 79, 0);
/*  2412 */                     }
/*  2413 */                     var $call322 = $ret;
/*  2414 */                     //
/*  2415 */                     // line 79:
/*  2416 */                     // print("All tests complete.")
/*  2417 */                     // ^
/*  2418 */                     //
/*  2419 */                     Sk.currLineNo = 79;
/*  2420 */                     Sk.currColNo = 0;
/*  2421 */ 
/*  2422 */ 
/*  2423 */                     Sk.currFilename = 'test/test_ast.py';
/*  2424 */ 
/*  2425 */                     $currLineNo = 79;
/*  2426 */                     $currColNo = 0;
/*  2427 */ 
/*  2428 */                     return $loc;
/*  2429 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2430 */                 }
/*  2431 */             } catch (err) {
/*  2432 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  2433 */                     Sk.execStart = Date.now()
/*  2434 */                 }
/*  2435 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2436 */                     err = new Sk.builtin.ExternalError(err);
/*  2437 */                 }
/*  2438 */                 err.traceback.push({
/*  2439 */                     lineno: $currLineNo,
/*  2440 */                     colno: $currColNo,
/*  2441 */                     filename: 'test/test_ast.py'
/*  2442 */                 });
/*  2443 */                 if ($exc.length > 0) {
/*  2444 */                     $err = err;
/*  2445 */                     $blk = $exc.pop();
/*  2446 */                     continue;
/*  2447 */                 } else {
/*  2448 */                     throw err;
/*  2449 */                 }
/*  2450 */             }
/*  2451 */         }
/*  2452 */     });
/*  2453 */     var $scope285 = (function $VisitStuff$class_outer($globals, $locals, $rest) {
/*  2454 */         var $gbl = $globals,
/*  2455 */             $loc = $locals;
/*  2456 */         (function $VisitStuff$_closure() {
/*  2457 */             var $blk = 0,
/*  2458 */                 $exc = [],
/*  2459 */                 $ret = undefined,
/*  2460 */                 $postfinally = undefined,
/*  2461 */                 $currLineNo = undefined,
/*  2462 */                 $currColNo = undefined;
/*  2463 */             if (typeof Sk.execStart === 'undefined') {
/*  2464 */                 Sk.execStart = Date.now()
/*  2465 */             }
/*  2466 */             while (true) {
/*  2467 */                 try {
/*  2468 */                     var $dateNow = Date.now();
/*  2469 */                     if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  2470 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2471 */                     }
/*  2472 */                     switch ($blk) {
/*  2473 */                     case 0:
/*  2474 */                         /* --- class entry --- */
/*  2475 */                         //
/*  2476 */                         // line 68:
/*  2477 */                         //     def __init__(self):
/*  2478 */                         //     ^
/*  2479 */                         //
/*  2480 */                         Sk.currLineNo = 68;
/*  2481 */                         Sk.currColNo = 4;
/*  2482 */ 
/*  2483 */ 
/*  2484 */                         Sk.currFilename = 'test/test_ast.py';
/*  2485 */ 
/*  2486 */ 
/*  2487 */                         if (typeof Sk.afterSingleExecution == 'function') {
/*  2488 */                             Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  2489 */                         }
/*  2490 */                         $currLineNo = 68;
/*  2491 */                         $currColNo = 4;
/*  2492 */ 
/*  2493 */                         $scope286.co_name = new Sk.builtins['str']('__init__');
/*  2494 */                         $scope286.co_varnames = ['self'];
/*  2495 */                         var $funcobj288 = new Sk.builtins['function']($scope286, $gbl);
/*  2496 */                         $loc.__init__ = $funcobj288;
/*  2497 */                         //
/*  2498 */                         // line 70:
/*  2499 */                         //     def visit_Num(self, node):
/*  2500 */                         //     ^
/*  2501 */                         //
/*  2502 */                         Sk.currLineNo = 70;
/*  2503 */                         Sk.currColNo = 4;
/*  2504 */ 
/*  2505 */ 
/*  2506 */                         Sk.currFilename = 'test/test_ast.py';
/*  2507 */ 
/*  2508 */ 
/*  2509 */                         if (typeof Sk.afterSingleExecution == 'function') {
/*  2510 */                             Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  2511 */                         }
/*  2512 */                         $currLineNo = 70;
/*  2513 */                         $currColNo = 4;
/*  2514 */ 
/*  2515 */                         $scope289.co_name = new Sk.builtins['str']('visit_Num');
/*  2516 */                         $scope289.co_varnames = ['self', 'node'];
/*  2517 */                         var $funcobj297 = new Sk.builtins['function']($scope289, $gbl);
/*  2518 */                         $loc.visit_Num = $funcobj297;
/*  2519 */                         return;
/*  2520 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2521 */                     }
/*  2522 */                 } catch (err) {
/*  2523 */                     if (err instanceof Sk.builtin.TimeLimitError) {
/*  2524 */                         Sk.execStart = Date.now()
/*  2525 */                     }
/*  2526 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  2527 */                         err = new Sk.builtin.ExternalError(err);
/*  2528 */                     }
/*  2529 */                     err.traceback.push({
/*  2530 */                         lineno: $currLineNo,
/*  2531 */                         colno: $currColNo,
/*  2532 */                         filename: 'test/test_ast.py'
/*  2533 */                     });
/*  2534 */                     if ($exc.length > 0) {
/*  2535 */                         $err = err;
/*  2536 */                         $blk = $exc.pop();
/*  2537 */                         continue;
/*  2538 */                     } else {
/*  2539 */                         throw err;
/*  2540 */                     }
/*  2541 */                 }
/*  2542 */             }
/*  2543 */         }).apply(null, $rest);
/*  2544 */     });
/*  2545 */     var $scope286 = (function $__init__287$(self) {
/*  2546 */         var self, self;
/*  2547 */         var $wakeFromSuspension = function() {
/*  2548 */             var susp = $scope286.$wakingSuspension;
/*  2549 */             delete $scope286.$wakingSuspension;
/*  2550 */             $blk = susp.$blk;
/*  2551 */             $loc = susp.$loc;
/*  2552 */             $gbl = susp.$gbl;
/*  2553 */             $exc = susp.$exc;
/*  2554 */             $err = susp.$err;
/*  2555 */             $postfinally = susp.$postfinally;
/*  2556 */             $currLineNo = susp.$lineno;
/*  2557 */             $currColNo = susp.$colno;
/*  2558 */             Sk.lastYield = Date.now();
/*  2559 */             self = susp.$tmps.self;
/*  2560 */             try {
/*  2561 */                 $ret = susp.child.resume();
/*  2562 */             } catch (err) {
/*  2563 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  2564 */                     Sk.execStart = Date.now()
/*  2565 */                 }
/*  2566 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2567 */                     err = new Sk.builtin.ExternalError(err);
/*  2568 */                 }
/*  2569 */                 err.traceback.push({
/*  2570 */                     lineno: $currLineNo,
/*  2571 */                     colno: $currColNo,
/*  2572 */                     filename: 'test/test_ast.py'
/*  2573 */                 });
/*  2574 */                 if ($exc.length > 0) {
/*  2575 */                     $err = err;
/*  2576 */                     $blk = $exc.pop();
/*  2577 */                 } else {
/*  2578 */                     throw err;
/*  2579 */                 }
/*  2580 */             }
/*  2581 */         };
/*  2582 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2583 */             var susp = new Sk.misceval.Suspension();
/*  2584 */             susp.child = $child;
/*  2585 */             susp.resume = function() {
/*  2586 */                 $scope286.$wakingSuspension = susp;
/*  2587 */                 return $scope286();
/*  2588 */             };
/*  2589 */             susp.data = susp.child.data;
/*  2590 */             susp.$blk = $blk;
/*  2591 */             susp.$loc = $loc;
/*  2592 */             susp.$gbl = $gbl;
/*  2593 */             susp.$exc = $exc;
/*  2594 */             susp.$err = $err;
/*  2595 */             susp.$postfinally = $postfinally;
/*  2596 */             susp.$filename = $filename;
/*  2597 */             susp.$lineno = $lineno;
/*  2598 */             susp.$colno = $colno;
/*  2599 */             susp.optional = susp.child.optional;
/*  2600 */             susp.$tmps = {
/*  2601 */                 "self": self
/*  2602 */             };
/*  2603 */             return susp;
/*  2604 */         };
/*  2605 */         var $blk = 0,
/*  2606 */             $exc = [],
/*  2607 */             $loc = {},
/*  2608 */             $gbl = this,
/*  2609 */             $err = undefined,
/*  2610 */             $ret = undefined,
/*  2611 */             $postfinally = undefined,
/*  2612 */             $currLineNo = undefined,
/*  2613 */             $currColNo = undefined;
/*  2614 */         if (typeof Sk.execStart === 'undefined') {
/*  2615 */             Sk.execStart = Date.now()
/*  2616 */         }
/*  2617 */         if (typeof Sk.lastYield === 'undefined') {
/*  2618 */             Sk.lastYield = Date.now()
/*  2619 */         }
/*  2620 */         if ($scope286.$wakingSuspension !== undefined) {
/*  2621 */             $wakeFromSuspension();
/*  2622 */         } else {
/*  2623 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, false, false);
/*  2624 */         }
/*  2625 */         while (true) {
/*  2626 */             try {
/*  2627 */                 var $dateNow = Date.now();
/*  2628 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  2629 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2630 */                 }
/*  2631 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  2632 */                     var $susp = $saveSuspension({
/*  2633 */                         data: {
/*  2634 */                             type: 'Sk.yield'
/*  2635 */                         },
/*  2636 */                         resume: function() {}
/*  2637 */                     }, 'test/test_ast.py', $currLineNo, $currColNo);
/*  2638 */                     $susp.$blk = $blk;
/*  2639 */                     $susp.optional = true;
/*  2640 */                     return $susp;
/*  2641 */                 }
/*  2642 */                 switch ($blk) {
/*  2643 */                 case 0:
/*  2644 */                     /* --- codeobj entry --- */
/*  2645 */                     if (self === undefined) {
/*  2646 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2647 */                     }
/*  2648 */ 
/*  2649 */                     //
/*  2650 */                     // line 69:
/*  2651 */                     //         self.nums = 0
/*  2652 */                     //         ^
/*  2653 */                     //
/*  2654 */                     Sk.currLineNo = 69;
/*  2655 */                     Sk.currColNo = 8;
/*  2656 */ 
/*  2657 */ 
/*  2658 */                     Sk.currFilename = 'test/test_ast.py';
/*  2659 */ 
/*  2660 */ 
/*  2661 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  2662 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  2663 */                     }
/*  2664 */                     $currLineNo = 69;
/*  2665 */                     $currColNo = 8;
/*  2666 */ 
/*  2667 */                     if (self === undefined) {
/*  2668 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2669 */                     }
/*  2670 */                     $ret = Sk.abstr.sattr(self, 'nums', new Sk.builtin.int_(0), true);
/*  2671 */                     $blk = 1; /* allowing case fallthrough */
/*  2672 */                 case 1:
/*  2673 */                     /* --- function return or resume suspension --- */
/*  2674 */                     if ($ret && $ret.$isSuspension) {
/*  2675 */                         return $saveSuspension($ret, 'test/test_ast.py', 69, 8);
/*  2676 */                     }
/*  2677 */                     return Sk.builtin.none.none$;
/*  2678 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2679 */                 }
/*  2680 */             } catch (err) {
/*  2681 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  2682 */                     Sk.execStart = Date.now()
/*  2683 */                 }
/*  2684 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2685 */                     err = new Sk.builtin.ExternalError(err);
/*  2686 */                 }
/*  2687 */                 err.traceback.push({
/*  2688 */                     lineno: $currLineNo,
/*  2689 */                     colno: $currColNo,
/*  2690 */                     filename: 'test/test_ast.py'
/*  2691 */                 });
/*  2692 */                 if ($exc.length > 0) {
/*  2693 */                     $err = err;
/*  2694 */                     $blk = $exc.pop();
/*  2695 */                     continue;
/*  2696 */                 } else {
/*  2697 */                     throw err;
/*  2698 */                 }
/*  2699 */             }
/*  2700 */         }
/*  2701 */     });
/*  2702 */     var $scope289 = (function $visit_Num290$(self, node) {
/*  2703 */         var node, node, self, self, $loadgbl291, $str292, $loadgbl291, $str292, $lattr293, $lattr295, $inplbinopattr296;
/*  2704 */         var $wakeFromSuspension = function() {
/*  2705 */             var susp = $scope289.$wakingSuspension;
/*  2706 */             delete $scope289.$wakingSuspension;
/*  2707 */             $blk = susp.$blk;
/*  2708 */             $loc = susp.$loc;
/*  2709 */             $gbl = susp.$gbl;
/*  2710 */             $exc = susp.$exc;
/*  2711 */             $err = susp.$err;
/*  2712 */             $postfinally = susp.$postfinally;
/*  2713 */             $currLineNo = susp.$lineno;
/*  2714 */             $currColNo = susp.$colno;
/*  2715 */             Sk.lastYield = Date.now();
/*  2716 */             node = susp.$tmps.node;
/*  2717 */             self = susp.$tmps.self;
/*  2718 */             $loadgbl291 = susp.$tmps.$loadgbl291;
/*  2719 */             $str292 = susp.$tmps.$str292;
/*  2720 */             $lattr293 = susp.$tmps.$lattr293;
/*  2721 */             $lattr295 = susp.$tmps.$lattr295;
/*  2722 */             $inplbinopattr296 = susp.$tmps.$inplbinopattr296;
/*  2723 */             try {
/*  2724 */                 $ret = susp.child.resume();
/*  2725 */             } catch (err) {
/*  2726 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  2727 */                     Sk.execStart = Date.now()
/*  2728 */                 }
/*  2729 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2730 */                     err = new Sk.builtin.ExternalError(err);
/*  2731 */                 }
/*  2732 */                 err.traceback.push({
/*  2733 */                     lineno: $currLineNo,
/*  2734 */                     colno: $currColNo,
/*  2735 */                     filename: 'test/test_ast.py'
/*  2736 */                 });
/*  2737 */                 if ($exc.length > 0) {
/*  2738 */                     $err = err;
/*  2739 */                     $blk = $exc.pop();
/*  2740 */                 } else {
/*  2741 */                     throw err;
/*  2742 */                 }
/*  2743 */             }
/*  2744 */         };
/*  2745 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2746 */             var susp = new Sk.misceval.Suspension();
/*  2747 */             susp.child = $child;
/*  2748 */             susp.resume = function() {
/*  2749 */                 $scope289.$wakingSuspension = susp;
/*  2750 */                 return $scope289();
/*  2751 */             };
/*  2752 */             susp.data = susp.child.data;
/*  2753 */             susp.$blk = $blk;
/*  2754 */             susp.$loc = $loc;
/*  2755 */             susp.$gbl = $gbl;
/*  2756 */             susp.$exc = $exc;
/*  2757 */             susp.$err = $err;
/*  2758 */             susp.$postfinally = $postfinally;
/*  2759 */             susp.$filename = $filename;
/*  2760 */             susp.$lineno = $lineno;
/*  2761 */             susp.$colno = $colno;
/*  2762 */             susp.optional = susp.child.optional;
/*  2763 */             susp.$tmps = {
/*  2764 */                 "node": node,
/*  2765 */                 "self": self,
/*  2766 */                 "$loadgbl291": $loadgbl291,
/*  2767 */                 "$str292": $str292,
/*  2768 */                 "$lattr293": $lattr293,
/*  2769 */                 "$lattr295": $lattr295,
/*  2770 */                 "$inplbinopattr296": $inplbinopattr296
/*  2771 */             };
/*  2772 */             return susp;
/*  2773 */         };
/*  2774 */         var $blk = 0,
/*  2775 */             $exc = [],
/*  2776 */             $loc = {},
/*  2777 */             $gbl = this,
/*  2778 */             $err = undefined,
/*  2779 */             $ret = undefined,
/*  2780 */             $postfinally = undefined,
/*  2781 */             $currLineNo = undefined,
/*  2782 */             $currColNo = undefined;
/*  2783 */         if (typeof Sk.execStart === 'undefined') {
/*  2784 */             Sk.execStart = Date.now()
/*  2785 */         }
/*  2786 */         if (typeof Sk.lastYield === 'undefined') {
/*  2787 */             Sk.lastYield = Date.now()
/*  2788 */         }
/*  2789 */         if ($scope289.$wakingSuspension !== undefined) {
/*  2790 */             $wakeFromSuspension();
/*  2791 */         } else {
/*  2792 */             Sk.builtin.pyCheckArgs("visit_Num", arguments, 2, 2, false, false);
/*  2793 */         }
/*  2794 */         while (true) {
/*  2795 */             try {
/*  2796 */                 var $dateNow = Date.now();
/*  2797 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  2798 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2799 */                 }
/*  2800 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  2801 */                     var $susp = $saveSuspension({
/*  2802 */                         data: {
/*  2803 */                             type: 'Sk.yield'
/*  2804 */                         },
/*  2805 */                         resume: function() {}
/*  2806 */                     }, 'test/test_ast.py', $currLineNo, $currColNo);
/*  2807 */                     $susp.$blk = $blk;
/*  2808 */                     $susp.optional = true;
/*  2809 */                     return $susp;
/*  2810 */                 }
/*  2811 */                 switch ($blk) {
/*  2812 */                 case 0:
/*  2813 */                     /* --- codeobj entry --- */
/*  2814 */                     if (self === undefined) {
/*  2815 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2816 */                     }
/*  2817 */                     if (node === undefined) {
/*  2818 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  2819 */                     }
/*  2820 */ 
/*  2821 */                     //
/*  2822 */                     // line 71:
/*  2823 */                     //         print("Found a ", node.n)
/*  2824 */                     //         ^
/*  2825 */                     //
/*  2826 */                     Sk.currLineNo = 71;
/*  2827 */                     Sk.currColNo = 8;
/*  2828 */ 
/*  2829 */ 
/*  2830 */                     Sk.currFilename = 'test/test_ast.py';
/*  2831 */ 
/*  2832 */ 
/*  2833 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  2834 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  2835 */                     }
/*  2836 */                     $currLineNo = 71;
/*  2837 */                     $currColNo = 8;
/*  2838 */ 
/*  2839 */                     var $loadgbl291 = Sk.misceval.loadname('print', $gbl);
/*  2840 */                     var $str292 = new Sk.builtins['str']('Found a ');
/*  2841 */                     if (node === undefined) {
/*  2842 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  2843 */                     }
/*  2844 */                     $ret = Sk.abstr.gattr(node, 'n', true);
/*  2845 */                     $blk = 1; /* allowing case fallthrough */
/*  2846 */                 case 1:
/*  2847 */                     /* --- function return or resume suspension --- */
/*  2848 */                     if ($ret && $ret.$isSuspension) {
/*  2849 */                         return $saveSuspension($ret, 'test/test_ast.py', 71, 26);
/*  2850 */                     }
/*  2851 */                     var $lattr293 = $ret;
/*  2852 */                     $ret;
/*  2853 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl291, $str292, $lattr293);
/*  2854 */                     $blk = 2; /* allowing case fallthrough */
/*  2855 */                 case 2:
/*  2856 */                     /* --- function return or resume suspension --- */
/*  2857 */                     if ($ret && $ret.$isSuspension) {
/*  2858 */                         return $saveSuspension($ret, 'test/test_ast.py', 71, 8);
/*  2859 */                     }
/*  2860 */                     var $call294 = $ret;
/*  2861 */                     //
/*  2862 */                     // line 71:
/*  2863 */                     //         print("Found a ", node.n)
/*  2864 */                     //         ^
/*  2865 */                     //
/*  2866 */                     Sk.currLineNo = 71;
/*  2867 */                     Sk.currColNo = 8;
/*  2868 */ 
/*  2869 */ 
/*  2870 */                     Sk.currFilename = 'test/test_ast.py';
/*  2871 */ 
/*  2872 */                     $currLineNo = 71;
/*  2873 */                     $currColNo = 8;
/*  2874 */ 
/*  2875 */ 
/*  2876 */                     //
/*  2877 */                     // line 72:
/*  2878 */                     //         self.nums += 1
/*  2879 */                     //         ^
/*  2880 */                     //
/*  2881 */                     Sk.currLineNo = 72;
/*  2882 */                     Sk.currColNo = 8;
/*  2883 */ 
/*  2884 */ 
/*  2885 */                     Sk.currFilename = 'test/test_ast.py';
/*  2886 */ 
/*  2887 */ 
/*  2888 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  2889 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  2890 */                     }
/*  2891 */                     $currLineNo = 72;
/*  2892 */                     $currColNo = 8;
/*  2893 */ 
/*  2894 */                     if (self === undefined) {
/*  2895 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2896 */                     }
/*  2897 */                     $ret = Sk.abstr.gattr(self, 'nums', true);
/*  2898 */                     $blk = 3; /* allowing case fallthrough */
/*  2899 */                 case 3:
/*  2900 */                     /* --- function return or resume suspension --- */
/*  2901 */                     if ($ret && $ret.$isSuspension) {
/*  2902 */                         return $saveSuspension($ret, 'test/test_ast.py', 72, 8);
/*  2903 */                     }
/*  2904 */                     var $lattr295 = $ret;
/*  2905 */                     var $inplbinopattr296 = Sk.abstr.numberInplaceBinOp($lattr295, new Sk.builtin.int_(1), 'Add');
/*  2906 */                     $ret = undefined;
/*  2907 */                     if ($inplbinopattr296 !== undefined) {
/*  2908 */                         $ret = Sk.abstr.sattr(self, 'nums', $inplbinopattr296, true);
/*  2909 */                     }
/*  2910 */                     $blk = 4; /* allowing case fallthrough */
/*  2911 */                 case 4:
/*  2912 */                     /* --- function return or resume suspension --- */
/*  2913 */                     if ($ret && $ret.$isSuspension) {
/*  2914 */                         return $saveSuspension($ret, 'test/test_ast.py', 72, 8);
/*  2915 */                     }
/*  2916 */                     return Sk.builtin.none.none$;
/*  2917 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2918 */                 }
/*  2919 */             } catch (err) {
/*  2920 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  2921 */                     Sk.execStart = Date.now()
/*  2922 */                 }
/*  2923 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2924 */                     err = new Sk.builtin.ExternalError(err);
/*  2925 */                 }
/*  2926 */                 err.traceback.push({
/*  2927 */                     lineno: $currLineNo,
/*  2928 */                     colno: $currColNo,
/*  2929 */                     filename: 'test/test_ast.py'
/*  2930 */                 });
/*  2931 */                 if ($exc.length > 0) {
/*  2932 */                     $err = err;
/*  2933 */                     $blk = $exc.pop();
/*  2934 */                     continue;
/*  2935 */                 } else {
/*  2936 */                     throw err;
/*  2937 */                 }
/*  2938 */             }
/*  2939 */         }
/*  2940 */     });
/*  2941 */     return $scope120;
/*  2942 */ }();
['AST', 'Add', 'And', 'Assert', 'Assign', 'Attribute', 'AugAssign', 'AugLoad', 'AugStore', 'BinOp', 'BitAnd', 'BitOr', 'BitXor', 'BoolOp', 'Break_', 'Call', 'ClassDef', 'Compare', 'Continue_', 'Debugger_', 'Del', 'Delete_', 'Dict', 'DictComp', 'Div', 'Ellipsis', 'Eq', 'ExceptHandler', 'Exec', 'Expr', 'Expression', 'ExtSlice', 'FloorDiv', 'For_', 'FunctionDef', 'GeneratorExp', 'Global', 'Gt', 'GtE', 'IfExp', 'If_', 'ImportFrom', 'Import_', 'In_', 'Index', 'Interactive', 'Invert', 'Is', 'IsNot', 'LShift', 'Lambda', 'List', 'ListComp', 'Load', 'Lt', 'LtE', 'Mod', 'Module', 'Mult', 'Name', 'NodeVisitor', 'Not', 'NotEq', 'NotIn', 'Num', 'Or', 'Param', 'Pass', 'Pow', 'RShift', 'Raise', 'Repr', 'Return_', 'Set', 'SetComp', 'Slice', 'Store', 'Str', 'Sub', 'Subscript', 'Suite', 'TryExcept', 'TryFinally', 'Tuple', 'UAdd', 'USub', 'UnaryOp', 'While_', 'With_', 'Yield', '__doc__', '__name__', '__path__', 'alias', 'arguments_', 'boolop', 'cmpop', 'comprehension', 'dump', 'excepthandler', 'expr', 'expr_context', 'iter_child_nodes', 'iter_fields', 'keyword', 'mod', 'operator', 'parse', 'slice', 'stmt', 'unaryop', 'walk']

 P: Module
  P: Expr
   P: BinOp
    P: Num
    S: Add
    P: Num
<_ast.Module object>

[('body', [<_ast.Expr object>])]

[<_ast.Expr object>]

lineno 1

1 + 2

 P: Module
  P: For
   P: Name
    S: Store
   P: Name
    S: Load
   P: Assign
    P: Name
     S: Store
    P: Num
********************

for x in y:
    a = 0

FOR <_ast.Module object> should be Module

FOR <_ast.For object> should be For

FOR <_ast.Assign object> should be Assign

Module(body=[For(target=Name(id='x', ctx=Store(), lineno=1, col_offset=4, endlineno=1, col_endoffset=5), iter=Name(id='y', ctx=Load(), lineno=1, col_offset=9, endlineno=1, col_endoffset=10), body=[Assign(targets=[Name(id='a', ctx=Store(), lineno=2, col_offset=4, endlineno=2, col_endoffset=5)], value=Num(n=0, lineno=2, col_offset=8, endlineno=2, col_endoffset=9), lineno=2, col_offset=4, endlineno=2, col_endoffset=5)], orelse=[], lineno=1, col_offset=0, endlineno=1, col_endoffset=3)])

 P: Module
  P: For
   P: Name
    S: Store
   P: Name
    S: Load
   P: Expr
    P: BinOp
     P: BinOp
      P: Name
       S: Load
      S: Add
      P: Num
     S: Sub
     P: Num
  P: If
   P: Name
    S: Load
   P: TryExcept
    P: Assign
     P: Name
      S: Store
     P: Num
    P: ExceptHandler
     P: Expr
      P: Name
       S: Load
  P: FunctionDef
   P: arguments
   P: While
    P: Call
     P: Name
      S: Load
    P: Return
     P: Num
  P: ClassDef
   P: Name
    S: Load
   P: FunctionDef
    P: arguments
     P: Name
      S: Param
     P: Name
      S: Param
    P: Expr
     P: Call
      P: Attribute
       P: Name
        S: Load
       S: Load
      P: Num
      P: Num
      P: Num
  P: Expr
   P: BoolOp
    S: Or
    P: Str
    P: BoolOp
     S: And
     P: Num
     P: Num
  P: Assert
   P: Call
    P: Name
     S: Load
  P: AugAssign
   P: Name
    S: Store
   S: Add
   P: Name
    S: Load
  P: AugAssign
   P: Name
    S: Store
   S: Sub
   P: Name
    S: Load
  P: Expr
   P: BinOp
    P: Name
     S: Load
    S: BitOr
    P: Name
     S: Load
  P: AugAssign
   P: Subscript
    P: Name
     S: Load
    P: Index
     P: Num
    S: Store
   S: Add
   P: Num
  P: Expr
   P: Compare
    P: Num
    P: Num
  P: Expr
   P: UnaryOp
    S: Not
    P: Name
     S: Load
  P: Delete
   P: Subscript
    P: Name
     S: Load
    P: Index
     P: Str
    S: Del
  P: Import
   P: alias
  P: Expr
   P: Compare
    P: Num
    P: Num
iter_fields: [('target', <_ast.Name object>), ('iter', <_ast.Name object>), ('body', [<_ast.Expr object>]), ('orelse', [])]

iter_child_nodes: [<_ast.For object>, <_ast.If object>, <_ast.FunctionDef object>, <_ast.ClassDef object>, <_ast.Expr object>, <_ast.Assert object>, <_ast.AugAssign object>, <_ast.AugAssign object>, <_ast.Expr object>, <_ast.AugAssign object>, <_ast.Expr object>, <_ast.Expr object>, <_ast.Delete object>, <_ast.Import object>, <_ast.Expr object>]

walk: [<_ast.Module object>, <_ast.For object>, <_ast.Name object>, <_ast.Store object>, <_ast.Name object>, <_ast.Load object>, <_ast.Expr object>, <_ast.BinOp object>, <_ast.BinOp object>, <_ast.Name object>, <_ast.Load object>, <_ast.Add object>, <_ast.Num object>, <_ast.Sub object>, <_ast.Num object>, <_ast.If object>, <_ast.Name object>, <_ast.Load object>, <_ast.TryExcept object>, <_ast.Assign object>, <_ast.Name object>, <_ast.Store object>, <_ast.Num object>, <_ast.ExceptHandler object>, <_ast.Expr object>, <_ast.Name object>, <_ast.Load object>, <_ast.FunctionDef object>, <_ast.arguments object>, <_ast.While object>, <_ast.Call object>, <_ast.Name object>, <_ast.Load object>, <_ast.Return object>, <_ast.Num object>, <_ast.ClassDef object>, <_ast.Name object>, <_ast.Load object>, <_ast.FunctionDef object>, <_ast.arguments object>, <_ast.Name object>, <_ast.Param object>, <_ast.Name object>, <_ast.Param object>, <_ast.Expr object>, <_ast.Call object>, <_ast.Attribute object>, <_ast.Name object>, <_ast.Load object>, <_ast.Load object>, <_ast.Num object>, <_ast.Num object>, <_ast.Num object>, <_ast.Expr object>, <_ast.BoolOp object>, <_ast.Or object>, <_ast.Str object>, <_ast.BoolOp object>, <_ast.And object>, <_ast.Num object>, <_ast.Num object>, <_ast.Assert object>, <_ast.Call object>, <_ast.Name object>, <_ast.Load object>, <_ast.AugAssign object>, <_ast.Name object>, <_ast.Store object>, <_ast.Add object>, <_ast.Name object>, <_ast.Load object>, <_ast.AugAssign object>, <_ast.Name object>, <_ast.Store object>, <_ast.Sub object>, <_ast.Name object>, <_ast.Load object>, <_ast.Expr object>, <_ast.BinOp object>, <_ast.Name object>, <_ast.Load object>, <_ast.BitOr object>, <_ast.Name object>, <_ast.Load object>, <_ast.AugAssign object>, <_ast.Subscript object>, <_ast.Name object>, <_ast.Load object>, <_ast.Index object>, <_ast.Num object>, <_ast.Store object>, <_ast.Add object>, <_ast.Num object>, <_ast.Expr object>, <_ast.Compare object>, <_ast.Num object>, <_ast.Num object>, <_ast.Expr object>, <_ast.UnaryOp object>, <_ast.Not object>, <_ast.Name object>, <_ast.Load object>, <_ast.Delete object>, <_ast.Subscript object>, <_ast.Name object>, <_ast.Load object>, <_ast.Index object>, <_ast.Str object>, <_ast.Del object>, <_ast.Import object>, <_ast.alias object>, <_ast.Expr object>, <_ast.Compare object>, <_ast.Num object>, <_ast.Num object>]

Module(body=[For(target=Name(id='x', ctx=Store()), iter=Name(id='y', ctx=Load()), body=[Expr(value=BinOp(left=BinOp(left=Name(id='a', ctx=Load()), op=Add(), right=Num(n=1)), op=Sub(), right=Num(n=3)))], orelse=[]), If(test=Name(id='x', ctx=Load()), body=[TryExcept(body=[Assign(targets=[Name(id='a', ctx=Store())], value=Num(n=7))], handlers=[ExceptHandler(type=None, name=None, body=[Expr(value=Name(id='False', ctx=Load()))])], orelse=[])], orelse=[]), FunctionDef(name='T', args=arguments(args=[], vararg=None, kwarg=None, defaults=[]), body=[While(test=Call(func=Name(id='Banana', ctx=Load()), args=[], keywords=[], starargs=None, kwargs=None), body=[Return(value=Num(n=7))], orelse=[])], decorator_list=[]), ClassDef(name='X', bases=[Name(id='basic', ctx=Load())], body=[FunctionDef(name='define', args=arguments(args=[Name(id='apple', ctx=Param()), Name(id='banana', ctx=Param())], vararg=None, kwarg=None, defaults=[]), body=[Expr(value=Call(func=Attribute(value=Name(id='this', ctx=Load()), attr='__init__', ctx=Load()), args=[Num(n=7), Num(n=3), Num(n=4)], keywords=[], starargs=None, kwargs=None))], decorator_list=[])], decorator_list=[]), Expr(value=BoolOp(op=Or(), values=[Str(s='HEY'), BoolOp(op=And(), values=[Num(n=1), Num(n=2)])])), Assert(test=Call(func=Name(id='EXPLODE', ctx=Load()), args=[], keywords=[], starargs=None, kwargs=None), msg=None), AugAssign(target=Name(id='one', ctx=Store()), op=Add(), value=Name(id='one', ctx=Load())), AugAssign(target=Name(id='one', ctx=Store()), op=Sub(), value=Name(id='one', ctx=Load())), Expr(value=BinOp(left=Name(id='one', ctx=Load()), op=BitOr(), right=Name(id='one', ctx=Load()))), AugAssign(target=Subscript(value=Name(id='a', ctx=Load()), slice=Index(value=Num(n=0)), ctx=Store()), op=Add(), value=Num(n=100)), Expr(value=Compare(left=Num(n=5), ops=[], comparators=[Num(n=3)])), Expr(value=UnaryOp(op=Not(), operand=Name(id='True', ctx=Load()))), Delete(targets=[Subscript(value=Name(id='apple', ctx=Load()), slice=Index(value=Str(s='Hearted')), ctx=Del())]), Import(names=[alias(name='garbage', asname=None)]), Expr(value=Compare(left=Num(n=8), ops=[], comparators=[Num(n=7)]))])

****************************************

 P: Module
  P: Assign
   P: Name
    S: Store
   P: Num
  P: Expr
   P: BoolOp
    S: Or
    P: Call
     P: Name
      S: Load
     P: BinOp
      P: Name
       S: Load
      S: Add
      P: Num
    P: Num
VISIT $d
true
GV [object Object]
[object Object]
VISIT $d
true
GV [object Object]
[object Object]
VISIT $d
true
GV [object Object]
[object Object]
VISIT $d
true
GV [object Object]
[object Object]
VISIT $d
false
function $visit_Num290$(self, node) {
/*  2703 */         var node, node, self, self, $loadgbl291, $str292, $loadgbl291, $str292, $lattr293, $lattr295, $inplbinopattr296;
/*  2704 */         var $wakeFromSuspension = function() {
/*  2705 */             var susp = $scope289.$wakingSuspension;
/*  2706 */             delete $scope289.$wakingSuspension;
/*  2707 */             $blk = susp.$blk;
/*  2708 */             $loc = susp.$loc;
/*  2709 */             $gbl = susp.$gbl;
/*  2710 */             $exc = susp.$exc;
/*  2711 */             $err = susp.$err;
/*  2712 */             $postfinally = susp.$postfinally;
/*  2713 */             $currLineNo = susp.$lineno;
/*  2714 */             $currColNo = susp.$colno;
/*  2715 */             Sk.lastYield = Date.now();
/*  2716 */             node = susp.$tmps.node;
/*  2717 */             self = susp.$tmps.self;
/*  2718 */             $loadgbl291 = susp.$tmps.$loadgbl291;
/*  2719 */             $str292 = susp.$tmps.$str292;
/*  2720 */             $lattr293 = susp.$tmps.$lattr293;
/*  2721 */             $lattr295 = susp.$tmps.$lattr295;
/*  2722 */             $inplbinopattr296 = susp.$tmps.$inplbinopattr296;
/*  2723 */             try {
/*  2724 */                 $ret = susp.child.resume();
/*  2725 */             } catch (err) {
/*  2726 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  2727 */                     Sk.execStart = Date.now()
/*  2728 */                 }
/*  2729 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2730 */                     err = new Sk.builtin.ExternalError(err);
/*  2731 */                 }
/*  2732 */                 err.traceback.push({
/*  2733 */                     lineno: $currLineNo,
/*  2734 */                     colno: $currColNo,
/*  2735 */                     filename: 'test/test_ast.py'
/*  2736 */                 });
/*  2737 */                 if ($exc.length > 0) {
/*  2738 */                     $err = err;
/*  2739 */                     $blk = $exc.pop();
/*  2740 */                 } else {
/*  2741 */                     throw err;
/*  2742 */                 }
/*  2743 */             }
/*  2744 */         };
/*  2745 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2746 */             var susp = new Sk.misceval.Suspension();
/*  2747 */             susp.child = $child;
/*  2748 */             susp.resume = function() {
/*  2749 */                 $scope289.$wakingSuspension = susp;
/*  2750 */                 return $scope289();
/*  2751 */             };
/*  2752 */             susp.data = susp.child.data;
/*  2753 */             susp.$blk = $blk;
/*  2754 */             susp.$loc = $loc;
/*  2755 */             susp.$gbl = $gbl;
/*  2756 */             susp.$exc = $exc;
/*  2757 */             susp.$err = $err;
/*  2758 */             susp.$postfinally = $postfinally;
/*  2759 */             susp.$filename = $filename;
/*  2760 */             susp.$lineno = $lineno;
/*  2761 */             susp.$colno = $colno;
/*  2762 */             susp.optional = susp.child.optional;
/*  2763 */             susp.$tmps = {
/*  2764 */                 "node": node,
/*  2765 */                 "self": self,
/*  2766 */                 "$loadgbl291": $loadgbl291,
/*  2767 */                 "$str292": $str292,
/*  2768 */                 "$lattr293": $lattr293,
/*  2769 */                 "$lattr295": $lattr295,
/*  2770 */                 "$inplbinopattr296": $inplbinopattr296
/*  2771 */             };
/*  2772 */             return susp;
/*  2773 */         };
/*  2774 */         var $blk = 0,
/*  2775 */             $exc = [],
/*  2776 */             $loc = {},
/*  2777 */             $gbl = this,
/*  2778 */             $err = undefined,
/*  2779 */             $ret = undefined,
/*  2780 */             $postfinally = undefined,
/*  2781 */             $currLineNo = undefined,
/*  2782 */             $currColNo = undefined;
/*  2783 */         if (typeof Sk.execStart === 'undefined') {
/*  2784 */             Sk.execStart = Date.now()
/*  2785 */         }
/*  2786 */         if (typeof Sk.lastYield === 'undefined') {
/*  2787 */             Sk.lastYield = Date.now()
/*  2788 */         }
/*  2789 */         if ($scope289.$wakingSuspension !== undefined) {
/*  2790 */             $wakeFromSuspension();
/*  2791 */         } else {
/*  2792 */             Sk.builtin.pyCheckArgs("visit_Num", arguments, 2, 2, false, false);
/*  2793 */         }
/*  2794 */         while (true) {
/*  2795 */             try {
/*  2796 */                 var $dateNow = Date.now();
/*  2797 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  2798 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2799 */                 }
/*  2800 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  2801 */                     var $susp = $saveSuspension({
/*  2802 */                         data: {
/*  2803 */                             type: 'Sk.yield'
/*  2804 */                         },
/*  2805 */                         resume: function() {}
/*  2806 */                     }, 'test/test_ast.py', $currLineNo, $currColNo);
/*  2807 */                     $susp.$blk = $blk;
/*  2808 */                     $susp.optional = true;
/*  2809 */                     return $susp;
/*  2810 */                 }
/*  2811 */                 switch ($blk) {
/*  2812 */                 case 0:
/*  2813 */                     /* --- codeobj entry --- */
/*  2814 */                     if (self === undefined) {
/*  2815 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2816 */                     }
/*  2817 */                     if (node === undefined) {
/*  2818 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  2819 */                     }
/*  2820 */ 
/*  2821 */                     //
/*  2822 */                     // line 71:
/*  2823 */                     //         print("Found a ", node.n)
/*  2824 */                     //         ^
/*  2825 */                     //
/*  2826 */                     Sk.currLineNo = 71;
/*  2827 */                     Sk.currColNo = 8;
/*  2828 */ 
/*  2829 */ 
/*  2830 */                     Sk.currFilename = 'test/test_ast.py';
/*  2831 */ 
/*  2832 */ 
/*  2833 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  2834 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  2835 */                     }
/*  2836 */                     $currLineNo = 71;
/*  2837 */                     $currColNo = 8;
/*  2838 */ 
/*  2839 */                     var $loadgbl291 = Sk.misceval.loadname('print', $gbl);
/*  2840 */                     var $str292 = new Sk.builtins['str']('Found a ');
/*  2841 */                     if (node === undefined) {
/*  2842 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  2843 */                     }
/*  2844 */                     $ret = Sk.abstr.gattr(node, 'n', true);
/*  2845 */                     $blk = 1; /* allowing case fallthrough */
/*  2846 */                 case 1:
/*  2847 */                     /* --- function return or resume suspension --- */
/*  2848 */                     if ($ret && $ret.$isSuspension) {
/*  2849 */                         return $saveSuspension($ret, 'test/test_ast.py', 71, 26);
/*  2850 */                     }
/*  2851 */                     var $lattr293 = $ret;
/*  2852 */                     $ret;
/*  2853 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl291, $str292, $lattr293);
/*  2854 */                     $blk = 2; /* allowing case fallthrough */
/*  2855 */                 case 2:
/*  2856 */                     /* --- function return or resume suspension --- */
/*  2857 */                     if ($ret && $ret.$isSuspension) {
/*  2858 */                         return $saveSuspension($ret, 'test/test_ast.py', 71, 8);
/*  2859 */                     }
/*  2860 */                     var $call294 = $ret;
/*  2861 */                     //
/*  2862 */                     // line 71:
/*  2863 */                     //         print("Found a ", node.n)
/*  2864 */                     //         ^
/*  2865 */                     //
/*  2866 */                     Sk.currLineNo = 71;
/*  2867 */                     Sk.currColNo = 8;
/*  2868 */ 
/*  2869 */ 
/*  2870 */                     Sk.currFilename = 'test/test_ast.py';
/*  2871 */ 
/*  2872 */                     $currLineNo = 71;
/*  2873 */                     $currColNo = 8;
/*  2874 */ 
/*  2875 */ 
/*  2876 */                     //
/*  2877 */                     // line 72:
/*  2878 */                     //         self.nums += 1
/*  2879 */                     //         ^
/*  2880 */                     //
/*  2881 */                     Sk.currLineNo = 72;
/*  2882 */                     Sk.currColNo = 8;
/*  2883 */ 
/*  2884 */ 
/*  2885 */                     Sk.currFilename = 'test/test_ast.py';
/*  2886 */ 
/*  2887 */ 
/*  2888 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  2889 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename);
/*  2890 */                     }
/*  2891 */                     $currLineNo = 72;
/*  2892 */                     $currColNo = 8;
/*  2893 */ 
/*  2894 */                     if (self === undefined) {
/*  2895 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2896 */                     }
/*  2897 */                     $ret = Sk.abstr.gattr(self, 'nums', true);
/*  2898 */                     $blk = 3; /* allowing case fallthrough */
/*  2899 */                 case 3:
/*  2900 */                     /* --- function return or resume suspension --- */
/*  2901 */                     if ($ret && $ret.$isSuspension) {
/*  2902 */                         return $saveSuspension($ret, 'test/test_ast.py', 72, 8);
/*  2903 */                     }
/*  2904 */                     var $lattr295 = $ret;
/*  2905 */                     var $inplbinopattr296 = Sk.abstr.numberInplaceBinOp($lattr295, new Sk.builtin.int_(1), 'Add');
/*  2906 */                     $ret = undefined;
/*  2907 */                     if ($inplbinopattr296 !== undefined) {
/*  2908 */                         $ret = Sk.abstr.sattr(self, 'nums', $inplbinopattr296, true);
/*  2909 */                     }
/*  2910 */                     $blk = 4; /* allowing case fallthrough */
/*  2911 */                 case 4:
/*  2912 */                     /* --- function return or resume suspension --- */
/*  2913 */                     if ($ret && $ret.$isSuspension) {
/*  2914 */                         return $saveSuspension($ret, 'test/test_ast.py', 72, 8);
/*  2915 */                     }
/*  2916 */                     return Sk.builtin.none.none$;
/*  2917 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2918 */                 }
/*  2919 */             } catch (err) {
/*  2920 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  2921 */                     Sk.execStart = Date.now()
/*  2922 */                 }
/*  2923 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2924 */                     err = new Sk.builtin.ExternalError(err);
/*  2925 */                 }
/*  2926 */                 err.traceback.push({
/*  2927 */                     lineno: $currLineNo,
/*  2928 */                     colno: $currColNo,
/*  2929 */                     filename: 'test/test_ast.py'
/*  2930 */                 });
/*  2931 */                 if ($exc.length > 0) {
/*  2932 */                     $err = err;
/*  2933 */                     $blk = $exc.pop();
/*  2934 */                     continue;
/*  2935 */                 } else {
/*  2936 */                     throw err;
/*  2937 */                 }
/*  2938 */             }
/*  2939 */         }
/*  2940 */     }
UNCAUGHT EXCEPTION: TypeError: visit_Num() takes exactly 2 arguments (3 given) on line 75
