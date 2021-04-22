(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Animation_atlas_1", frames: [[1050,0,272,452],[1597,0,268,452],[1324,0,271,452],[297,321,216,118],[0,321,295,178],[0,0,1048,319]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Animation_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Animation_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Animation_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Animation_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Animation_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Animation_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wheelleft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.729)").ss(1,1,1).p("AirkVQBNgiBeAAQCbAABsBbQAMAKALAKQBXBVAABzQAAAegGAbQgTBdhVBGQgqAkhbAoQgjAQhfAAQiaAAhthcQgYgUgTgWIEyiyICCEoAirkVICrEVIEejIAlug3QATheBUhHQArgjAxgWAAAAAIFvA5AkyCyQhChOAAhkQAAgcAGgbIFuA3");
	this.shape.setTransform(32.675,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AkHDdQgYgVgTgWIEyiyICCEoQgjAQhfAAQiaAAhthbgAAAAAIlug3IFuA3IkyCyQhChOAAhkQAAgcAGgbQATheBUhHQArgjAxgWICrEVIirkVQBNgiBeAAQCbAABsBbIAXAVQBXBUAABzQAAAegGAbIlvg5IEejHIkeDHIFvA5QgTBdhVBHQgqAjhbAogAAAAAg");
	this.shape_1.setTransform(32.675,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wheelleft, new cjs.Rectangle(-5.6,5.3,76.6,64.4), null);


(lib.waves = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgPnQBqC0FjAUQGGjGFogCQDaDwF+BkQHplTFLgBQDZFyGpifQGpigEHgzQiHC/KWhwQKIhrD2hwQCsH7IRi3QGniSHRgmQAaFXEjh/QG5jADAhoQAdGuJViRQFljRFIAEQixGWHFjTQHEjTApgYQCuFmF0jSQFzjTFFBnQhrFVIljTQIljUABA+QgnICUlnuMAAAAhbMjTJAAA");
	this.shape.setTransform(675.675,114.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCFF").s().p("EhpkAR0MAAAghbQBqC0FjAUQGGjGFogCQDaDwF+BkQHplTFLgBQDZFyGpifQGpigEHgzQiHC/KWhwQKIhrD2hwQCsH7IRi3QGniSHRgmQAaFXEjh/QG5jADAhoQAdGuJViRQFljRFIAEQixGWHFjTQHEjTApgYQCuFmF0jSQFzjTFFBnQhrFVIljTQIljUABA+QgnICUlnuMAAAAhbg");
	this.shape_1.setTransform(675.675,114.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgPpQAlA/BGAqQBXAwCDAYQBJASBZAHQAUgIATgJQB/g/B4gnQBngZBqgXQBtgYBmgIQAlABAtgBQAgAhAmAeQBrBSB7A9QBqBCCDAjQAwANAzAMQBGguBEgnQA6gdA9ghQBig2BXgnQBrglBugbQBsgeBhgBQDCFbGBh2QAbgIAcgLQFgiEDsg6QAzgLAugIQiCDAKPhxQAigFAhgGQJMhoDshmQCmH0IIiyQGgiOHKgnQAcFNEYh5QG3i+C9hnQAfGkJKiOQFhjOFBAFQisGPG7jNQG7jNAqgXQCrFfFvjOQFtjOFBBkQhnFOIajQQIbjPADA8QgiH1UNnlQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_2.setTransform(675.675,114.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CCFF").s().p("EhpkARzMAAAghcQAlA/BGAqQBXAwCDAYQBJASBZAHIAngRQB/g/B4gnQBngZBqgXQBtgYBmgIIBSAAQAgAhAmAeQBrBSB7A9QBqBCCDAjQAwANAzAMQBGguBEgnQA6gdA9ghQBig2BXgnQBrglBugbQBsgeBhgBQDCFbGBh2IA3gTQFgiEDsg6IBhgTQiCDAKPhxIBDgLQJMhoDshmQCmH0IIiyQGgiOHKgnQAcFNEYh5QG3i+C9hnQAfGkJKiOQFhjOFBAFQisGPG7jNQG7jNAqgXQCrFfFvjOQFtjOFBBkQhnFOIajQQIbjPADA8QgiH1UNnlMAAAAhcMjTJAAAg");
	this.shape_3.setTransform(675.675,114.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgPqQAnBBBMApQBeAsCIAXQBLAWBdAJQAVgIAVgIQCGhGB9glQBqgQBxgbQB0gbBqgIQAiADAxgBQAjAgAqAcQB3BPB+A5QBrBLCMAfQAzAMA1AKQBLgvBJgmQA5gUBCgkQBqg5BYgoQBqgbB4geQBygiBmAAQC6FcGCh4QAcgIAcgLQFgiGDog4QAygLAugHQh7DBKGhxQAjgGAggGQJIhqDthhQCiHsH+iuQGYiJHFgoQAcFFEUh2QGvi7C7hlQAhGZI/iLQFdjKE5AFQioGIGxjHQGzjHArgWQCpFYFpjJQFnjKE8BhQhjFGIRjLQIQjMAFA7QgdHpT1ncQAAQtAAQuUhplAAAhpkAAAQAAwuAAwtg");
	this.shape_4.setTransform(675.675,114.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33CCFF").s().p("EhpkARxMAAAghbQAnBBBMApQBeAsCIAXQBLAWBdAJIAqgQQCGhGB9glQBqgQBxgbQB0gbBqgIQAiADAxgBQAjAgAqAcQB3BPB+A5QBrBLCMAfQAzAMA1AKQBLgvBJgmQA5gUBCgkQBqg5BYgoIDig5QBygiBmAAQC6FcGCh4QAcgIAcgLQFgiGDog4QAygLAugHQh7DBKGhxIBDgMQJIhqDthhQCiHsH+iuQGYiJHFgoQAcFFEUh2QGvi7C7hlQAhGZI/iLQFdjKE5AFQioGIGxjHQGzjHArgWQCpFYFpjJQFnjKE8BhQhjFGIRjLQIQjMAFA7QgdHpT1ncMAAAAhbMjTJAAAg");
	this.shape_5.setTransform(675.675,114.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgPsQAoBFBTAoQBlAmCMAWQBOAaBhALQAWgHAWgHQCPhMCCgkQBsgIB3gdQB8gfBtgJQAfAGA3gBQAlAfAuAbQCDBLCBA1QBsBVCVAZQA1ALA4AJQBPgvBOgmQA4gMBIgmQBxg8BbgpQBogRCDghQB4gmBrAAQCxFeGEh6QAbgJAcgKQFiiIDkg3QAxgJAtgHQh0DDJ+hyQAigGAhgGQJChtDwhdQCcHmH2iqQGPiGG/gnQAdE9EQh0QGni4C5hjQAjGPIziJQFZjHEzAGQilGBGojBQGqjBAsgVQCnFRFjjFQFgjFE4BfQhfE+IHjHQIGjIAHA5QgYHcTdnTQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_6.setTransform(675.675,114.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33CCFF").s().p("EhpkARwMAAAghcQAoBFBTAoQBlAmCMAWQBOAaBhALIAsgOQCPhMCCgkQBsgIB3gdQB8gfBtgJQAfAGA3gBQAlAfAuAbQCDBLCBA1QBsBVCVAZQA1ALA4AJQBPgvBOgmQA4gMBIgmQBxg8BbgpQBogRCDghQB4gmBrAAQCxFeGEh6IA3gTQFiiIDkg3QAxgJAtgHQh0DDJ+hyIBDgMQJChtDwhdQCcHmH2iqQGPiGG/gnQAdE9EQh0QGni4C5hjQAjGPIziJQFZjHEzAGQilGBGojBIHWjWQCnFRFjjFQFgjFE4BfQhfE+IHjHQIGjIAHA5QgYHcTdnTMAAAAhcMjTJAAAg");
	this.shape_7.setTransform(675.675,114.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgPtQAqBHBZAoQBrAgCSAWQBQAeBmANQAXgGAXgHQCXhSCGgkQBvABB+ggQCCghBygLQAcAKA8gCQAnAfAyAZQCPBGCDAyQBuBfCeAUQA4AJA6AIQBUgvBSgmQA4gEBMgoQB5g/BegrQBmgGCOgjQB9gqBwAAQCpFfGGh8QAbgJAcgKQFjiJDfg3QAxgIAsgFQhuDDJ3hyQAhgGAhgHQI+hvDxhYQCYHeHsilQGIiCG5goQAdE2EMhzQGfi0C3hiQAkGFIpiGQFUjEEsAHQihF6Gfi7QGgi7AugUQCkFKFejBQFajAEzBcQhaE2H8jDQH8jDAJA2QgTHRTFnKQAAQtAAQuUhplAAAhpkAAAQAAwuAAwtg");
	this.shape_8.setTransform(675.675,114.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#33CCFF").s().p("EhpkARuMAAAghbQAqBHBZAoQBrAgCSAWQBQAeBmANIAugNQCXhSCGgkQBvABB+ggQCCghBygLQAcAKA8gCQAnAfAyAZQCPBGCDAyQBuBfCeAUIByARQBUgvBSgmQA4gEBMgoQB5g/BegrQBmgGCOgjQB9gqBwAAQCpFfGGh8QAbgJAcgKQFjiJDfg3QAxgIAsgFQhuDDJ3hyIBCgNQI+hvDxhYQCYHeHsilQGIiCG5goQAdE2EMhzQGfi0C3hiQAkGFIpiGQFUjEEsAHQihF6Gfi7QGgi7AugUQCkFKFejBQFajAEzBcQhaE2H8jDQH8jDAJA2QgTHRTFnKMAAAAhbMjTJAAAg");
	this.shape_9.setTransform(675.675,114.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgPvQArBKBgAnQByAbCXAWQBSAhBqAQQAYgGAYgGQCfhYCLgjQBxAKCGgkQCJgkB1gLQAZAMBCgCQApAeA1AYQCcBCCGAtQBvBpCnAQQA6AHA9AHQBYgwBYglQA3AEBRgqQCBhCBggsQBkAECZgmQCDguB1AAQChFgGHh9QAagJAcgLQFliKDag2QAxgHArgEQhnDEJuhzQAigGAggGQI5hyDzhUQCUHXHiigQGBh/GygnQAeEtEHhwQGYixC0hgQAnF6IdiDQFRjAEkAHQidFzGWi1QGXi1AugSQCjFCFYi8QFUi9EvBaQhXEvHzi/QHyi/AKA0QgPHFSunCQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_10.setTransform(675.675,114.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#33CCFF").s().p("EhpkARtMAAAghcQArBKBgAnQByAbCXAWQBSAhBqAQIAwgMQCfhYCLgjQBxAKCGgkQCJgkB1gLQAZAMBCgCQApAeA1AYQCcBCCGAtQBvBpCnAQIB3AOQBYgwBYglQA3AEBRgqQCBhCBggsQBkAECZgmQCDguB1AAQChFgGHh9IA2gUQFliKDag2QAxgHArgEQhnDEJuhzIBCgMQI5hyDzhUQCUHXHiigQGBh/GygnQAeEtEHhwQGYixC0hgQAnF6IdiDQFRjAEkAHQidFzGWi1QGXi1AugSQCjFCFYi8QFUi9EvBaQhXEvHzi/QHyi/AKA0QgPHFSunCMAAAAhcMjTJAAAg");
	this.shape_11.setTransform(675.675,114.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgPxQAtBMBlAnQB5AWCcAVQBVAlBuASQAZgFAagGQCnheCQgiQBzATCNgnQCQgnB5gMQAWAPBHgCQArAdA5AWQCnA+CJAqQBxByCwALQA8AGBAAFQBdgwBcglQA2ANBXgsQCIhFBiguQBjAOCkgoQCIgyB6AAQCZFiGIiAQAbgJAcgKQFmiMDWg1QAvgGAsgDQhhDFJmh0QAhgGAggHQI0h0D2hOQCOHOHYibQF7h6GrgpQAgEmEChuQGRiuCxheQApFwIRiBQFNi8EdAIQiZFsGNiwQGOivAvgRQChE7FSi3QFOi4EqBXQhTEnHpi7QHoi7AMAzQgKG4SWm5QAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_12.setTransform(675.675,114.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#33CCFF").s().p("EhpkARrMAAAghbQAtBLBlAnQB5AWCcAVQBVAlBuASIAzgKQCnhfCQghQBzASCNgmQCQgnB5gNQAWAPBHgCQArAdA5AWQCnA+CJAqQBxByCwALIB8AMQBdgxBcglQA2AOBXgsQCIhGBiguQBjAPCkgpQCIgyB6ABQCZFhGIiAQAbgJAcgKQFmiLDWg2QAvgGAsgDQhhDFJmh0IBBgMQI0h1D2hOQCOHPHYicQF7h6GrgpQAgEmEChuQGRiuCxheQApFxIRiCQFNi8EdAIQiZFsGNiwQGOivAvgQQChE7FSi4QFOi4EqBXQhTEoHpi7QHoi8AMAzQgKG4SWm4MAAAAhbMjTJAAAg");
	this.shape_13.setTransform(675.675,114.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgPyQAuBOBsAnQCAAQChAUQBXApByAUQAagEAcgFQCuhkCVghQB2AbCUgpQCXgqB8gOQAUASBMgCQAtAcA9AVQCzA5CMAmQByB9C5AGQA/AEBCAEQBhgwBhglQA2AVBcguQCQhIBkgvQBhAYCvgrQCNg1CAAAQCQFjGKiDQAbgIAbgLQFoiMDRg1QAvgFArgCQhbDHJfh1QAhgGAggHQIvh3D3hKQCKHIHPiXQFzh3GlgoQAgEeD+htQGJiqCvhdQAqFmIHh+QFJi5EWAJQiWFlGEiqQGFipAwgQQCeE0FNizQFIizElBUQhOEgHei3QHei3AOAxQgFGrR+mvQAAQtAAQvUhplAAAhpkAAAQAAwvAAwtg");
	this.shape_14.setTransform(675.675,115.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#33CCFF").s().p("EhpkARqMAAAghcQAuBOBsAnIEhAkQBXApByAVIA2gJQCuhlCVghQB2AcCUgqQCXgqB8gOQAUATBMgDQAtAcA9AVQCzA5CMAmQByB9C5AGICBAJQBhgxBhglQA2AWBcgvQCQhIBkgvQBhAYCvgqQCNg2CAAAQCQFjGKiCQAbgJAbgKQFoiNDRg1QAvgEArgDQhbDHJfh0IBBgOQIvh3D3hJQCKHHHPiWQFzh3GlgpQAgEeD+hsQGJirCvhcQAqFlIHh+QFJi4EWAIQiWFmGEiqQGFiqAwgQQCeE1FNi0QFIizElBVQhOEfHei3QHei3AOAxQgFGsR+mwMAAAAhcMjTJAAAg");
	this.shape_15.setTransform(675.675,115.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgP0QAwBSByAmQCHAKCmAUQBYAtB3AWQAcgEAcgEQC3hqCZghQB5AlCbgtQCegtCAgOQAQAUBSgCQAvAbBBAUQC/A1CPAiQBzCGDBABQBCADBFADQBmgwBmglQA1AdBhgwQCXhLBngxQBfAjC6gtQCTg6CEAAQCJFkGLiEQAbgJAbgKQFoiODOg0QAugDAqgCQhUDIJWh1QAhgHAggHQIqh5D6hFQCEHAHGiSQFrhzGfgpQAhEWD5hqQGCinCshbQAtFcH7h8QFFi2EPAKQiSFeF6ikQF9ijAxgOQCcEsFHiuQFCivEhBRQhLEYHVizQHTiyAQAvQAAGfRmmnQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_16.setTransform(675.675,115.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#33CCFF").s().p("EhpkARoMAAAghbQAwBRByAmQCHAKCmAUQBYAtB3AWIA4gHQC3hrCZghQB5AlCbgtQCegtCAgOQAQAVBSgCQAvAaBBAUQC/A1CPAjQBzCGDBABICHAFQBmgwBmglQA1AeBhgwQCXhMBngxQBfAkC6guQCTg6CEABQCJFjGLiEIA2gTQFoiODOgzIBYgGQhUDIJWh1IBBgNQIqh6D6hFQCEHAHGiSQFrhzGfgoQAhEVD5hqQGCinCshbQAtFcH7h8QFFi2EPAKQiSFfF6ikQF9ijAxgPQCcEsFHiuQFCivEhBSQhLEYHVi0QHTiyAQAvQAAGfRmmmMAAAAhbMjTJAAAg");
	this.shape_17.setTransform(675.675,115.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgP1QAxBUB5AlQCNAFCrATQBbAxB8AYQAcgCAegEQC/hwCdggQB8AtCigvQClgxCDgPQAOAYBWgDQAyAaBFASQDLAyCRAeQB1CQDKgEQBFABBHACQBqgxBrgkQA0AmBmgzQCfhOBqgyQBdAtDEgwQCZg+CKABQCAFlGNiGQAagJAbgKQFqiQDJgzQAugCApgBQhNDJJOh1QAhgHAfgHQImh8D7hBQCAG5G8iNQFkhvGZgpQAhEOD1hoQF6ikCqhZQAvFRHwh5QFAiyEIAKQiOFXFxieQFzidAzgNQCaElFBiqQE8iqEcBPQhHEQHLivQHJiuASAtQAFGSROmdQAAQtAAQvUhplAAAhpkAAAQAAwvAAwtg");
	this.shape_18.setTransform(675.675,115.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#33CCFF").s().p("EhpkARnMAAAghcQAxBUB5AmQCNAFCrASQBbAyB8AXIA6gFQC/hxCdgfQB8AsCigvQClgxCDgPQAOAYBWgCQAyAZBFATQDLAxCRAeQB1CQDKgEICMADQBqgwBrglQA0AmBmgzQCfhOBqgyQBdAtDEgvQCZg+CKAAQCAFlGNiFIA1gUQFqiPDJg0QAugCApAAQhNDIJOh1IBAgOQImh8D7hAQCAG4G8iMQFkhwGZgpQAhEOD1hoQF6ikCqhZQAvFSHwh6QFAiyEIAKQiOFYFxifQFzicAzgOQCaElFBiqQE8iqEcBPQhHEQHLiuQHJivASAtQAFGSROmdMAAAAhcMjTJAAAg");
	this.shape_19.setTransform(675.675,115.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgP3QAzBXB/AlQCUgBCwATQBdA1CAAaQAdgCAfgDQDHh2CjgfQB9A2CqgzQCsgzCHgQQALAaBbgDQA0AaBJAQQDXAtCUAbQB2CZDTgIQBHgBBKABQBvgxBwgkQAzAuBrg0QCnhSBrg0QBcA4DPgyQCehCCPAAQB4FnGPiIQAagJAbgKQFriRDFgzQAsgBAqAAQhIDLJHh3QAggHAfgHQIhh+D+g8QB6GxG0iIQFchsGSgpQAjEGDwhmQFyigCohYQAwFHHlh2QE9ivEBALQiLFQFoiYQFqiXAzgMQCYEeE8imQE2ilEXBMQhCEIHBiqQG+iqAUAqQAJGHQ3mVQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_20.setTransform(675.675,115.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#33CCFF").s().p("EhpkARlMAAAghbQAzBWB/AlQCUgBCwATQBdA1CAAaIA8gEQDHh3CjgfQB9A2CqgzQCsgzCHgQQALAbBbgEQA0AaBJAQQDXAtCUAbQB2CZDTgIICRAAQBvgxBwgkQAzAuBrg0QCnhSBrg0QBcA4DPgyQCehCCPABQB4FmGPiIIA1gTQFriRDFgzIBWgBQhIDLJHh2IA/gPQIhh+D+g8QB6GxG0iIQFchsGSgpQAjEGDwhlQFyihCohYQAwFIHlh3QE9iuEBAKQiLFQFoiXQFqiYAzgMQCYEeE8ilQE2imEXBMQhCEIHBiqQG+iqAUAqQAJGHQ3mUMAAAAhbMjTJAAAg");
	this.shape_21.setTransform(675.675,115.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgP4QA0BZCGAlQCagHC2ASQBfA5CEAdQAfgCAggCQDPh9CngeQCAA/Cxg2QCzg2CKgRQAIAdBhgDQA3AZBMAPQDjApCWAWQB4CkDcgNQBKgCBMgBQBzgyB1gjQAzA2Bwg2QCuhVBug1QBaBCDag1QCkhGCUABQBvFoGQiLQAagIAbgLQFtiSDAgxQAsAAApABQhBDLI+h3QAggHAggIQIciAD+g4QB2GqGriDQFVhoGMgqQAjD/DrhkQFridClhWQAzE9Hah0QE4irD6ALQiHFKFfiTQFhiRA0gLQCWEXE2ihQEwihETBJQg/EBG3inQG0imAWApQAOF6QfmLQAAQtAAQvUhplAAAhpkAAAQAAwvAAwtg");
	this.shape_22.setTransform(675.675,115.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#33CCFF").s().p("EhpkARkMAAAghcQA0BZCGAlQCagHC2ASQBfA6CEAcIA/gEQDPh9CngeQCABACxg3QCzg1CKgSQAIAdBhgDQA3AaBMAPQDjAoCWAXQB4CjDcgNQBKgCBMgBQBzgyB1gjQAzA2Bwg2IEciKQBaBDDag2QCkhFCUAAQBvFoGQiKQAagJAbgKQFtiSDAgyIBVABQhBDLI+h3IBAgOQIciBD+g4QB2GqGriDQFVhoGMgpQAjD+DrhkQFridClhWQAzE9Hah0QE4irD6ALQiHFKFfiSQFhiSA0gKQCWEWE2ihQEwihETBKQg/EAG3imQG0imAWAoQAOF6QfmLMAAAAhcMjTJAAAg");
	this.shape_23.setTransform(675.675,115.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgP6QA2BcCMAkQChgMC6ASQBiA9CIAeQAgAAAhgCQDXiDCsgdQCDBHC4g4QC6g5COgTQAFAhBmgEQA4AYBQAOQDwAkCZATQB6CuDkgTQBMgDBPgBQB4gzB5gjQAzA+B1g4QC2hYBwg2QBYBMDlg4QCphJCZAAQBoFqGRiNQAagJAbgKQFuiTC8gxQArABAoACQg6DMI2h3QAggHAfgIQIXiDEAgzQByGiGhh+QFOhlGFgpQAkD3DnhjQFjiZCjhVQA1EzHOhxQE1ioDyAMQiDFDFWiNQFYiLA1gKQCUEQEwidQEpicEPBHQg7D4GtiiQGriiAXAnQATFuQHmDQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_24.setTransform(675.675,115.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#33CCFF").s().p("EhpkARiMAAAghbQA2BbCMAlQChgMC6ARQBiA9CIAfIBBgDQDXiCCsgdQCDBHC4g5QC6g5COgSQAFAgBmgDQA4AYBQANQDwAkCZATQB6CuDkgSQBMgEBPgBQB4gyB5gkQAzA/B1g5IEmiOQBYBNDlg4QCphKCZABQBoFpGRiNIA1gSQFuiUC8gxIBTADQg6DMI2h3IA/gPQIXiDEAgzQByGiGhh+QFOhkGFgqQAkD3DnhjQFjiZCjhUQA1EzHOhyQE1ioDyAMQiDFDFWiNQFYiLA1gJQCUEPEwidQEpicEPBHQg7D5GtiiQGriiAXAnQATFtQHmCMAAAAhbMjTJAAAg");
	this.shape_25.setTransform(675.675,115.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgP7QA4BeCRAkQCpgRC/ARQBkBACNAhQAgAAAjgBQDfiJCxgcQCFBQC/g8QDBg8CRgTQADAjBrgDQA7AWBTANQD7AgCdAPQB7C3DtgXQBOgFBSgCQB8gzB/gjQAxBHB7g7QC9hbBzg4QBWBXDwg6QCvhOCeABQBfFqGTiOQAagJAagKQFwiVC3gwQArACAnADQg0DNIvh4QAfgHAfgIQIRiFEEgvQBsGbGZh5QFFhhGAgqQAkDvDjhgQFbiWChhTQA2EoHDhuQExilDrANQh/E8FNiHQFPiFA2gJQCREIEriXQEjiYEKBEQg2DxGjieQGgieAZAlQAYFiPvl6QAAQtAAQvUhplAAAhpkAAAQAAwvAAwtg");
	this.shape_26.setTransform(675.675,116);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#33CCFF").s().p("EhpkARhMAAAghcQA4BeCRAkQCpgRC/ARQBkBACNAhIBDgBQDfiJCxgcQCFBQC/g8QDBg7CRgUQADAjBrgDQA7AWBTANQD7AgCdAPQB7C4DtgYQBOgFBSgCQB8gzB/gjQAxBHB7g7IEwiTQBWBXDwg6QCvhOCeABQBfFqGTiNIA0gUQFwiVC3gwIBSAFQg0DNIvh3IA+gPQIRiGEEguQBsGaGZh5QFFhhGAgpQAkDuDjhgQFbiWChhSQA2EoHDhvQExilDrANQh/E8FNiGQFPiGA2gIQCREHEriXQEjiYEKBEQg2DxGjieQGgieAZAmQAYFhPvl6MAAAAhcMjTJAAAg");
	this.shape_27.setTransform(675.675,116);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgP9QA5BhCYAjQCvgWDFAQQBmBFCRAiQAiABAjAAQDoiPC1gcQCIBZDGg+QDIg/CVgVQgBAmBxgDQA9AWBXALQEHAbCfAMQB9DBD2gcQBRgHBVgDQCAg0CDgiQAxBPB/g9QDGheB0g5QBVBhD7g9QC0hSCjABQBXFsGViQQAZgJAbgKQFwiXC0gvQApAEAnADQgtDPImh5QAggHAegJQINiHEFgqQBoGTGPh1QE+hcF5grQAmDoDehfQFUiSCehRQA4EeG4hsQEsihDlANQh8E1FDiBQFHh/A3gHQCPEAEliTQEdiUEGBCQgzDpGZiaQGWiZAbAjQAdFVPXlxQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_28.setTransform(675.675,116.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#33CCFF").s().p("EhpkARfMAAAghbQA5BhCYAiQCvgWDFARQBmBECRAiQAiACAjgBQDoiPC1gcQCIBZDGg+QDIg/CVgUQgBAlBxgDQA9AWBXALQEHAbCfAMQB9DBD2gcQBRgGBVgEQCAgzCDgjQAxBPB/g9QDGheB0g5QBVBhD7g8QC0hTCjACQBXFsGViRIA0gTQFwiXC0guIBQAHQgtDOImh5QAggHAegJQINiHEFgqQBoGTGPh0QE+hdF5gqQAmDnDeheQFUiTCehRQA4EeG4hsQEsihDlAOQh8E0FDiAQFHiAA3gHQCPEAEliTQEdiUEGBCQgzDpGZiZQGWiaAbAkQAdFUPXlwMAAAAhbMjTJAAAg");
	this.shape_29.setTransform(675.675,116.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgP+QA7BjCeAjQC2gcDKAQQBoBICVAlQAjACAlAAQDviVC6gbQCKBiDNhCQDQhCCYgVQgDApB2gEQA/AVBbAJQETAYCiAHQB+DLD/ghQBTgIBYgEQCEg0CJgiQAwBXCEg/QDNhhB3g7QBTBsEFhAQC6hVCpABQBOFtGWiSQAagJAagLQFyiXCvgvQApAFAnAFQgoDPIfh5QAfgIAfgIQIHiKEIgmQBiGMGGhwQE3hZFygqQAnDfDZhcQFNiPCbhQQA7EUGshpQEpieDdAOQh4EuE6h7QE9h5A4gGQCOD5EfiPQEXiPEBA/QgvDiGQiWQGLiVAdAhQAhFJPAloQAAQtAAQvUhplAAAhpkAAAQAAwvAAwtg");
	this.shape_30.setTransform(675.675,116.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#33CCFF").s().p("EhpkAReMAAAghcQA7BjCeAjQC2gcDKAQQBoBJCVAkQAjACAlAAQDviVC6gbQCKBiDNhCQDQhCCYgVQgDApB2gEQA/AVBbAKQETAYCiAGQB+DMD/giQBTgHBYgFQCEg0CJgiQAwBYCEg/QDNhhB3g7QBTBsEFhBQC6hVCpABQBOFuGWiTIA0gUQFyiXCvgvIBQAKQgoDPIfh5IA+gQQIHiKEIglQBiGLGGhwQE3hYFygrQAnDgDZhdQFNiPCbhQQA7EUGshpQEpieDdAOQh4EvE6h8QE9h5A4gGQCOD5EfiOQEXiQEBA/QgvDiGQiWQGLiVAdAiQAhFIPAloMAAAAhcMjTJAAAg");
	this.shape_31.setTransform(675.675,116.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQAQA8BmClAjQC8giDPAPQBrBNCZAmQAkADAmABQD4icC+gZQCNBqDUhEQDXhGCcgWQgGAsB6gEQBCAUBfAIQEfAUCkADQCADVEIgmQBWgKBagFQCJg1CNghQAvBfCKhBQDUhkB6g8QBRB2EQhCQDAhaCtABQBHFvGXiVQAagJAagKQFziZCrguQAoAGAmAGQghDQIWh6QAggHAegJQIDiMEJghQBeGEF8hrQEwhVFsgrQAnDYDVhaQFFiMCZhOQA8EJGihmQEkiaDWAOQh0EnExh1QE0hzA5gFQCLDyEaiKQERiLD8A9QgqDZGFiRQGBiRAfAfQAmE8OolfQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_32.setTransform(675.675,116.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#33CCFF").s().p("EhpkARcMAAAghbQA8BmClAiQC8ghDPAPQBrBMCZAmQAkADAmABQD4ibC+gaQCNBrDUhFQDXhGCcgVQgGArB6gEQBCAVBfAHQEfAUCkAEQCADUEIgmQBWgJBagGQCJg1CNghQAvBgCKhCQDUhjB6g9QBRB3EQhDQDAhaCtACQBHFuGXiUIA0gTQFziaCrgtIBOALQghDQIWh6IA+gPQIDiNEJghQBeGFF8hrQEwhVFsgsQAnDYDVhaQFFiMCZhOQA8EJGihmQEkiaDWAPQh0EmExh0QE0h0A5gFQCLDyEaiKQERiLD8A9QgqDZGFiRQGBiRAfAfQAmE9OolfMAAAAhbMjTJAAAg");
	this.shape_33.setTransform(675.675,116.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQBQA+BoCrAiQDDgnDUAPQBtBQCdApQAmADAnACQD/iiDEgZQCPB0DbhIQDehICfgXQgJAuCAgEQBEAUBjAGQErAPCnAAQCBDeERgqQBYgLBdgHQCNg1CSghQAvBnCPhDQDchnB8g9QBPCAEbhFQDFhdCzABQA+FwGZiXQAZgJAagKQF1iaCmgtQAoAGAlAHQgaDSIOh7QAfgIAdgIQH/iPEMgdQBZF+FzhnQEohRFlgrQApDPDQhYQE9iICXhNQA+EAGWhkQEhiXDPAPQhxEgEohvQErhtA6gEQCJDrEUiGQELiGD3A6QgmDSF7iOQF3iNAhAeQArEwOQlWQAAQtAAQvUhplAAAhpkAAAQAAwvAAwtg");
	this.shape_34.setTransform(675.675,116.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#33CCFF").s().p("EhpkARbMAAAghcQA+BoCrAiQDDgmDUAOQBtBQCdApQAmADAnACQD/iiDEgYQCPBzDbhIQDehICfgXQgJAvCAgFQBEAUBjAGQErAPCnAAQCBDeERgqQBYgLBdgHQCNg0CSgiQAvBoCPhEQDchnB8g9QBPCAEbhFQDFhdCzABQA+FwGZiXIAzgTQF1iaCmgtIBNANQgaDSIOh7IA8gQQH/iPEMgdQBZF+FzhnQEohRFlgrQApDPDQhXQE9iJCXhNQA+EAGWhkQEhiWDPAOQhxEhEohvQErhtA6gFQCJDrEUiFQELiHD3A6QgmDSF7iNQF3iOAhAeQArEwOQlWMAAAAhcMjTJAAAg");
	this.shape_35.setTransform(675.675,116.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQDQA/BsCyAhQDKgtDZAOQBvBUCiAsQAmAEApACQEHioDIgYQCSB8DihLQDlhLCjgYQgMAyCFgFQBGATBnAFQE3ALCqgEQCCDoEagwQBbgMBfgIQCSg1CXgiQAuBxCUhFQDjhrB+g/QBOCLEmhHQDKhiC4ABQA2FyGbiZQAZgJAagKQF2icCigsQAmAIAlAHQgTDTIFh7QAegIAegJQH7iRENgYQBUF2FqhiQEhhOFfgrQApDIDLhWQE2iFCUhLQBBD1GLhiQEciTDIAQQhuEZEghpQEihnA7gDQCHDkEOiBQEFiCDzA3QgiDLFxiKQFsiJAjAcQAwEjN4lNQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_36.setTransform(675.675,116.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#33CCFF").s().p("EhpkARZMAAAghcQA/BsCyAhQDKgtDZAOQBvBUCiAsQAmAEApACQEHioDIgYQCSB8DihLQDlhLCjgYQgMAyCFgFQBGATBnAFQE3ALCqgEQCCDoEagwQBbgMBfgIQCSg1CXgiQAuBxCUhFQDjhrB+g/QBOCLEmhHQDKhiC4ABQA2FyGbiZIAzgTQF2icCigsIBLAPQgTDTIFh7IA8gRQH7iRENgYQBUF2FqhiQEhhOFfgrQApDIDLhWQE2iFCUhLQBBD1GLhiQEciTDIAQQhuEZEghpQEihnA7gDQCHDkEOiBQEFiCDzA3QgiDLFxiKQFsiJAjAcQAwEjN4lNMAAAAhcMjTJAAAg");
	this.shape_37.setTransform(675.675,116.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQEQBBBuC4AhQDQgzDeAOQByBYCmAtQAnAFAqADQEQiuDMgXQCVCFDphOQDshOCmgZQgPA0CLgFQBIASBqAEQFEAGCsgIQCEDyEig0QBegOBigJQCWg2CcghQAtB5CZhHQDshuCAhAQBMCVExhKQDQhmC9ACQAuFyGciaQAZgKAZgKQF4idCdgrQAmAJAlAIQgODUH9h8QAfgIAegJQH1iTEPgTQBQFuFghdQEZhKFZgsQAqDADHhUQEuiBCShJQBCDqGAhfQEYiPDBAQQhqETEXhkQEZhhA8gCQCEDdEJh9QD/h9DuA0QgeDDFniFQFjiFAkAaQA1EXNglEQAAQtAAQuUhplAAAhpkAAAQAAwuAAwtg");
	this.shape_38.setTransform(675.675,116.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#33CCFF").s().p("EhpkARXMAAAghbQBBBuC4AhQDQgzDeAOQByBYCmAtQAnAFAqADQEQiuDMgXQCVCFDphOQDshOCmgZQgPA0CLgFQBIASBqAEQFEAGCsgIQCEDyEig0QBegOBigJQCWg2CcghQAtB5CZhHQDshuCAhAQBMCVExhKQDQhmC9ACQAuFyGciaIAygUQF4idCdgrIBLARQgODUH9h8IA9gRQH1iTEPgTQBQFuFghdQEZhKFZgsQAqDADHhUQEuiBCShJQBCDqGAhfQEYiPDBAQQhqETEXhkQEZhhA8gCQCEDdEJh9QD/h9DuA0QgeDDFniFQFjiFAkAaQA1EXNglEMAAAAhbMjTJAAAg");
	this.shape_39.setTransform(675.675,116.925);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQGQBCBxC+AgQDYg3DjANQB0BbCqAwQApAFArAEQEXi0DSgXQCXCODwhRQDyhRCrgaQgSA3CQgFQBKARBuACQFPADCwgMQCFD8Erg5QBggQBlgKQCbg2ChghQAsCBCehJQDzhwCDhDQBKCgE8hNQDVhpDCABQAmF0GdidQAZgJAagKQF4ieCZgrQAmAKAkAKQgHDVH1h9QAegIAegJQHwiWESgPQBKFnFYhYQERhGFTgsQAqC4DDhSQEmh+CQhIQBEDhF0hdQEViMC5ASQhmELENheQEQhbA+AAQCCDVEDh4QD5h5DpAyQgaC7FeiCQFYiAAmAYQA6ELNIk8QAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_40.setTransform(675.675,117.075);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#33CCFF").s().p("EhpkARWMAAAghcQBCBxC+AgQDYg3DjANQB0BbCqAwQApAFArAEQEXi0DSgXQCXCODwhRQDyhRCrgaQgSA3CQgFQBKARBuACQFPADCwgMQCFD8Erg5QBggQBlgKQCbg2ChghQAsCBCehJQDzhwCDhDQBKCgE8hNQDVhpDCABQAmF0GdidIAzgTQF4ieCZgrIBKAUQgHDVH1h9QAegIAegJQHwiWESgPQBKFnFYhYQERhGFTgsQAqC4DDhSQEmh+CQhIQBEDhF0hdQEViMC5ASQhmELENheQEQhbA+AAQCCDVEDh4QD5h5DpAyQgaC7FeiCQFYiAAmAYQA6ELNIk8MAAAAhcMjTJAAAg");
	this.shape_41.setTransform(675.675,117.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQHQBEBzDEAgQDeg9DpAMQB2BgCuAxQAqAHAsAEQEgi6DWgWQCZCWD4hTQD5hVCugbQgUA7CVgGQBMARByAAQFbgBCygQQCHEGE0g+QBjgSBngLQCgg2ClghQAsCJCjhLQD6hzCGhEQBJCqFGhPQDbhuDHACQAdF1GfifQAZgJAZgKQF6igCVgqQAlAMAjAKQgBDWHuh9QAegIAdgKQHsiYETgKQBGFfFOhTQEKhDFMgsQAsCxC9hQQEgh7CMhGQBGDWFqhaQEQiICzASQhjEEEEhYQEHhVA+ABQCBDOD9h0QDyh0DmAvQgWCzFTh9QFOh8AoAWQA+D+MxkyQAAQtAAQuUhplAAAhpkAAAQAAwuAAwtg");
	this.shape_42.setTransform(675.675,117.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#33CCFF").s().p("EhpkARUMAAAghbQBEBzDEAgQDeg9DpAMQB2BgCuAxQAqAHAsAEQEgi6DWgWQCZCWD4hTQD5hVCugbQgUA7CVgGQBMARByAAQFbgBCygQQCHEGE0g+QBjgSBngLQCgg2ClghQAsCJCjhLQD6hzCGhEQBJCqFGhPQDbhuDHACQAdF1GfifIAygTQF6igCVgqIBIAWQgBDWHuh9QAegIAdgKQHsiYETgKQBGFfFOhTQEKhDFMgsQAsCxC9hQQEgh7CMhGQBGDWFqhaQEQiICzASQhjEEEEhYQEHhVA+ABQCBDOD9h0QDyh0DmAvQgWCzFTh9QFOh8AoAWQA+D+MxkyMAAAAhbMjTJAAAg");
	this.shape_43.setTransform(675.675,117.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQJQBFB2DLAfQDlhCDtAMQB5BjCzA0QAqAHAuAFQEnjBDbgUQCcCfD/hXQEAhXCygcQgYA9CbgGQBOAQB2gBQFngGC1gTQCIEPE9hDQBlgTBqgMQCkg3CqggQAsCSCohOQECh2CHhFQBHC0FRhSQDhhxDMABQAVF3GhihQAZgJAYgKQF8ihCPgqQAkANAjALQAGDXHmh9QAegJAdgKQHniaEWgGQBAFYFFhPQEDg+FGgtQAsCpC5hOQEYh3CKhFQBIDMFehXQENiFCrATQhfD9D7hSQD+hPA/ACQB+DHD4hwQDshvDhAsQgSCsFJh5QFEh4AqAUQBDDyMZkqQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_44.setTransform(675.675,117.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#33CCFF").s().p("EhpkARTMAAAghcQBFB2DLAfQDlhCDtAMQB5BjCzA0QAqAHAuAFQEnjBDbgUQCcCfD/hXQEAhXCygcQgYA9CbgGQBOAQB2gBQFngGC1gTQCIEPE9hDQBlgTBqgMQCkg3CqggQAsCSCohOQECh2CHhFQBHC0FRhSQDhhxDMABQAVF3GhihIAxgTQF8ihCPgqIBHAYQAGDXHmh9QAegJAdgKQHniaEWgGQBAFYFFhPQEDg+FGgtQAsCpC5hOQEYh3CKhFQBIDMFehXQENiFCrATQhfD9D7hSQD+hPA/ACQB+DHD4hwQDshvDhAsQgSCsFJh5QFEh4AqAUQBDDyMZkqMAAAAhcMjTJAAAg");
	this.shape_45.setTransform(675.675,117.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQKQBHB4DRAfQDshIDyALQB7BoC3A2QAsAHAuAGQEwjHDggUQCeCoEGhZQEHhbC2gdQgbBACggFQBQAOB6gCQFzgKC4gYQCJEaFGhIQBogUBsgOQCpg3CvggQAqCaCuhQQEJh5CKhHQBGC/FbhUQDmh2DSACQANF4GiijQAYgKAZgKQF8iiCMgoQAjANAjAMQAMDZHeh/QAegIAdgKQHiidEXgBQA8FQE8hKQD7g6E/gtQAtChC1hMQEQh0CIhDQBKDCFThVQEIiBCkATQhbD2DyhMQD1hIBAACQB8DADyhrQDmhrDcAqQgOCjFAh1QE5hzAsASQBIDlMBkgQAAQtAAQuUhplAAAhpkAAAQAAwuAAwtg");
	this.shape_46.setTransform(675.675,117.525);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#33CCFF").s().p("EhpkARRMAAAghbQBHB4DRAfQDshIDyALQB7BoC3A2QAsAHAuAGQEwjHDggUQCeCoEGhZQEHhbC2gdQgbBACggFQBQAOB6gCQFzgKC4gYQCJEaFGhIQBogUBsgOQCpg3CvggQAqCaCuhQQEJh5CKhHQBGC/FbhUQDmh2DSACQANF4GiijIAxgUQF8iiCMgoIBGAZQAMDZHeh/QAegIAdgKQHiidEXgBQA8FQE8hKQD7g6E/gtQAtChC1hMQEQh0CIhDQBKDCFThVQEIiBCkATQhbD2DyhMQD1hIBAACQB8DADyhrQDmhrDcAqQgOCjFAh1QE5hzAsASQBIDlMBkgMAAAAhbMjTJAAAg");
	this.shape_47.setTransform(675.675,117.525);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQMQBIB7DYAfQDyhOD4ALQB9BrC7A4QAtAJAwAFQE4jMDkgTQChCxENhdQEOhdC5geQgdBDCkgGQBTANB+gDQF/gPC6gbQCLEjFPhMQBqgWBvgPQCtg4C0gfQAqCiCyhSQESh8CMhIQBEDJFmhXQDsh6DXACQAEF6GkimQAYgJAZgKQF9ikCHgnQAjAPAiAMQASDaHXh/QAdgJAdgKQHdifEaADQA3FJEyhFQD0g3E4gtQAuCZCwhKQEJhxCFhAQBMC3FIhSQEEh+CeAUQhYDvDphGQDshCBBADQB6C4DrhmQDhhmDYAnQgKCcE1hxQEvhwAuAQQBNDaLpkYQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_48.setTransform(675.675,117.6722);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#33CCFF").s().p("EhpkARQMAAAghcQBIB7DYAfQDyhOD4ALQB9BrC7A4QAtAJAwAFQE4jMDkgTQChCxENhdQEOhdC5geQgdBDCkgGQBTANB+gDQF/gPC6gbQCLEjFPhMQBqgWBvgPQCtg4C0gfQAqCiCyhSQESh8CMhIQBEDJFmhXQDsh6DXACQAEF6GkimIAxgTQF9ikCHgnQAjAPAiAMQASDaHXh/IA6gTQHdifEaADQA3FJEyhFQD0g3E4gtQAuCZCwhKQEJhxCFhAQBMC3FIhSQEEh+CeAUQhYDvDphGQDshCBBADQB6C4DrhmQDhhmDYAnQgKCcE1hxQEvhwAuAQQBNDaLpkYMAAAAhcMjTJAAAg");
	this.shape_49.setTransform(675.675,117.6722);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQNQBKB9DeAeQD5hTD8AKQCABwC/A6QAuAJAxAGQFAjSDpgSQCkC5EUhgQEVhgC9gfQghBGCqgGQBVAMCBgFQGMgSC9gfQCMEtFYhSQBtgXBxgQQCxg4C6gfQApCqC3hTQEZiACPhKQBBDUFyhaQDxh9DcACQgEF6GlinQAZgJAYgKQF/ilCDgnQAiAQAhAOQAZDaHOh/QAdgJAdgLQHZihEbAIQAyFBEphAQDsgzEzguQAuCSCshIQEBhuCDg/QBOCtE9hPQEAh7CWAVQhUDoDghAQDig8BDAEQB3CxDmhhQDbhiDTAkQgGCUEshsQElhsAvAOQBSDNLRkOQAAQtAAQuUhplAAAhpkAAAQAAwuAAwtg");
	this.shape_50.setTransform(675.675,117.8083);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#33CCFF").s().p("EhpkAROMAAAghbQBKB9DeAeQD5hTD8AKQCABwC/A6QAuAJAxAGQFAjSDpgSQCkC5EUhgQEVhgC9gfQghBGCqgGQBVAMCBgFQGMgSC9gfQCMEtFYhSQBtgXBxgQQCxg4C6gfQApCqC3hTQEZiACPhKQBBDUFyhaQDxh9DcACQgEF6GlinIAxgTQF/ilCDgnIBDAeQAZDaHOh/IA6gUQHZihEbAIQAyFBEphAQDsgzEzguQAuCSCshIQEBhuCDg/QBOCtE9hPQEAh7CWAVQhUDoDghAQDig8BDAEQB3CxDmhhQDbhiDTAkQgGCUEshsQElhsAvAOQBSDNLRkOMAAAAhbMjTJAAAg");
	this.shape_51.setTransform(675.675,117.8083);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQOQBLCADlAdQD/hYECAJQCCB0DDA8QAvAKAzAHQFIjZDtgRQCmDCEbhjQEdhjDAggQgjBJCvgHQBXAMCFgGQGYgXC/gjQCOE3FhhWQBvgaB0gRQC2g4C+geQAoCyC9hWQEgiDCShKQBADeF8hdQD2iBDiACQgMF8GliqQAYgJAYgKQGCimB+gnQAiASAgAOQAgDcHGiAQAdgJAdgLQHTijEeAMQAtE6Efg8QDlgvEsguQAwCKCnhGQD5hqCBg+QBQCjExhMQD8h4CPAVQhQDiDXg7QDZg2BDAGQB2CqDgheQDVhdDOAiQgCCMEihoQEbhnAxAMQBWDAK6kFQAAQtAAQuUhplAAAhpkAAAQAAwuAAwtg");
	this.shape_52.setTransform(675.675,117.934);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#33CCFF").s().p("EhpkARNMAAAghbQBLCADlAdQD/hYECAJQCCB0DDA8QAvAKAzAHQFIjZDtgRQCmDCEbhjQEdhjDAggQgjBJCvgHQBXAMCFgGQGYgXC/gjQCOE3FhhWQBvgaB0gRQC2g4C+geQAoCyC9hWQEgiDCShKQBADeF8hdQD2iBDiACQgMF8GliqIAwgTQGCimB+gnQAiASAgAOQAgDcHGiAIA6gUQHTijEeAMQAtE6Efg8QDlgvEsguQAwCKCnhGQD5hqCBg+QBQCjExhMQD8h4CPAVQhQDiDXg7QDZg2BDAGQB2CqDgheQDVhdDOAiQgCCMEihoQEbhnAxAMQBWDAK6kFMAAAAhbMjTJAAAg");
	this.shape_53.setTransform(675.675,117.934);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQQQBNCDDqAdQEHheEHAJQCEB3DIA+QAwALAzAIQFQjfDzgRQCoDLEihlQEkhnDEghQgmBMC0gHQBZAMCJgJQGjgaDDgnQCQFBFphcQBygaB2gTQC7g4DCgeQAoC6DChYQEoiFCThNQA/DpGHhfQD8iGDmACQgUF+GnisQAYgJAYgKQGCioB7glQAgASAgAQQAmDdG/iBQAcgJAdgLQHPimEfAQQAoEzEXg3QDdgrEmguQAwCCCjhEQDxhnB/g8QBRCYEnhJQD4h0CHAWQhMDaDNg1QDRgwBEAHQB0CjDahZQDPhZDJAfQADCFEXhlQERhjAzALQBbC0Kij9QAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_54.setTransform(675.675,118.0504);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#33CCFF").s().p("EhpkARMMAAAghcQBNCDDqAdQEHheEHAJQCEB3DIA+QAwALAzAIQFQjfDzgRQCoDLEihlQEkhnDEghQgmBMC0gHQBZAMCJgJQGjgaDDgnQCQFBFphcQBygaB2gTQC7g4DCgeQAoC7DChZQEoiFCThNQA/DpGHhfQD8iGDmACQgUF+GnisIAwgTQGCioB7glQAgASAgAQQAmDdG/iBQAcgJAdgLQHPimEfAQQAoEzEXg3QDdgrEmguQAwCCCjhEQDxhnB/g8QBRCZEnhKQD4h0CHAWQhMDaDNg1QDRgwBEAHQB0CjDahZQDPhZDJAfQADCFEXhlQERhjAzALQBbC0Kij9MAAAAhcMjTJAAAg");
	this.shape_55.setTransform(675.675,118.0504);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQRQBOCFDxAdQENhjEMAIQCHB7DMBAQAxAMA1AIQFYjlD3gPQCrDTEphoQErhqDHgiQgpBPC6gHQBbAKCNgJQGvgfDFgrQCSFLFxhgQB1gdB5gTQC/g5DIgeQAnDDDGhaQEwiJCWhOQA9DzGRhiQECiJDsACQgdF/GpiuQAXgJAYgKQGEipB2glQAgAUAgAQQAsDeG2iBQAdgJAcgLQHKipEhAVQAkEsENgyQDWgoEfguQAxB6CehCQDqhkB8g6QBUCOEbhHQD0hwCBAWQhJDUDEgvQDIgqBFAIQBxCbDVhUQDJhUDFAcQAGB9EOhgQEGhfA1AIQBgCoKKj0QAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_56.setTransform(675.675,118.1586);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#33CCFF").s().p("EhpkARLMAAAghcQBOCFDxAdQENhjEMAIQCHB7DMBAQAxAMA1AIQFYjlD3gPQCrDTEphoQErhqDHgiQgpBPC6gHQBbAKCNgJQGvgfDFgrQCSFLFxhgQB1gdB5gTQC/g5DIgeQAnDDDGhaQEwiJCWhOQA9DzGRhiQECiJDsACQgdF/GpiuIAvgTQGEipB2glQAgAUAgAQQAsDeG2iBQAdgJAcgLQHKipEhAVQAkEsENgyQDWgoEfguQAxB6CehCQDqhkB8g6QBUCOEbhHQD0hwCBAWQhJDUDEgvQDIgqBFAIQBxCbDVhUQDJhUDFAcQAGB9EOhgQEGhfA1AIQBgCoKKj0MAAAAhcMjTJAAAg");
	this.shape_57.setTransform(675.675,118.1586);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQSQBQCID3AcQEUhpERAIQCJB/DQBCQAyANA3AJQFgjrD7gPQCuDcEwhrQEyhtDLgjQgsBSC/gHQBdAJCRgLQG7gjDIgvQCTFVF6hlQB3geB8gVQDEg5DMgeQAmDMDMhcQE4iMCYhQQA7D+GchlQEHiNDwACQgkGAGqivQAYgKAYgKQGFiqBxgkQAgAVAfARQAzDfGuiCQAcgJAcgMQHFiqEkAaQAeEjEEgtQDPgkEZgvQAxBzCahAQDjhgB5g5QBWCEEPhFQDwhtB6AYQhFDMC7gpQC/gkBGAJQBvCUDPhPQDDhQDAAaQAKB1EEhcQD8hbA3AHQBlCbJyjrQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_58.setTransform(675.675,118.278);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#33CCFF").s().p("EhpkARKMAAAghcQBQCID3AcQEUhpERAIQCJB/DQBCQAyANA3AJQFgjrD7gPQCuDcEwhrQEyhtDLgjQgsBSC/gHQBdAJCRgLQG7gjDIgvQCTFVF6hlQB3geB8gVQDEg5DMgeQAmDMDMhcQE4iMCYhQQA7D+GchlQEHiNDwACQgkGAGqivIAwgUQGFiqBxgkQAgAVAfARQAzDfGuiCQAcgJAcgMQHFiqEkAaQAeEjEEgtQDPgkEZgvQAxBzCahAQDjhgB5g5QBWCEEPhFQDwhtB6AYQhFDMC7gpQC/gkBGAJQBvCUDPhPQDDhQDAAaQAKB1EEhcQD8hbA3AHQBlCbJyjrMAAAAhcMjTJAAAg");
	this.shape_59.setTransform(675.675,118.278);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQTQBRCLD+AbQEbhuEWAHQCLCDDUBFQA0ANA3AJQFojxEBgOQCwDlE3hvQE5hvDOgkQgvBVDFgIQBfAJCVgNQHHgnDLgzQCUFfGDhqQB6gfB+gWQDIg6DRgdQAmDTDRheQE/iPCbhQQA5EHGnhnQENiRD1ACQgtGCGsiyQAYgKAXgKQGHirBtgjQAfAVAeATQA5DgGniDQAbgJAdgMQHAitElAfQAaEcD7gpQDHggESgvQAzBrCVg+QDbhdB3g3QBXB6EFhCQDshqByAYQhBDGCygkQC1gdBIAKQBtCNDJhLQC8hLC8AWQAPBuD5hYQDyhXA5AFQBqCPJajiQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_60.setTransform(675.675,118.3714);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#33CCFF").s().p("EhpkARJMAAAghcQBRCLD+AbQEbhuEWAHQCLCDDUBFQA0ANA3AJQFojxEBgOQCwDlE3hvQE5hvDOgkQgvBVDFgIQBfAJCVgNQHHgnDLgzQCUFfGDhqQB6gfB+gWQDIg6DRgdQAmDTDRheQE/iPCbhQQA5EHGnhnQENiRD1ACQgtGCGsiyIAvgUQGHirBtgjQAfAVAeATQA5DgGniDQAbgJAdgMQHAitElAfQAaEcD7gpIHZhPQAzBrCVg+QDbhdB3g3QBXB6EFhCQDshqByAYQhBDGCygkQC1gdBIAKQBtCNDJhLQC8hLC8AWQAPBuD5hYQDyhXA5AFQBqCPJajiMAAAAhcMjTJAAAg");
	this.shape_61.setTransform(675.675,118.3714);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQUQBTCNEEAbQEhhzEbAGQCOCHDYBHQA1ANA5ALQFwj4EFgNQCzDuE+hyQFAhyDSglQgyBXDJgHQBiAICZgOQHTgsDNg2QCWFoGMhvQB8ghCBgXQDNg6DWgdQAlDcDWhgQFHiSCchSQA4ESGyhqQERiVD7ACQg1GDGui0QAYgKAXgJQGIitBogjQAeAXAeATQBADiGeiEQAcgJAcgMQG7ivEoAjQAVEVDxgkQC/gdENgvQAzBjCQg8QDUhZB0g2QBaBwD5hAQDohmBsAZQg+C+CpgdQCsgYBJAMQBqCFDEhGQC2hHC4AUQASBmDwhUQDnhSA7ACQBvCDJCjZQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_62.setTransform(675.675,118.459);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#33CCFF").s().p("EhpkARIMAAAghcQBTCNEEAbQEhhzEbAGQCOCHDYBHQA1ANA5ALQFwj4EFgNQCzDuE+hyQFAhyDSglQgyBXDJgHQBiAICZgOQHTgsDNg2QCWFoGMhvQB8ghCBgXQDNg6DWgdQAlDcDWhgQFHiSCchSQA4ESGyhqQERiVD7ACQg1GDGui0IAvgTQGIitBogjQAeAXAeATQBADiGeiEQAcgJAcgMQG7ivEoAjQAVEVDxgkQC/gdENgvQAzBjCQg8QDUhZB0g2QBaBwD5hAQDohmBsAZQg+C+CpgdQCsgYBJAMQBqCFDEhGQC2hHC4AUQASBmDwhUQDnhSA7ACQBvCDJCjZMAAAAhcMjTJAAAg");
	this.shape_63.setTransform(675.675,118.459);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQUQBUCPELAbQEoh5EgAGQCQCKDdBJQA1APA6ALQF4j+EKgMQC1D3FGh1QFHh2DVglQg0BaDOgIQBkAHCcgQQHggvDQg7QCXFyGVhzQB/gjCDgYQDRg6DbgdQAkDkDchiQFOiVCfhUQA2EdG9htQEXiZEAADQg+GEGwi2QAXgKAXgKQGKiuBkgiQAdAYAeAVQBGDiGWiEQAbgKAcgLQG3iyEpAnQAQEODogfQC4gZEGgvQA0BaCMg5QDMhWByg0QBcBlDug9QDkhiBkAZQg6C4CggYQCjgSBJANQBpB+C+hCQCwhCCzARQAWBfDmhQQDehOA8AAQBzB3IrjQQAAQtAAQuUhplAAAhpkAAAQAAwuAAwtg");
	this.shape_64.setTransform(675.675,118.5413);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#33CCFF").s().p("EhpkARHMAAAghbQBUCPELAbQEoh5EgAGQCQCKDdBJQA1APA6ALQF4j+EKgMQC1D3FGh1QFHh2DVglQg0BaDOgIQBkAHCcgQQHggvDQg7QCXFyGVhzQB/gjCDgYQDRg6DbgdQAkDkDchiQFOiVCfhUQA2EdG9htQEXiZEAADQg+GEGwi2IAugUQGKiuBkgiQAdAYAeAVQBGDiGWiEIA3gVQG3iyEpAnQAQEODogfQC4gZEGgvQA0BaCMg5QDMhWByg0QBcBlDug9QDkhiBkAZQg6C4CggYQCjgSBJANQBpB+C+hCQCwhCCzARQAWBfDmhQQDehOA8AAQBzB3IrjQMAAAAhbMjTJAAAg");
	this.shape_65.setTransform(675.675,118.5413);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQVQBWCSERAaQEuh/EmAGQCSCODhBLQA3AQA7ALQGAkDEOgMQC4EAFNh4QFOh5DZgmQg4BdDUgJQBmAHCggRQHsg0DSg+QCZF7Geh4QCBgkCHgZQDVg7DggcQAjDsDghkQFWiZCihVQA0EnHHhvQEdidEFADQhFGFGxi4QAXgKAXgJQGKiwBgghQAdAZAdAVQBMDkGOiFQAcgKAbgMQGyi0EsAsQALEGDegaQCxgVD/gwQA2BTCHg3QDEhTBwgyQBdBbDjg6QDghfBdAZQg2CxCWgSQCbgLBKAOQBnB3C4g+QCqg+CuAPQAbBXDchMQDThKA+gBQB4BqITjHQAAQtAAQuUhplAAAhpkAAAQAAwuAAwtg");
	this.shape_66.setTransform(675.675,118.6179);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#33CCFF").s().p("EhpkARGMAAAghbQBWCSERAaQEuh/EmAGQCSCODhBLQA3AQA7ALQGAkDEOgMQC4EAFNh4QFOh5DZgmQg4BdDUgJQBmAHCggRQHsg0DSg+QCZF7Geh4QCBgkCHgZQDVg7DggcQAjDsDghkQFWiZCihVQA0EnHHhvQEdidEFADQhFGFGxi4IAugTQGKiwBgghQAdAZAdAVQBMDkGOiFQAcgKAbgMQGyi0EsAsQALEGDegaQCxgVD/gwQA2BTCHg3QDEhTBwgyQBdBbDjg6QDghfBdAZQg2CxCWgSQCbgLBKAOQBnB3C4g+QCqg+CuAPQAbBXDchMQDThKA+gBQB4BqITjHMAAAAhbMjTJAAAg");
	this.shape_67.setTransform(675.675,118.6179);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQWQBXCVEXAaQE2iEErAEQCUCTDlBNQA4AQA8AMQGJkKETgLQC6EJFUh7QFVh7DcgoQg6BgDZgIQBoAFCkgSQH3g5DWhCQCaGGGnh9QCEgmCJgaQDZg8DlgbQAjD0DlhmQFeicCkhWQAyExHShxQEiiiELADQhOGHGyi6QAXgKAXgKQGMixBcggQAcAbAcAWQBTDkGGiFQAbgKAcgMQGti3EtAxQAGD+DWgVQCpgRD5gwQA2BLCCg2QC9hPBtgwQBgBQDYg3QDbhcBWAaQgyCqCNgMQCSgFBLAPQBkBvCzg5QCkg5CqAMQAeBPDShIQDJhFBAgDQB9BdH7i+QAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_68.setTransform(675.675,118.675);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#33CCFF").s().p("EhpkARGMAAAghcQBXCVEXAaQE2iEErAEQCUCTDlBNQA4AQA8AMQGJkKETgLQC6EJFUh7QFVh7DcgoQg6BgDZgIQBoAFCkgSQH3g5DWhCQCaGGGnh9QCEgmCJgaQDZg8DlgbQAjD0DlhmQFeicCkhWQAyExHShxQEiiiELADQhOGHGyi6IAugUQGMixBcggQAcAbAcAWQBTDkGGiFQAbgKAcgMQGti3EtAxQAGD+DWgVQCpgRD5gwQA2BLCCg2QC9hPBtgwQBgBQDYg3QDbhcBWAaQgyCqCNgMQCSgFBLAPQBkBvCzg5QCkg5CqAMQAeBPDShIQDJhFBAgDQB9BdH7i+MAAAAhcMjTJAAAg");
	this.shape_69.setTransform(675.675,118.675);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQSQBZCXEdAZQE9iJEvAEQCXCWDpBPQA5ARA+ANQGQkQEYgKQC9ERFbh9QFbh/DhgpQg9BjDegIQBqAECogUQIDg8DZhGQCbGQGwiDQCGgnCMgbQDeg8DpgbQAjD8DqhoQFlieCmhYQAxE7Hch0QEpilEPADQhWGIG0i8QAXgKAXgKQGNiyBXggQAbAcAcAXQBaDmF+iGQAbgKAbgNQGoi5EvA1QACD4DMgRQCigODygwQA3BEB+g0QC1hMBrgvQBiBGDMg0QDYhZBPAcQgvCiCEgGQCIABBNAQQBiBoCtg0QCeg1ClAKQAiBHDIhEQC/hBBCgFQCCBRHji1QAAQtAAQvUhplAAAhpkAAAQAAwvAAwtg");
	this.shape_70.setTransform(675.675,118.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#33CCFF").s().p("EhpkARKMAAAghcQBZCYEdAZQE9iKEvAFQCXCVDpBPQA5ASA+AMQGQkPEYgLQC9ESFbh+QFbh+DhgqQg9BjDegIQBqAECogUQIDg8DZhFQCbGPGwiCQCGgnCMgbQDeg9DpgbQAjD9DqhpQFlieCmhYQAxE8Hch1QEpilEPADQhWGIG0i8IAugTQGNizBXggQAbAcAcAXQBaDmF+iGQAbgKAbgMQGoi6EvA1QACD4DMgRQCigNDygxQA3BEB+g0QC1hLBrgwQBiBGDMg0QDYhZBPAcQgvCiCEgFQCIAABNAQQBiBpCtg1QCeg1ClAKQAiBHDIhEQC/hBBCgFQCCBSHji2MAAAAhcMjTJAAAg");
	this.shape_71.setTransform(675.675,118.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQOQBbCaEjAZQFDiQE1AEQCZCaDuBRQA6ASA+ANQGZkWEcgJQDAEaFiiAQFiiCDkgqQhABmDkgJQBsAECsgVQIPhBDbhKQCdGaG5iHQCIgpCPgcQDig9DvgbQAhEFDwhrQFtihCohZQAvFGHnh3QEuipEVADQhfGJG2i+QAXgKAWgKQGPizBTgfQAaAdAbAYQBgDmF2iGQAbgKAbgNQGji7EyA5QgEDwDDgMQCagKDtgwQA3A8B6gyQCthIBpguQBjA8DBgyQDUhVBIAcQgrCcB7AAQB/AGBOASQBgBhCngwQCYgwCgAHQAnA/C+hAQC0g9BEgHQCHBFHLisQAAQtAAQvUhplAAAhpkAAAQAAwvAAwtg");
	this.shape_72.setTransform(675.675,117.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#33CCFF").s().p("EhpkAROMAAAghcQBbCaEjAZQFDiPE1ADQCZCbDuBRQA6ARA+ANQGZkWEcgJQDAEaFiiAQFiiCDkgqQhABmDkgJQBsAECsgVQIPhBDbhKQCdGaG5iHQCIgoCPgdQDig8DvgcQAhEGDwhsQFtigCohaQAvFGHnh3QEuipEVADQhfGJG2i+IAtgUQGPizBTgfQAaAdAbAYQBgDnF2iHQAbgKAbgNQGji7EyA6QgEDvDDgMQCagKDtgvQA3A7B6gyQCthIBpgtQBjA7DBgxQDUhWBIAcQgrCdB7gBQB/AGBOASQBgBhCngwQCYgwCgAHQAnA/C+hAQC0g9BEgGQCHBEHLisMAAAAhcMjTJAAAg");
	this.shape_73.setTransform(675.675,117.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQKQBcCcEqAZQFKiVE6ADQCbCeDyBUQA7ASBAAOQGgkcEigJQDBEjFqiEQFpiEDogrQhDBpDpgJQBuADCwgXQIbhFDehNQCeGjHCiMQCLgqCRgeQDng9DzgaQAhEND1htQF0ikCqhbQAtFQHzh5QEzitEaADQhmGKG3jAQAWgKAXgJQGQi1BOgeQAaAeAbAYQBmDoFuiHQAagKAbgNQGfi+EzA+QgIDpC6gIQCSgGDmgwQA5A0B1gwQCmhFBmgsQBlAyC2gvQDQhSBAAdQgnCVByAFQB2ANBOASQBeBaCigrQCSgsCcAEQAqA4C0g8QCqg5BGgJQCLA5G0ijQAAQtAAQuUhplAAAhpkAAAQAAwuAAwtg");
	this.shape_74.setTransform(675.675,117.525);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#33CCFF").s().p("EhpkARRMAAAghbQBcCcEqAZQFKiVE6ADQCbCeDyBUQA7ASBAAOQGgkcEigJQDBEjFqiEQFpiEDogrQhDBpDpgJQBuADCwgXQIbhFDehNQCeGjHCiMQCLgqCRgeQDng9DzgaQAhEND1htQF0ikCqhbQAtFQHzh5QEzitEaADQhmGKG3jAIAtgTQGQi1BOgeQAaAeAbAYQBmDoFuiHQAagKAbgNQGfi+EzA+QgIDpC6gIQCSgGDmgwQA5A0B1gwQCmhFBmgsQBlAyC2gvQDQhSBAAdQgnCVByAFQB2ANBOASQBeBaCigrQCSgsCcAEQAqA4C0g8QCqg5BGgJQCLA5G0ijMAAAAhbMjTJAAAg");
	this.shape_75.setTransform(675.675,117.525);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQGQBeCfEwAYQFQiaE/ACQCeCiD2BWQA8ATBBAOQGpkiEmgHQDEErFwiHQFxiHDrgsQhFBsDtgKQBxACCzgYQIohJDghRQCgGtHLiRQCNgsCUgeQDrg+D5gaQAgEWD5hvQF7ioCuhcQArFbH+h8QE5ixEfADQhvGMG4jDQAXgJAWgKQGSi2BKgeQAZAfAaAaQBsDpFniIQAagKAbgNQGZjAE2BCQgNDhCwgCQCLgCDggxQA5AsBwguQCfhBBjgrQBoAoCqgtQDMhOA5AdQgjCOBpAMQBtASBPAUQBcBTCcgoQCMgmCXABQAuAwCrg3QCgg1BHgLQCQAsGciaQAAQtAAQuUhplAAAhpkAAAQAAwuAAwtg");
	this.shape_76.setTransform(675.675,117.125);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#33CCFF").s().p("EhpkARVMAAAghbQBeCfEwAYQFQiaE/ACQCeCiD2BWQA8ATBBAOQGpkiEmgHQDEErFwiHQFxiHDrgsQhFBsDtgKQBxACCzgYQIohJDghRQCgGtHLiRQCNgsCUgeQDrg+D5gaQAgEWD5hvQF7ioCuhcQArFbH+h8QE5ixEfADQhvGMG4jDIAtgTQGSi2BKgeQAZAfAaAaQBsDpFniIQAagKAbgNQGZjAE2BCQgNDhCwgCQCLgCDggxQA5AsBwguQCfhBBjgrQBoAoCqgtQDMhOA5AdQgjCOBpAMQBtASBPAUQBcBTCcgoQCMgmCXABQAuAwCrg3QCgg1BHgLQCQAsGciaMAAAAhbMjTJAAAg");
	this.shape_77.setTransform(675.675,117.125);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgQDQBfCiE3AXQFXifFEACQCfCmD7BXQA+AUBCAPQGxkoEqgHQDHE1F3iKQF4iLDvgsQhJBuDzgJQBzAAC3gZQI0hNDjhVQChG2HTiVQCRgtCWggQDwg+D9gaQAfEeD/hxQGDirCvheQAqFmIJh/QE+i1EkADQh3GNG6jEQAXgKAWgJQGSi4BGgcQAYAgAaAaQBzDqFeiIQAagLAbgNQGVjCE3BHQgSDZCnADQCEABDZgxQA6AkBsgrQCXg/BhgoQBpAdCggqQDHhLAzAeQggCHBfASQBlAYBQAVQBaBLCWgiQCGgiCSgCQAzAoCggzQCWgxBJgMQCVAgGEiSQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_78.setTransform(675.675,116.75);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#33CCFF").s().p("EhpkARZMAAAghbQBfChE3AXQFXifFEACQCfCmD7BYQA+ATBCAQQGxkpEqgGQDHE0F3iKQF4iLDvgsQhJBuDzgJQBzAAC3gZQI0hNDjhVQChG2HTiVQCRgtCWggQDwg+D9gZQAfEdD/hxQGDiqCvheQAqFlIJh/QE+i1EkAEQh3GMG6jDIAtgUQGSi4BGgcQAYAgAaAbQBzDpFeiIQAagLAbgMQGVjDE3BHQgSDaCnACQCEABDZgxQA6AkBsgrID4hnQBpAdCggpQDHhMAzAfQggCHBfARIC1AuQBaBKCWgiQCGgiCSgCQAzApCgg0QCWgxBJgMQCVAgGEiRMAAAAhbMjTJAAAg");
	this.shape_79.setTransform(675.675,116.75);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgP/QBhClE9AXQFeimFJACQChCqD/BZQA/AVBDAQQG5kvEvgGQDKE+F+iNQF/iODygtQhLBxD4gKQB1AAC7gbQJAhRDmhZQCiHAHciaQCTgvCZghQD0g+ECgZQAfElEEhzQGKitCyhfQAoFvIUiBQFEi5EpADQh/GPG7jHQAWgKAWgJQGUi5BCgcQAXAhAZAcQB6DrFWiJQAagLAagNQGQjFE6BMQgXDSCeAHQB8AFDTgxQA6AcBogpQCPg7BfgnQBrATCUgnQDEhIArAfQgcCABWAXQBbAfBSAWQBXBECRgeQB/geCOgEQA3AgCWgvQCMgsBLgPQCaAUFsiJQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_80.setTransform(675.675,116.35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#33CCFF").s().p("EhpkARdMAAAghbQBhCkE9AXQFeilFJABQChCqD/BZQA/AVBDAQQG5kvEvgFQDKE9F+iNQF/iODygtQhLBxD4gKQB1AAC7gbQJAhRDmhZQCiHAHciZQCTgwCZggQD0g/ECgZQAfEmEEh0QGKitCyhfQAoFwIUiCQFEi5EpAEQh/GOG7jGIAsgUQGUi5BCgbQAXAgAZAcQB6DsFWiJQAagLAagOQGQjFE6BMQgXDTCeAHQB8AEDTgwQA6AcBogqIDuhiQBrATCUgnQDEhIArAfQgcCBBWAWQBbAfBSAWQBXBECRgeQB/gdCOgEQA3AgCWgwQCMgsBLgOQCaATFsiIMAAAAhbMjTJAAAg");
	this.shape_81.setTransform(675.675,116.35);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgP7QBiCnFDAXQFlirFOABQCkCtEEBcQA/AWBFAQQHBk0E0gGQDMFHGFiQQGGiRD2guQhOB0D9gKQB3gBC/gcQJLhWDphdQCkHKHlifQCWgwCbgiQD5g/EHgZQAeEuEJh1QGSixC0hgQAmF6IfiEQFJi9EuADQiHGQG9jJQAWgJAWgKQGVi6A9gbQAXAiAZAdQCADsFOiKQAZgLAagNQGMjHE7BQQgcDLCVALQB1AKDMgyQA8AUBignQCIg4BcglQBuAJCJglQC/hEAkAfQgZB6BOAcQBSAlBTAXQBVA9CLgZQB5gZCKgHQA7AZCMgsQCBgoBNgQQCfAHFUiAQAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_82.setTransform(675.675,115.975);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#33CCFF").s().p("EhpkARhMAAAghcQBiCnFDAXQFlirFOABQCkCtEEBcQA/AWBFAQQHBk0E0gGQDMFHGFiQQGGiRD2guQhOB0D9gKQB3gBC/gcQJLhWDphdQCkHKHlifQCWgwCbgiQD5g/EHgZQAeEuEJh1QGSixC0hgQAmF6IfiEQFJi9EuADQiHGQG9jJIAsgTQGVi6A9gbQAXAiAZAdQCADsFOiKQAZgLAagNQGMjHE7BQQgcDLCVALQB1AKDMgyQA8AUBignIDkhdQBuAJCJglQC/hEAkAfQgZB6BOAcQBSAlBTAXQBVA9CLgZQB5gZCKgHQA7AZCMgsQCBgoBNgQQCfAHFUiAMAAAAhcMjTJAAAg");
	this.shape_83.setTransform(675.675,115.975);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgP3QBkCqFJAWQFsiwFTAAQCmCxEIBeQBAAWBHARQHIk6E5gEQDOFPGNiTQGNiUD5gvQhRB2EDgKQB5gBDDgeQJXhaDshhQClHUHuikQCYgxCegkQD9g/EMgZQAdE3EOh3QGai0C3hiQAkGEIpiGQFPjBE0ADQiQGRG/jKQAWgKAVgKQGXi7A4gaQAXAjAYAdQCGDuFGiLQAagLAagNQGGjKE9BVQggDDCLARQBtANDGgyQA9AMBeglQCAg0BagkQBvgCB+giQC8hAAdAgQgWByBFAjQBJArBTAYQBUA2CFgVQBzgVCFgJQA/ARCCgnQB3glBPgSQCjgFE9h3QAAQuAAQuUhplAAAhpkAAAQAAwuAAwug");
	this.shape_84.setTransform(675.675,115.575);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#33CCFF").s().p("EhpkARlMAAAghcQBkCqFJAWQFsiwFTAAQCmCxEIBeQBAAWBHARQHIk6E5gEQDOFPGNiTQGNiUD5gvQhRB2EDgKQB5gBDDgeQJXhaDshhQClHUHuikQCYgxCegkQD9g/EMgZQAdE3EOh3QGai0C3hiQAkGEIpiGQFPjBE0ADQiQGRG/jKIArgUIHPjVQAXAjAYAdQCGDuFGiLQAagLAagNQGGjKE9BVQggDDCLARQBtANDGgyQA9AMBeglIDahYQBvgCB+giQC8hAAdAgQgWByBFAjQBJArBTAYQBUA2CFgVQBzgVCFgJQA/ARCCgnQB3glBPgSQCjgFE9h3MAAAAhcMjTJAAAg");
	this.shape_85.setTransform(675.675,115.575);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgPzQBlCsFQAVQFyi1FZAAQCoC1EMBgQBCAXBHARQHRlAE9gEQDRFYGUiWQGUiWD9gxQhUB6EIgLQB7gCDHgfQJjhfDuhkQCoHeH2ipQCagzChglQECg/ERgZQAcE/ESh5QGji3C4hkQAjGPI0iJQFVjFE4AEQiYGSHAjNQAWgJAWgKQGYi9A0gZQAVAkAYAfQCNDuE+iLQAZgLAagOQGBjMFABaQglC7CBAWQBmAQDAgyQA9AFBagkQB4gwBYgiQBxgMByggQC4g8AWAgQgSBrA8ApQBAAxBUAZQBRAvCAgRQBtgQCAgMQBDAJB5gjQBsggBRgUQCogRElhuQAAQtAAQvUhplAAAhpkAAAQAAwvAAwtg");
	this.shape_86.setTransform(675.675,115.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#33CCFF").s().p("EhpkARpMAAAghcQBlCsFQAWQFyi2FZAAQCoC1EMBgQBCAXBHASQHRlBE9gDQDRFXGUiWQGUiWD9gxQhUB6EIgLQB7gBDHggQJjheDuhlQCoHfH2iqQCagzChgkQEChAERgYQAcE/ESh6QGji2C4hlQAjGQI0iJQFVjGE4AEQiYGSHAjNIAsgSQGYi+A0gZQAVAkAYAfQCNDvE+iLQAZgLAagOQGBjMFABZQglC7CBAWQBmAQDAgxQA9AFBaglIDQhSQBxgMByggQC4g8AWAgQgSBsA8AoQBAAxBUAaQBRAuCAgRQBtgQCAgMQBDAKB5gjQBsggBRgVQCogRElhuMAAAAhcMjTJAAAg");
	this.shape_87.setTransform(675.675,115.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgPvQBnCvFWAVQF5i8FdAAQCrC5EQBiQBDAYBJASQHZlHFCgDQDTFhGbiZQGbiaEAgxQhXB9EOgLQB9gDDLghQJvhiDxhpQCpHoH/iuQCdg1CjglQEGhAEWgYQAbFHEYh8QGqi5C7hlQAhGZI/iMQFajJE+AEQigGUHBjPQAWgKAVgKQGai+AvgZQAVAmAXAfQCTDwE3iMQAYgLAagOQF9jOFBBeQgqC0B5AaQBeAUC5gyQA+gDBVghQByguBUggQBzgWBogdQCzg6APAiQgOBkAzAuQA3A3BVAbQBPAnB6gMQBngMB8gOQBHABBugfQBigbBTgXQCtgdENhlQAAQtAAQvUhplAAAhpkAAAQAAwvAAwtg");
	this.shape_88.setTransform(675.675,114.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#33CCFF").s().p("EhpkARtMAAAghcQBnCvFWAVQF5i8FdAAQCrC5EQBiQBDAYBJASQHZlHFCgDQDTFhGbiZQGbiaEAgxQhXB9EOgKQB9gEDLggQJvhjDxhpQCpHoH/iuQCdg1CjglQEGg/EWgZQAbFHEYh7QGqi6C7hlQAhGZI/iMQFajJE+AEQigGUHBjPIArgTQGai/AvgYQAVAlAXAgQCTDvE3iLQAYgLAagOQF9jPFBBeQgqC0B5AaQBeAVC5gzQA+gCBVgiQBygtBUghQBzgWBogdQCzg5APAhQgOBlAzAtQA3A3BVAbQBPAnB6gMIDjgaQBHABBugfIC1gxQCtgeENhlMAAAAhcMjTJAAAg");
	this.shape_89.setTransform(675.675,114.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#0099FF").ss(1,1,1).p("EhpkgPrQBoCxFdAVQGAjBFigBQCtC9EVBkQBDAYBKATQHhlNFHgBQDWFpGiicQGiidEEgyQhaB/ESgKQCAgFDOgiQJ8hmD0hsQCqHxIIiyQCfg3CmgnQELhAEZgYQAcFQEdh+QGxi9C+hmQAfGjJKiOQFfjNFDAEQioGVHDjRQAWgKAVgJQGajAAsgYQAUAnAWAgQCaDxEuiMQAZgMAZgOQF4jRFEBjQgvCtBvAeQBXAZCzgzQA+gLBRgfQBqgqBSgfQB1ghBcgaQCwg2AHAiQgKBeApA0QAuA9BXAcQBNAfB0gHQBhgHB3gSQBLgGBkgaQBZgYBUgYQCygqD1hcQAAQtAAQuUhplAAAhpkAAAQAAwuAAwtg");
	this.shape_90.setTransform(675.675,114.425);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#33CCFF").s().p("EhpkARwMAAAghbQBoCxFdAVQGAjBFigBQCtC9EVBkQBDAYBKATQHhlNFHgBQDWFpGiicQGiidEEgyQhaB/ESgKQCAgFDOgiQJ8hmD0hsQCqHxIIiyQCfg3CmgnQELhAEZgYQAcFQEdh+QGxi9C+hmQAfGjJKiOQFfjNFDAEQioGVHDjRIArgTQGajAAsgYQAUAnAWAgQCaDxEuiMQAZgMAZgOQF4jRFEBjQgvCtBvAeQBXAZCzgzQA+gLBRgfQBqgqBSgfIDRg7QCwg2AHAiQgKBeApA0QAuA9BXAcQBNAfB0gHQBhgHB3gSQBLgGBkgaICtgwQCygqD1hcMAAAAhbMjTJAAAg");
	this.shape_91.setTransform(675.675,114.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1353.4,230.1);


(lib.Tween51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF33").ss(6,1,1).p("AIwAAQAADoikCkQikCkjoAAQjnAAikikQikikAAjoQAAjnCkikQCkikDnAAQDoAACkCkQCkCkAADng");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("AmLGMQikikAAjoQAAjnCkikQCkikDnAAQDoAACkCkQCkCkAADnQAADoikCkQikCkjoAAQjnAAikikg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-59,118,118);


(lib.Tween30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#323232").ss(1,1,1).p("AAAgLIAAAX");
	this.shape.setTransform(-3.3,-4.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACFgCQAAABAAABIAAAAIgCAIQgCAEgEAEQgCABgBACIgBABIgBAAIgGACIgBAAIgEABQgBAAAAAAIgBAAIgFgBIAAAAIgGgCIgBgBIgBAAQgCgCgCgBQgEgEgBgEIgCgIIAAAAQAAgBAAgBIAAAAIACgKQABgDAEgEQACgCACgBIABgBIABgBIAGgCIAFgBIABAAQAAAAABAAIAAAAIAFABIADABQAEACAEAEQAEAEACADIACAKgAhXAFQAAAKgGAGQgHAHgJAAQgKAAgGgHQgHgGAAgKQAAgIAHgHQAGgHAKAAQAJAAAHAHQAGAHAAAIg");
	this.shape_1.setTransform(-4.5,-43.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AEQoyQgHAAgGgBQgtgFgqgMQgFgBgFgBQgdgJgcgLQgEgCgEgCQgCAAgBgBQgDgBgCgBQgygXgwggQgBgBgCgBQgJgHgJgGABor8QAoAUAjAhQADADAEADQABACACABQAFAGAGAFQADAEADADQAnAuAUA2AELpCQACAIADAIQALAqAAAvQAAA2gPAwQgXBGg4A4QgWAWgYARQhNA2hiACQgDAAgEAAQgWAAgVgDQgagDgYgHQgvgOgqgdQgYgRgWgWQhNhNgOhnQgEgYAAgYQAAgwANgrQAVhNA9g9QA1g1BDgXQAEAEAFAEQAWAVAWATQADACADADQALAJALAJQACACACACQAHAFAGAFQAEADAFADQADADAEADIABAAAI9jAQgNANgXAJQgLADgIABQgOACgKgDQgMgCABgQQABgIAEgLQAMgjAMgMQANgNAEAHQAFAIgLAZQgLAbAkgEQAlgDgMAMgAh9haQABACACACQALATAMANQACACABACQASAVASAIQAYAMAYgMQAcgOAdgzQABgCABgCAAwhUQgDAhALAbQAHAQALAMAHxiWQiaCTkNAKQASAXAfAQIAKA7IAAABIAoDrIANBIQhBAPg/ADADvIJQAOADAEAbQAFAagJAiQgJAhgRAUQgRAVgPgLQgPgKAQgiQAQgigHgWQgHgWAOgSQAMgRAPAEgAiBGdQBGAQBGACQAXABAYgBQhCCcCzACQADAAAEAAQADAAADAAAiTsKQgDAHgCAHAiTsKQAygSA6AAQAjAAAgAGAo+jhQAFARASATQASAUAUAFQAUAGAHgkQAIgkgFgRQgFgRgIAEQgJAEgEAcQgEAdgggWQgigVAFARgAiar4Qg4CThtAoQgCAAgBABQgNAEgOAEAiDhWQABAkgJAdQAAABAAABQgDAIgDAHQgMAagWAVAi1AsQAhCngtBIQgBACgBACQgBABgBABQAAABgBABQAAAAAAAAQgmAzhRgDQBdAzBfAXQAKDlhnBMAibMTQgHAMgagCQgZgBgcgQQgbgRgOgUQgPgVAOgMQAOgLAaAWQAaAWAXgBQAVgBANAQQANAQgIAOgAiRgEQjfgVhnh9Aggh+IAABkAiSlVQBuB4Bthz");
	this.shape_2.setTransform(-0.0164,9.6888);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AAAE6QgVAAgVgCQgagEgYgGQgvgOgqgdQgYgRgWgXQhNhMgOhoQgEgYAAgXQAAgwANgrIAbgIIADgBQBtgnA4iUIAAgBIABgCIAFgPIAJAIIAtApIAGAEIAVASIAEAEIAOALIAJAFIAGAGIABAAIACACIASANIADACQAwAhAzAWIAFACIADABIAAABQADACAFABQAcAMAdAIIAIACIACAAQAqANAsAEIAOABQALAqAAAvQAAA1gQAwQgWBGg5A4QgVAXgZARQhMA1hjACIgHAAgAAFC5QA0AAA0g1IAAAAIAEgEIgEAEIAAAAQg0A1g0AAIAAAAIAAAAQg3AAg5g9QA5A9A3AAIAAAAIAAAAgAjqAUQgQAIAAAKQAAALAQAHQAPAHAVAAQAXAAAOgHQAQgHAAgLQAAgKgQgIQgOgGgXAAQgVAAgPAGgACFAUQgKAEgEAGQgCAEAAAEQAAAEACAEQAEAFAKAEQAPAIAWAAQAWAAAOgIQAQgGAAgLQAAgLgQgHQgOgHgWAAQgWAAgPAHgAiVgrIgDABIgEAFIAAACIAAACQACAGAEAHIASgDQADgGAAgGIgBgCIgCgCIgDgEIgCgCIgEAAQgDAAgFACgAiChPQgGAHAAAJQAAAKAGAHQAGAGAKAAQAJAAAHgGQAGgHABgKQgBgJgGgHQgHgGgJAAQgKAAgGAGgABhhfIgGADIgCABIAAAAIgFADQgDADgBAFIgCAJIAAABIAAABIAAAAIACAJQABAEADAEIAFADIAAABIACABIAGACIAAAAIAFAAIAAAAIACAAIAEAAIAAAAIAHgCIABgBIABgBIADgDQADgEADgEIABgJIAAAAIAAgBIAAgBIgBgJQgDgFgDgDQgEgEgEgBIgEgCIgEAAIAAAAIgCAAIgBAAg");
	this.shape_3.setTransform(-4,-36.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,153,51,0.498)").s().p("AisCKQgZgBgcgQQgbgRgOgUQgPgVAOgMQAOgLAaAWQAaAWAXgBQAVgBANAQQANAQgIAOQgGALgUAAIgHgBgADTAPQgPgKAQghQAQgigHgWQgHgWAOgSQAMgRAPAEQAOADAEAbQAFAagJAiQgJAhgRATQgLAOgLAAQgFAAgFgEg");
	this.shape_4.setTransform(-1.6296,75.5516);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAkEAIhXgNIgIgDIgDgCIgXgDQgIAAAAgEIgKgCIgJgCIgFgEIgIgBIgFgDIgbgHQgFAAgCgCIgDgDQAAAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAIgFgBIgEgDIgIgEQgHgBgFgDIgGgEIgEgCIgBgBIgIgCIgNgFIgFgDQgDgCABgEQACgDAIABIAOAAIAFAAIAEgDQAAAAABAAQAAgBABAAQAAAAABABQABAAAAAAIABgBQAEgEAFgBIADgBQAIgHAKgBIAFgBIABgCQAEgGAIgBIAAgBQAGgJADgCIABAAIABgDIABgFIAAgBIAAAAIABgCIACgDQADgDAFAAIAAgFQgBgDADgGIAEgEIABgFQABgEAEgDIAAgDIADgFIABgFQgBgEABgFIABgDIAAgHIADgHIACgDIgCgGQgBgEABgEIACgEQgBgDABgDIACgDIgCgHQgBgDACgDQgDgGAEgHIAAAAIAAgBQAAgDABgDIgBgEQgEgFACgGQgEgHACgHIAAgBQgDgFACgGIAAgBQAAgDACgFIgFgKQgEgJAAgGQgBgGAEgFQgDgEgBgEQAAgDABgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQABgDADgDIAFgGIAKgKIAKgWIAEgFIADgFIADgKIACgDIAAgIQAAgEAEgFQgCgIABgDIADgGIAAgCIAAgBIAAgFIgBgFIAAgBIgBgFIAAgEIAAgBIAAAAIAAgCIABAAIAAgBIADgBIAEABIABABIAAAAIABAEIAAAAIAAADIACADQABABABAAQAAAAABABQAAAAAAABQABAAAAABIABADIAEAGIADACIACADQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIADAEIAAABIAAADIAAACIADAEIACACIAJAHIAEACIAIAGIACABIAFAEIAEAAIAFAEIAGAAIAXAAIAJgEIABAAQADgEAEgBIAHgDIAEgEQADgEAFgBIACgDIABAAIAAgBIAEgBQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQACgDAEgBIAAgBQAAgGAFgBIADgCIABgFIAAAAIABgEIAAgCIABAAIAAgBIAAAAIAAgBIABgBQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIACAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIABABIAAAAIABAEIgBABIAAACIAAAAIgBACIAAABIAAAEIgBAAIAAABIAAAAIABABQABACAAAFIAAAJIACAIIALAXIABABQADADAFAKQAHAQARAIIAIAFQAFADACAGQAHAAAFAIQABADABAJQAAAAABAAQAAABABAAQAAAAAAAAQAAABAAAAIABAEIABAQIABADIAAAEIACACIAAAJQADAAACADIAAABIAAAIIABAOIABABIAAADIADAQIAAAFIABADIAAAEIAAADQADAMABAMIABABIAAAAIACADIABAAIABAGIAAAMIABAAIAAADIAAAAIABACIAAAJIAAAEIAAABIABAAIAAABIABACIAAAQIABAEQADAEABAFIAAAEQACACAAAEIADAPIADAfIAEAMIAEALIAAAPIAAAFIgBADIABACIACADIABABQADACgBAEIgBADIAAABQgBABAAAAQAAABAAAAQAAABAAABQAAAAAAABIACADIABAFIABABIAAAHIACACIABABIAAABIAAAAIAAAFIAAAAIgDAEQgFADgDgEIgLAFIgGABIgQAAIgNADIgSAAIgbAFIgJABIgIAAIgBAAIgGABg");
	this.shape_5.setTransform(-5.7375,26.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAAIAAgBIAAgDIAEgEIADgBQAFgCACgBIAEABIACACIADADIACACIABADQAAAFgDAGIgRACQgEgGgCgGg");
	this.shape_6.setTransform(-18.4,-40.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,51,51,0.2)").s().p("AoBCPQgUgFgSgTQgSgTgFgSQgFgRAiAVQAgAWAEgdQAEgbAJgEQAIgFAFASQAFARgIAkQgGAegPAAIgGgBgAHuCNQgMgCABgRQABgIAEgKQAMgkAMgMQANgMAEAHQAFAHgLAaQgLAbAkgEQAlgDgMAMQgNANgXAJIgTAEIgKAAQgIAAgGgBgAkShkQgQgHAAgKQAAgLAQgHQAPgHAWAAQAWAAAPAHQAPAHAAALQAAAKgPAHQgPAIgWAAQgWAAgPgIgABdhkQgKgEgDgGQgDgEAAgEQAAgEADgEQADgFAKgFQAPgHAWAAQAWAAAPAHQAPAIAAAKQAAALgPAHQgPAHgWAAQgWAAgPgHg");
	this.shape_7.setTransform(-0.0164,-21.1566);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah9AVQgGgHAAgJQAAgIAGgHQAGgGAKgBQAJABAHAGQAGAHABAIQgBAJgGAHQgHAGgJAAQgKAAgGgGgABrAWIAAAAIgFAAIAAAAIgGgCIgCgBIAAgBIgFgDQgDgDgBgEIgCgIIAAAAIAAgBIAAgBIACgJQABgFADgDIAFgEIAAAAIACgBIAGgCIAEAAIABAAIACAAIAAAAIAEAAIAEABQAEACAEAEQADADADAFIABAJIAAABIAAABIAAAAIgBAIIgGAHIgDAEIgBAAIgBABIgHACIAAAAIgEAAIgCAAgAB9gTQgEgEgEgCQAEACAEAEQADADADAFQgDgFgDgDgABZgTIAFgEIgFAEQgDADgBAFQABgFADgDg");
	this.shape_8.setTransform(-4.5,-43.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6699").s().p("AAUAlIgEAAIgOAAIgQgEIgTgIIgNgHIgDgCIgEgFQgEgGgCgGQgBgOAHgJQAHgLANgBIACAAQANgCALAIIAHAEQAGADAMABIADACIAHABIAMgBQAJADAGAJQAGAIgBAJQAAAJgHAIQgGAIgKACQgDABgMAAIgCAAg");
	this.shape_9.setTransform(8.1387,-70.5375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF66").s().p("AE4DnQgOgIgSgUQgMgOgDgHQgEgJAAgNIAAgHIgPhAIgBgHIgDgEQgCgFAAgJQgBgCgIgKQgIgLgMgnIgUhHQgKghgYgQQgWgPgfAAQgRABgRAFIgDACIgFACIgFAEIgEAEQgHAJgGADIgEADIgCADIgCABQgEAIgLALIgGAFIgCAAIgLAAIgHgBIgCgCQgNAAgGgDIgHgFQgMgHgNABIgBABIAIgUQAag7AvgkQA2gmA8AAQAhAAAYAOQAMAHAXAXQAUAVAIAMQAIAPAJAbQAWBKAMBJIAJAaIACAEQAEAHAEARIARBAQACAGADACQAGABAIgEQAKgGAHgPIAKgbQAGgQAKgJQALgKANADQAMADAGAMQAEAEADAHIACAIQAGAMgDAVQgEAggSAdQgMAUgQAJIAAABQgIAHgJADQgMAGgUAAQgbgBgRgKgACAC1IgMgDIgcgHQgEABgHAAQgHAAgFgCIgCgCIgDABIgKgDIgEgCIgIgDIgBgBIgEgBIgVgHIgKgFIAAgBIgEAAIgEAAIgIgDIAAgBIgDgBIgFgCIgEgEIgKgEQgHgCgDgDIgFgFIgHgDQgNgEgGgFIgEgFIgCAAQgIAAgEgHQgFAAgDgDQgFgDgBgFIgCAAQgGABgEgDIgDgCQgEgDAAgGIgJgBIgFgCIgCgCIgBgBIgBgBIgCgEIgEAAIgJgGIgBgDQgCgDABgDQgFABgFgCIgBgBIgEgDIgCgCQgCgFAAgDIAAgBIgFgEIgDgBIgCgBQgFAAgDgBIgGgFIgBgCIgBgBQgFgCgCgEQgCgFAAgDIgGgCQgFgDgCgEQgIgBgEgHIgBgDIgBgBIgGgBIgCgFIACgDQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAAAAIAEAAIACAAQAEgHAHgBIAFABIAGACQABgDAEgCQAEgDAPAAIAWABQAEgCAHAAQAFAAAFABIAOABIAFABIAGgDQAEgBAEACIAEgBQAJAAAEADIABABQAHgDAPAGIACACIANAIIATAHIARAEIAOABIAMAJIABAAIACABIAeAQQAHAFADAEIAAABIADADIABACIAEABQAFABADAEQAGACAEACIAHAHIAAABIACAFIAEACIAIAGIAGAHIACAEIAAADQAHAEAFAJQAFAHABAHQALAMAFAOIADAJIAHAGQADAFgCAGIAEAHIACABQADABADAFIABACIABADIAAAFIgDAGQgCADgDACQgSgDgBgCgAAzBZIACABIgJgFIAHAEgAnBCzIgBAAIgCAAIgDgDIAAgBQAAgEADgBIAAAAIABgCQgBgCABgEQABgFAEgCIABgCIAAgEQABgEAEgHIAHgJIABgFQABgEABgBQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIACgFQAEgIAIgKQgBgEADgBQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAIABgFQABgDAJgGIADgGIAIgJIAAgCIADgEIAQgOIAOgKIAAAAIAEgFQADgEAFgCIAEgBQABgDACgBIAFgBIAIgHQAFgGAIgCIADgDQAEgEAFgBQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABIADgDQAHgFAJgCQADgBADACQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABIgBACIgBACIgDAEIgKAJQADABAAAEQAAADgDAEIgFAGIgEAIIgDAGIgGAOQgEAJgGAJQgHAKgFAFQgEACgCAEIgCAFQgDAGgKAIQgGAIgGAEIgBABQAAABABABQAAAAAAABQAAAAAAABQgBAAAAABQgBACgEACIgKADQgGAFgEAGIgGAIQgFAEgFgCIgFAGQgEAEgDgBIgCAAQgCACgDACIgHACIgFACIgFAFIgBAAIgDACIgFAAQgBACgEAAIgBAAIgCABIgCgBgAlTA/IAAACIABgCIgBAAgAlMApIgCACIgBABIADgCIABgCIgBAAIAAABgAA7CpIgJgDIAKADIgBAAgAAyCmIAAAAgAgNCPIgBAAIAIADQgFgBgCgCgAgOCPIAAAAg");
	this.shape_10.setTransform(11.175,-65.2753);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.6,-89.4,117.2,179.9);


(lib.Tween29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#323232").ss(1,1,1).p("AAAgLIAAAX");
	this.shape.setTransform(-3.8,-1.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACFgCQAAABAAABIAAAAIgCAIQgCAEgEAEQgCABgBACIgBABIgBAAIgGACIgBAAIgEABQgBAAAAAAIgBAAIgFgBIAAAAIgGgCIgBgBIgBAAQgCgCgCgBQgEgEgBgEIgCgIIAAAAQAAgBAAgBIAAAAIACgKQABgDAEgEQACgCACgCIABAAIABgBIAGgCIAFgBIABAAQAAAAABAAIAAAAIAFABIADABQAEACAEAEQAEAEACADIACAKgAhXAFQAAAKgGAGQgHAHgJAAQgKAAgGgHQgHgGAAgKQAAgIAHgHQAGgHAKAAQAJAAAHAHQAGAHAAAIg");
	this.shape_1.setTransform(-5,-40.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ABlrgQAoAUAjAhQADADAEADQABACACACQAFAFAGAFQADAEADADQAnAuAUA2AENoWQgHAAgGgBQgtgFgqgLQgFgCgFgBQgdgJgcgLQgEgCgEgCQgCAAgBgBQgDgBgCgBQgygXgwggQgBgBgCgBQgJgHgJgGAEIomQACAIADAIQALArAAAuQAAA3gPAvQgXBHg4A4QgWAWgYARQhNA1hiACQgDAAgEAAQgWAAgVgCQgagDgYgHQgvgOgqgdQgYgRgWgWQhNhNgOhoQgEgYAAgYQAAgwANgrQAVhNA9g8QA1g2BDgXQgDAHgCAHAIwjKQABASgLAXQgFAJgFAHQgIALgKAFQgKAHgKgMQgFgGgFgLQgQghAAgRQAAgSAIACQAIACALAaQALAaAXgcQAXgcAAARgAiAg+QABACACADQALASAMAOQACACABACQASAUASAIQAYALAYgLQAcgOAdgyQABgCABgDAAtg4QgDAiALAaQAHAPALAOAHuh5QiaCRkNAMQASAWAfARIAKA6IAAACIAoDqIANBJQhBAOg/ADQCNCnhWBWAiEG5QBGARBGACQAXAAAYgBADlLdQAAAPgZAKQgYALgjAAQgiAAgYgLQgZgLAHgRQAGgRAlAHQAkAGAUgMQAUgMAUAIQAVAIAAAPgAiWruQAEAEAFAEQAWAVAWATQADACADADQALAJALAKQACABACACQAHAFAGAFQAEADAFAEQADACAEADIABAAAiWruQAygSA6AAQAjAAAgAGAoujhQgEASAGAZQAGAaAPAOQAOAPAYgbQAZgbAEgRQAEgRgJgBQgKgBgRAWQgSAXgRgjQgTgjgEARgAiUAYQjfgWhnh7QgEgFgEgFAidrcQg4CThtAoQgCAAgBABQgNAEgOAEAiGg5QABAkgJAcQAAABAAABQgDAIgDAHQgMAbgWAUAi4BJQAhCmgtBJQgBACgBABQgBABgBACQAAABgBAAQAAAAAAABQglAyhSgCQBdAyBfAXQg/DTiqhQAloKWQgOAEgRgUQgQgSgJgfQgIggAFgYQAFgZASACQASABACAjQADAiARAPQAQAOgDAVQgCAUgPAEgAgjhhIAABjAiVk4QBuB4Bthz");
	this.shape_2.setTransform(-0.2453,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AAAE6QgVAAgVgDQgagCgYgIQgwgNgpgeQgYgQgXgXQhNhNgOhnQgDgXAAgYQAAgwAMgrIAbgHIAEgCQBtgnA4iTIABgCIABgDIAEgOIAJAJIAsAnIAGAGIAWASIAFADIANAKIAIAGIAHAGIAAABIADACIASAMIADACQAxAgAyAXIAEACIAEABIABABQACACAFABQAcALAdAJIAJADIAAAAQArALAtAGIAMABQAMAqAAAuQAAA1gPAwQgYBHg3A3QgWAXgYAQQhOA2hiACIgHAAgAAFC5QA2AAA1g5Qg1A5g2AAIAAAAIgBAAQg3gBg3g9QA3A9A3ABIABAAIAAAAgAjrAUQgPAIAAAKQAAALAPAHQAQAIAVAAQAWAAAQgIQAPgHAAgLQAAgKgPgIQgQgHgWAAQgVAAgQAHgACEAUQgJAFgDAFQgDAEAAAEQAAAEADAEQADAGAJAEQAQAHAVAAQAWAAAPgHQAQgIAAgKQAAgKgQgIQgPgHgWAAQgVAAgQAHgAiVgrIgDABIgEAFIgBACIAAACQACAGAGAHIARgDQACgGAAgFIAAgEIgBgCIgEgDIgCgBIgDgBQgEAAgFACgAiChOQgGAGgBAKQABAJAGAGQAHAHAJAAQAKAAAGgHQAGgGAAgJQAAgKgGgGQgGgHgKAAQgJAAgHAHgABghfIgFACIgCABIAAABIgEADQgEAEgCAEIgCAKIAAAAIAAABIAAAAIACAJQACAEAEAEIAEADIAAAAIACABIAFADIABAAIAFAAIABAAIAAAAIAFAAIABAAIAFgDIABAAIABgBIAEgDQAEgEABgEIADgJIAAAAIAAgBIAAAAIgDgKQgBgEgEgEQgDgEgFgCIgDgBIgFAAIgBAAIAAAAIgBAAg");
	this.shape_3.setTransform(-4.5,-34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,153,51,0.498)").s().p("AC3BzQgYgLAGgRQAHgRAkAGQAlAGAUgMQATgMAVAIQAUAIAAAPQAAAPgZALQgYALgiAAQgjAAgYgLgAkmADQgRgSgIgfQgIgfAEgYQAFgaASACQASACADAiQADAiAQAPQAQAPgCAUQgDAUgOAEIgFAAQgMAAgOgQg");
	this.shape_4.setTransform(-9.881,74.0177);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAkD/IhXgMIgIgCIgDgEIgXgCQgIAAAAgEIgKgCIgJgDIgFgCIgIgCIgFgDIgbgGQgFgCgCgCIgDgCQAAAAAAgBQgBAAgBAAQAAgBgBAAQAAAAgBAAIgFgBIgEgDIgIgDQgHgCgFgDIgGgEIgEgCIgBgBIgIgDIgNgEIgFgCQgDgEABgDQACgDAIABIAOABIAFgBIAEgDQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAIABgBQAEgFAFABIADgCQAIgHAKgBIAFgBIABgCQAEgHAIAAIAAgCQAGgIADgDIABAAIABgCIABgGIAAAAIAAgBIABgBIACgCQADgFAFAAIAAgDQgBgEADgGIAEgFIABgEQABgEAEgDIAAgCIADgGIABgFQgBgEABgFIABgDIAAgIIADgFIACgEIgCgGQgBgEABgEIACgEQgBgDABgDIACgEIgCgFQgBgEACgDQgDgHAEgGIAAAAIAAgCQAAgDABgCIgBgEQgEgGACgFQgEgHACgHIAAgBQgDgGACgFIAAgBQAAgEACgEIgFgKQgEgJAAgGQgBgHAEgEQgDgEgBgEQAAgEABgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgEADgDIAFgGIAKgKIAKgWIAEgGIADgEIADgJIACgFIAAgHQAAgFAEgDQgCgIABgFIADgFIAAgCIAAgBIAAgEIgBgHIAAAAIgBgEIAAgFIAAgBIAAAAIAAgBIABAAIAAgBIADgCIAEACIABABIAAAAIABACIAAAAIAAAEIACAEQABAAABAAQAAAAAAABQABAAAAABQABAAAAABIABADIAEAGIADADIACACQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAIADAEIAAAAIAAAEIAAACIADAEIACACIAJAHIAEACIAIAGIACAAIAFAFIAEABIAFACIAGAAIAXAAIAJgCIABgBQADgEAEgCIAHgCIAEgFQADgDAFgBIACgCIABgBIAAgCIAEAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABAAQACgDAEgCIAAgBQAAgGAFgCIADgCIABgDIAAAAIABgFIAAgCIABAAIAAgBIAAAAIAAgBIABAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIABABIAAAAIABADIgBACIAAADIAAAAIgBABIAAABIAAADIgBAAIAAACIAAAAIABABQABABAAAFIAAAJIACAIIALAZIABAAQADADAFAKQAHARARAHIAIAFQAFADACAGQAHAAAFAHQABAFABAIQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIABAEIABAQIABADIAAAEIACABIAAAKQADAAACADIAAABIAAAIIABAOIABAAIAAAEIADAPIAAAGIABACIAAAFIAAADQADAMABAMIABABIAAABIACABIABAAIABAHIAAALIABAAIAAAEIAAAAIABACIAAAJIAAAEIAAAAIABABIAAAAIABAEIAAAOIABAFQADAFABAEIAAAEQACABAAAFIADAPIADAfIAEAMIAEAMIAAANIAAAGIgBADIABABIACAFIABAAQADACgBAEIgBADIAAABQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAABIACADIABAFIABABIAAAGIACADIABABIAAABIAAABIAAADIAAABIgDAEQgFADgDgEIgLAEIgGACIgQAAIgNADIgSAAIgbAFIgJAAIgIAAIgBABIgGABg");
	this.shape_5.setTransform(-6.2375,29.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAAIAAgCIABgCIAEgFIADgBQAFgCADAAIADABIACABIAEAEIABACIAAADQAAAFgCAGIgQADQgGgIgCgFg");
	this.shape_6.setTransform(-18.9,-37.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,51,51,0.2)").s().p("AH2CMQgFgGgFgKQgQgiAAgRQAAgRAIACQAIABALAaQALAbAXgcQAXgdAAASQABASgLAWIgKARQgIAKgKAGQgDACgEAAQgGAAgHgIgAoXCFQgPgPgGgZQgGgaAEgRQAEgRATAiQARAjASgWQARgWAKAAQAJABgEARQgEASgZAbQgPARgMAAQgGAAgFgFgAkVhoQgQgHAAgLQAAgKAQgIQAPgHAWAAQAWAAAPAHQAPAIAAAKQAAALgPAHQgPAHgWAAQgWAAgPgHgABahpQgKgEgDgFQgDgEAAgEQAAgEADgEQADgGAKgEQAPgHAWAAQAWAAAPAHQAPAHAAALQAAAKgPAHQgPAIgWAAQgWAAgPgIg");
	this.shape_7.setTransform(-0.2453,-17.8744);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah9AVQgGgHgBgJQABgJAGgGQAHgHAJABQAKgBAGAHQAGAGAAAJQAAAJgGAHQgGAHgKAAQgJAAgHgHgABsAWIgBAAIgFAAIgBAAIgFgCIgCgBIAAAAIgEgEQgEgDgCgEIgCgIIAAgBIAAgBIAAAAIACgKQACgEAEgDIAEgEIAAAAIACgBIAFgCIAGAAIABAAIAAAAIABAAIAFAAIADABQAEACAEAEQAEADABAEIADAKIAAAAIAAABIAAABIgDAIIgFAHIgEAEIgBABIgBAAIgFACIgBAAIgFAAIAAAAgAB9gTQgEgEgEgCQAFACADADQAEAEABAEQgBgEgEgDgABagUIAEgDIgEAEQgEADgCAEQACgEAEgEg");
	this.shape_8.setTransform(-5,-40.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6699").s().p("AAUAlIgEAAIgOAAIgQgEIgTgIIgNgHIgDgCIgEgFQgEgGgCgGQgBgOAHgJQAHgLANgBIACAAQANgCALAIIAHAEQAGADAMABIADACIAHABIAMgBQAJADAGAJQAGAIgBAJQAAAJgHAIQgGAIgKACQgDABgMAAIgCAAg");
	this.shape_9.setTransform(7.6387,-67.6875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF66").s().p("AE4DnQgOgIgSgUQgMgOgDgHQgEgJAAgNIAAgHIgPhAIgBgHIgDgEQgCgFAAgJIgBgEQgQgmgIgaQgPg0gEgKQgPgkgYgQQgWgPgfAAQgRABgRAFIgDACIgFACIgFAEIgEAEQgHAJgGADIgEADIgCADIgCABQgEAIgLALIgGAFIgCAAIgLAAIgHgBIgCgCQgNAAgGgDIgHgFQgMgHgNABIgBABIAIgUQAag7AvgkQA2gmA8AAQAhAAAYAOQAMAHAXAXQAUAVAIAMQAIAPAJAbQAWBKAMBJIAJAaIACAEQAEAHAEARIARBAQACAGADACQAGABAIgEQAKgGAHgPIAKgbQAGgQAKgJQALgKANADQAMADAGAMQAEAEADAHIACAIQAGAMgDAVQgEAggSAdQgMAUgQAJIAAABQgIAHgJADQgMAGgUAAQgbgBgRgKgACAC1IgMgDIgcgHQgEABgHAAQgHAAgFgCIgCgCIgDABIgKgDIgEgCIgIgDIgBgBIgEgBIgVgHIgKgFIAAgBIgEAAIgEAAIgIgDIAAgBIgDgBIgFgCIgEgEIgKgEQgHgCgDgDIgFgFIgHgDQgNgEgGgFIgEgFIgCAAQgIAAgEgHQgFAAgDgDQgFgDgBgFIgCAAQgGABgEgDIgDgCQgEgDAAgGIgJgBIgFgCIgCgCIgBgBIgBgBIgCgEIgEAAIgJgGIgBgDQgCgDABgDQgFABgFgCIgBgBIgEgDIgCgCQgCgFAAgDIAAgBIgFgEIgDgBIgCgBQgFAAgDgBIgGgFIgBgCIgBgBQgFgCgCgEQgCgFAAgDIgGgCQgFgDgCgEQgIgBgEgHIgBgDIgBgBIgGgBIgCgFIACgDQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAAAAIAEAAIACAAQAEgHAHgBIAFABIAGACQABgDAEgCQAEgDAPAAIAWABQAEgCAHAAQAFAAAFABIAOABIAFABIAGgDQAEgBAEACIAEgBQAJAAAEADIABABQAHgDAPAGIACACIANAIIATAHIARAEIAOABIAMAJIABAAIACABIAeAQQAHAFADAEIAAABIADADIABACIAEABQAFABADAEQAGACAEACIAHAHIAAABIACAFIAEACIAIAGIAGAHIACAEIAAADQAHAEAFAJQAFAHABAHQALAMAFAOIADAJIAHAGQADAFgCAGIAEAHIACABQADABADAFIABACIABADIAAAFIgDAGQgCADgDACQgSgDgBgCgAAzBZIACABIgJgFIAHAEgAnBCzIgBAAIgCAAIgDgDIAAgBQAAgEADgBIAAAAIABgCQgBgCABgEQABgFAEgCIABgCIAAgEQABgEAEgHIAHgJIABgFIACgFQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIACgFQAEgIAIgKQgBgEADgBQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAIABgFQABgDAJgGIADgGIAIgJIAAgCIADgEIAQgOIAOgKIAAAAIAEgFQADgEAFgCIAEgBQABgDACgBIAFgBIAIgHQAFgGAIgCIADgDQAEgEAFgBQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABIADgDQAHgFAJgCQADgBADACQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIgBACIgBACIgDAEIgKAJQADABAAAEQAAADgDAEIgFAGQgCACgCAGIgDAGIgGAOQgEAJgGAJQgHAKgFAFQgEACgCAEIgCAFQgDAGgKAIQgGAIgGAEIgBABQABABAAABQAAAAAAABQAAAAAAABQAAAAgBABQgBACgEACIgKADQgGAFgEAGIgGAIQgFAEgFgCIgFAGQgEAEgDgBIgCAAQgCACgDACIgHACIgFACIgFAFIgBAAIgDACIgFAAQgBACgEAAIgBAAIgCABIgCgBgAlTA/IAAACIABgCIgBAAgAlMApIgCACIgBABIADgCIABgCIgBAAIAAABgAA7CpIgJgDIAKADIgBAAgAAyCmIAAAAgAgNCPIgBAAIAIADQgFgBgCgCgAgOCPIAAAAg");
	this.shape_10.setTransform(10.675,-62.4253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.3,-86.6,114.1,174.2);


(lib.Tween28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#323232").ss(1,1,1).p("AAAgLIAAAX");
	this.shape.setTransform(-3.15,-1.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACFgCQAAABAAABIAAAAIgCAIQgCAEgEAEQgCABgBACIgBABIgBAAIgGACIgBAAIgEABQgBAAAAAAIgBAAIgFgBIAAAAIgGgCIgBgBIgBAAQgCgCgCgBQgEgEgBgEIgCgIIAAAAQAAgBAAgBIAAAAIACgKQABgDAEgEQACgCACgCIABAAIABgBIAGgCIAFgBIABAAQAAAAABAAIAAAAIAFABIADABQAEACAEAEQAEAEACADIACAKgAhXAFQAAAKgGAGQgHAHgJAAQgKAAgGgHQgHgGAAgKQAAgIAHgHQAGgHAKAAQAJAAAHAHQAGAHAAAIg");
	this.shape_1.setTransform(-4.35,-40.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ABprgQAoAUAjAhQAEADADADQACACABACQAGAFAFAFQADAEADADQAoAuATA2AEMomQADAIACAIQgGAAgHgBQgsgFgrgLQgFgCgEgBQgdgJgcgLQgEgCgEgCQgCAAgCgBQgCgBgCgBQgzgXgvggQgCgBgBgBQgJgHgJgGAERoWQAMArAAAuQAAA3gQAvQgXBHg4A4QgWAWgYARQhNA1hhACQgEAAgDAAQgWAAgVgCQgagDgYgHQgwgOgpgdQgZgRgWgWQhNhNgOhoQgDgYAAgYQAAgwAMgrQAWhNA8g8QA2g2BCgXQAFAEAEAEQAWAVAWATQADACADADQALAJALAKQACABACACQAHAFAHAFQAEADAEAEQADACAFADIAAAAAI6i/QgFARgQATQgHAIgHAGQgKAIgLADQgMAEgGgPQgEgHgCgMQgHgkAFgRQAEgRAIAEQAHAEAEAcQAEAdAdgWQAegVgEARgAh8g+QACACABADQAMASALAOQACACACACQASAUASAIQAYALAXgLQAdgOAcgyQABgCACgDAAyg4QgDAiALAaQAGAPALAOAHyh5QiaCRkNAMQASAWAfARIAKA6IABACIAoDqIAMBJQhAAOhAADIA3D9Ah/G5QBFARBGACQAYAAAXgBADpLdQAAAPgZAKQgYALgiAAQgjAAgYgLQgYgLAGgRQAHgRAkAHQAlAGAUgMQATgMAVAIQAUAIAAAPgAiSruQgCAHgDAHAiSruQAzgSA6AAQAjAAAfAGAo4jMQAFARASATQASAUAUAFQAUAGAHgkQAIgkgFgRQgFgRgJAEQgIAEgEAcQgEAdghgWQghgVAFARgAiPAYQjfgWhnh7QgJgKgHgLAiYrcQg4CThtAoQgCAAgCABQgNAEgOAEAiCg5QACAkgJAcQgBABAAABQgCAIgDAHQgNAbgVAUAizBJQAgCmgtBJQgBACgBABQgBABAAACQgBABAAAAQgBAAAAABQglAyhRgCQBcAyBgAXQg/DTiqhQAljKWQgPAEgQgUQgRgSgIgfQgIggAEgYQAFgZASACQASABADAjQADAiAQAPQAQAOgCAVQgDAUgOAEgAgehhIAABjAiRk4QBuB4Bthz");
	this.shape_2.setTransform(-0.0031,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AAAE6QgVAAgVgDQgagCgYgIQgwgNgpgeQgZgQgWgXQhMhNgPhnQgDgXAAgYQAAgwAMgrIAbgHIAEgCQBtgnA4iTIAAgCIABgDIAGgOIAJAJIAsAnIAFAGIAXASIADADIAOAKIAJAGIAGAGIAAABIADACIASAMIADACQAwAgAzAXIAFACIADABIAAABQADACAFABQAcALAdAJIAIADIABAAQArALAtAGIAMABQAMAqAAAuQAAA1gPAwQgYBHg4A3QgWAXgYAQQhNA2hiACIgHAAgAAFC5QA2AAA1g5Qg1A5g2AAIAAAAIgBAAQg3gBg3g9QA3A9A3ABIABAAIAAAAgAjqAUQgQAIAAAKQAAALAQAHQAPAIAWAAQAVAAAQgIQAPgHAAgLQAAgKgPgIQgQgHgVAAQgWAAgPAHgACEAUQgJAFgEAFQgCAEAAAEQAAAEACAEQAEAGAJAEQAQAHAWAAQAVAAAQgHQAPgIAAgKQAAgKgPgIQgQgHgVAAQgWAAgQAHgAiVgrIgDABIgEAFIgBACIAAACQADAGAEAHIASgDQADgGgBgFIAAgEIgCgCIgDgDIgCgBIgEgBQgDAAgFACgAiChOQgHAGAAAKQAAAJAHAGQAHAHAJAAQAKAAAGgHQAHgGgBgJQABgKgHgGQgGgHgKAAQgJAAgHAHgABghfIgFACIgBABIgBABIgFADQgDAEgBAEIgDAKIAAAAIAAABIAAAAIADAJQABAEADAEIAFADIABAAIABABIAFADIABAAIAFAAIAAAAIABAAIAFAAIABAAIAFgDIACAAIABgBIADgDQAEgEACgEIACgJIAAAAIAAgBIAAAAIgCgKQgCgEgEgEQgEgEgEgCIgDgBIgFAAIgBAAIgBAAIgBAAg");
	this.shape_3.setTransform(-3.85,-34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,153,51,0.498)").s().p("AC3BzQgYgLAGgRQAHgRAkAGQAlAGAUgMQATgMAVAIQAUAIAAAPQAAAPgZALQgYALgiAAQgjAAgYgLgAkmADQgRgSgIgfQgIgfAEgYQAFgaASACQASACADAiQADAiAQAPQAQAPgCAUQgDAUgOAEIgFAAQgMAAgOgQg");
	this.shape_4.setTransform(-9.231,74.0177);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAkD/IhXgMIgIgCIgDgEIgXgCQgIAAAAgEIgKgCIgJgDIgFgCIgIgCIgFgDIgbgGQgFgCgCgCIgDgCQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAIgFgBIgEgDIgIgDQgHgCgFgDIgGgEIgEgCIgBgBIgIgDIgNgEIgFgCQgDgEABgDQACgDAIABIAOABIAFgBIAEgDQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAIABgBQAEgFAFABIADgCQAIgHAKgBIAFgBIABgCQAEgHAIAAIAAgCQAGgIADgDIABAAIABgCIABgGIAAAAIAAgBIABgBIACgCQADgFAFAAIAAgDQgBgEADgGIAEgFIABgEQABgEAEgDIAAgCIADgGIABgFQgBgEABgFIABgDIAAgIIADgFIACgEIgCgGQgBgEABgEIACgEQgBgDABgDIACgEIgCgFQgBgEACgDQgDgHAEgGIAAAAIAAgCQAAgDABgCIgBgEQgEgGACgFQgEgHACgHIAAgBQgDgGACgFIAAgBQAAgEACgEIgFgKQgEgJAAgGQgBgHAEgEQgDgEgBgEQAAgEABgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgEADgDIAFgGIAKgKIAKgWIAEgGIADgEIADgJIACgFIAAgHQAAgFAEgDQgCgIABgFIADgFIAAgCIAAgBIAAgEIgBgHIAAAAIgBgEIAAgFIAAgBIAAAAIAAgBIABAAIAAgBIADgCIAEACIABABIAAAAIABACIAAAAIAAAEIACAEQABAAABAAQAAAAAAABQABAAAAABQABAAAAABIABADIAEAGIADADIACACQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAIADAEIAAAAIAAAEIAAACIADAEIACACIAJAHIAEACIAIAGIACAAIAFAFIAEABIAFACIAGAAIAXAAIAJgCIABgBQADgEAEgCIAHgCIAEgFQADgDAFgBIACgCIABgBIAAgCIAEAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABAAQACgDAEgCIAAgBQAAgGAFgCIADgCIABgDIAAAAIABgFIAAgCIABAAIAAgBIAAAAIAAgBIABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIACAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIABABIAAAAIABADIgBACIAAADIAAAAIgBABIAAABIAAADIgBAAIAAACIAAAAIABABQABABAAAFIAAAJIACAIIALAZIABAAQADADAFAKQAHARARAHIAIAFQAFADACAGQAHAAAFAHQABAFABAIQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIABAEIABAQIABADIAAAEIACABIAAAKQADAAACADIAAABIAAAIIABAOIABAAIAAAEIADAPIAAAGIABACIAAAFIAAADQADAMABAMIABABIAAABIACABIABAAIABAHIAAALIABAAIAAAEIAAAAIABACIAAAJIAAAEIAAAAIABABIAAAAIABAEIAAAOIABAFQADAFABAEIAAAEQACABAAAFIADAPIADAfIAEAMIAEAMIAAANIAAAGIgBADIABABIACAFIABAAQADACgBAEIgBADIAAABQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAABIACADIABAFIABABIAAAGIACADIABABIAAABIAAABIAAADIAAABIgDAEQgFADgDgEIgLAEIgGACIgQAAIgNADIgSAAIgbAFIgJAAIgIAAIgBABIgGABg");
	this.shape_5.setTransform(-5.5875,29.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAAIAAgCIABgCIAEgFIADgBQAFgCACAAIAEABIACABIADAEIACACIAAADQABAFgDAGIgRADQgEgIgDgFg");
	this.shape_6.setTransform(-18.25,-37.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,51,51,0.2)").s().p("AHwCHQgEgHgCgMQgHgkAFgRQAEgRAIAEQAHAEAEAcQAEAdAdgWQAegVgEARQgFARgQATQgHAIgHAGQgKAIgLADIgFABQgIAAgFgMgAn7CFQgUgFgSgUQgSgTgFgRQgFgRAhAVQAhAWAEgdQAEgcAIgEQAJgEAFARQAFARgIAkQgGAfgQAAIgFgBgAkRhnQgPgHAAgKQAAgLAPgHQAQgHAVAAQAWAAAPAHQAQAHAAALQAAAKgQAHQgPAIgWAAQgVAAgQgIgABehnQgJgEgEgGQgCgEAAgEQAAgEACgEQAEgFAJgFQAQgHAVAAQAWAAAPAHQAQAIAAAKQAAALgQAHQgPAHgWAAQgVAAgQgHg");
	this.shape_7.setTransform(-0.0031,-18.0329);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah9AVQgHgHAAgJQAAgJAHgGQAHgHAJABQAKgBAGAHQAHAGgBAJQABAJgHAHQgGAHgKAAQgJAAgHgHgABrAWIAAAAIgFAAIgBAAIgFgCIgBgBIgBAAIgFgEQgDgDgBgEIgDgIIAAgBIAAgBIAAAAIADgKQABgEADgDIAFgEIABAAIABgBIAFgCIAFAAIABAAIABAAIABAAIAFAAIADABQAEACAEAEQAEADACAEIACAKIAAAAIAAABIAAABIgCAIIgGAHIgDAEIgBABIgCAAIgFACIgBAAIgFAAIgBAAgAB9gTQgEgEgEgCQAEACAEADQAEAEACAEQgCgEgEgDgABZgUIAFgDIgFAEQgDADgBAEQABgEADgEg");
	this.shape_8.setTransform(-4.35,-40.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6699").s().p("AAUAlIgEAAIgOAAIgQgEIgTgIIgNgHIgDgCIgEgFQgEgGgCgGQgBgOAHgJQAHgLANgBIACAAQANgCALAIIAHAEQAGADAMABIADACIAHABIAMgBQAJADAGAJQAGAIgBAJQAAAJgHAIQgGAIgKACQgDABgMAAIgCAAg");
	this.shape_9.setTransform(8.2887,-67.6875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF66").s().p("AE4DnQgOgIgSgUQgMgOgDgHQgEgJAAgNIAAgHIgPhAIgBgHIgDgEQgCgFAAgJIgBgEQgQgmgIgaQgPg0gEgKQgPgkgYgQQgWgPgfAAQgRABgRAFIgDACIgFACIgFAEIgEAEQgHAJgGADIgEADIgCADIgCABQgEAIgLALIgGAFIgCAAIgLAAIgHgBIgCgCQgNAAgGgDIgHgFQgMgHgNABIgBABIAIgUQAag7AvgkQA2gmA8AAQAhAAAYAOQAMAHAXAXQAUAVAIAMQAIAPAJAbQAWBKAMBJIAJAaIACAEQAEAHAEARIARBAQACAGADACQAGABAIgEQAKgGAHgPIAKgbQAGgQAKgJQALgKANADQAMADAGAMQAEAEADAHIACAIQAGAMgDAVQgEAggSAdQgMAUgQAJIAAABQgIAHgJADQgMAGgUAAQgbgBgRgKgACAC1IgMgDIgcgHQgEABgHAAQgHAAgFgCIgCgCIgDABIgKgDIgEgCIgIgDIgBgBIgEgBIgVgHIgKgFIAAgBIgEAAIgEAAIgIgDIAAgBIgDgBIgFgCIgEgEIgKgEQgHgCgDgDIgFgFIgHgDQgNgEgGgFIgEgFIgCAAQgIAAgEgHQgFAAgDgDQgFgDgBgFIgCAAQgGABgEgDIgDgCQgEgDAAgGIgJgBIgFgCIgCgCIgBgBIgBgBIgCgEIgEAAIgJgGIgBgDQgCgDABgDQgFABgFgCIgBgBIgEgDIgCgCQgCgFAAgDIAAgBIgFgEIgDgBIgCgBQgFAAgDgBIgGgFIgBgCIgBgBQgFgCgCgEQgCgFAAgDIgGgCQgFgDgCgEQgIgBgEgHIgBgDIgBgBIgGgBIgCgFIACgDQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAAAAIAEAAIACAAQAEgHAHgBIAFABIAGACQABgDAEgCQAEgDAPAAIAWABQAEgCAHAAQAFAAAFABIAOABIAFABIAGgDQAEgBAEACIAEgBQAJAAAEADIABABQAHgDAPAGIACACIANAIIATAHIARAEIAOABIAMAJIABAAIACABIAeAQQAHAFADAEIAAABIADADIABACIAEABQAFABADAEQAGACAEACIAHAHIAAABIACAFIAEACIAIAGIAGAHIACAEIAAADQAHAEAFAJQAFAHABAHQALAMAFAOIADAJIAHAGQADAFgCAGIAEAHIACABQADABADAFIABACIABADIAAAFIgDAGQgCADgDACQgSgDgBgCgAAzBZIACABIgJgFIAHAEgAnBCzIgBAAIgCAAIgDgDIAAgBQAAgEADgBIAAAAIABgCQgBgCABgEQABgFAEgCIABgCIAAgEQABgEAEgHIAHgJIABgFIACgFQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIACgFQAEgIAIgKQgBgEADgBQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAIABgFQABgDAJgGIADgGIAIgJIAAgCIADgEIAQgOIAOgKIAAAAIAEgFQADgEAFgCIAEgBQABgDACgBIAFgBIAIgHQAFgGAIgCIADgDQAEgEAFgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIADgDQAHgFAJgCQADgBADACQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABIgBACIgBACIgDAEIgKAJQADABAAAEQAAADgDAEIgFAGIgEAIIgDAGIgGAOQgEAJgGAJQgHAKgFAFQgEACgCAEIgCAFQgDAGgKAIQgGAIgGAEIgBABQABABAAABQAAAAAAABQAAAAAAABQAAAAgBABQgBACgEACIgKADQgGAFgEAGIgGAIQgFAEgFgCIgFAGQgEAEgDgBIgCAAQgCACgDACIgHACIgFACIgFAFIgBAAIgDACIgFAAQgBACgEAAIgBAAIgCABIgCgBgAlTA/IAAACIABgCIgBAAgAlMApIgCACIgBABIADgCIABgCIgBAAIAAABgAA7CpIgJgDIAKADIgBAAgAAyCmIAAAAgAgNCPIgBAAIAIADQgFgBgCgCgAgOCPIAAAAg");
	this.shape_10.setTransform(11.325,-62.4253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-86.6,116,174.2);


(lib.Tween25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Avug9QCUgZArgoQCJiABMCAQATAhAPAxQAFgtAHglQABgGABgHQAMg8AQgpQAahAAngQQAVgJEOg3AgeFcQGokLB+EwAPvFcQlpkLhrEw");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.7,-39.5,203.5,79);


(lib.Tween24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhEGVQFsmDB/EwQAHg0ALgrQAPg8AWgpQADgFACgEQAegxApgSQAFgCAGgCQAUgGCiAKQBDAFBbAHAuIAjQAwjMArgoQCJiABMCAQATAhAQAyQAEgtAHgmQABgGABgGQAMg9ARgpQAZg/AogRQAUgIEOBU");
	this.shape.setTransform(0,0.0362);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-41.4,183,82.9);


(lib.Tween23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AC/EeQEKnRB+EvQAHg1ALgqQAPg8AWgpQADgEACgEQAig4AwgQQAcgIEQBoAwAB1QDkgZArgoQCJh/BMB/QATAhAQAxQAEgtAHglQACgHABgGQALg7ARgpQAahAAngQQAVgJCpiH");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-29.6,207.1,59.3);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aq2AbQAwhAArgoQCJiABMCAQATAhAQAwQAEgsAHglQACgHABgGQALg8ARgpQAahAAngQQAVgJCBgjAhiE8QFFlFB+EvQAHg1ALgqQAPg9AWgpQADgEACgFQAig3AwgQQAcgICsgj");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-32.6,141.1,65.30000000000001);


(lib.Symbol34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF99").ss(1,1,1).p("EgHBgjAQAMgFANgDQAMgBAMgBEgHBgjAIAxgKIAZgEIABAIQC2ApDoIpQEEJsCvOMQADASAEASQCvOjgQKuQgLHfhlCjQgsBHg7ALQg8ALhDgyQiZhyi4m6QkKp5iwukQgVhugShrQiIscAPpbQAOqFCxhIgEgF2gjGMANOBF+IhJAPMgNQhGH");
	this.shape.setTransform(64.2421,225.4992);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC33").s().p("EAErAimQiZhyi4m6QkKp5iwukQgVhugShrQiIscAPpbQAOqFCxhIIAxgKIgxAKQAMgFANgDIAYgCIAZgEIABAIQC2ApDoIpQEEJsCvOMIAHAkQCvOjgQKuQgLHfhlCjQgsBHg7ALQgLACgLAAQgzAAg2gpgEAGPAjHIBJgPMgNOhF+MANOBF+IhJAPMgNQhGHg");
	this.shape_1.setTransform(64.2421,225.4992);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(-1,-1,130.5,453), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF33").ss(1,1,1).p("AJ8AAQAAEHi7C6Qi6C7kHAAQkGAAi6i7Qi6i6AAkHQAAkGC6i6QC6i6EGAAQEHAAC6C6QC7C6AAEGg");
	this.shape.setTransform(129.15,129.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF33").ss(6,1,1).p("AJeoeIHMkFAMYANIIRAFADC0VIgiGfA0SnlIH9CMA0oEaIH/iFAqYyNIEFF+AAKNUIgEHCAo+JyIlSFzAJeJtIFzF4");
	this.shape_1.setTransform(132.075,130.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF33").s().p("AnAHBQi6i6AAkHQAAkGC6i7QC6i6EGAAQEHAAC6C6QC7C7gBEGQABEHi7C6Qi6C7kHAAQkGAAi6i7g");
	this.shape_2.setTransform(129.15,129.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-3,-3,270.2,266.3), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhlAAQAAAJgGAFQgGAHgJAAQgIAAgHgHQgGgFAAgJQAAgIAGgGQAHgGAIAAQAJAAAGAGQAGAGAAAIgACQAAQAAAJgHAFQgGAHgJAAQgIAAgHgHQgGgFAAgJQAAgIAGgGQAHgGAIAAQAJAAAGAGQAHAGAAAIg");
	this.shape.setTransform(57.55,41.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AFyrwQACAGABAHQALAsAAAxQAAAwgLAsQgXBdhIBIQhrBriXAAQiWAAhqhrQhrhqAAiXQAAgcAEgbAkOthQABgBAAgBAndkIQgBAAgBABQgCADgCAGQgBAJACAQQADAdglgMQgmgMAJAQQAKAPAWAMQANAJAMADQADAAABABQAHACAIgBQAFAAADgBQAFgDACgHQAEgIgBgQQgCglgJgPQgCgCgBgCQgFgGgEgBAjfhmQg2gFgvgLQgpgKgjgOQgGgDgGgCQgNgGgLgGAg4jGQghANgcAIQhAAQgqgNIAABIAAokOIAABjAg4jGQBYBHBZg7QAIgFAIgHQAEAGAEAGQAoA/AdA+IBShZQgWgYgigMQgqgPg9ADAhTnaQCdB9Buh9AhphBQgBADAAACQgGARgFAQQgkBwgKBUQgGAsACAkIHPgQQgBgDAAgDQAAgIgBgHQgGg4gPg4QAAgBAAAAQgBgEgBgDQgUhNglhMAhphBQgGAFgGAEQgSANgSAIQgjAOgjgHIAAhKAj6NAQAAAGAFAGQAGAHAPAGQAaALAkAAQAjAAAagLQAZgLgGgRQgCgEgEgDQgLgIgcAFQgmAGgWgMQgIgFgJgCQgHgBgIABQgFABgFACQgLAEgFAGQgBACgBABQgDAFAAAFgAiZEBQhHDIAXBIIC6AAIAEgFIAHgJIA0hEIADgEIAVgaIBQBgIBUAAIBfAAIATAAQAUhghMimQAAgEgBgCAGcMjQAAAGgEAGQgGAHgPAGQAAABgBAAQgYAKghAAQgjAAgYgLQgYgLAGgRQABgBABgCQABgCACgCQALgIAbAFQAlAGAUgMQACgCACgBQAGgDAGgBQAHgBAIABQABABACAAQADABADABQACAAABABQAJAEAEAFQABACABABQABACABACQAAADAAADgAh3IhIgNECAHbCmQABgBAAAAQADgCACgGQACgJgBgRQgBgdAkAQQAlAOgIgQQgJgQgVgPQgMgJgMgEQgJgDgJgBQgGAAgDACQgDgDgBgCQgogpgjggQgHgGgGgFQgvgsgogeQgMgJgJgIAHRBGQgFACgDAGQgDAJgBAPQAAAlAHAQQACADABACQAFAGADAAAg4jGQgcBHgVA+ADuIRIA3D8");
	this.shape_1.setTransform(54.7099,109.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AkBDTQhqhqAAiWQAAgcADgbIAKAEQAIADAFgEIABAAQAnANAOgQQAIgKgCgUQgCgaACgHQAGgCAUACQAQABAJgEQAKgGAGgQQANgggEghIAeACQASACALgEQAPgEAKgMIAHgKIArAGQALACAEgGQADgGgHgFIgDgCIANABQAQAAANgGQAPgIAFgMQAkAKAkgBQAUgBAIgJIAFgBQARAPAWAAQgFAIADAJQAEAKAJAEQAMAHAYgDQgDAbAUATQAUASAagFQgEAMALAKQAFAFARAGIAiALQAFAFAGABQAAAHANAAIAGAAIADANQALAsAAAxQAAAvgLAsQgXBdhIBIQhrBriXAAQiWAAhrhrgACkB+Qg3A+hDAAQhCAAhPg+QBPA+BCAAQBDAAA3g+gACnAHQgKAFgDAFQgDAEABAEQgBAEADAEQADAGAKAEQAQAHAVAAQAWAAAPgHQAPgHABgLQgBgKgPgIQgPgHgWAAQgVAAgQAHgAjgAHQgKAFgDAFQgDAEAAAEQAAAEADAEQADAGAKAEQAPAHAWAAQAWAAAPgHQAPgHABgLQgBgKgPgIQgPgHgWAAQgWAAgPAHgAB0haQgHAHAAAIQAAAJAHAGQAGAGAJAAQAIAAAGgGQAGgGABgJQgBgIgGgHQgGgGgIAAQgJAAgGAGgAiAhaQgHAHABAIQgBAJAHAGQAGAGAIAAQAJAAAGgGQAHgGAAgJQAAgIgHgHQgGgGgJAAQgIAAgGAGg");
	this.shape_2.setTransform(56.75,48.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,153,255,0.498)").s().p("AkxAjQgPgGgGgIQgEgFgBgHQABgFADgEIABgCQAFgGAMgFIAJgCQAIgCAIACQAIABAIAFQAWALAmgFQAdgFAKAIQAEADACAEQAGARgZALQgZALgkAAQgkAAgagLgAC9AGQgYgKAGgRIACgDIAEgEQAKgJAbAFQAlAGAUgMIAFgCQAFgDAGgBQAHgCAJACIACABIAGABIADACQAJAEAEAFIACADIACAEIAAAFQAAAHgEAFQgGAHgPAGIgBABQgXAKgiAAQgiAAgZgLg");
	this.shape_3.setTransform(62.8,191.2625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AkTCNQgEgGABgGIAAgBIAAgDQAAgmADgSIAGgeIAOhCQADgMAEgEQACgLADgJIgBgGQABgNAHgKIACgCIACgKQACgGAFgIQAEgHAFgDQADgBAMAAIAXgCQARgDAcABIA5AAIAIgBQAhgCAwABIACAAIALgCQAQgCAgAAIAkAAIAHgCQAKgCAJACQAFgDAMAAQAVgBAOACIAFgCQANgCAHAFQAEADABAEIABAEIAAAEIABAEIALAdQAFAEACAGQABACAAAJIABAGIABADIABABQABADAFAEQACADAEAKIAHAbQAIAYACAQIABASIAFAVQAEAPgCAKIgDAKIgBAKQABADAAAFIAAAAIgBAIQgEAHgPABIhfAAIgLgBIgPgCQgJgCgGABIgKABQgGABgDgCIgCgBIgEAAIgIABIAAAAQgNABgFgIIgEgIIgEgHIgCgEQgFgBgEgFIgCgEQgEgBgEgEQgCgEgBgDIgHgFQgGgGABgIIgLgNIgKgMIgGgCIgEABIgGAFIgCAHIgEAHIgEAIIgDAEIgCABIgEACIgDAFQgCAEgHAGQgGAKgCABIgEACIgDAFQgCAHgEADQgDADgEABIAAADQgCAHgFACIAAAFIgIAKIgBAAQgDACgIAAIg9AAIgLgBIgEAAIhNAAIgEABIgIABQgHAAgFgFg");
	this.shape_4.setTransform(62.1896,147.1714);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AjlDWQgCgEADgFIgBgDIABgDIABgBIAAgEIABgNIgBgHIACgIIAAgRIAAgLIACgKIADgOIAEgKQACgVAGgXIAJghIgBgFIABgGIAFgSQACgMAEgGIABgBIgBgBQAAgDADgDIABAAIAAgEIADgJQgBgFACgDIACgDIABgEIAAgJIACgDIAGgIIADgMIADgFIAEgOIAIgXIADgJIAAgCIABgFIAIgYIAAgBIAFgIIAGgPIAAgGQAAgEABgCQADgDADABQgBgEADgDQADgDADADIACADQACAAADADIAQAKIAHAEIAAAAQACgDAEACIACAEQAGAAAFADIAFADIAGACQApABAPgEIAZgHIAEgBQADgEAHgDIAUgKIAAgBQACgFADgBQAHgBAEAGIAEALIAAABQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQABABABADIAFAOIAEADQADADADAHIACAIQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQADACABADIALATIADAKIABAEQADABADAFIAuBsIAPAuIAHAVIAEAFIACAGIAAABIAAADIACAFIABALIABAMIACAFIADARQADAKgBAKQAEAGABALIAFAWIABAPQgCAEgLABIhlADQgcABgQgCIgCABQgcAFg4AAIhNABQhHACgzAEIgDAAQgMAAgCgGg");
	this.shape_5.setTransform(61.135,111.6663);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,51,51,0.2)").s().p("AHPF5IgDgFQgHgQAAglQABgPADgJQADgFAFgDQADgCAGAAQAJABAJADQAMAEAMAJQAVAPAJARQAIAPglgOQgkgPABAcQABARgCAJQgCAGgDACIgBABIgEAAQgDAAgFgGgAnkAxQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAQgMgDgNgKQgWgMgKgPQgJgOAmAKQAlAMgDgcQgCgQABgJQACgGACgDIACgBIADgBQAEABAFAGIADAEQAJAPACAkQABAQgEAIQgCAIgFADIgIAAIgFABIgKgBgAC7lUQgJgEgEgFQgCgFAAgDQAAgFACgDQAEgGAJgEQAQgIAVABQAWgBAPAIQAQAHAAALQAAAKgQAHQgPAIgWgBQgVABgQgIgAjMlUQgJgEgEgFQgCgFAAgDQAAgFACgDQAEgGAJgEQAQgIAVABQAWgBAPAIQAQAHAAALQAAAKgQAHQgPAIgWgBQgVABgQgIg");
	this.shape_6.setTransform(54.7099,87.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF66").s().p("Aj1BUQgFgCgDgFQgEgGACgGIAEgIIgCgDIAAgHIAAgEIACgCQgDgYABgUQAAgLABgEIAAgCIAAgBIgBgCIAAgCIAAgDIAAgBIgBgBIAAgDIABgBIAAgBQgBgFADgFIgCgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABgBAAAAQABAAABAAIAFACIAGAAIACAAIAAAAIAGAAIABABIAJAAIABAAIACAAIADABIAKgBIACAAIACAAIACAAIABgBIAHAAIABAAIADAAIACgCQAEgBADABIAIgBQAOgDAMgEIAKgDIABAAIABAAIABgBIAJgDIACAAIABgBIACgBIACgBQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIABAAIAEgCQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAEADQABADgCAEIgBACIgBADIgBABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABIAAABIAAACIgCAEIgCABIgBAEIgBAEIgBADIAAAHQgCAGgEAHIgEAIIgBAHIgEAHIgCAGQgBAEgBACIgEAGIgBAHQgBAHgFAFQAAAGgGAGQgEAEgJAFIgbAPQgHADgDAAIgFABIgCABQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgEACIgFABIgKAAIgEgBIgBAAIgOABIgCAAgAC1AqQgCgCgBgDIgUgnIgQgcIgBgCIgFgEIgBgCIgCgFIgBgBIAAgCIgCgDQgDgGgBgFIgHgJIgCgDIgEgBQgDgBABgFQACgEAHAAQAQAAALADIAIACIAGgBIALABIAFACIAQAEIALAEIAFABIAEABIAPAHQAEACABADQAKAFAKAHQAEAEAAACIgCADQAAADgDACIgBABIgBAEQgCACgFABIgDAFQgEAJgJAHIgRAPQgJAHgGAIIgFAJQgDADgDAAIgDgBg");
	this.shape_7.setTransform(58.0411,97.6813);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABtDTQgGgGAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAGAHAAAIQAAAJgGAGQgGAGgJAAQgIAAgHgGgAiHDTQgGgGAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAGAHAAAIQAAAJgGAGQgGAGgJAAQgIAAgHgGgAlWCuIgBAAQgGAEgIgDIgJgEIgDgCIgPgFQgNgFgDgEQgEgEAAgIIABgOIAAgJIABgIQABgGAIgGQAGgGAEgBIACAAQgHgUgBgWQAAgJABgIIAAgBQACgKAFgGQALgPAigDQgWg3ASgZQAPgVAlgCIAeABQASAAALgBQAEgSALgOQAMgOARgHQAQgHASACQATACAOAKQAegaAogIQAogIAkAMQAdgdAmgGIAEAAQANgCALACQANABAKAGQALAHAHALQAIALgBANQALACAPgBIAbgEQAigEAQASQAHAIAEAQQAHAfgGAfQAJACAfgCQAMAAAJACQAJACAFAGQAKAKgDAXQgDAdACAIQAIgEAJAEQAJADAFAJQAEAHABAKIACATQABAWgHAIIgDADIgBAHQgCAPgHAEQgEACgJAAIgeAAIgFAAQgNAAAAgHQgGgBgGgFIghgLQgRgGgFgFQgLgKAEgMQgaAFgUgSQgUgTACgbQgXADgNgHQgIgDgEgKQgDgJAFgIQgWAAgSgPIgEABQgIAJgUABQglABgigKQgGAMgPAIQgNAGgQAAIgNgBIADACQAHAFgDAGQgEAFgLgBIgrgGIgHAJQgKAMgPAEQgLAEgSgCIgegCQAEAhgNAgQgHAQgKAGQgIAEgQgBQgUgCgGACQgCAHACAaQACAUgIAKQgIAIgPAAQgNAAgRgFgAkpAHIABABIAFgDIAAAAIgBAAIgDAAIgDgBIABADgACggSIABABIgCgCIABABgAhjgwIAAAAIgBAAIABAAgABBi2IABAAIADgDIgEADg");
	this.shape_8.setTransform(57.3813,21.7375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-1,0,111.5,196.9), null);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhkAAQAAAJgHAFQgGAHgJAAQgIAAgHgHQgGgFAAgJQAAgIAGgGQAHgGAIAAQAJAAAGAGQAHAGAAAIgACPAAQAAAJgGAFQgGAHgIAAQgJAAgGgHQgGgFAAgJQAAgIAGgGQAGgGAJAAQAIAAAGAGQAGAGAAAIg");
	this.shape.setTransform(56.5,41.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AFtrwQACAGABAHQALAsAAAxQAAAwgLAsQgXBdhIBIQhrBriXAAQiWAAhqhrQhrhqAAiXQAAgcAEgbAkTthQABgBAAgBAnHj7QAAAAgBAAQgEABgEAFQgGAHgGAPQgMAagagdQgbgcAAARQABASANAWQAHAPAJAIQACACAAABQAGAFAHADQAEADADAAQAGAAAGgFQAHgFAHgOQARghgBgSQAAgDAAgCQgBgIgDgCAjkhmQg2gFgvgLQgpgKgjgOQgGgDgGgCQgNgGgLgGAg9jGQghANgcAIQhAAQgqgNIAABIAAjkOIAABjACEjGQAEAGAEAGQAoA/AdA+IBShZQgWgYgigMQgqgPg9ADgAg9jGQBYBHBZg7QAIgFAIgHAhYnaQCdB9Buh9AhuhBQgBADAAACQgGARgFAQQgkBwgKBUQgGAsACAkIHPgQQgBgDAAgDQAAgIgBgHQgGg4gPg4QAAgBAAAAQgBgEgBgDQgUhNglhMAhuhBQgGAFgGAEQgSANgSAIQgjAOgjgHIAAhKAj/NAQAAAGAFAGQAGAHAPAGQAaALAkAAQAjAAAagLQAZgLgGgRQgCgEgEgDQgLgIgcAFQgmAGgWgMQgIgFgJgCQgHgBgIABQgFABgFACQgLAEgFAGQgBACgBABQgDAFAAAFgAieEBQhHDIAXBIIC6AAIAEgFIAHgJIA0hEIADgEIAVgaIBQBgIBTAAIBgAAIATAAQAUhghMimQAAgEgBgCAGXMjQAAAGgEAGQgGAHgPAGQAAABgBAAQgYAKghAAQgjAAgYgLQgYgLAGgRQABgBABgCQABgCACgCQALgIAbAFQAlAGAUgMQACgCACgBQAGgDAGgBQAHgBAIABQABABACAAQADABADABQACAAABABQAJAEAEAFQABACABABQABACABACQAAADAAADgAh8IhIgNECAHWCmQABgBAAAAQADgCACgGQACgJgBgRQgBgdAkAQQAlAOgIgQQgJgQgVgPQgMgJgMgEQgJgDgJgBQgGAAgDACQgDgDgBgCQgogpgjggQgHgGgGgFQgvgsgogeQgMgJgJgIAHMBGQgFACgDAGQgDAJgBAPQAAAlAHAQQACADABACQAFAGADAAAg9jGQgcBHgVA+ADpIRIA3D8");
	this.shape_1.setTransform(54.1957,109.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AkADTQhrhqAAiWQAAgcADgbIAJAEQAJADAFgEIABAAQAnANAOgQQAIgKgCgUQgCgaACgHQAGgCAUACQAQABAIgEQALgGAGgQQANgggEghIAeACQASACAMgEQAOgEAKgMIAHgKIArAGQAMACADgGQADgGgHgFIgDgCIANABQAQAAANgGQAPgIAFgMQAkAKAkgBQAVgBAHgJIAEgBQASAPAWAAQgFAIAEAJQADAKAJAEQAMAHAYgDQgDAbAUATQAUASAagFQgEAMAMAKQAEAFARAGIAiALQAFAFAGABQABAHAMAAIAFAAIAEANQALAsAAAxQAAAvgLAsQgXBdhJBIQhqBriXAAQiWAAhqhrgACkB+Qg3A+hDAAQhCAAhPg+QBPA+BCAAQBDAAA3g+gACnAHQgJAFgEAFQgCAEgBAEQABAEACAEQAEAGAJAEQAQAHAVAAQAWAAAPgHQAQgHAAgLQAAgKgQgIQgPgHgWAAQgVAAgQAHgAjgAHQgJAFgEAFQgCAEAAAEQAAAEACAEQAEAGAJAEQAPAHAWAAQAWAAAPgHQAPgHAAgLQAAgKgPgIQgPgHgWAAQgWAAgPAHgABzhaQgFAHAAAIQAAAJAFAGQAHAGAJAAQAIAAAGgGQAGgGAAgJQAAgIgGgHQgGgGgIAAQgJAAgHAGgAiAhaQgGAHgBAIQABAJAGAGQAGAGAJAAQAIAAAGgGQAGgGAAgJQAAgIgGgHQgGgGgIAAQgJAAgGAGg");
	this.shape_2.setTransform(55.7,48.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,153,255,0.498)").s().p("AkwAjQgPgGgHgIQgEgFAAgHQAAgFACgEIACgCQAGgGAKgFIAKgCQAIgCAIACQAJABAIAFQAVALAmgFQAcgFAMAIQADADACAEQAGARgZALQgZALgkAAQgkAAgZgLgAC+AGQgZgKAHgRIABgDIADgEQALgJAbAFQAlAGAUgMIAEgCQAHgDAGgBQAHgCAHACIADABIAGABIAEACQAIAEAEAFIACADIACAEIAAAFQABAHgFAFQgGAHgOAGIgCABQgYAKghAAQgjAAgXgLg");
	this.shape_3.setTransform(61.75,191.2625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AkTCNQgEgGABgGIAAgBIAAgDQAAgmADgSIAGgeIAOhCQADgMAEgEQACgLADgJIgBgGQABgNAHgKIACgCIACgKQACgGAFgIQAEgHAFgDQADgBAMAAIAXgCQARgDAcABIA5AAIAIgBQAhgCAwABIACAAIALgCQAQgCAgAAIAkAAIAHgCQAKgCAJACQAFgDAMAAQAVgBAOACIAFgCQANgCAHAFQAEADABAEIABAEIAAAEIABAEIALAdQAFAEACAGQABACAAAJIABAGIABADIABABQABADAFAEQACADAEAKIAHAbQAIAYACAQIABASIAFAVQAEAPgCAKIgDAKIgBAKQABADAAAFIAAAAIgBAIQgEAHgPABIhfAAIgLgBIgPgCQgJgCgGABIgKABQgGABgDgCIgCgBIgEAAIgIABIAAAAQgNABgFgIIgEgIIgEgHIgCgEQgFgBgEgFIgCgEQgEgBgEgEQgCgEgBgDIgHgFQgGgGABgIIgLgNIgKgMIgGgCIgEABIgGAFIgCAHIgEAHIgEAIIgDAEIgCABIgEACIgDAFQgCAEgHAGQgGAKgCABIgEACIgDAFQgCAHgEADQgDADgEABIAAADQgCAHgFACIAAAFIgIAKIgBAAQgDACgIAAIg9AAIgLgBIgEAAIhNAAIgEABIgIABQgHAAgFgFg");
	this.shape_4.setTransform(61.1396,147.1714);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AjlDWQgCgEADgFIgBgDIABgDIABgBIAAgEIABgNIgBgHIACgIIAAgRIAAgLIACgKIADgOIAEgKQACgVAGgXIAJghIgBgFIABgGIAFgSQACgMAEgGIABgBIgBgBQAAgDADgDIABAAIAAgEIADgJQgBgFACgDIACgDIABgEIAAgJIACgDIAGgIIADgMIADgFIAEgOIAIgXIADgJIAAgCIABgFIAIgYIAAgBIAFgIIAGgPIAAgGQAAgEABgCQADgDADABQgBgEADgDQADgDADADIACADQACAAADADIAQAKIAHAEIAAAAQACgDAEACIACAEQAGAAAFADIAFADIAGACQApABAPgEIAZgHIAEgBQADgEAHgDIAUgKIAAgBQACgFADgBQAHgBAEAGIAEALIAAABQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQABABABADIAFAOIAEADIAGAKIACAIQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQADACABADIALATIADAKIABAEQADABADAFIAuBsIAPAuIAHAVIAEAFIACAGIAAABIAAADIACAFIABALIABAMIACAFIADARQADAKgBAKQAEAGABALIAFAWIABAPQgCAEgLABIhlADQgcABgQgCIgCABQgcAFg4AAIhNABQhHACgzAEIgDAAQgMAAgCgGg");
	this.shape_5.setTransform(60.085,111.6663);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,51,51,0.2)").s().p("AHKF5IgDgFQgHgQAAglQABgPADgJQADgFAFgDQADgCAGAAQAJABAJADQAMAEAMAJQAVAPAJARQAIAPglgOQgkgPABAcQABARgCAJQgCAGgDACIgBABIgEAAQgDAAgFgGgAnwA1QgHgDgGgFIgCgDQgJgIgHgOQgNgVgBgTQAAgRAbAcQAaAdAMgaQAGgPAGgHQAEgEAEgBIABgBIAEABQADADABAHIAAAFQABASgRAgQgHAOgHAFQgGAGgGAAQgDgBgEgDgAC2lUQgJgEgEgFQgCgFAAgDQAAgFACgDQAEgGAJgEQAQgIAVABQAWgBAPAIQAQAHAAALQAAAKgQAHQgPAIgWgBQgVABgQgIgAjRlUQgJgEgEgFQgCgFAAgDQAAgFACgDQAEgGAJgEQAQgIAVABQAWgBAPAIQAQAHAAALQAAAKgQAHQgPAIgWgBQgVABgQgIg");
	this.shape_6.setTransform(54.1957,87.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF66").s().p("Aj1BUQgFgCgDgFQgEgGACgGIAEgIIgCgDIAAgHIAAgEIACgCQgDgYABgUQAAgLABgEIAAgCIAAgBIgBgCIAAgCIAAgDIAAgBIgBgBIAAgDIABgBIAAgBQgBgFADgFIgCgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABgBAAAAQABAAABAAIAFACIAGAAIACAAIAAAAIAGAAIABABIAJAAIABAAIACAAIADABIAKgBIACAAIACAAIACAAIABgBIAHAAIABAAIADAAIACgCQAEgBADABIAIgBQAOgDAMgEIAKgDIABAAIABAAIABgBIAJgDIACAAIABgBIACgBIACgBQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIABAAIAEgCQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAEADQABADgCAEIgBACIgBADIgBABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABIAAABIAAACIgCAEIgCABIgBAEIgBAEIgBADIAAAHQgCAGgEAHIgEAIIgBAHIgEAHIgCAGQgBAEgBACIgEAGIgBAHQgBAHgFAFQAAAGgGAGQgEAEgJAFIgbAPQgHADgDAAIgFABIgCABQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgEACIgFABIgKAAIgEgBIgBAAIgOABIgCAAgAC1AqQgCgCgBgDIgUgnIgQgcIgBgCIgFgEIgBgCIgCgFIgBgBIAAgCIgCgDQgDgGgBgFIgHgJIgCgDIgEgBQgDgBABgFQACgEAHAAQAQAAALADIAIACIAGgBIALABIAFACIAQAEIALAEIAFABIAEABIAPAHQAEACABADQAKAFAKAHQAEAEAAACIgCADQAAADgDACIgBABIgBAEQgCACgFABIgDAFQgEAJgJAHIgRAPQgJAHgGAIIgFAJQgDADgDAAIgDgBg");
	this.shape_7.setTransform(56.9911,97.6813);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABtDTQgGgGAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAGAHAAAIQAAAJgGAGQgGAGgJAAQgIAAgHgGgAiHDTQgGgGAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAGAHAAAIQAAAJgGAGQgGAGgJAAQgIAAgHgGgAlWCuIgBAAQgGAEgIgDIgJgEIgDgCIgPgFQgNgFgDgEQgEgEAAgIIABgOIAAgJIABgIQABgGAIgGQAGgGAEgBIACAAQgHgUgBgWQAAgJABgIIAAgBQACgKAFgGQALgPAigDQgWg3ASgZQAPgVAlgCIAeABQASAAALgBQAEgSALgOQAMgOARgHQAQgHASACQATACAOAKQAegaAogIQAogIAkAMQAdgdAmgGIAEAAQANgCALACQANABAKAGQALAHAHALQAIALgBANQALACAPgBIAbgEQAigEAQASQAHAIAEAQQAHAfgGAfQAJACAfgCQAMAAAJACQAJACAFAGQAKAKgDAXQgDAdACAIQAIgEAJAEQAJADAFAJQAEAHABAKIACATQABAWgHAIIgDADIgBAHQgCAPgHAEQgEACgJAAIgeAAIgFAAQgNAAAAgHQgGgBgGgFIghgLQgRgGgFgFQgLgKAEgMQgaAFgUgSQgUgTACgbQgXADgNgHQgIgDgEgKQgDgJAFgIQgWAAgSgPIgEABQgIAJgUABQglABgigKQgGAMgPAIQgNAGgQAAIgNgBIADACQAHAFgDAGQgEAFgLgBIgrgGIgHAJQgKAMgPAEQgLAEgSgCIgegCQAEAhgNAgQgHAQgKAGQgIAEgQgBQgUgCgGACQgCAHACAaQACAUgIAKQgIAIgPAAQgNAAgRgFgAkpAHIABABIAFgDIAAAAIgBAAIgDAAIgDgBIABADgACggSIABABIgCgCIABABgAhjgwIAAAAIgBAAIABAAgABBi2IABAAIADgDIgEADg");
	this.shape_8.setTransform(56.3313,21.7375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-1,0,110.4,196.9), null);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhkAAQAAAJgHAFQgGAHgJAAQgIAAgHgHQgGgFAAgJQAAgIAGgGQAHgGAIAAQAJAAAGAGQAHAGAAAIgACPAAQAAAJgGAFQgGAHgIAAQgJAAgGgHQgGgFAAgJQAAgIAGgGQAGgGAJAAQAIAAAGAGQAGAGAAAIg");
	this.shape.setTransform(56.5,41.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AFtrwQACAGABAHQALAsAAAxQAAAwgLAsQgXBdhIBIQhrBriXAAQiWAAhqhrQhrhqAAiXQAAgcAEgbAkTthQABgBAAgBAnHj7QAAAAgBAAQgEABgEAFQgGAHgGAPQgMAagagdQgbgcAAARQABASANAWQAHAPAJAIQACACAAABQAGAFAHADQAEADADAAQAGAAAGgFQAHgFAHgOQARghgBgSQAAgDAAgCQgBgIgDgCAjkhmQg2gFgvgLQgpgKgjgOQgGgDgGgCQgNgGgLgGAg9jGQghANgcAIQhAAQgqgNIAABIAAjkOIAABjACEjGQAEAGAEAGQAoA/AdA+IBShZQgWgYgigMQgqgPg9ADgAg9jGQBYBHBZg7QAIgFAIgHAhYnaQCdB9Buh9AhuhBQgBADAAACQgGARgFAQQgkBwgKBUQgGAsACAkIHPgQQgBgDAAgDQAAgIgBgHQgGg4gPg4QAAgBAAAAQgBgEgBgDQgUhNglhMAhuhBQgGAFgGAEQgSANgSAIQgjAOgjgHIAAhKAj/NAQAAAGAFAGQAGAHAPAGQAaALAkAAQAjAAAagLQAZgLgGgRQgCgEgEgDQgLgIgcAFQgmAGgWgMQgIgFgJgCQgHgBgIABQgFABgFACQgLAEgFAGQgBACgBABQgDAFAAAFgAieEBQhHDIAXBIIC6AAIAEgFIAHgJIA0hEIADgEIAVgaIBQBgIBTAAIBgAAIATAAQAUhghMimQAAgEgBgCAGXMjQAAAGgEAGQgGAHgPAGQAAABgBAAQgYAKghAAQgjAAgYgLQgYgLAGgRQABgBABgCQABgCACgCQALgIAbAFQAlAGAUgMQACgCACgBQAGgDAGgBQAHgBAIABQABABACAAQADABADABQACAAABABQAJAEAEAFQABACABABQABACABACQAAADAAADgAh8IhIgNECAHWCmQABgBAAAAQADgCACgGQACgJgBgRQgBgdAkAQQAlAOgIgQQgJgQgVgPQgMgJgMgEQgJgDgJgBQgGAAgDACQgDgDgBgCQgogpgjggQgHgGgGgFQgvgsgogeQgMgJgJgIAHMBGQgFACgDAGQgDAJgBAPQAAAlAHAQQACADABACQAFAGADAAAg9jGQgcBHgVA+ADpIRIA3D8");
	this.shape_1.setTransform(54.1957,109.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AkADTQhrhqAAiWQAAgcADgbIAJAEQAJADAFgEIABAAQAnANAOgQQAIgKgCgUQgCgaACgHQAGgCAUACQAQABAIgEQALgGAGgQQANgggEghIAeACQASACAMgEQAOgEAKgMIAHgKIArAGQAMACADgGQADgGgHgFIgDgCIANABQAQAAANgGQAPgIAFgMQAkAKAkgBQAVgBAHgJIAEgBQASAPAWAAQgFAIAEAJQADAKAJAEQAMAHAYgDQgDAbAUATQAUASAagFQgEAMAMAKQAEAFARAGIAiALQAFAFAGABQABAHAMAAIAFAAIAEANQALAsAAAxQAAAvgLAsQgXBdhJBIQhqBriXAAQiWAAhqhrgACkB+Qg3A+hDAAQhCAAhPg+QBPA+BCAAQBDAAA3g+gACnAHQgJAFgEAFQgCAEgBAEQABAEACAEQAEAGAJAEQAQAHAVAAQAWAAAPgHQAQgHAAgLQAAgKgQgIQgPgHgWAAQgVAAgQAHgAjgAHQgJAFgEAFQgCAEAAAEQAAAEACAEQAEAGAJAEQAPAHAWAAQAWAAAPgHQAPgHAAgLQAAgKgPgIQgPgHgWAAQgWAAgPAHgABzhaQgFAHAAAIQAAAJAFAGQAHAGAJAAQAIAAAGgGQAGgGAAgJQAAgIgGgHQgGgGgIAAQgJAAgHAGgAiAhaQgGAHgBAIQABAJAGAGQAGAGAJAAQAIAAAGgGQAGgGAAgJQAAgIgGgHQgGgGgIAAQgJAAgGAGg");
	this.shape_2.setTransform(55.7,48.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,153,255,0.498)").s().p("AkwAjQgPgGgHgIQgEgFAAgHQAAgFACgEIACgCQAGgGAKgFIAKgCQAIgCAIACQAJABAIAFQAVALAmgFQAcgFAMAIQADADACAEQAGARgZALQgZALgkAAQgkAAgZgLgAC+AGQgZgKAHgRIABgDIADgEQALgJAbAFQAlAGAUgMIAEgCQAHgDAGgBQAHgCAHACIADABIAGABIAEACQAIAEAEAFIACADIACAEIAAAFQABAHgFAFQgGAHgOAGIgCABQgYAKghAAQgjAAgXgLg");
	this.shape_3.setTransform(61.75,191.2625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AkTCNQgEgGABgGIAAgBIAAgDQAAgmADgSIAGgeIAOhCQADgMAEgEQACgLADgJIgBgGQABgNAHgKIACgCIACgKQACgGAFgIQAEgHAFgDQADgBAMAAIAXgCQARgDAcABIA5AAIAIgBQAhgCAwABIACAAIALgCQAQgCAgAAIAkAAIAHgCQAKgCAJACQAFgDAMAAQAVgBAOACIAFgCQANgCAHAFQAEADABAEIABAEIAAAEIABAEIALAdQAFAEACAGQABACAAAJIABAGIABADIABABQABADAFAEQACADAEAKIAHAbQAIAYACAQIABASIAFAVQAEAPgCAKIgDAKIgBAKQABADAAAFIAAAAIgBAIQgEAHgPABIhfAAIgLgBIgPgCQgJgCgGABIgKABQgGABgDgCIgCgBIgEAAIgIABIAAAAQgNABgFgIIgEgIIgEgHIgCgEQgFgBgEgFIgCgEQgEgBgEgEQgCgEgBgDIgHgFQgGgGABgIIgLgNIgKgMIgGgCIgEABIgGAFIgCAHIgEAHIgEAIIgDAEIgCABIgEACIgDAFQgCAEgHAGQgGAKgCABIgEACIgDAFQgCAHgEADQgDADgEABIAAADQgCAHgFACIAAAFIgIAKIgBAAQgDACgIAAIg9AAIgLgBIgEAAIhNAAIgEABIgIABQgHAAgFgFg");
	this.shape_4.setTransform(61.1396,147.1714);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AjlDWQgCgEADgFIgBgDIABgDIABgBIAAgEIABgNIgBgHIACgIIAAgRIAAgLIACgKIADgOIAEgKQACgVAGgXIAJghIgBgFIABgGIAFgSQACgMAEgGIABgBIgBgBQAAgDADgDIABAAIAAgEIADgJQgBgFACgDIACgDIABgEIAAgJIACgDIAGgIIADgMIADgFIAEgOIAIgXIADgJIAAgCIABgFIAIgYIAAgBIAFgIIAGgPIAAgGQAAgEABgCQADgDADABQgBgEADgDQADgDADADIACADQACAAADADIAQAKIAHAEIAAAAQACgDAEACIACAEQAGAAAFADIAFADIAGACQApABAPgEIAZgHIAEgBQADgEAHgDIAUgKIAAgBQACgFADgBQAHgBAEAGIAEALIAAABQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQABABABADIAFAOIAEADIAGAKIACAIQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQADACABADIALATIADAKIABAEQADABADAFIAuBsIAPAuIAHAVIAEAFIACAGIAAABIAAADIACAFIABALIABAMIACAFIADARQADAKgBAKQAEAGABALIAFAWIABAPQgCAEgLABIhlADQgcABgQgCIgCABQgcAFg4AAIhNABQhHACgzAEIgDAAQgMAAgCgGg");
	this.shape_5.setTransform(60.085,111.6663);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,51,51,0.2)").s().p("AHKF5IgDgFQgHgQAAglQABgPADgJQADgFAFgDQADgCAGAAQAJABAJADQAMAEAMAJQAVAPAJARQAIAPglgOQgkgPABAcQABARgCAJQgCAGgDACIgBABIgEAAQgDAAgFgGgAnwA1QgHgDgGgFIgCgDQgJgIgHgOQgNgVgBgTQAAgRAbAcQAaAdAMgaQAGgPAGgHQAEgEAEgBIABgBIAEABQADADABAHIAAAFQABASgRAgQgHAOgHAFQgGAGgGAAQgDgBgEgDgAC2lUQgJgEgEgFQgCgFAAgDQAAgFACgDQAEgGAJgEQAQgIAVABQAWgBAPAIQAQAHAAALQAAAKgQAHQgPAIgWgBQgVABgQgIgAjRlUQgJgEgEgFQgCgFAAgDQAAgFACgDQAEgGAJgEQAQgIAVABQAWgBAPAIQAQAHAAALQAAAKgQAHQgPAIgWgBQgVABgQgIg");
	this.shape_6.setTransform(54.1957,87.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF66").s().p("Aj1BUQgFgCgDgFQgEgGACgGIAEgIIgCgDIAAgHIAAgEIACgCQgDgYABgUQAAgLABgEIAAgCIAAgBIgBgCIAAgCIAAgDIAAgBIgBgBIAAgDIABgBIAAgBQgBgFADgFIgCgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABgBAAAAQABAAABAAIAFACIAGAAIACAAIAAAAIAGAAIABABIAJAAIABAAIACAAIADABIAKgBIACAAIACAAIACAAIABgBIAHAAIABAAIADAAIACgCQAEgBADABIAIgBQAOgDAMgEIAKgDIABAAIABAAIABgBIAJgDIACAAIABgBIACgBIACgBQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIABAAIAEgCQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAEADQABADgCAEIgBACIgBADIgBABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABIAAABIAAACIgCAEIgCABIgBAEIgBAEIgBADIAAAHQgCAGgEAHIgEAIIgBAHIgEAHIgCAGQgBAEgBACIgEAGIgBAHQgBAHgFAFQAAAGgGAGQgEAEgJAFIgbAPQgHADgDAAIgFABIgCABQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgEACIgFABIgKAAIgEgBIgBAAIgOABIgCAAgAC1AqQgCgCgBgDIgUgnIgQgcIgBgCIgFgEIgBgCIgCgFIgBgBIAAgCIgCgDQgDgGgBgFIgHgJIgCgDIgEgBQgDgBABgFQACgEAHAAQAQAAALADIAIACIAGgBIALABIAFACIAQAEIALAEIAFABIAEABIAPAHQAEACABADQAKAFAKAHQAEAEAAACIgCADQAAADgDACIgBABIgBAEQgCACgFABIgDAFQgEAJgJAHIgRAPQgJAHgGAIIgFAJQgDADgDAAIgDgBg");
	this.shape_7.setTransform(56.9911,97.6813);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABtDTQgGgGAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAGAHAAAIQAAAJgGAGQgGAGgJAAQgIAAgHgGgAiHDTQgGgGAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAGAHAAAIQAAAJgGAGQgGAGgJAAQgIAAgHgGgAlWCuIgBAAQgGAEgIgDIgJgEIgDgCIgPgFQgNgFgDgEQgEgEAAgIIABgOIAAgJIABgIQABgGAIgGQAGgGAEgBIACAAQgHgUgBgWQAAgJABgIIAAgBQACgKAFgGQALgPAigDQgWg3ASgZQAPgVAlgCIAeABQASAAALgBQAEgSALgOQAMgOARgHQAQgHASACQATACAOAKQAegaAogIQAogIAkAMQAdgdAmgGIAEAAQANgCALACQANABAKAGQALAHAHALQAIALgBANQALACAPgBIAbgEQAigEAQASQAHAIAEAQQAHAfgGAfQAJACAfgCQAMAAAJACQAJACAFAGQAKAKgDAXQgDAdACAIQAIgEAJAEQAJADAFAJQAEAHABAKIACATQABAWgHAIIgDADIgBAHQgCAPgHAEQgEACgJAAIgeAAIgFAAQgNAAAAgHQgGgBgGgFIghgLQgRgGgFgFQgLgKAEgMQgaAFgUgSQgUgTACgbQgXADgNgHQgIgDgEgKQgDgJAFgIQgWAAgSgPIgEABQgIAJgUABQglABgigKQgGAMgPAIQgNAGgQAAIgNgBIADACQAHAFgDAGQgEAFgLgBIgrgGIgHAJQgKAMgPAEQgLAEgSgCIgegCQAEAhgNAgQgHAQgKAGQgIAEgQgBQgUgCgGACQgCAHACAaQACAUgIAKQgIAIgPAAQgNAAgRgFgAkpAHIABABIAFgDIAAAAIgBAAIgDAAIgDgBIABADgACggSIABABIgCgCIABABgAhjgwIAAAAIgBAAIABAAgABBi2IABAAIADgDIgEADg");
	this.shape_8.setTransform(56.3313,21.7375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-1,0,110.4,196.9), null);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhkAAQAAAJgHAFQgGAHgJAAQgIAAgHgHQgGgFAAgJQAAgIAGgGQAHgGAIAAQAJAAAGAGQAHAGAAAIgACPAAQAAAJgGAFQgGAHgIAAQgJAAgGgHQgGgFAAgJQAAgIAGgGQAGgGAJAAQAIAAAGAGQAGAGAAAIg");
	this.shape.setTransform(56.5,41.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AFtrwQACAGABAHQALAsAAAxQAAAwgLAsQgXBdhIBIQhrBriXAAQiWAAhqhrQhrhqAAiXQAAgcAEgbAkTthQABgBAAgBAnHj7QAAAAgBAAQgEABgEAFQgGAHgGAPQgMAagagdQgbgcAAARQABASANAWQAHAPAJAIQACACAAABQAGAFAHADQAEADADAAQAGAAAGgFQAHgFAHgOQARghgBgSQAAgDAAgCQgBgIgDgCAjkhmQg2gFgvgLQgpgKgjgOQgGgDgGgCQgNgGgLgGAg9jGQghANgcAIQhAAQgqgNIAABIAAjkOIAABjACEjGQAEAGAEAGQAoA/AdA+IBShZQgWgYgigMQgqgPg9ADgAg9jGQBYBHBZg7QAIgFAIgHAhYnaQCdB9Buh9AhuhBQgBADAAACQgGARgFAQQgkBwgKBUQgGAsACAkIHPgQQgBgDAAgDQAAgIgBgHQgGg4gPg4QAAgBAAAAQgBgEgBgDQgUhNglhMAhuhBQgGAFgGAEQgSANgSAIQgjAOgjgHIAAhKAj/NAQAAAGAFAGQAGAHAPAGQAaALAkAAQAjAAAagLQAZgLgGgRQgCgEgEgDQgLgIgcAFQgmAGgWgMQgIgFgJgCQgHgBgIABQgFABgFACQgLAEgFAGQgBACgBABQgDAFAAAFgAieEBQhHDIAXBIIC6AAIAEgFIAHgJIA0hEIADgEIAVgaIBQBgIBTAAIBgAAIATAAQAUhghMimQAAgEgBgCAGXMjQAAAGgEAGQgGAHgPAGQAAABgBAAQgYAKghAAQgjAAgYgLQgYgLAGgRQABgBABgCQABgCACgCQALgIAbAFQAlAGAUgMQACgCACgBQAGgDAGgBQAHgBAIABQABABACAAQADABADABQACAAABABQAJAEAEAFQABACABABQABACABACQAAADAAADgAh8IhIgNECAHWCmQABgBAAAAQADgCACgGQACgJgBgRQgBgdAkAQQAlAOgIgQQgJgQgVgPQgMgJgMgEQgJgDgJgBQgGAAgDACQgDgDgBgCQgogpgjggQgHgGgGgFQgvgsgogeQgMgJgJgIAHMBGQgFACgDAGQgDAJgBAPQAAAlAHAQQACADABACQAFAGADAAAg9jGQgcBHgVA+ADpIRIA3D8");
	this.shape_1.setTransform(54.1957,109.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AkADTQhrhqAAiWQAAgcADgbIAJAEQAJADAFgEIABAAQAnANAOgQQAIgKgCgUQgCgaACgHQAGgCAUACQAQABAIgEQALgGAGgQQANgggEghIAeACQASACAMgEQAOgEAKgMIAHgKIArAGQAMACADgGQADgGgHgFIgDgCIANABQAQAAANgGQAPgIAFgMQAkAKAkgBQAVgBAHgJIAEgBQASAPAWAAQgFAIAEAJQADAKAJAEQAMAHAYgDQgDAbAUATQAUASAagFQgEAMAMAKQAEAFARAGIAiALQAFAFAGABQABAHAMAAIAFAAIAEANQALAsAAAxQAAAvgLAsQgXBdhJBIQhqBriXAAQiWAAhqhrgACkB+Qg3A+hDAAQhCAAhPg+QBPA+BCAAQBDAAA3g+gACnAHQgJAFgEAFQgCAEgBAEQABAEACAEQAEAGAJAEQAQAHAVAAQAWAAAPgHQAQgHAAgLQAAgKgQgIQgPgHgWAAQgVAAgQAHgAjgAHQgJAFgEAFQgCAEAAAEQAAAEACAEQAEAGAJAEQAPAHAWAAQAWAAAPgHQAPgHAAgLQAAgKgPgIQgPgHgWAAQgWAAgPAHgABzhaQgFAHAAAIQAAAJAFAGQAHAGAJAAQAIAAAGgGQAGgGAAgJQAAgIgGgHQgGgGgIAAQgJAAgHAGgAiAhaQgGAHgBAIQABAJAGAGQAGAGAJAAQAIAAAGgGQAGgGAAgJQAAgIgGgHQgGgGgIAAQgJAAgGAGg");
	this.shape_2.setTransform(55.7,48.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,153,255,0.498)").s().p("AkwAjQgPgGgHgIQgEgFAAgHQAAgFACgEIACgCQAGgGAKgFIAKgCQAIgCAIACQAJABAIAFQAVALAmgFQAcgFAMAIQADADACAEQAGARgZALQgZALgkAAQgkAAgZgLgAC+AGQgZgKAHgRIABgDIADgEQALgJAbAFQAlAGAUgMIAEgCQAHgDAGgBQAHgCAHACIADABIAGABIAEACQAIAEAEAFIACADIACAEIAAAFQABAHgFAFQgGAHgOAGIgCABQgYAKghAAQgjAAgXgLg");
	this.shape_3.setTransform(61.75,191.2625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AkTCNQgEgGABgGIAAgBIAAgDQAAgmADgSIAGgeIAOhCQADgMAEgEQACgLADgJIgBgGQABgNAHgKIACgCIACgKQACgGAFgIQAEgHAFgDQADgBAMAAIAXgCQARgDAcABIA5AAIAIgBQAhgCAwABIACAAIALgCQAQgCAgAAIAkAAIAHgCQAKgCAJACQAFgDAMAAQAVgBAOACIAFgCQANgCAHAFQAEADABAEIABAEIAAAEIABAEIALAdQAFAEACAGQABACAAAJIABAGIABADIABABQABADAFAEQACADAEAKIAHAbQAIAYACAQIABASIAFAVQAEAPgCAKIgDAKIgBAKQABADAAAFIAAAAIgBAIQgEAHgPABIhfAAIgLgBIgPgCQgJgCgGABIgKABQgGABgDgCIgCgBIgEAAIgIABIAAAAQgNABgFgIIgEgIIgEgHIgCgEQgFgBgEgFIgCgEQgEgBgEgEQgCgEgBgDIgHgFQgGgGABgIIgLgNIgKgMIgGgCIgEABIgGAFIgCAHIgEAHIgEAIIgDAEIgCABIgEACIgDAFQgCAEgHAGQgGAKgCABIgEACIgDAFQgCAHgEADQgDADgEABIAAADQgCAHgFACIAAAFIgIAKIgBAAQgDACgIAAIg9AAIgLgBIgEAAIhNAAIgEABIgIABQgHAAgFgFg");
	this.shape_4.setTransform(61.1396,147.1714);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AjlDWQgCgEADgFIgBgDIABgDIABgBIAAgEIABgNIgBgHIACgIIAAgRIAAgLIACgKIADgOIAEgKQACgVAGgXIAJghIgBgFIABgGIAFgSQACgMAEgGIABgBIgBgBQAAgDADgDIABAAIAAgEIADgJQgBgFACgDIACgDIABgEIAAgJIACgDIAGgIIADgMIADgFIAEgOIAIgXIADgJIAAgCIABgFIAIgYIAAgBIAFgIIAGgPIAAgGQAAgEABgCQADgDADABQgBgEADgDQADgDADADIACADQACAAADADIAQAKIAHAEIAAAAQACgDAEACIACAEQAGAAAFADIAFADIAGACQApABAPgEIAZgHIAEgBQADgEAHgDIAUgKIAAgBQACgFADgBQAHgBAEAGIAEALIAAABQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQABABABADIAFAOIAEADIAGAKIACAIQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQADACABADIALATIADAKIABAEQADABADAFIAuBsIAPAuIAHAVIAEAFIACAGIAAABIAAADIACAFIABALIABAMIACAFIADARQADAKgBAKQAEAGABALIAFAWIABAPQgCAEgLABIhlADQgcABgQgCIgCABQgcAFg4AAIhNABQhHACgzAEIgDAAQgMAAgCgGg");
	this.shape_5.setTransform(60.085,111.6663);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,51,51,0.2)").s().p("AHKF5IgDgFQgHgQAAglQABgPADgJQADgFAFgDQADgCAGAAQAJABAJADQAMAEAMAJQAVAPAJARQAIAPglgOQgkgPABAcQABARgCAJQgCAGgDACIgBABIgEAAQgDAAgFgGgAnwA1QgHgDgGgFIgCgDQgJgIgHgOQgNgVgBgTQAAgRAbAcQAaAdAMgaQAGgPAGgHQAEgEAEgBIABgBIAEABQADADABAHIAAAFQABASgRAgQgHAOgHAFQgGAGgGAAQgDgBgEgDgAC2lUQgJgEgEgFQgCgFAAgDQAAgFACgDQAEgGAJgEQAQgIAVABQAWgBAPAIQAQAHAAALQAAAKgQAHQgPAIgWgBQgVABgQgIgAjRlUQgJgEgEgFQgCgFAAgDQAAgFACgDQAEgGAJgEQAQgIAVABQAWgBAPAIQAQAHAAALQAAAKgQAHQgPAIgWgBQgVABgQgIg");
	this.shape_6.setTransform(54.1957,87.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF66").s().p("Aj1BUQgFgCgDgFQgEgGACgGIAEgIIgCgDIAAgHIAAgEIACgCQgDgYABgUQAAgLABgEIAAgCIAAgBIgBgCIAAgCIAAgDIAAgBIgBgBIAAgDIABgBIAAgBQgBgFADgFIgCgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABgBAAAAQABAAABAAIAFACIAGAAIACAAIAAAAIAGAAIABABIAJAAIABAAIACAAIADABIAKgBIACAAIACAAIACAAIABgBIAHAAIABAAIADAAIACgCQAEgBADABIAIgBQAOgDAMgEIAKgDIABAAIABAAIABgBIAJgDIACAAIABgBIACgBIACgBQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIABAAIAEgCQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAEADQABADgCAEIgBACIgBADIgBABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABIAAABIAAACIgCAEIgCABIgBAEIgBAEIgBADIAAAHQgCAGgEAHIgEAIIgBAHIgEAHIgCAGQgBAEgBACIgEAGIgBAHQgBAHgFAFQAAAGgGAGQgEAEgJAFIgbAPQgHADgDAAIgFABIgCABQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgEACIgFABIgKAAIgEgBIgBAAIgOABIgCAAgAC1AqQgCgCgBgDIgUgnIgQgcIgBgCIgFgEIgBgCIgCgFIgBgBIAAgCIgCgDQgDgGgBgFIgHgJIgCgDIgEgBQgDgBABgFQACgEAHAAQAQAAALADIAIACIAGgBIALABIAFACIAQAEIALAEIAFABIAEABIAPAHQAEACABADQAKAFAKAHQAEAEAAACIgCADQAAADgDACIgBABIgBAEQgCACgFABIgDAFQgEAJgJAHIgRAPQgJAHgGAIIgFAJQgDADgDAAIgDgBg");
	this.shape_7.setTransform(56.9911,97.6813);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABtDTQgGgGAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAGAHAAAIQAAAJgGAGQgGAGgJAAQgIAAgHgGgAiHDTQgGgGAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAGAHAAAIQAAAJgGAGQgGAGgJAAQgIAAgHgGgAlWCuIgBAAQgGAEgIgDIgJgEIgDgCIgPgFQgNgFgDgEQgEgEAAgIIABgOIAAgJIABgIQABgGAIgGQAGgGAEgBIACAAQgHgUgBgWQAAgJABgIIAAgBQACgKAFgGQALgPAigDQgWg3ASgZQAPgVAlgCIAeABQASAAALgBQAEgSALgOQAMgOARgHQAQgHASACQATACAOAKQAegaAogIQAogIAkAMQAdgdAmgGIAEAAQANgCALACQANABAKAGQALAHAHALQAIALgBANQALACAPgBIAbgEQAigEAQASQAHAIAEAQQAHAfgGAfQAJACAfgCQAMAAAJACQAJACAFAGQAKAKgDAXQgDAdACAIQAIgEAJAEQAJADAFAJQAEAHABAKIACATQABAWgHAIIgDADIgBAHQgCAPgHAEQgEACgJAAIgeAAIgFAAQgNAAAAgHQgGgBgGgFIghgLQgRgGgFgFQgLgKAEgMQgaAFgUgSQgUgTACgbQgXADgNgHQgIgDgEgKQgDgJAFgIQgWAAgSgPIgEABQgIAJgUABQglABgigKQgGAMgPAIQgNAGgQAAIgNgBIADACQAHAFgDAGQgEAFgLgBIgrgGIgHAJQgKAMgPAEQgLAEgSgCIgegCQAEAhgNAgQgHAQgKAGQgIAEgQgBQgUgCgGACQgCAHACAaQACAUgIAKQgIAIgPAAQgNAAgRgFgAkpAHIABABIAFgDIAAAAIgBAAIgDAAIgDgBIABADgACggSIABABIgCgCIABABgAhjgwIAAAAIgBAAIABAAgABBi2IABAAIADgDIgEADg");
	this.shape_8.setTransform(56.3313,21.7375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-1,0,110.4,196.9), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhkAAQAAAJgHAFQgGAHgJAAQgIAAgHgHQgGgFAAgJQAAgIAGgGQAHgGAIAAQAJAAAGAGQAHAGAAAIgACPAAQAAAJgGAFQgGAHgIAAQgJAAgGgHQgGgFAAgJQAAgIAGgGQAGgGAJAAQAIAAAGAGQAGAGAAAIg");
	this.shape.setTransform(56.5,41.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AFtrwQACAGABAHQALAsAAAxQAAAwgLAsQgXBdhIBIQhrBriXAAQiWAAhqhrQhrhqAAiXQAAgcAEgbAkTthQABgBAAgBAnHj7QAAAAgBAAQgEABgEAFQgGAHgGAPQgMAagagdQgbgcAAARQABASANAWQAHAPAJAIQACACAAABQAGAFAHADQAEADADAAQAGAAAGgFQAHgFAHgOQARghgBgSQAAgDAAgCQgBgIgDgCAjkhmQg2gFgvgLQgpgKgjgOQgGgDgGgCQgNgGgLgGAg9jGQghANgcAIQhAAQgqgNIAABIAAjkOIAABjACEjGQAEAGAEAGQAoA/AdA+IBShZQgWgYgigMQgqgPg9ADgAg9jGQBYBHBZg7QAIgFAIgHAhYnaQCdB9Buh9AhuhBQgBADAAACQgGARgFAQQgkBwgKBUQgGAsACAkIHPgQQgBgDAAgDQAAgIgBgHQgGg4gPg4QAAgBAAAAQgBgEgBgDQgUhNglhMAhuhBQgGAFgGAEQgSANgSAIQgjAOgjgHIAAhKAj/NAQAAAGAFAGQAGAHAPAGQAaALAkAAQAjAAAagLQAZgLgGgRQgCgEgEgDQgLgIgcAFQgmAGgWgMQgIgFgJgCQgHgBgIABQgFABgFACQgLAEgFAGQgBACgBABQgDAFAAAFgAieEBQhHDIAXBIIC6AAIAEgFIAHgJIA0hEIADgEIAVgaIBQBgIBTAAIBgAAIATAAQAUhghMimQAAgEgBgCAGXMjQAAAGgEAGQgGAHgPAGQAAABgBAAQgYAKghAAQgjAAgYgLQgYgLAGgRQABgBABgCQABgCACgCQALgIAbAFQAlAGAUgMQACgCACgBQAGgDAGgBQAHgBAIABQABABACAAQADABADABQACAAABABQAJAEAEAFQABACABABQABACABACQAAADAAADgAh8IhIgNECAHWCmQABgBAAAAQADgCACgGQACgJgBgRQgBgdAkAQQAlAOgIgQQgJgQgVgPQgMgJgMgEQgJgDgJgBQgGAAgDACQgDgDgBgCQgogpgjggQgHgGgGgFQgvgsgogeQgMgJgJgIAHMBGQgFACgDAGQgDAJgBAPQAAAlAHAQQACADABACQAFAGADAAAg9jGQgcBHgVA+ADpIRIA3D8");
	this.shape_1.setTransform(54.1957,109.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AkADTQhrhqAAiWQAAgcADgbIAJAEQAJADAFgEIABAAQAnANAOgQQAIgKgCgUQgCgaACgHQAGgCAUACQAQABAIgEQALgGAGgQQANgggEghIAeACQASACAMgEQAOgEAKgMIAHgKIArAGQAMACADgGQADgGgHgFIgDgCIANABQAQAAANgGQAPgIAFgMQAkAKAkgBQAVgBAHgJIAEgBQASAPAWAAQgFAIAEAJQADAKAJAEQAMAHAYgDQgDAbAUATQAUASAagFQgEAMAMAKQAEAFARAGIAiALQAFAFAGABQABAHAMAAIAFAAIAEANQALAsAAAxQAAAvgLAsQgXBdhJBIQhqBriXAAQiWAAhqhrgACkB+Qg3A+hDAAQhCAAhPg+QBPA+BCAAQBDAAA3g+gACnAHQgJAFgEAFQgCAEgBAEQABAEACAEQAEAGAJAEQAQAHAVAAQAWAAAPgHQAQgHAAgLQAAgKgQgIQgPgHgWAAQgVAAgQAHgAjgAHQgJAFgEAFQgCAEAAAEQAAAEACAEQAEAGAJAEQAPAHAWAAQAWAAAPgHQAPgHAAgLQAAgKgPgIQgPgHgWAAQgWAAgPAHgABzhaQgFAHAAAIQAAAJAFAGQAHAGAJAAQAIAAAGgGQAGgGAAgJQAAgIgGgHQgGgGgIAAQgJAAgHAGgAiAhaQgGAHgBAIQABAJAGAGQAGAGAJAAQAIAAAGgGQAGgGAAgJQAAgIgGgHQgGgGgIAAQgJAAgGAGg");
	this.shape_2.setTransform(55.7,48.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,153,255,0.498)").s().p("AkwAjQgPgGgHgIQgEgFAAgHQAAgFACgEIACgCQAGgGAKgFIAKgCQAIgCAIACQAJABAIAFQAVALAmgFQAcgFAMAIQADADACAEQAGARgZALQgZALgkAAQgkAAgZgLgAC+AGQgZgKAHgRIABgDIADgEQALgJAbAFQAlAGAUgMIAEgCQAHgDAGgBQAHgCAHACIADABIAGABIAEACQAIAEAEAFIACADIACAEIAAAFQABAHgFAFQgGAHgOAGIgCABQgYAKghAAQgjAAgXgLg");
	this.shape_3.setTransform(61.75,191.2625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AkTCNQgEgGABgGIAAgBIAAgDQAAgmADgSIAGgeIAOhCQADgMAEgEQACgLADgJIgBgGQABgNAHgKIACgCIACgKQACgGAFgIQAEgHAFgDQADgBAMAAIAXgCQARgDAcABIA5AAIAIgBQAhgCAwABIACAAIALgCQAQgCAgAAIAkAAIAHgCQAKgCAJACQAFgDAMAAQAVgBAOACIAFgCQANgCAHAFQAEADABAEIABAEIAAAEIABAEIALAdQAFAEACAGQABACAAAJIABAGIABADIABABQABADAFAEQACADAEAKIAHAbQAIAYACAQIABASIAFAVQAEAPgCAKIgDAKIgBAKQABADAAAFIAAAAIgBAIQgEAHgPABIhfAAIgLgBIgPgCQgJgCgGABIgKABQgGABgDgCIgCgBIgEAAIgIABIAAAAQgNABgFgIIgEgIIgEgHIgCgEQgFgBgEgFIgCgEQgEgBgEgEQgCgEgBgDIgHgFQgGgGABgIIgLgNIgKgMIgGgCIgEABIgGAFIgCAHIgEAHIgEAIIgDAEIgCABIgEACIgDAFQgCAEgHAGQgGAKgCABIgEACIgDAFQgCAHgEADQgDADgEABIAAADQgCAHgFACIAAAFIgIAKIgBAAQgDACgIAAIg9AAIgLgBIgEAAIhNAAIgEABIgIABQgHAAgFgFg");
	this.shape_4.setTransform(61.1396,147.1714);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AjlDWQgCgEADgFIgBgDIABgDIABgBIAAgEIABgNIgBgHIACgIIAAgRIAAgLIACgKIADgOIAEgKQACgVAGgXIAJghIgBgFIABgGIAFgSQACgMAEgGIABgBIgBgBQAAgDADgDIABAAIAAgEIADgJQgBgFACgDIACgDIABgEIAAgJIACgDIAGgIIADgMIADgFIAEgOIAIgXIADgJIAAgCIABgFIAIgYIAAgBIAFgIIAGgPIAAgGQAAgEABgCQADgDADABQgBgEADgDQADgDADADIACADQACAAADADIAQAKIAHAEIAAAAQACgDAEACIACAEQAGAAAFADIAFADIAGACQApABAPgEIAZgHIAEgBQADgEAHgDIAUgKIAAgBQACgFADgBQAHgBAEAGIAEALIAAABQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQABABABADIAFAOIAEADIAGAKIACAIQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQADACABADIALATIADAKIABAEQADABADAFIAuBsIAPAuIAHAVIAEAFIACAGIAAABIAAADIACAFIABALIABAMIACAFIADARQADAKgBAKQAEAGABALIAFAWIABAPQgCAEgLABIhlADQgcABgQgCIgCABQgcAFg4AAIhNABQhHACgzAEIgDAAQgMAAgCgGg");
	this.shape_5.setTransform(60.085,111.6663);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,51,51,0.2)").s().p("AHKF5IgDgFQgHgQAAglQABgPADgJQADgFAFgDQADgCAGAAQAJABAJADQAMAEAMAJQAVAPAJARQAIAPglgOQgkgPABAcQABARgCAJQgCAGgDACIgBABIgEAAQgDAAgFgGgAnwA1QgHgDgGgFIgCgDQgJgIgHgOQgNgVgBgTQAAgRAbAcQAaAdAMgaQAGgPAGgHQAEgEAEgBIABgBIAEABQADADABAHIAAAFQABASgRAgQgHAOgHAFQgGAGgGAAQgDgBgEgDgAC2lUQgJgEgEgFQgCgFAAgDQAAgFACgDQAEgGAJgEQAQgIAVABQAWgBAPAIQAQAHAAALQAAAKgQAHQgPAIgWgBQgVABgQgIgAjRlUQgJgEgEgFQgCgFAAgDQAAgFACgDQAEgGAJgEQAQgIAVABQAWgBAPAIQAQAHAAALQAAAKgQAHQgPAIgWgBQgVABgQgIg");
	this.shape_6.setTransform(54.1957,87.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF66").s().p("Aj1BUQgFgCgDgFQgEgGACgGIAEgIIgCgDIAAgHIAAgEIACgCQgDgYABgUQAAgLABgEIAAgCIAAgBIgBgCIAAgCIAAgDIAAgBIgBgBIAAgDIABgBIAAgBQgBgFADgFIgCgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABgBAAAAQABAAABAAIAFACIAGAAIACAAIAAAAIAGAAIABABIAJAAIABAAIACAAIADABIAKgBIACAAIACAAIACAAIABgBIAHAAIABAAIADAAIACgCQAEgBADABIAIgBQAOgDAMgEIAKgDIABAAIABAAIABgBIAJgDIACAAIABgBIACgBIACgBQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIABAAIAEgCQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAEADQABADgCAEIgBACIgBADIgBABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABIAAABIAAACIgCAEIgCABIgBAEIgBAEIgBADIAAAHQgCAGgEAHIgEAIIgBAHIgEAHIgCAGQgBAEgBACIgEAGIgBAHQgBAHgFAFQAAAGgGAGQgEAEgJAFIgbAPQgHADgDAAIgFABIgCABQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgEACIgFABIgKAAIgEgBIgBAAIgOABIgCAAgAC1AqQgCgCgBgDIgUgnIgQgcIgBgCIgFgEIgBgCIgCgFIgBgBIAAgCIgCgDQgDgGgBgFIgHgJIgCgDIgEgBQgDgBABgFQACgEAHAAQAQAAALADIAIACIAGgBIALABIAFACIAQAEIALAEIAFABIAEABIAPAHQAEACABADQAKAFAKAHQAEAEAAACIgCADQAAADgDACIgBABIgBAEQgCACgFABIgDAFQgEAJgJAHIgRAPQgJAHgGAIIgFAJQgDADgDAAIgDgBg");
	this.shape_7.setTransform(56.9911,97.6813);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABtDTQgGgGAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAGAHAAAIQAAAJgGAGQgGAGgJAAQgIAAgHgGgAiHDTQgGgGAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAGAHAAAIQAAAJgGAGQgGAGgJAAQgIAAgHgGgAlWCuIgBAAQgGAEgIgDIgJgEIgDgCIgPgFQgNgFgDgEQgEgEAAgIIABgOIAAgJIABgIQABgGAIgGQAGgGAEgBIACAAQgHgUgBgWQAAgJABgIIAAgBQACgKAFgGQALgPAigDQgWg3ASgZQAPgVAlgCIAeABQASAAALgBQAEgSALgOQAMgOARgHQAQgHASACQATACAOAKQAegaAogIQAogIAkAMQAdgdAmgGIAEAAQANgCALACQANABAKAGQALAHAHALQAIALgBANQALACAPgBIAbgEQAigEAQASQAHAIAEAQQAHAfgGAfQAJACAfgCQAMAAAJACQAJACAFAGQAKAKgDAXQgDAdACAIQAIgEAJAEQAJADAFAJQAEAHABAKIACATQABAWgHAIIgDADIgBAHQgCAPgHAEQgEACgJAAIgeAAIgFAAQgNAAAAgHQgGgBgGgFIghgLQgRgGgFgFQgLgKAEgMQgaAFgUgSQgUgTACgbQgXADgNgHQgIgDgEgKQgDgJAFgIQgWAAgSgPIgEABQgIAJgUABQglABgigKQgGAMgPAIQgNAGgQAAIgNgBIADACQAHAFgDAGQgEAFgLgBIgrgGIgHAJQgKAMgPAEQgLAEgSgCIgegCQAEAhgNAgQgHAQgKAGQgIAEgQgBQgUgCgGACQgCAHACAaQACAUgIAKQgIAIgPAAQgNAAgRgFgAkpAHIABABIAFgDIAAAAIgBAAIgDAAIgDgBIABADgACggSIABABIgCgCIABABgAhjgwIAAAAIgBAAIABAAgABBi2IABAAIADgDIgEADg");
	this.shape_8.setTransform(56.3313,21.7375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-1,0,110.4,196.9), null);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhkAAQAAAJgHAFQgGAHgJAAQgIAAgHgHQgGgFAAgJQAAgIAGgGQAHgGAIAAQAJAAAGAGQAHAGAAAIgACPAAQAAAJgGAFQgGAHgIAAQgJAAgGgHQgGgFAAgJQAAgIAGgGQAGgGAJAAQAIAAAGAGQAGAGAAAIg");
	this.shape.setTransform(57.25,41.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AFwrwQACAGACAHQALAsAAAxQAAAwgLAsQgXBdhJBIQhqBriXAAQiWAAhrhrQhqhqAAiXQAAgcADgbAkQthQABgBABgBAnckKQAAAAgBABQgDACgBAHQgCAIADARQADAdglgNQgmgLAJAPQAKAPAWANQANAJAMADQACAAACABQAHACAIgBQAEAAADgBQAGgDACgHQADgJgBgPQgBglgJgPQgCgCgCgDQgFgGgDAAAjhhmQg2gFgugLQgpgKgjgOQgHgDgGgCQgMgGgMgGQgCgBgCgBQgBAAgBgBQgCgBgCgBAg6jGQggANgcAIQhBAQgqgNIAABIAAnkOIAABjAg6jGQBYBHBZg7QAJgFAIgHQAEAGAEAGQAnA/AeA+IBRhZQgWgYgigMQgqgPg8ADAhUnaQCcB9Bvh9AhqhBQgBADgBACQgFARgFAQQgkBwgLBUQgFAsABAkIHPgQQAAgDAAgDQgBgIgBgHQgGg4gPg4QAAgBAAAAQAAgEgBgDQgVhNgkhMAhqhBQgGAFgGAEQgSANgSAIQgjAOgkgHIAAhKAj7NAQAAAGAFAGQAGAHAPAGQAZALAkAAQAkAAAZgLQAagLgHgRQgCgEgDgDQgLgIgdAFQgmAGgVgMQgIgFgJgCQgHgBgJABQgEABgFACQgLAEgFAGQgCACAAABQgDAFAAAFgAiaEBQhIDIAYBIIC5AAIAEgFIAIgJIA0hEIADgEIAUgaIBQBgIBWAAIBdAAIATAAQAVhghMimQgBgEgBgCAGbMjQAAAGgFAGQgGAHgOAGQgBABgBAAQgXAKgiAAQgiAAgYgLQgZgLAHgRQAAgBABgCQACgCACgCQAKgIAcAFQAkAGAUgMQACgCADgBQAGgDAGgBQAHgBAIABQABABABAAQADABADABQACAAACABQAIAEAEAFQABACABABQABACABACQABADAAADgAh5IhIgMECAHZCmQABgBABAAQADgCABgGQADgJgBgRQgCgdAkAQQAlAOgIgQQgIgQgVgPQgNgJgLgEQgKgDgJgBQgFAAgEACQgCgDgCgCQgngpgkggQgGgGgGgFQgvgsgogeQgMgJgKgIAHPBGQgFACgCAGQgEAJAAAPQgBAlAIAQQABADACACQAEAGAEAAAg6jGQgbBHgVA+ADtIRIA3D8");
	this.shape_1.setTransform(54.5761,109.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AkBDTQhqhqAAiWQAAgcAEgbIAJAEQAHADAGgEIABAAQAoANANgQQAIgKgCgUQgCgaACgHQAHgCATACQAQABAIgEQAKgGAHgQQANgggEghIAeACQASACAMgEQAOgEALgMIAGgKIArAGQAMACADgGQADgGgHgFIgDgCIANABQAQAAANgGQAPgIAFgMQAjAKAlgBQAUgBAIgJIAFgBQARAPAWAAQgFAIAEAJQADAKAIAEQANAHAXgDQgCAbAUATQAUASAagFQgEAMALAKQAFAFARAGIAhALQAGAFAGABQABAHAMAAIAGAAIADANQALAsAAAxQAAAvgLAsQgXBdhJBIQhqBriXAAQiWAAhrhrgACkB+Qg3A+hDAAQhCAAhPg+QBPA+BCAAQBDAAA3g+gACnAHQgJAFgEAFQgCAEAAAEQAAAEACAEQAEAGAJAEQAPAHAWAAQAWAAAPgHQAPgHAAgLQAAgKgPgIQgPgHgWAAQgWAAgPAHgAjgAHQgJAFgEAFQgCAEgBAEQABAEACAEQAEAGAJAEQAQAHAVAAQAWAAAPgHQAQgHAAgLQAAgKgQgIQgPgHgWAAQgVAAgQAHgAB0haQgHAHABAIQgBAJAHAGQAGAGAIAAQAJAAAGgGQAHgGAAgJQAAgIgHgHQgGgGgJAAQgIAAgGAGgAiBhaQgFAHAAAIQAAAJAFAGQAHAGAJAAQAIAAAGgGQAHgGgBgJQABgIgHgHQgGgGgIAAQgJAAgHAGg");
	this.shape_2.setTransform(56.45,48.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,153,255,0.498)").s().p("AkwAjQgQgGgFgIQgGgFAAgHQAAgFADgEIADgCQAFgGAKgFIAKgCQAJgCAGACQAKABAHAFQAWALAmgFQAcgFALAIQAEADACAEQAHARgaALQgaALgjAAQgkAAgZgLgAC9AGQgYgKAHgRIABgDIAEgEQAKgJAcAFQAkAGAUgMIAFgCQAFgDAHgBQAGgCAJACIACABIAGABIAEACQAIAEAEAFIACADIACAEIABAFQgBAHgEAFQgGAHgOAGIgCABQgXAKgiAAQgjAAgYgLg");
	this.shape_3.setTransform(62.5,191.2625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AkTCNQgEgGABgGIAAgBIAAgDQAAgmADgSIAGgeIAOhCQADgMAEgEQACgLADgJIgBgGQABgNAHgKIACgCIACgKQACgGAFgIQAEgHAFgDQADgBAMAAIAXgCQARgDAcABIA5AAIAIgBQAhgCAwABIACAAIALgCQAQgCAgAAIAkAAIAHgCQAKgCAJACQAFgDAMAAQAVgBAOACIAFgCQANgCAHAFQAEADABAEIABAEIAAAEIABAEIALAdQAFAEACAGQABACAAAJIABAGIABADIABABQABADAFAEQACADAEAKIAHAbQAIAYACAQIABASIAFAVQAEAPgCAKIgDAKIgBAKQABADAAAFIAAAAIgBAIQgEAHgPABIhdAAIgNgBIgPgCQgJgCgGABIgKABQgGABgDgCIgCgBIgEAAIgIABIAAAAQgNABgFgIIgEgIIgEgHQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQgFgBgEgFIgCgEQgEgBgEgEQgCgEgBgDIgHgFQgGgGABgIIgLgNIgKgMIgGgCIgEABIgGAFIgCAHIgEAHIgEAIIgDAEIgCABIgEACIgDAFQgCAEgHAGQgGAKgCABIgEACIgDAFQgCAHgEADQgDADgEABIAAADQgCAHgFACIAAAFIgIAKIgBAAQgDACgIAAIg9AAIgLgBIgEAAIhNAAIgEABIgIABQgHAAgFgFg");
	this.shape_4.setTransform(61.8896,147.1714);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AjlDWQgCgEADgFIgBgDIABgDIABgBIAAgEIABgNIgBgHIACgIIAAgRIAAgLIACgKIADgOIAEgKQACgVAGgXIAJghIgBgFIABgGIAFgSQACgMAEgGIABgBIgBgBQAAgDADgDIABAAIAAgEIADgJQgBgFACgDIACgDIABgEIAAgJIACgDIAGgIIADgMIADgFIAEgOIAIgXIADgJIAAgCIABgFIAIgYIAAgBIAFgIIAGgPIAAgGQAAgEABgCQADgDADABQgBgEADgDQADgDADADIACADQACAAADADIAQAKIAHAEIAAAAQACgDAEACIACAEQAGAAAFADIAFADIAGACQApABAPgEIAZgHIAEgBQADgEAHgDIAUgKIAAgBQACgFADgBQAHgBAEAGIAEALIAAABQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQABABABADIAFAOIAEADIAGAKIACAIQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQADACABADIALATIADAKIABAEQADABADAFIAuBsIAPAuIAHAVIAEAFIACAGIAAABIAAADIACAFIABALIABAMIACAFIADARQADAKgBAKQAEAGABALIAFAWIABAPQgCAEgLABIhlADQgcABgQgCIgCABQgcAFg4AAIhNABQhHACgzAEIgDAAQgMAAgCgGg");
	this.shape_5.setTransform(60.835,111.6663);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,51,51,0.2)").s().p("AHOF5IgDgFQgIgQABglQAAgPAEgJQACgFAFgDQAEgCAFAAQAJABAKADQALAEANAJQAVAPAIARQAIAPglgOQgkgPACAcQABARgDAJQgBAGgDACIgCABIgDAAQgEAAgEgGgAniAuIgEgBQgMgDgNgJQgWgNgKgPQgJgOAmALQAlAMgDgcQgDgRACgIQABgHADgCIABgBIAEgBQADAAAFAHIAEAEQAJAPABAlQABAOgDAJQgCAHgGADQgDACgEAAIgDAAQgGAAgGgCgAC6lUQgKgEgDgFQgDgFAAgDQAAgFADgDQADgGAKgEQAPgIAWABQAWgBAPAIQAPAHAAALQAAAKgPAHQgPAIgWgBQgWABgPgIgAjNlUQgKgEgDgFQgDgFAAgDQAAgFADgDQADgGAKgEQAPgIAWABQAWgBAPAIQAPAHAAALQAAAKgPAHQgPAIgWgBQgWABgPgIg");
	this.shape_6.setTransform(54.5761,87.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF66").s().p("Aj1BUQgFgCgDgFQgEgGACgGIAEgIIgCgDIAAgHIAAgEIACgCQgDgYABgUQAAgLABgEIAAgCIAAgBIgBgCIAAgCIAAgDIAAgBIgBgBIAAgDIABgBIAAgBQgBgFADgFIgCgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABgBAAAAQABAAABAAIAFACIAGAAIACAAIAAAAIAGAAIABABIAJAAIABAAIACAAIADABIAKgBIACAAIACAAIACAAIABgBIAHAAIABAAIADAAIACgCQAEgBADABIAIgBQAOgDAMgEIAKgDIABAAIABAAIABgBIAJgDIACAAIABgBIACgBIACgBQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIABAAIAEgCQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAEADQABADgCAEIgBACIgBADIgBABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABIAAABIAAACIgCAEIgCABIgBAEIgBAEIgBADIAAAHQgCAGgEAHIgEAIIgBAHIgEAHIgCAGQgBAEgBACIgEAGIgBAHQgBAHgFAFQAAAGgGAGQgEAEgJAFIgbAPQgHADgDAAIgFABIgCABQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgEACIgFABIgKAAIgEgBIgBAAIgOABIgCAAgAC1AqQgCgCgBgDIgUgnIgQgcIgBgCIgFgEIgBgCIgCgFIgBgBIAAgCIgCgDQgDgGgBgFIgHgJIgCgDIgEgBQgDgBABgFQACgEAHAAQAQAAALADIAIACIAGgBIALABIAFACIAQAEIALAEIAFABIAEABIAPAHQAEACABADQAKAFAKAHQAEAEAAACIgCADQAAADgDACIgBABIgBAEQgCACgFABIgDAFQgEAJgJAHIgRAPQgJAHgGAIIgFAJQgDADgDAAIgDgBg");
	this.shape_7.setTransform(57.7411,97.6813);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABtDTQgGgGAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAGAHAAAIQAAAJgGAGQgGAGgJAAQgIAAgHgGgAiHDTQgGgGAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAGAHAAAIQAAAJgGAGQgGAGgJAAQgIAAgHgGgAlWCuIgBAAQgGAEgIgDIgJgEIgDgCIgPgFQgNgFgDgEQgEgEAAgIIABgOIAAgJIABgIQABgGAIgGQAGgGAEgBIACAAQgHgUgBgWQAAgJABgIIAAgBQACgKAFgGQALgPAigDQgWg3ASgZQAPgVAlgCIAeABQASAAALgBQAEgSALgOQAMgOARgHQAQgHASACQATACAOAKQAegaAogIQAogIAkAMQAdgdAmgGIAEAAQANgCALACQANABAKAGQALAHAHALQAIALgBANQALACAPgBIAbgEQAigEAQASQAHAIAEAQQAHAfgGAfQAJACAfgCQAMgBAJADQAJACAFAGQAKAKgDAXQgDAdACAIQAIgEAJAEQAJADAFAJQAEAHABAKIACATQABAWgHAIIgDADIgBAHQgCAPgHAEQgEACgJAAIgeAAIgFAAQgNAAAAgHQgGgBgGgFIghgLQgRgGgFgFQgLgKAEgMQgaAFgUgSQgUgTACgbQgXADgNgHQgIgDgEgKQgDgJAFgIQgWAAgSgPIgEABQgIAJgUABQglABgigKQgGAMgPAIQgNAGgQAAIgNgBIADACQAHAFgDAGQgEAFgLgBIgrgGIgHAJQgKAMgPAEQgLAEgSgCIgegCQAEAhgNAgQgHAQgKAGQgIAEgQgBQgUgCgGACQgCAHACAaQACAUgIAKQgIAIgPAAQgNAAgRgFgAkpAHIABABIAFgDIAAAAIgBAAIgDAAIgDgBIABADgACggSIABABIgCgCIABABgAhjgwIAAAAIgBAAIABAAgABBi2IABAAIADgDIgEADg");
	this.shape_8.setTransform(57.0813,21.7367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-1,0,111.2,196.9), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-0.5,-0.45,0.4031,0.4031);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-0.5,-0.4,109.7,182.20000000000002), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-0.5,-0.45,0.4031,0.4031);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-0.5,-0.4,108.1,182.20000000000002), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-0.5,-0.45,0.4031,0.4031);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-0.5,-0.4,109.3,182.20000000000002), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AgwAjQgVgOAAgVQAAgUAVgOQAUgPAcAAQAdAAAVAPQAUAOAAAUQAAAVgUAOQgVAPgdAAQgcAAgUgPg");
	this.shape.setTransform(20.675,18.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ADwBHQgCBOjBhwQAZB/g5AjQgUAMggAAQgRAAgKgMQgbgfAbhyQhqBegSATQgSATgWgLQgWgLAhhTQAhhTA5ghQg5gUgXgqQgYgrgBgQQgCgPAmggQAnggBuCDQCBiDBVBBQArAhifBfQDAAjgBBOg");
	this.shape_1.setTransform(24.7356,21.0859);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009933").s().p("AAyC8IAAhGQgYgNhThKIgEgDQhahPAdghQAegiBFAXQAvAPAaALIAAh1QAKALARAAQAgAAAVgLIAAF2g");
	this.shape_2.setTransform(13.0109,59.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhCDHQgbgfAbhyQhqBegSATQgSATgWgLQgWgLAhhTQAhhTA5ghQg5gUgXgqQgYgrgBgQQgCgPAmggQAnggBuCDQCBiDBVBBQArAhifBfQDAAjgBBOQgCBOjBhwQAZB/g5AjQgUAMggAAQgRAAgKgMg");
	this.shape_3.setTransform(24.7356,21.0859);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-0.2,-1,49.900000000000006,79.5), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AgwAjQgVgOAAgVQAAgUAVgOQAUgPAcAAQAdAAAVAPQAUAOAAAUQAAAVgUAOQgVAPgdAAQgcAAgUgPg");
	this.shape.setTransform(23.025,16.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AEEgVQAABcjNgrQAaB/g6AjQgVAMgfAAQgRAAgKgMQgagfAahyQhqBegwADQgOABgKgHQg8gvBUhIQAigcA5ghQg5gUgigTQhUgwA7gvQABAAAAgBQBVhBBuCDQCahTBFA9QBGA8jCAYQDIgPAAAtg");
	this.shape_1.setTransform(26.0329,20.1833);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009933").s().p("AAyC8IAAhGQgZgNhWhNQhahPAdghQAegiBFAXQAvAPAaALIAAh1QAKALARAAQAgAAAVgMIAAF3g");
	this.shape_2.setTransform(15.3609,57.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4C+QgagfAahyQhqBegwADQgOABgKgHQg8gvBUhIQAigcA5ghQg5gUgigTQhUgwA7gvIABgBQBVhBBuCDQCahTBFA9QBGA8jCAYQDIgPAAAtQAABcjNgrQAaB/g6AjQgVAMgfAAQgRAAgKgMg");
	this.shape_3.setTransform(26.0329,20.1833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,54.1,77.7), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AgwAjQgVgOAAgVQAAgUAVgOQAUgPAcAAQAdAAAVAPQAUAOAAAUQAAAVgUAOQgVAPgdAAQgcAAgUgPg");
	this.shape.setTransform(20.675,18.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ADwBHQgCBOjBhwQAZB/g5AjQgUAMggAAQgRAAgKgMQgbgfAbhyQhqBegSATQgSATgWgLQgWgLAhhTQAhhTA5ghQg5gUgXgqQgYgrgBgQQgCgPAmggQAnggBuCDQCBiDBVBBQArAhifBfQDAAjgBBOg");
	this.shape_1.setTransform(24.7356,21.0859);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009933").s().p("AAyC8IAAhGQgYgNhThKIgEgDQhahPAdghQAegiBFAXQAvAPAaALIAAh1QAKALARAAQAgAAAVgLIAAF2g");
	this.shape_2.setTransform(13.0109,59.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhCDHQgbgfAbhyQhqBegSATQgSATgWgLQgWgLAhhTQAhhTA5ghQg5gUgXgqQgYgrgBgQQgCgPAmggQAnggBuCDQCBiDBVBBQArAhifBfQDAAjgBBOQgCBOjBhwQAZB/g5AjQgUAMggAAQgRAAgKgMg");
	this.shape_3.setTransform(24.7356,21.0859);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-0.2,-1,49.900000000000006,79.5), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AgwAjQgVgOAAgVQAAgUAVgOQAUgPAcAAQAdAAAVAPQAUAOAAAUQAAAVgUAOQgVAPgdAAQgcAAgUgPg");
	this.shape.setTransform(23.025,16.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AEEgVQAABcjNgrQAaB/g6AjQgVAMgfAAQgRAAgKgMQgagfAahyQhqBegwADQgOABgKgHQg8gvBUhIQAigcA5ghQg5gUgigTQhUgwA7gvQABAAAAgBQBVhBBuCDQCahTBFA9QBGA8jCAYQDIgPAAAtg");
	this.shape_1.setTransform(26.0329,20.1833);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009933").s().p("AAyC8IAAhGQgZgNhWhNQhahPAdghQAegiBFAXQAvAPAaALIAAh1QAKALARAAQAgAAAVgMIAAF3g");
	this.shape_2.setTransform(15.3609,57.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4C+QgagfAahyQhqBegwADQgOABgKgHQg8gvBUhIQAigcA5ghQg5gUgigTQhUgwA7gvIABgBQBVhBBuCDQCahTBFA9QBGA8jCAYQDIgPAAAtQAABcjNgrQAaB/g6AjQgVAMgfAAQgRAAgKgMg");
	this.shape_3.setTransform(26.0329,20.1833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,54.1,77.7), null);


(lib.surfboard_start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF66").ss(5,1,1).p("EgHHgt6QApALAsAhQCBBjCVExQBFCOBIC5QE7MqDVShQAFAXAEAYQDVTAgTOAQgOJwh6DVQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiQgWiMQilwOATsUQANqgCMjEQASgYAUgSQATgRAWgJMAQHBbiIBZgTg");
	this.shape.setTransform(78.1383,293.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiPgWiNQilwOATsTQANqhCMjEQASgYAUgRQATgSAWgJMAQHBbiIBZgTMgQFhbXQApALAsAhQCBBjCVExQBFCOBIC5QE7MqDVShIAJAvQDVTAgTOAQgOJwh6DVQg2BdhIAPQgNADgOAAQgNAAgNgDg");
	this.shape_1.setTransform(78.1383,293.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFF65D").ss(4.7,1,1).p("AsK/KQANqgCMjEQASgZAUgRQATgRAWgJMAQHBbhIBZgTMgQFhbWQAqAKArAiQCBBjCVExQBFCOBIC5QE7MqDVShQAFAXAEAYQDVS/gTOBQgOJwh6DVQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiQgWiMQilwOATsUg");
	this.shape_2.setTransform(78.1383,295.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#46CC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiRgWiMQilwOATsUQANqgCMjDQASgaAUgRQATgRAWgJMAQHBbhIBZgTMgQFhbWQAqAKArAiQCBBkCVEwQBFCOBIC5QE7MqDVShIAJAvQDVS/gTOBQgOJxh6DUQg2BdhIAPQgNADgOAAQgNAAgNgDg");
	this.shape_3.setTransform(78.1383,295.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFEC53").ss(4.3,1,1).p("AsK/KQANqgCMjEQASgZAUgRQATgRAWgJMAQHBbiIBZgTMgQFhbXQAqAKArAiQCBBjCVExQBFCOBIC5QE7MqDVShQAFAXAEAYQDVTAgTOAQgOJwh6DVQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiQgWiMQilwOATsUg");
	this.shape_4.setTransform(78.1383,297.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#58CC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiQgWiNQilwOATsTQANqhCMjDQASgaAUgQQATgRAWgKMAQHBbiIBZgTMgQFhbXQAqALArAhQCBBkCVExQBFCNBIC5QE7MrDVSgIAJAvQDVTAgTOAQgOJxh6DUQg2BdhIAPQgNADgOAAQgNAAgNgDg");
	this.shape_5.setTransform(78.1383,297.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFE34A").ss(3.9,1,1).p("AsK/KQANqgCMjEQASgZAUgRQATgRAWgJMAQHBbhIBZgTMgQFhbWQAqAKArAiQCBBjCVExQBFCOBIC5QE7MqDVShQAFAXAEAYQDVS/gTOBQgOJwh6DVQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiQgWiMQilwOATsUg");
	this.shape_6.setTransform(78.1383,298.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6BCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiRgWiMQilwOATsUQANqfCMjEQASgaAUgRQATgRAWgJMAQHBbhIBZgTMgQFhbWQAqAKArAiQCBBkCVEwQBFCOBIC6QE7MqDVSgIAJAvQDVS/gTOBQgOJwh6DVQg2BdhIAPQgNADgOAAQgNAAgNgDg");
	this.shape_7.setTransform(78.1383,298.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFDA41").ss(3.6,1,1).p("AsK/KQANqgCMjEQASgZAUgRQATgRAWgJMAQHBbiIBZgTMgQFhbWQAqAKArAhQCBBkCVEwQBFCOBIC6QE7MqDVSgQAFAYAEAXQDVTAgTOAQgOJxh6DUQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiQgWiNQilwOATsUg");
	this.shape_8.setTransform(78.1383,300.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7DCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiQgWiMQilwOATsTQANqgCMjFQASgZAUgQQATgSAWgJMAQHBbiIBZgUMgQFhbVQAqAKArAhQCBBjCVEyQBFCNBIC6QE7MpDVShIAJAvQDVTAgTOAQgOJwh6DVQg2BdhIAPQgNACgOAAQgNAAgNgCg");
	this.shape_9.setTransform(78.1383,300.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFD138").ss(3.2,1,1).p("AsK/KQANqgCMjEQASgZAUgRQATgRAWgJMAQHBbhIBZgTMgQFhbWQAqAKArAiQCBBjCVExQBFCOBIC5QE7MqDVShQAFAXAEAYQDVTAgTOAQgOJxh6DUQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiQgWiMQilwOATsUg");
	this.shape_10.setTransform(78.1383,302.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#90CC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiQgWiNQilwOATsUQANqgCMjDQASgaAUgQQATgRAWgKMAQHBbiIBZgTMgQFhbXQAqALArAhQCBBjCVEyQBFCNBIC5QE7MrDVSgIAJAvQDVTAgTOAQgOJxh6DUQg2BdhIAPQgNADgOAAQgNAAgNgDg");
	this.shape_11.setTransform(78.1383,302.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFC72E").ss(2.8,1,1).p("AsK/KQANqgCMjEQASgZAUgRQATgRAWgJMAQHBbiIBZgTMgQFhbWQAqAKArAhQCBBkCVEwQBFCOBIC6QE7MqDVSgQAFAYAEAXQDVTAgTOAQgOJxh6DUQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiQgWiNQilwOATsUg");
	this.shape_12.setTransform(78.1383,303.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A2CC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiPgWiNQilwOATsTQANqgCMjFQASgZAUgQQATgSAWgJMAQHBbiIBZgTMgQFhbWQAqAKArAhQCBBkCVExQBFCNBIC5QE7MqDVShIAJAvQDVS/gTOBQgOJwh6DVQg2BdhIAPQgNACgOAAQgNAAgNgCg");
	this.shape_13.setTransform(78.1383,303.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFBE25").ss(2.5,1,1).p("AsK/KQANqgCMjEQASgZAUgRQATgRAWgJMAQHBbhIBZgTMgQFhbWQAqAKArAiQCBBjCVExQBFCOBIC5QE7MqDVShQAFAXAEAYQDVTAgTOAQgOJxh6DUQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiQgWiMQilwOATsUg");
	this.shape_14.setTransform(78.1383,305.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B5CC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiQgWiNQilwOATsUQANqgCMjDQASgaAUgRQATgRAWgJMAQHBbhIBZgSMgQFhbXQAqAKArAiQCBBjCVExQBFCOBIC5QE7MrDVSgIAJAvQDVTAgTOAQgOJxh6DUQg2BdhIAPQgNADgOAAQgNAAgNgDg");
	this.shape_15.setTransform(78.1383,305.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFB51C").ss(2.1,1,1).p("AsK/JQANqgCMjEQASgZAUgRQATgRAWgKMAQHBbiIBZgTMgQFhbWQAqAKArAhQCBBkCVExQBFCNBIC6QE7MqDVSgQAFAYAEAXQDVTAgTOAQgOJxh6DUQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiQgWiNQilwOATsTg");
	this.shape_16.setTransform(78.1383,306.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C7CC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiRgWiMQilwOATsUQANqfCMjFQASgYAUgSQATgQAWgKMAQHBbhIBZgTMgQFhbVQAqAJArAiQCBBkCVEwQBFCOBIC6QE7MqDVSgIAJAvQDVS/gTOBQgOJwh6DVQg2BdhIAPQgNACgOAAQgNAAgNgCg");
	this.shape_17.setTransform(78.1383,306.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFAC13").ss(1.8,1,1).p("AsK/KQANqgCMjEQASgZAUgRQATgRAWgJMAQHBbiIBZgTMgQFhbXQAqAKArAiQCBBjCVExQBFCOBIC5QE7MqDVShQAFAXAEAYQDVTAgTOAQgOJwh6DVQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiQgWiMQilwOATsUg");
	this.shape_18.setTransform(78.1383,308.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DACC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiPgWiNQilwOATsTQANqgCMjFQASgZAUgQQATgSAWgJMAQHBbiIBZgTMgQFhbWQAqAKArAhQCBBkCVExQBFCNBIC5QE7MqDVShIAJAvQDVTAgTOAQgOJwh6DVQg2BdhIAPQgNACgOAAQgNAAgNgCg");
	this.shape_19.setTransform(78.1383,308.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFA209").ss(1.4,1,1).p("AsK/JQANqgCMjEQASgZAUgRQATgRAWgKMAQHBbiIBZgTMgQFhbWQAqAKArAhQCBBkCVExQBFCNBIC6QE7MqDVSgQAFAYAEAXQDVTAgTOAQgOJxh6DUQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiQgWiNQilwOATsTg");
	this.shape_20.setTransform(78.1383,310.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ECCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiQgWiMQilwOATsTQANqgCMjFQASgYAUgSQATgQAWgKMAQHBbhIBZgTMgQFhbVQAqAJArAiQCBBjCVExQBFCOBIC6QE7MpDVShIAJAvQDVS/gTOBQgOJwh6DVQg2BdhIAPQgNACgOAAQgNAAgNgCg");
	this.shape_21.setTransform(78.1383,310.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF9900").ss(1,1,1).p("EgHHgt6QAqAKArAiQCBBjCVExQBFCOBIC5QE7MqDVShQAFAXAEAYQDVTAgTOAQgOJwh6DVQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiQgWiMQilwOATsUQANqgCMjEQASgZAUgRQATgRAWgJMAQHBbiIBZgTg");
	this.shape_22.setTransform(78.1383,311.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiPgWiNQilwOATsTQANqgCMjFQASgYAUgRQATgRAWgKMAQHBbiIBZgTMgQFhbXQAqALArAhQCBBkCVExQBFCNBIC5QE7MqDVShIAJAvQDVTAgTOAQgOJwh6DVQg2BdhIAPQgNADgOAAQgNAAgNgDg");
	this.shape_23.setTransform(78.1383,311.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF9900").ss(1,1,1).p("AsK/KQANqgCMjEQASgZAUgRQATgRAWgJMAQHBbiIBZgTMgQFhbWQAqAKArAhQCBBkCVEwQBFCOBIC6QE7MqDVSgQAFAYAEAXQDVTAgTOAQgOJxh6DUQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiQgWiNQilwOATsUg");
	this.shape_24.setTransform(78.1383,310.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiPgWiNQilwOATsTQANqgCMjFQASgZAUgQQATgSAWgJMAQHBbiIBZgTMgQFhbWQAqAKArAhQCBBkCVExQBFCNBIC5QE7MqDVShIAJAvQDVS/gTOBQgOJwh6DVQg2BdhIAPQgNACgOAAQgNAAgNgCg");
	this.shape_25.setTransform(78.1383,310.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF9900").ss(1,1,1).p("AsK/KQANqgCMjEQASgZAUgRQATgRAWgJMAQHBbiIBZgUMgQFhbVQAqAKArAhQCBBjCVExQBFCOBIC5QE7MqDVShQAFAXAEAYQDVTAgTOAQgOJxh6DUQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiQgWiNQilwOATsUg");
	this.shape_26.setTransform(78.1383,308.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiQgWiMQilwOATsTQANqgCMjFQASgZAUgQQATgSAWgJMAQHBbiIBZgUMgQFhbVQAqAKArAhQCBBjCVEyQBFCNBIC6QE7MpDVShIAJAvQDVTAgTOAQgOJwh6DVQg2BdhIAPQgNACgOAAQgNAAgNgCg");
	this.shape_27.setTransform(78.1383,308.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF9900").ss(1,1,1).p("AsK/KQANqgCMjEQASgZAUgRQATgRAWgJMAQHBbiIBZgTMgQFhbXQAqAKArAiQCBBjCVExQBFCOBIC5QE7MqDVShQAFAXAEAYQDVTAgTOAQgOJwh6DVQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiQgWiMQilwOATsUg");
	this.shape_28.setTransform(78.1383,307.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiQgWiMQilwOATsTQANqgCMjFQASgYAUgSQATgQAWgKMAQHBbhIBZgTMgQFhbVQAqAJArAiQCBBjCVExQBFCOBIC6QE7MpDVShIAJAvQDVS/gTOBQgOJwh6DVQg2BdhIAPQgNACgOAAQgNAAgNgCg");
	this.shape_29.setTransform(78.1383,307.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF9900").ss(1,1,1).p("AsK/KQANqgCMjEQASgZAUgRQATgRAWgJMAQHBbhIBZgTMgQFhbWQAqAKArAiQCBBjCVExQBFCOBIC5QE7MqDVShQAFAXAEAYQDVTAgTOAQgOJxh6DUQg2BdhIAPQgaAFgbgFQgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiQgWiMQilwOATsUg");
	this.shape_30.setTransform(78.1383,306.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiQgWiMQilwOATsUQANqfCMjFQASgYAUgSQATgQAWgKMAQHBbhIBZgTMgQFhbVQAqAJArAiQCBBkCVEwQBFCOBIC6QE7MqDVSgIAJAvQDVS/gTOBQgOJwh6DVQg2BdhIAPQgNACgOAAQgNAAgNgCg");
	this.shape_31.setTransform(78.1383,306.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiRgWiMQilwOATsUQANqfCMjEQASgaAUgRQATgRAWgJMAQHBbhIBZgTMgQFhbWQAqAKArAiQCBBkCVEwQBFCOBIC6QE7MqDVSgIAJAvQDVS/gTOBQgOJwh6DVQg2BdhIAPQgNADgOAAQgNAAgNgDg");
	this.shape_32.setTransform(78.1383,304.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiRgWiMQilwOATsUQANqfCMjFQASgYAUgSQATgQAWgKMAQHBbhIBZgTMgQFhbVQAqAJArAiQCBBkCVEwQBFCOBIC6QE7MqDVSgIAJAvQDVS/gTOBQgOJwh6DVQg2BdhIAPQgNACgOAAQgNAAgNgCg");
	this.shape_33.setTransform(78.1383,300.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiRgWiMQilwOATsUQANqgCMjDQASgaAUgRQATgRAWgJMAQHBbhIBZgTMgQFhbWQAqAKArAiQCBBkCVEwQBFCOBIC5QE7MqDVShIAJAvQDVS/gTOBQgOJxh6DUQg2BdhIAPQgNADgOAAQgNAAgNgDg");
	this.shape_34.setTransform(78.1383,297.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiQgWiNQilwOATsUQANqgCMjDQASgaAUgQQATgSAWgJMAQHBbhIBZgSMgQFhbXQAqAKArAiQCBBjCVExQBFCOBIC5QE7MrDVSgIAJAvQDVTAgTOAQgOJxh6DUQg2BdhIAPQgNACgOABQgNgBgNgCg");
	this.shape_35.setTransform(78.1383,295.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiRgWiMQilwOATsUQANqgCMjDQASgaAUgRQATgRAWgJMAQHBbhIBZgSMgQFhbXQAqAKArAiQCBBkCVEwQBFCOBIC5QE7MqDVShIAJAvQDVS/gTOBQgOJxh6DUQg2BdhIAPQgNADgOAAQgNAAgNgDg");
	this.shape_36.setTransform(78.1383,307.65);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiQgWiNQilwOATsUQANqgCMjDQASgaAUgRQATgRAWgJMAQHBbhIBZgSMgQFhbXQAqAKArAiQCBBjCVExQBFCOBIC5QE7MrDVSgIAJAvQDVTAgTOAQgOJxh6DUQg2BdhIAPQgNACgOABQgNgBgNgCg");
	this.shape_37.setTransform(78.1383,304.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzAQgaiQgWiNQilwOATsUQANqgCMjDQASgaAUgQQATgRAWgKMAQHBbiIBZgTMgQFhbXQAqALArAhQCBBjCVEyQBFCNBIC5QE7MrDVSgIAJAvQDVTAgTOAQgOJxh6DUQg2BdhIAPQgNADgOAAQgNAAgNgDg");
	this.shape_38.setTransform(78.1383,302.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC66").s().p("EAHRAt4QgxgJg1gqQi6iVjgpBQlDs6jWzBQgaiPgWiNQilwOATsTQANqgCMjFQASgYAUgRQATgRAWgKMAQHBbiIBZgTMgQFhbWQAqAKArAhQCBBkCVExQBFCNBIC5QE7MqDVShIAJAvQDVTAgTOAQgOJwh6DVQg2BdhIAPQgNADgOAAQgNAAgNgDg");
	this.shape_39.setTransform(78.1383,299.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22,p:{y:311.85}}]},1).to({state:[{t:this.shape_25,p:{y:310.4}},{t:this.shape_24,p:{y:310.4}}]},1).to({state:[{t:this.shape_27,p:{y:308.95}},{t:this.shape_26,p:{y:308.95}}]},1).to({state:[{t:this.shape_29,p:{y:307.5}},{t:this.shape_28,p:{y:307.5}}]},1).to({state:[{t:this.shape_31,p:{y:306.05}},{t:this.shape_30,p:{y:306.05}}]},1).to({state:[{t:this.shape_32,p:{y:304.6}},{t:this.shape_28,p:{y:304.6}}]},1).to({state:[{t:this.shape_27,p:{y:303.1}},{t:this.shape_28,p:{y:303.1}}]},1).to({state:[{t:this.shape_29,p:{y:301.65}},{t:this.shape_24,p:{y:301.65}}]},1).to({state:[{t:this.shape_33},{t:this.shape_26,p:{y:300.2}}]},1).to({state:[{t:this.shape_32,p:{y:298.75}},{t:this.shape_28,p:{y:298.75}}]},1).to({state:[{t:this.shape_34},{t:this.shape_30,p:{y:297.3}}]},1).to({state:[{t:this.shape_35},{t:this.shape_22,p:{y:295.85}}]},1).to({state:[{t:this.shape_34},{t:this.shape_30,p:{y:297.3}}]},1).to({state:[{t:this.shape_32,p:{y:298.75}},{t:this.shape_28,p:{y:298.75}}]},1).to({state:[{t:this.shape_33},{t:this.shape_26,p:{y:300.2}}]},1).to({state:[{t:this.shape_29,p:{y:301.65}},{t:this.shape_24,p:{y:301.65}}]},1).to({state:[{t:this.shape_27,p:{y:303.1}},{t:this.shape_28,p:{y:303.1}}]},1).to({state:[{t:this.shape_32,p:{y:304.6}},{t:this.shape_28,p:{y:304.6}}]},1).to({state:[{t:this.shape_31,p:{y:306.05}},{t:this.shape_30,p:{y:306.05}}]},1).to({state:[{t:this.shape_29,p:{y:307.5}},{t:this.shape_28,p:{y:307.5}}]},1).to({state:[{t:this.shape_27,p:{y:308.95}},{t:this.shape_26,p:{y:308.95}}]},1).to({state:[{t:this.shape_25,p:{y:310.4}},{t:this.shape_24,p:{y:310.4}}]},1).to({state:[{t:this.shape_23},{t:this.shape_22,p:{y:311.85}}]},1).to({state:[{t:this.shape_32,p:{y:310.45}},{t:this.shape_26,p:{y:310.45}}]},1).to({state:[{t:this.shape_25,p:{y:309.05}},{t:this.shape_30,p:{y:309.05}}]},1).to({state:[{t:this.shape_36},{t:this.shape_24,p:{y:307.65}}]},1).to({state:[{t:this.shape_27,p:{y:306.25}},{t:this.shape_28,p:{y:306.25}}]},1).to({state:[{t:this.shape_37},{t:this.shape_28,p:{y:304.85}}]},1).to({state:[{t:this.shape_29,p:{y:303.45}},{t:this.shape_26,p:{y:303.45}}]},1).to({state:[{t:this.shape_38},{t:this.shape_30,p:{y:302.05}}]},1).to({state:[{t:this.shape_31,p:{y:300.65}},{t:this.shape_24,p:{y:300.65}}]},1).to({state:[{t:this.shape_39},{t:this.shape_28,p:{y:299.25}}]},1).to({state:[{t:this.shape_32,p:{y:297.85}},{t:this.shape_22,p:{y:297.85}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,161.3,609.2);


(lib.Scene_1_thought = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// thought
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ap3ibQAphaBbhVQC8isE1AGQE1AFC0CaQBhBTAzBtIABADAJ7iOQAeBIgCBNQgDC/jFCUQjECUkAADQj+AEjDiDQiLheg1iAQgVgzgIg4QgNhgAlha");
	this.shape.setTransform(591.9299,207.6329);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AJ7AEIABACAp7ADQABgBAAgBQACgDABgD");
	this.shape_1.setTransform(591.9125,192.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AKfE+QgTgDgLgNQgMgNgCgSQgCgSAIgQQAEgIAKgMIAPgUIAGgOIgNAXQgKAPgJgBIgFgBIgGACQgFABgFgDQgFgDgBgFQgBgFADgHIgBgCQgDgHADgGQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAIAEgFIARghIAAgBIAAgBIAGgMIAAAAIABgCQAAgDABgDIADgEIAEgLIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgBIABAAIABgDIAAgDIABAAIAAAAIABgCIAAgEIAAgBIABgEIAAAAIABgEIAAAAIABgCIABAAIgBAAIAAgHIABAAIAAgCIABAAIAAgBIAAgBIABAAIAAgCIAAAAIAAAAIAAgDIABAAIAAgCIAAAAQAAgFABgBIABgCIAAAAIAAgBIABAAIAAgHIAAAAIAAgBIABAAIAAgBIAAAAIAAgEIABgHIAAgBIABgCIAAgCIAAgGIABgBIAAAAIAAgGIABgBIAAgUIABgFIAAAAIgBgJQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAIAAgBIgBgCIAAgGIgBgDIAAgHIAAgBIgBgIIABAAIAAgBIAAgIQgDgFAAgFIAAgBIAAgDIAAgBIgBgHIAAgCIgBAAIAAgEIgBAAIAAgEIAAgBIgBgCIgCgHIgBgBIAAgCIAAgBIgBgDIAAgBIAAgBIgBgDIAAgEIgBAAIgBgCIgBgCIAAgBIAAgBIAAgCQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAAAIgBgCIAAgCIAAAAIAAgCIgBAAIAAgCIAAAAIAAgBIgJgTIgBgCIACADIgXg0QgCgDAAgDQAAAAAAgBQAAAAAAgBQAAgBABAAQAAAAAAgBIAAgEIgEgFQgHgIAFgJQAFgIAKABQAEABAGAFQAFAEADAEQgHgcAKgVQAKgWAagGQAbgFASARQAFAFAEAHQAJgBAIADQAZAHAIAaQAEAMACAbQADAQAOAdQAJAYABAhIAAA6IAAB+QABBPgDAwQgCAigLAQQgHAKgLAGQgMAHgNgBQgIAAgIgCIgLASQgPAXgOAIQgLAGgNAAIgJgBgAqpECIgHgCQgNgFgJgKIgBgCQgFgGgGgNIgGAIQgIAJgMAEQgMAEgNgCQgagEgMgYQgHgPABgfIADjvQAChNgBg3QgBgYACgMQADgUAKgMQAMgOAUgDQAOgBAMAFQAKgIAPgCIAGgBQANgBANAEIADABQAcAKARAeQALATAAAQIACACQACADAAAEIAAAAQADADgBADIgBADQAAAGgFAHIAAABIgCAEIAAABIgBABIAAABIAAAEIgCACIgBAEIAAABIgBACIgBABIgBAAIAAABIAAAAIgCAEIAAABQgBAEgCABIgQA4IgDAQIAAABIgBAGIAAABIAAAAIAAAFIgBAIIgBAYIAAAOIAAAKIABAFIABARIgBABIABAKIABAAIAAABIABACIAAABIAAABIABAAIgBACIABAFIADASIAGAgIACACIAAABIABABIAAABIAAAAIABAEIAAABIACAEIAAAEIABAAIAAABIABAAIAAABIABABIAAADIADADIAAADIACAFIABAEIAAADIACAAIABABIABACIAAAFIAAAAIAEAJIACACQAAAEAFAHIAAAAIABABIABABQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIABADIABABIABAAIABADIAAABIABAAIAAADQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIABAAIABADIgBADIAAAAIgDACIgCAAIgDABIAAABQgBAJgCAEQABAMgDAKQgEAOgLAKQgMAKgOACIgJABQgGAAgGgBg");
	this.shape_2.setTransform(591.6771,209.3586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},225).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("מיקי ואלי \"גלשן\" -שירי ילדות ישראלית", "26px 'Heebo'", "#33CC66");
	this.text.lineHeight = 40;
	this.text.lineWidth = 470;
	this.text.parent = this;
	this.text.setTransform(854.25,17.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_text, null, null);


(lib.Scene_1_sky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D0F3F4").s().p("EBXrAGkQpOgZpml7QziKU0oqkQqIJJz2nwQlnCWpvA4QpvA3qrjpQzJG/vXmsQlQFarSiJQpghzg1ApIAAq0MDEwAAAIABIKQhZFBoHAAQgmAAgogCg");
	this.shape.setTransform(666.525,46.3097);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(567));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_parasol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// parasol
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.729)").ss(0.1,1,1).p("AAxglIAAAxABbgqIAAA8Ag9gVIAAA4AhagRIADA8");
	this.shape.setTransform(609.85,241.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6633").s().p("AhfBOIBHgKIAViRIgKABQgjADgHgXQg1AEgEgUQgmgCABgLIABgDQADgMAugBQAngBA2AKIASAEQBAAMAmAVQAXAMAHAGQAHAGgBAEQgBAEgIADQgIADgXgLQgCAHgLACQgLACgfgNQgYALgYgQIgTCOIBEgKIArg1IAIAAIAZAuIg7BCIgqAGIg0AIIgCAKIgKgBIABgIIgvAHIgdAEIgEAAg");
	this.shape_1.setTransform(611.68,225.3955);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0033").s().p("AgDADIAEgFIADAFg");
	this.shape_2.setTransform(714.925,180.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},225).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},17).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_grass = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// grass
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009933").ss(1,1,1).p("EhkJgOMQP+CNMwHHQeevmV+KuQZjs1YYBgQTqBGQnLmQWimjKbAwMAAAAjcMjITAAAg");
	this.shape.setTransform(644.95,602.8022);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009933").s().p("EhkJAVQMAAAgjcQP+CNMxHHQedvmV+KuQZjs1YZBgQTpBGQnLmQWimjKbAwMAAAAjcg");
	this.shape_1.setTransform(644.95,602.8022);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(272));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.road = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EBXmgBZIG5AAIF7AAIAACfIl7AAIm5AAgEA4CgBtIM0AAIAACfIs0AAgAbShtIM0AAIAACfIs0AAgAjBhZIMzAAIAACfIszAAgEgm9gBFIM0AAIAACfIs0AAgEhGhgAxIM0AAIAACfIs0AAgEhkZgAxIM0AAIAACfIs0AAg");
	this.shape.setTransform(674.575,86.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Ehj8AM5IAA5xMDH4AAAIAAMLIm5AAIAACfIG5AAIAALHgEhBEACaIM0AAIAAifIs0AAgEhe7ACaIM0AAIAAifIs0AAgEghgACGIM0AAIAAifIs0AAgACbByIM0AAIAAifIs0AAgEA9fABeIM0AAIAAifIs0AAgEAgvABeIM0AAIAAifIs0AAg");
	this.shape_1.setTransform(639.65,82.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EhGhABuIAAifIM0AAIAACfgEhkZABuIAAifIM0AAIAACfgEgm9ABaIAAifIM0AAIAACfgEBefABGIm5AAIAAifIG5AAIF7AAIAACfgAjBBGIAAifIMzAAIAACfgEA4CAAyIAAifIM0AAIAACfgAbSAyIAAifIM0AAIAACfg");
	this.shape_2.setTransform(674.575,86.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1318.7,165.1);


(lib.replay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(25.15,14.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.replay, new cjs.Rectangle(-0.5,-0.5,147.5,89), null);


(lib.car2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-25,9.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.car2, new cjs.Rectangle(-25,9.5,524,159.5), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.wheelright = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wheelleft();
	this.instance.setTransform(3.95,-6.3,0.8548,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wheelright, new cjs.Rectangle(-0.4,-0.5,64.60000000000001,63.4), null);


(lib.Tween38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wheelright();
	this.instance.setTransform(-89.1,-0.55,0.7879,0.7879,90.0011,0,0,31.8,28.2);

	this.instance_1 = new lib.wheelright();
	this.instance_1.setTransform(88.15,-0.65,0.7879,0.7879,75.0013,0,0,31.8,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.4,-30.9,233,62);


(lib.Tween37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wheelright();
	this.instance.setTransform(-89.3,2.1,0.7879,0.7879,150.0019,0,0,31.8,28.2);

	this.instance_1 = new lib.wheelright();
	this.instance_1.setTransform(91.9,1.95,0.7879,0.7879,150.0005,0,0,31.7,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-34.3,250.1,68.69999999999999);


(lib.Tween36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wheelright();
	this.instance.setTransform(-90.65,1.7,0.7879,0.7879,-135,0,0,31.8,28.3);

	this.instance_1 = new lib.wheelright();
	this.instance_1.setTransform(87.5,1.7,0.7879,0.7879,-135,0,0,31.8,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.7,-35.7,249.5,71.4);


(lib.Tween35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wheelright();
	this.instance.setTransform(-91.75,-0.6,0.7879,0.7879,-75.0011,0,0,31.9,28.4);

	this.instance_1 = new lib.wheelright();
	this.instance_1.setTransform(87.45,-0.65,0.788,0.788,-75.0014,0,0,31.9,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.3,-31.1,240.6,62.1);


(lib.Tween27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wheelright();
	this.instance.setTransform(-90.6,-2.25,0.788,0.788,0,0,0,31.9,28.3);

	this.instance_1 = new lib.wheelright();
	this.instance_1.setTransform(90.65,-2.25,0.788,0.788,0,0,0,31.9,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-24.9,232.1,50);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol18();
	this.instance.setTransform(54.6,98.2,1,1,0,0,0,54.6,98.2);

	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(54.95,98.2,1,1,0,0,0,54.2,98.2);

	this.instance_2 = new lib.Symbol20();
	this.instance_2.setTransform(54.95,98.2,1,1,0,0,0,54.2,98.2);

	this.instance_3 = new lib.Symbol21();
	this.instance_3.setTransform(54.95,98.2,1,1,0,0,0,54.2,98.2);

	this.instance_4 = new lib.Symbol22();
	this.instance_4.setTransform(54.95,98.2,1,1,0,0,0,54.2,98.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol23();
	this.instance_5.setTransform(54.4,98.2,1,1,0,0,0,54.7,98.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:true},1).wait(9).to({_off:false},0).wait(3).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).wait(3).to({_off:true},1).wait(9).to({_off:false},0).wait(3).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,111.2,196.9);


(lib.surfboard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol34();
	this.instance.setTransform(64.2,225.5,1,1,0,0,0,64.2,225.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.surfboard, new cjs.Rectangle(-0.5,-0.5,129.5,452), null);


(lib.sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol24();
	this.instance.setTransform(132.1,130.2,1,1,0,0,0,132.1,130.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({regX:132.2,regY:130.1,rotation:59.9996,x:132.05,y:130.3},0).wait(4).to({regX:132.1,regY:129.9,rotation:144.7331,x:132.15,y:130.25},0).wait(6).to({regX:131.9,regY:130,rotation:241.7937},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-56.6,374.3,373.40000000000003);


(lib.Scene_1_wheels2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wheels2
	this.instance = new lib.wheelright();
	this.instance.setTransform(1563.95,523.95,0.9999,0.9999,0,0,0,32,28.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(292).to({_off:false},0).to({regX:31.8,scaleX:1,scaleY:1,rotation:-59.9996,x:1191.3,y:526.15},16).to({regX:31.7,rotation:-119.9989,x:1104.45,y:528.2},15).to({regX:31.8,scaleX:0.9999,scaleY:0.9999,rotation:-127.1035,x:1092.4,y:528.05},3).to({regX:31.7,regY:28.3,scaleX:1,scaleY:1,rotation:-164.9985,x:1028.4,y:528.2},16).to({regY:28.2,scaleX:0.9999,scaleY:0.9999,rotation:-209.9978,x:950.45,y:528.35},17).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_wheels = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wheels
	this.instance = new lib.wheelleft();
	this.instance.setTransform(1355.65,524.35,0.8546,0.9998,0,0,0,33,37.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(292).to({_off:false},0).to({regX:32.6,regY:37.5,scaleX:0.8548,scaleY:1,rotation:-90,x:983.15,y:527.4},16).to({regX:32.5,rotation:-149.9996,x:896.15,y:526},15).to({rotation:-209.9989,x:817.05,y:526.65},19).to({rotation:-254.9985,x:737,y:526.15},17).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_waves_start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// waves_start
	this.instance = new lib.waves();
	this.instance.setTransform(610.6,556.1,1,1,0,0,0,675.6,114);

	this.instance_1 = new lib.waves();
	this.instance_1.setTransform(687.6,539.1,1,1,0,0,0,675.6,114);

	this.instance_2 = new lib.waves();
	this.instance_2.setTransform(643.6,534.1,1,1,0,0,0,675.6,114);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(1,1,1).p("AACgBQgCABAAAC");
	this.shape.setTransform(249.95,402.3125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_waves_start, null, null);


(lib.Scene_1_surfboard_start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// surfboard_start
	this.instance = new lib.surfboard_start();
	this.instance.setTransform(538.05,398.1,1,1,0,0,0,78.1,293.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.surfboard_start(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF66").s().p("AhFAeQgJgFgBgLQgBgKAIgFQADgCALgEQAAgEABgEQACgHAFgDQAEgEALgBQAWgCArABQAMAAADABQAFACAEAFIADAGIACACQAIAAAEACQAKAGAAAKQAAALgKAFQgFAFgHAAQgEABgHgDIg4ABIgjAHQgIACgHAAQgHAAgEgCg");
	this.shape.setTransform(488.1447,105.0525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("EhiYACZIAAkwMDExAAAIAAEwg");
	this.shape_1.setTransform(666.375,686);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_surfboard_start, null, null);


(lib.Scene_1_surfboard_end = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// surfboard_end
	this.instance = new lib.surfboard();
	this.instance.setTransform(857.1,310.3,0.1266,0.0868,45.0071,0,0,64.2,225);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(505).to({_off:false},0).to({x:869.1,y:292.3},4).to({regX:65,regY:224.6,scaleY:0.1276,rotation:60.0069,x:893.15,y:272.75},4).to({regX:65.3,regY:224.7,rotation:75.0063,x:949.15,y:237.4},4).to({regX:65.2,regY:224.2,rotation:120.0058,x:1013.2,y:224.4},6).to({regY:224,scaleX:0.2339,scaleY:0.2357,rotation:135.0052,x:1062.15,y:249.4},5).to({regY:223.7,scaleX:0.3311,scaleY:0.3337,rotation:165.0066,x:1062.25,y:249.45},4).to({regX:65.1,regY:223.6,scaleY:0.3336,rotation:180.0052,x:1078.25,y:270.5},6).to({y:273.5},6).to({y:271},8).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sun2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun2
	this.instance = new lib.sun("synched",0);
	this.instance.setTransform(1011.8,40.15,0.6669,0.6927,0,0,0,132.1,130.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(277).to({_off:false},0).to({startPosition:15},15).to({startPosition:14},47).to({startPosition:11},45).to({startPosition:11},80).to({startPosition:7},60).to({startPosition:1},42).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun
	this.instance = new lib.Tween51("synched",0);
	this.instance.setTransform(458.15,525.4);
	this.instance._off = true;

	this.instance_1 = new lib.sun("synched",0);
	this.instance_1.setTransform(1075.25,170,0.9998,0.9998,0,0,0,132.3,130.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:583.05,y:413.45},26).to({regX:0.1,regY:0.1,scaleX:0.9999,scaleY:0.9999,x:824.6,y:280.1},35).to({regY:0.2,scaleX:0.9998,scaleY:0.9998,x:1079.75,y:175.85},35).to({_off:true,regX:132.3,regY:130.4,x:1075.25,y:170},1).wait(175));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},1).to({regX:132.1,regY:130.1,scaleX:1,scaleY:1,x:1063.6,y:161.8},32).to({regX:132.5,regY:130.6,scaleX:0.9998,scaleY:0.9998,x:1091.2,y:157.8},29).to({regX:133,regY:131.1,scaleX:0.9997,scaleY:0.9997,x:1098.8,y:151.5},23).to({regX:132.1,regY:130.1,scaleX:1,scaleY:1,x:1099.45,y:164.45},25).to({x:1091.4,y:160.4},20).to({regY:130.2,scaleX:0.9999,scaleY:0.9999,x:1091.9,y:148.35},18).to({startPosition:14},27).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_road = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// road
	this.instance = new lib.road("synched",0);
	this.instance.setTransform(659.35,568.65,1,1,0,0,0,659.3,82.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(273).to({_off:false},0).wait(294));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_play_again = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// play_again
	this.replay = new lib.replay();
	this.replay.name = "replay";
	this.replay.setTransform(896.85,205.4,0.7881,0.7881,0,0,0,73.2,44.1);
	this.replay._off = true;
	new cjs.ButtonHelper(this.replay, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.replay).wait(566).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_car_end2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// car_end2
	this.instance = new lib.car2();
	this.instance.setTransform(1238.3,310.1,0.6481,0.6481,0,0,0,237,89.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(453).to({_off:false},0).to({x:1119.3},13).to({x:977.3},10).to({x:844.3},15).to({x:737.3},14).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_car_end = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// car_end
	this.instance = new lib.Tween38("synched",0);
	this.instance.setTransform(744.45,376.35);

	this.instance_1 = new lib.car2();
	this.instance_1.setTransform(737.35,310.15,0.648,0.648,0,0,0,237.1,89.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},505).wait(62));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// car
	this.instance = new lib.car2();
	this.instance.setTransform(1455.8,448.1,0.7551,0.7551,0,0,0,237.2,89.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(292).to({_off:false},0).to({regX:237.1,regY:89.2,scaleX:0.7552,scaleY:0.7552,x:1083.25,y:449.05},16).to({x:997.25},15).to({x:918.25},19).to({x:839.25},17).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_birds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// birds
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(842.85,161.85);
	this.instance._off = true;

	this.instance_1 = new lib.Tween23("synched",0);
	this.instance_1.setTransform(827.85,136.85);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween24("synched",0);
	this.instance_2.setTransform(793.9,145);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween25("synched",0);
	this.instance_3.setTransform(752.1,102.75);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(277).to({_off:false},0).to({_off:true,x:827.85,y:136.85},33).wait(47).to({_off:false,x:842.85,y:161.85},27).to({_off:true,x:827.85,y:136.85},33).wait(47).to({_off:false,x:842.85,y:161.85},27).to({_off:true,x:827.85,y:136.85},33).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(277).to({_off:false},33).to({_off:true,x:793.9,y:145},28).wait(46).to({_off:false,x:827.85,y:136.85},33).to({_off:true,x:793.9,y:145},28).wait(46).to({_off:false,x:827.85,y:136.85},33).to({_off:true,x:793.9,y:145},30).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(310).to({_off:false},28).to({_off:true,x:752.1,y:102.75},19).wait(60).to({_off:false,x:793.9,y:145},28).to({_off:true,x:752.1,y:102.75},19).wait(60).to({_off:false,x:793.9,y:145},30).to({startPosition:0},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(338).to({_off:false},19).to({_off:true,x:842.85,y:161.85},27).wait(61).to({_off:false,x:752.1,y:102.75},19).to({_off:true,x:842.85,y:161.85},27).wait(76));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_beach = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// beach
	this.instance = new lib.waves();
	this.instance.setTransform(633.6,289.15,1,0.316,0,0,0,675.6,114);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("EhppAItIAAyGMDTTAAAIAASGQpyoUlsAsQlsAr4RDsQ/EB9qHksQtrIywniyQ7rjPoTixQycHAmkhAQz6iQiTjbQkNGYkOAAQhaAAhbgtg");
	this.shape.setTransform(633.175,385.4985);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},273).to({state:[{t:this.shape},{t:this.instance}]},34).wait(260));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.girl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween28("synched",0);
	this.instance.setTransform(-75,-49.4);

	this.instance_1 = new lib.Tween29("synched",0);
	this.instance_1.setTransform(-74.35,-49.4);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween30("synched",0);
	this.instance_2.setTransform(-74.85,-46.55);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-74.5},4).to({_off:true,x:-74.35},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},1).to({_off:true,x:-74.85,y:-46.55},6).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},6).to({startPosition:0},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.4,-136,117.10000000000001,179.9);


(lib.flower = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(26,37.8,1,1,0,0,0,26,37.8);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(27.05,36.9,1,1,0,0,0,24.7,38.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(26,37.8,1,1,0,0,0,26,37.8);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(27.05,36.9,1,1,0,0,0,24.7,38.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(3).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).wait(3).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-2.8,54.1,79.5);


(lib.boy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol14();
	this.instance.setTransform(54.6,98.2,1,1,0,0,0,54.6,98.2);

	this.instance_1 = new lib.Symbol18();
	this.instance_1.setTransform(54.6,98.2,1,1,0,0,0,54.6,98.2);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol19();
	this.instance_2.setTransform(54.95,98.2,1,1,0,0,0,54.2,98.2);

	this.instance_3 = new lib.Symbol20();
	this.instance_3.setTransform(54.95,98.2,1,1,0,0,0,54.2,98.2);

	this.instance_4 = new lib.Symbol21();
	this.instance_4.setTransform(54.95,98.2,1,1,0,0,0,54.2,98.2);

	this.instance_5 = new lib.Symbol22();
	this.instance_5.setTransform(54.95,98.2,1,1,0,0,0,54.2,98.2);
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol23();
	this.instance_6.setTransform(54.4,98.2,1,1,0,0,0,54.7,98.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:54.4,x:54.4},0).wait(2).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(3).to({_off:true},1).wait(9).to({_off:false},0).wait(3).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).wait(3).to({_off:true},1).wait(9).to({_off:false},0).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,111.2,196.9);


(lib.boy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol11();
	this.instance.setTransform(54.1,90.5,1,1,0,0,0,54.1,90.5);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(54.65,90.5,1,1,0,0,0,53.2,90.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol13();
	this.instance_2.setTransform(53.75,90.5,1,1,0,0,0,54.4,90.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:90.7,y:90.7},0).wait(2).to({_off:true},1).wait(7).to({_off:false,regY:90.5,y:90.5},0).wait(1).to({regY:90.7,y:90.7},0).wait(2).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({regX:53.5,regY:90.7,x:54.95,y:90.7},0).wait(1).to({_off:true},1).wait(8).to({_off:false,regY:90.5,x:54.65,y:90.5},0).wait(1).to({regY:90.7,y:90.7},0).wait(1).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(1).to({regX:54.3,regY:90.7,x:53.65,y:90.7},0).wait(2).to({_off:true},1).wait(7).to({_off:false,regX:54.4,regY:90.5,x:53.75,y:90.5},0).wait(1).to({regX:54.3,regY:90.7,x:53.65,y:90.7},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-0.4,110.1,182.20000000000002);


(lib.Tween34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween27("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.7,-25.5,233.4,51.2);


(lib.Scene_1_wheels_part2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wheels_part2
	this.instance = new lib.Tween34("synched",0);
	this.instance.setTransform(1241.8,377.85);
	this.instance._off = true;

	this.instance_1 = new lib.Tween35("synched",0);
	this.instance_1.setTransform(1123,376.3);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween36("synched",0);
	this.instance_2.setTransform(981.85,374.1);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween37("synched",0);
	this.instance_3.setTransform(846.55,373.75);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween38("synched",0);
	this.instance_4.setTransform(744.45,376.35);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(453).to({_off:false},0).to({_off:true,x:1123,y:376.3},13).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(453).to({_off:false},13).to({_off:true,x:981.85,y:374.1},10).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(466).to({_off:false},10).to({_off:true,x:846.55,y:373.75},15).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(476).to({_off:false},15).to({_off:true,x:744.45,y:376.35},14).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(491).to({_off:false},14).to({startPosition:0},17).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_girl_copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// girl_copy
	this.instance = new lib.girl("synched",0);
	this.instance.setTransform(356.05,262.4,1,1,0,0,0,-75,-49.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(376).to({_off:false},0).wait(125));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_girl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// girl
	this.instance = new lib.girl("synched",0);
	this.instance.setTransform(196.05,262.4,1,1,0,0,0,-75,-49.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(376).to({_off:false},0).wait(125));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_flowers = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flowers
	this.instance = new lib.flower("synched",0);
	this.instance.setTransform(122.05,505.55,0.9999,0.9999,0,0,0,26.4,38.1);

	this.instance_1 = new lib.flower("synched",0);
	this.instance_1.setTransform(1095.3,508.75,0.9998,0.9998,0,0,0,26.6,38.4);

	this.instance_2 = new lib.flower("synched",0);
	this.instance_2.setTransform(341,480.5,0.9999,0.9999,0,0,0,26.4,38.2);

	this.instance_3 = new lib.flower("synched",0);
	this.instance_3.setTransform(665.2,448.9,0.9998,0.9998,0,0,0,26.8,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(272));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_boy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// boy3
	this.instance = new lib.boy2("synched",0);
	this.instance.setTransform(809.45,397.9,1.16,1.16,0,0,0,54.8,98.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(173).to({_off:false},0).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_boy2_car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// boy2_car
	this.instance = new lib.boy2("synched",0);
	this.instance.setTransform(1503.2,455.55,0.5378,0.45,0,0,0,55.4,99.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(292).to({_off:false},0).to({regX:54.4,regY:98.3,scaleX:0.5616,scaleY:0.47,x:1136.7,y:458,startPosition:4},16).to({x:1046.7,startPosition:9},15).to({x:969.7,startPosition:13},19).to({x:891.7,startPosition:17},17).to({startPosition:19},26).to({startPosition:27},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_boy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// boy2
	this.instance = new lib.boy2("synched",0);
	this.instance.setTransform(228.45,456.65,1.1482,1.1482,0,0,0,54.8,98.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(154).to({_off:false},0).wait(119));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_boy_car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// boy_car
	this.instance = new lib.boy("synched",0);
	this.instance.setTransform(1417.9,465.15,0.5403,0.5031,0,0,0,63.6,101);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(292).to({_off:false},0).to({regX:53.8,regY:90.7,scaleX:0.5588,scaleY:0.4921,x:1043.1,y:459.4,startPosition:4},16).to({x:957.1,startPosition:9},15).to({x:879.1,startPosition:13},19).to({x:802.1,startPosition:17},17).to({startPosition:7},12).to({startPosition:19},14).to({startPosition:5},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_boy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// boy
	this.instance = new lib.boy("synched",0);
	this.instance.setTransform(485.35,435.9,1.2402,1.2402,0,0,0,54.9,91.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAtAAQAAATgOANQgNANgSAAQgSAAgNgNQgNgNAAgTQAAgSANgNQANgNASAAQASAAANANQAOANAAASg");
	this.shape.setTransform(532.275,308.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AB4hFQAAAYgRASQgSARgYAAQgYAAgSgRQgRgSAAgYQAAgYARgRQASgSAYAAQAYAAASASQARARAAAYgAgeBUQAAATgOANQgHAHgKADQgHADgHAAQgTAAgMgNQgGgGgDgGQgEgJAAgLQAAgTANgNQAMgNATAAQASAAANANQAOANAAATg");
	this.shape_1.setTransform(539.725,297.75);

	this.instance_1 = new lib.waves();
	this.instance_1.setTransform(597.5,222.2,0.1117,0.101,0,0,0,745.6,170.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgjBUQAAATgOANQgHAHgKAEQgHACgHAAQgTAAgMgNQgGgGgDgGQgEgJAAgLQAAgTANgNQAMgNATAAQASAAANANQAOANAAATgAB9hFQAAAYgRASQgSARgYAAQgYAAgSgRQgRgSAAgYQAAgYARgSQASgRAYAAQAYAAASARQARASAAAYg");
	this.shape_2.setTransform(541.125,291.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.729)").ss(0.1,1,1).p("AKVAAQAABvg3BdIgBABQgcAvgrArQgPAQgSAPIgIAHQgMAKgOAKQivCFjxAMQgZABgaAAQjDAAiZhKIgsgWQgngXgkgbQgugjgjgmQgMgNgKgNQgTgYgPgZQg4heAAhvQAAjODBiSQDBiSESAAQCKAAB2AkQBIAYBBAkQAnAWAjAcQDCCSAADOg");
	this.shape_3.setTransform(591.775,207);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC33").s().p("AldBKIgrgXQgngWgkgbQgugigkgmIgWgaQgTgYgPgZIS6gBIABAAIgBABIAAgBIAAABIhHBaQgQAPgRAPIgIAHIgaAUQivCEjyANQjxgCiehHgAJdiRg");
	this.shape_4.setTransform(591.825,242.1375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{regX:54.9,regY:91.5,scaleX:1.2402,scaleY:1.2402,x:485.35,y:435.9}}]},138).to({state:[{t:this.shape},{t:this.instance,p:{regX:56,regY:92.7,scaleX:1.2393,scaleY:1.2393,x:486.9,y:440.7}}]},64).to({state:[{t:this.shape_1},{t:this.instance,p:{regX:54.6,regY:91.2,scaleX:1.2402,scaleY:1.2402,x:484.85,y:438.1}}]},9).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.instance,p:{regX:54.8,regY:91.4,scaleX:1.2402,scaleY:1.2402,x:484.6,y:438.4}}]},14).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.Animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,566];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
		
		self.surfboard_start.addEventListener("click",startPlaying);
		
		function startPlaying(){
			self.gotoAndPlay(1)
		}
	}
	this.frame_1 = function() {
		
		playSound("מיקיואליגלשןשירקיץילדיםשיריילדותישראליתmp3cutnet");
	}
	this.frame_566 = function() {
		this.replay = this.play_again.replay;
		this.___loopingOver___ = true;
		var self=this;
		self.stop();
		
		self.replay.addEventListener("click",playAgain);
		
		function playAgain(){
			
			self.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(565).call(this.frame_566).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(665.1,352.25,0.9668,0.9668);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(174).to({scaleX:0.9607,scaleY:0.9607,x:663.2568,y:350.7745},0).wait(1).to({scaleX:0.9546,scaleY:0.9546,x:661.4135,y:349.299},0).wait(1).to({scaleX:0.9485,scaleY:0.9485,x:659.5703,y:347.8235},0).wait(1).to({scaleX:0.9424,scaleY:0.9424,x:657.727,y:346.348},0).wait(1).to({scaleX:0.9363,scaleY:0.9363,x:655.8838,y:344.8725},0).wait(1).to({scaleX:0.9302,scaleY:0.9302,x:654.0405,y:343.397},0).wait(1).to({scaleX:0.9242,scaleY:0.9242,x:652.1973,y:341.9215},0).wait(1).to({scaleX:0.9181,scaleY:0.9181,x:650.3541,y:340.446},0).wait(1).to({scaleX:0.912,scaleY:0.912,x:648.5108,y:338.9705},0).wait(1).to({scaleX:0.9059,scaleY:0.9059,x:646.6676,y:337.495},0).wait(1).to({scaleX:0.8998,scaleY:0.8998,x:644.8243,y:336.0195},0).wait(1).to({scaleX:0.8937,scaleY:0.8937,x:642.9811,y:334.544},0).wait(1).to({scaleX:0.8876,scaleY:0.8876,x:641.1378,y:333.0685},0).wait(1).to({scaleX:0.8815,scaleY:0.8815,x:639.2946,y:331.593},0).wait(1).to({scaleX:0.8754,scaleY:0.8754,x:637.4513,y:330.1175},0).wait(1).to({scaleX:0.8693,scaleY:0.8693,x:635.6081,y:328.642},0).wait(1).to({scaleX:0.8632,scaleY:0.8632,x:633.7649,y:327.1665},0).wait(1).to({scaleX:0.8571,scaleY:0.8571,x:631.9216,y:325.691},0).wait(1).to({scaleX:0.8511,scaleY:0.8511,x:630.0784,y:324.2155},0).wait(1).to({scaleX:0.845,scaleY:0.845,x:628.2351,y:322.74},0).wait(1).to({scaleX:0.8389,scaleY:0.8389,x:626.3919,y:321.2645},0).wait(1).to({scaleX:0.8328,scaleY:0.8328,x:624.5486,y:319.789},0).wait(1).to({scaleX:0.8267,scaleY:0.8267,x:622.7054,y:318.3135},0).wait(1).to({scaleX:0.8206,scaleY:0.8206,x:620.8622,y:316.838},0).wait(1).to({scaleX:0.8145,scaleY:0.8145,x:619.0189,y:315.3625},0).wait(1).to({scaleX:0.8084,scaleY:0.8084,x:617.1757,y:313.887},0).wait(1).to({scaleX:0.8023,scaleY:0.8023,x:615.3324,y:312.4115},0).wait(1).to({scaleX:0.7962,scaleY:0.7962,x:613.4892,y:310.936},0).wait(1).to({scaleX:0.7901,scaleY:0.7901,x:611.6459,y:309.4605},0).wait(1).to({scaleX:0.784,scaleY:0.784,x:609.8027,y:307.9849},0).wait(1).to({scaleX:0.778,scaleY:0.778,x:607.9594,y:306.5094},0).wait(1).to({scaleX:0.7665,scaleY:0.7665,x:609.71,y:302.2168},0).wait(1).to({scaleX:0.755,scaleY:0.755,x:611.4606,y:297.9242},0).wait(1).to({scaleX:0.7435,scaleY:0.7435,x:613.2112,y:293.6316},0).wait(1).to({scaleX:0.732,scaleY:0.732,x:614.9617,y:289.339},0).wait(1).to({scaleX:0.7205,scaleY:0.7205,x:616.7123,y:285.0464},0).wait(1).to({scaleX:0.709,scaleY:0.709,x:618.4629,y:280.7538},0).wait(1).to({scaleX:0.6975,scaleY:0.6975,x:620.2135,y:276.4612},0).wait(1).to({scaleX:0.686,scaleY:0.686,x:621.964,y:272.1686},0).wait(1).to({scaleX:0.6745,scaleY:0.6745,x:623.7146,y:267.876},0).wait(1).to({scaleX:0.663,scaleY:0.663,x:625.4652,y:263.5834},0).wait(1).to({scaleX:0.6515,scaleY:0.6515,x:627.2158,y:259.2908},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:628.9663,y:254.9982},0).wait(1).to({scaleX:0.6285,scaleY:0.6285,x:630.7169,y:250.7056},0).wait(1).to({scaleX:0.617,scaleY:0.617,x:632.4675,y:246.4129},0).wait(1).to({scaleX:0.6055,scaleY:0.6055,x:634.2181,y:242.1203},0).wait(1).to({scaleX:0.594,scaleY:0.594,x:635.9686,y:237.8277},0).wait(1).to({scaleX:0.5825,scaleY:0.5825,x:637.7192,y:233.5351},0).wait(1).to({scaleX:0.571,scaleY:0.571,x:639.4698,y:229.2425},0).wait(1).to({scaleX:0.5595,scaleY:0.5595,x:641.2204,y:224.9499},0).wait(1).to({scaleX:0.548,scaleY:0.548,x:642.9709,y:220.6573},0).wait(1).to({scaleX:0.5365,scaleY:0.5365,x:644.7215,y:216.3647},0).wait(1).to({scaleX:0.525,scaleY:0.525,x:646.4721,y:212.0721},0).wait(1).to({scaleX:0.5048,scaleY:0.5048,x:643.32,y:212.5419},0).wait(1).to({scaleX:0.4845,scaleY:0.4845,x:640.1679,y:213.0116},0).wait(1).to({scaleX:0.4642,scaleY:0.4642,x:637.0158,y:213.4814},0).wait(1).to({scaleX:0.4439,scaleY:0.4439,x:633.8636,y:213.9511},0).wait(1).to({scaleX:0.4236,scaleY:0.4236,x:630.7115,y:214.4209},0).wait(1).to({scaleX:0.4034,scaleY:0.4034,x:627.5594,y:214.8907},0).wait(1).to({scaleX:0.3831,scaleY:0.3831,x:624.4073,y:215.3604},0).wait(1).to({scaleX:0.3628,scaleY:0.3628,x:621.2552,y:215.8302},0).wait(1).to({scaleX:0.3425,scaleY:0.3425,x:618.1031,y:216.3},0).wait(1).to({scaleX:0.3222,scaleY:0.3222,x:614.951,y:216.7697},0).wait(1).to({scaleX:0.302,scaleY:0.302,x:611.7989,y:217.2395},0).wait(1).to({scaleX:0.2817,scaleY:0.2817,x:608.6468,y:217.7093},0).wait(1).to({scaleX:0.2614,scaleY:0.2614,x:605.4947,y:218.179},0).wait(1).to({scaleX:0.2411,scaleY:0.2411,x:602.3425,y:218.6488},0).wait(1).to({scaleX:0.2208,scaleY:0.2208,x:599.1904,y:219.1186},0).wait(1).to({scaleX:0.2005,scaleY:0.2005,x:596.0383,y:219.5883},0).wait(1).to({scaleX:0.2009,scaleY:0.2009,x:596.0817,y:219.64},0).wait(1).to({scaleX:0.2013,scaleY:0.2013,x:596.125,y:219.6916},0).wait(1).to({scaleX:0.2017,scaleY:0.2017,x:596.1684,y:219.7433},0).wait(1).to({scaleX:0.202,scaleY:0.202,x:596.2117,y:219.795},0).wait(1).to({scaleX:0.2024,scaleY:0.2024,x:596.2551,y:219.8466},0).wait(1).to({scaleX:0.2028,scaleY:0.2028,x:596.2984,y:219.8983},0).wait(1).to({scaleX:0.2032,scaleY:0.2032,x:596.3418,y:219.95},0).wait(1).to({scaleX:0.2035,scaleY:0.2035,x:596.3851,y:220.0016},0).wait(1).to({scaleX:0.2039,scaleY:0.2039,x:596.4285,y:220.0533},0).wait(1).to({scaleX:0.2043,scaleY:0.2043,x:596.4718,y:220.105},0).wait(1).to({scaleX:0.2047,scaleY:0.2047,x:596.5152,y:220.1566},0).wait(1).to({scaleX:0.205,scaleY:0.205,x:596.5585,y:220.2083},0).wait(1).to({scaleX:0.2054,scaleY:0.2054,x:596.6019,y:220.26},0).wait(1).to({scaleX:0.2058,scaleY:0.2058,x:596.6452,y:220.3116},0).wait(1).to({scaleX:0.2062,scaleY:0.2062,x:596.6886,y:220.3633},0).wait(1).to({scaleX:0.2065,scaleY:0.2065,x:596.7319,y:220.415},0).wait(1).to({scaleX:0.2069,scaleY:0.2069,x:596.7753,y:220.4666},0).wait(1).to({scaleX:0.2073,scaleY:0.2073,x:596.8186,y:220.5183},0).wait(1).to({scaleX:0.2077,scaleY:0.2077,x:596.862,y:220.57},0).wait(1).to({scaleX:0.2065,scaleY:0.2065,x:596.5101,y:220.2037},0).wait(1).to({scaleX:0.2054,scaleY:0.2054,x:596.1582,y:219.8373},0).wait(1).to({scaleX:0.2042,scaleY:0.2042,x:595.8064,y:219.471},0).wait(1).to({scaleX:0.2031,scaleY:0.2031,x:595.4546,y:219.1047},0).wait(1).to({scaleX:0.2019,scaleY:0.2019,x:595.1027,y:218.7384},0).wait(1).to({scaleX:0.2007,scaleY:0.2007,x:594.7509,y:218.3721},0).wait(1).to({scaleX:0.1996,scaleY:0.1996,x:594.399,y:218.0058},0).wait(1).to({scaleX:0.1984,scaleY:0.1984,x:594.0471,y:217.6395},0).wait(1).to({scaleX:0.1973,scaleY:0.1973,x:593.6953,y:217.2732},0).wait(1).to({scaleX:0.1961,scaleY:0.1961,x:593.3434,y:216.9069},0).wait(1).to({scaleX:0.195,scaleY:0.195,x:592.9916,y:216.5406},0).wait(1).to({scaleX:0.5863,scaleY:0.5863,x:631.5115,y:250.032},0).wait(1).to({scaleX:0.6163,scaleY:0.6163,x:634.8153,y:257.9157},0).wait(1).to({scaleX:0.6463,scaleY:0.6463,x:638.119,y:265.7994},0).wait(1).to({scaleX:0.6763,scaleY:0.6763,x:641.4227,y:273.6831},0).wait(1).to({scaleX:0.7063,scaleY:0.7063,x:644.7264,y:281.5668},0).wait(1).to({scaleX:0.7363,scaleY:0.7363,x:648.0302,y:289.4504},0).wait(1).to({scaleX:0.7663,scaleY:0.7663,x:651.3339,y:297.3341},0).wait(1).to({scaleX:0.7964,scaleY:0.7964,x:654.6376,y:305.2178},0).wait(1).to({scaleX:0.8264,scaleY:0.8264,x:657.9413,y:313.1015},0).wait(1).to({scaleX:0.8564,scaleY:0.8564,x:661.2451,y:320.9852},0).wait(1).to({scaleX:0.8864,scaleY:0.8864,x:664.5488,y:328.8688},0).wait(1).to({scaleX:0.9164,scaleY:0.9164,x:667.8525,y:336.7525},0).wait(1).to({scaleX:0.9165,scaleY:0.9165,x:667.7812,y:336.6937},0).wait(1).to({x:667.7099,y:336.6349},0).wait(1).to({scaleX:0.9166,scaleY:0.9166,x:667.6385,y:336.576},0).wait(1).to({x:667.5672,y:336.5172},0).wait(1).to({scaleX:0.9167,scaleY:0.9167,x:667.4959,y:336.4584},0).wait(1).to({x:667.4246,y:336.3996},0).wait(1).to({scaleX:0.9168,scaleY:0.9168,x:667.3532,y:336.3407},0).wait(1).to({x:667.2819,y:336.2819},0).wait(1).to({scaleX:0.9169,scaleY:0.9169,x:667.2106,y:336.2231},0).wait(1).to({x:667.1393,y:336.1643},0).wait(1).to({scaleX:0.917,scaleY:0.917,x:667.0679,y:336.1054},0).wait(1).to({x:666.9966,y:336.0466},0).wait(1).to({x:666.9253,y:335.9878},0).wait(1).to({scaleX:0.9171,scaleY:0.9171,x:666.854,y:335.929},0).wait(1).to({x:666.7826,y:335.8701},0).wait(1).to({scaleX:0.9172,scaleY:0.9172,x:666.7113,y:335.8113},0).wait(1).to({x:666.64,y:335.7525},0).wait(1).to({scaleX:0.9173,scaleY:0.9173,x:666.5687,y:335.6937},0).wait(1).to({x:666.4973,y:335.6348},0).wait(1).to({scaleX:0.9174,scaleY:0.9174,x:666.426,y:335.576},0).wait(1).to({x:666.3547,y:335.5172},0).wait(1).to({scaleX:0.9175,scaleY:0.9175,x:666.2834,y:335.4584},0).wait(1).to({x:666.212,y:335.3995},0).wait(1).to({scaleX:0.9176,scaleY:0.9176,x:666.1407,y:335.3407},0).wait(1).to({x:666.0694,y:335.2819},0).wait(1).to({scaleX:0.9177,scaleY:0.9177,x:665.998,y:335.223},0).wait(1).to({x:665.9267,y:335.1642},0).wait(1).to({scaleX:0.9178,scaleY:0.9178,x:665.8554,y:335.1054},0).wait(1).to({x:665.7841,y:335.0466},0).wait(1).to({scaleX:0.9179,scaleY:0.9179,x:665.7127,y:334.9877},0).wait(1).to({x:665.6414,y:334.9289},0).wait(1).to({scaleX:0.918,scaleY:0.918,x:665.5701,y:334.8701},0).wait(1).to({x:665.4988,y:334.8113},0).wait(1).to({scaleX:0.9181,scaleY:0.9181,x:665.4274,y:334.7524},0).wait(1).to({scaleX:0.9183,scaleY:0.9183,x:665.5569,y:334.6653},0).wait(1).to({scaleX:0.9184,scaleY:0.9184,x:665.6863,y:334.5781},0).wait(1).to({scaleX:0.9186,scaleY:0.9186,x:665.8157,y:334.491},0).wait(1).to({scaleX:0.9188,scaleY:0.9188,x:665.9452,y:334.4038},0).wait(1).to({scaleX:0.919,scaleY:0.919,x:666.0746,y:334.3167},0).wait(1).to({scaleX:0.9191,scaleY:0.9191,x:666.204,y:334.2295},0).wait(1).to({scaleX:0.9193,scaleY:0.9193,x:666.3335,y:334.1424},0).wait(1).to({scaleX:0.9195,scaleY:0.9195,x:666.4629,y:334.0552},0).wait(1).to({scaleX:0.9197,scaleY:0.9197,x:666.5923,y:333.9681},0).wait(1).to({scaleX:0.9198,scaleY:0.9198,x:666.7217,y:333.8809},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:666.8512,y:333.7938},0).wait(1).to({scaleX:0.9202,scaleY:0.9202,x:666.9806,y:333.7066},0).wait(1).to({scaleX:0.9204,scaleY:0.9204,x:667.11,y:333.6194},0).wait(1).to({scaleX:0.9206,scaleY:0.9206,x:667.2395,y:333.5323},0).wait(1).to({scaleX:0.9207,scaleY:0.9207,x:667.3689,y:333.4451},0).wait(1).to({scaleX:0.9209,scaleY:0.9209,x:667.4983,y:333.358},0).wait(1).to({scaleX:0.9211,scaleY:0.9211,x:667.6278,y:333.2708},0).wait(1).to({scaleX:0.9213,scaleY:0.9213,x:667.7572,y:333.1837},0).wait(1).to({scaleX:0.9214,scaleY:0.9214,x:667.8866,y:333.0965},0).wait(1).to({scaleX:0.9216,scaleY:0.9216,x:668.016,y:333.0094},0).wait(1).to({scaleX:0.9218,scaleY:0.9218,x:668.1455,y:332.9222},0).wait(1).to({scaleX:0.922,scaleY:0.922,x:668.2749,y:332.8351},0).wait(1).to({scaleX:0.9221,scaleY:0.9221,x:668.4043,y:332.7479},0).wait(1).to({scaleX:0.9223,scaleY:0.9223,x:668.5338,y:332.6608},0).wait(1).to({scaleX:0.9225,scaleY:0.9225,x:668.6632,y:332.5736},0).wait(1).to({scaleX:0.9227,scaleY:0.9227,x:668.7926,y:332.4865},0).wait(1).to({scaleX:0.9229,scaleY:0.9229,x:668.9221,y:332.3993},0).wait(1).to({scaleX:0.9223,scaleY:0.9223,x:668.5001,y:332.4316},0).wait(1).to({scaleX:0.9217,scaleY:0.9217,x:668.0782,y:332.4639},0).wait(1).to({scaleX:0.9211,scaleY:0.9211,x:667.6562,y:332.4962},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:667.2343,y:332.5285},0).wait(1).to({scaleX:0.9199,scaleY:0.9199,x:666.8123,y:332.5608},0).wait(1).to({scaleX:0.9193,scaleY:0.9193,x:666.3904,y:332.5931},0).wait(1).to({scaleX:0.9187,scaleY:0.9187,x:665.9684,y:332.6254},0).wait(1).to({scaleX:0.9181,scaleY:0.9181,x:665.5465,y:332.6577},0).wait(1).to({scaleX:0.9175,scaleY:0.9175,x:665.1246,y:332.69},0).wait(1).to({scaleX:0.9169,scaleY:0.9169,x:664.7026,y:332.7223},0).wait(1).to({scaleX:0.9163,scaleY:0.9163,x:664.2807,y:332.7546},0).wait(1).to({scaleX:0.9157,scaleY:0.9157,x:663.8587,y:332.7869},0).wait(1).to({scaleX:0.9151,scaleY:0.9151,x:663.4368,y:332.8192},0).wait(1).to({scaleX:0.9145,scaleY:0.9145,x:663.0148,y:332.8515},0).wait(1).to({scaleX:0.914,scaleY:0.914,x:662.5929,y:332.8838},0).wait(1).to({scaleX:0.9134,scaleY:0.9134,x:662.1709,y:332.9161},0).wait(1).to({scaleX:0.9128,scaleY:0.9128,x:661.749,y:332.9484},0).wait(1).to({scaleX:0.9122,scaleY:0.9122,x:661.327,y:332.9807},0).wait(1).to({scaleX:0.9116,scaleY:0.9116,x:660.9051,y:333.013},0).wait(1).to({scaleX:0.911,scaleY:0.911,x:660.4832,y:333.0453},0).wait(1).to({scaleX:0.9104,scaleY:0.9104,x:660.0612,y:333.0776},0).wait(1).to({scaleX:0.9098,scaleY:0.9098,x:659.6393,y:333.1099},0).wait(1).to({scaleX:0.9092,scaleY:0.9092,x:659.2173,y:333.1422},0).wait(1).to({scaleX:0.9086,scaleY:0.9086,x:658.7954,y:333.1745},0).wait(1).to({scaleX:0.908,scaleY:0.908,x:658.3734,y:333.2068},0).wait(1).to({scaleX:0.9074,scaleY:0.9074,x:657.9515,y:333.2391},0).wait(1).to({scaleX:0.9068,scaleY:0.9068,x:657.5295,y:333.2714},0).wait(1).to({scaleX:0.9062,scaleY:0.9062,x:657.1076,y:333.3037},0).wait(1).to({scaleX:0.9056,scaleY:0.9056,x:656.6857,y:333.336},0).wait(1).to({scaleX:0.9051,scaleY:0.9051,x:656.2637,y:333.3683},0).wait(1).to({scaleX:0.9045,scaleY:0.9045,x:655.8418,y:333.4006},0).wait(1).to({scaleX:0.9039,scaleY:0.9039,x:655.4198,y:333.4329},0).wait(1).to({scaleX:0.9033,scaleY:0.9033,x:654.9979,y:333.4652},0).wait(1).to({scaleX:0.8945,scaleY:0.8945,x:650.1098,y:330.1272},0).wait(1).to({scaleX:0.8858,scaleY:0.8858,x:645.2218,y:326.7892},0).wait(1).to({scaleX:0.8771,scaleY:0.8771,x:640.3337,y:323.4512},0).wait(1).to({scaleX:0.8683,scaleY:0.8683,x:635.4457,y:320.1132},0).wait(1).to({scaleX:0.8596,scaleY:0.8596,x:630.5576,y:316.7753},0).wait(1).to({scaleX:0.8508,scaleY:0.8508,x:625.6696,y:313.4373},0).wait(1).to({scaleX:0.8421,scaleY:0.8421,x:620.7815,y:310.0993},0).wait(1).to({scaleX:0.8334,scaleY:0.8334,x:615.8935,y:306.7613},0).wait(1).to({scaleX:0.8246,scaleY:0.8246,x:611.0054,y:303.4233},0).wait(1).to({scaleX:0.8159,scaleY:0.8159,x:606.1174,y:300.0853},0).wait(1).to({scaleX:0.8072,scaleY:0.8072,x:601.2293,y:296.7473},0).wait(1).to({scaleX:0.7984,scaleY:0.7984,x:596.3412,y:293.4094},0).wait(1).to({scaleX:0.7897,scaleY:0.7897,x:591.4532,y:290.0714},0).wait(1).to({scaleX:0.7809,scaleY:0.7809,x:586.5652,y:286.7334},0).wait(1).to({scaleX:0.7722,scaleY:0.7722,x:581.6771,y:283.3954},0).wait(1).to({scaleX:0.7635,scaleY:0.7635,x:576.789,y:280.0574},0).wait(1).to({scaleX:0.7547,scaleY:0.7547,x:571.901,y:276.7194},0).wait(1).to({scaleX:0.746,scaleY:0.746,x:567.0129,y:273.3814},0).wait(1).to({scaleX:0.7372,scaleY:0.7372,x:562.1249,y:270.0435},0).wait(1).to({scaleX:0.7285,scaleY:0.7285,x:557.2369,y:266.7055},0).wait(1).to({scaleX:0.7198,scaleY:0.7198,x:552.3488,y:263.3675},0).wait(1).to({scaleX:0.711,scaleY:0.711,x:547.4608,y:260.0295},0).wait(1).to({scaleX:0.7023,scaleY:0.7023,x:542.5727,y:256.6915},0).wait(1).to({scaleX:0.6936,scaleY:0.6936,x:537.6847,y:253.3536},0).wait(1).to({scaleX:0.6882,scaleY:0.6882,x:533.5015,y:251.5709},0).wait(1).to({scaleX:0.6829,scaleY:0.6829,x:529.3184,y:249.7882},0).wait(1).to({scaleX:0.6776,scaleY:0.6776,x:525.1353,y:248.0056},0).wait(1).to({scaleX:0.6723,scaleY:0.6723,x:520.9521,y:246.2229},0).wait(1).to({scaleX:0.667,scaleY:0.667,x:516.769,y:244.4403},0).wait(1).to({scaleX:0.6617,scaleY:0.6617,x:512.5859,y:242.6576},0).wait(1).to({scaleX:0.6564,scaleY:0.6564,x:508.4027,y:240.8749},0).wait(1).to({scaleX:0.651,scaleY:0.651,x:504.2196,y:239.0923},0).wait(1).to({scaleX:0.6457,scaleY:0.6457,x:500.0365,y:237.3096},0).wait(1).to({scaleX:0.6404,scaleY:0.6404,x:495.8533,y:235.527},0).wait(1).to({scaleX:0.6351,scaleY:0.6351,x:491.6702,y:233.7443},0).wait(1).to({scaleX:0.6298,scaleY:0.6298,x:487.4871,y:231.9616},0).wait(1).to({scaleX:0.6245,scaleY:0.6245,x:483.3039,y:230.179},0).wait(1).to({scaleX:0.6191,scaleY:0.6191,x:479.1208,y:228.3963},0).wait(1).to({scaleX:0.6138,scaleY:0.6138,x:474.9377,y:226.6137},0).wait(1).to({scaleX:0.6128,scaleY:0.6128,x:473.222,y:226.1533},0).wait(1).to({scaleX:0.6117,scaleY:0.6117,x:471.5063,y:225.6929},0).wait(1).to({scaleX:0.6106,scaleY:0.6106,x:469.7907,y:225.2325},0).wait(1).to({scaleX:0.6095,scaleY:0.6095,x:468.075,y:224.7722},0).wait(1).to({scaleX:0.6084,scaleY:0.6084,x:466.3594,y:224.3118},0).wait(1).to({scaleX:0.6074,scaleY:0.6074,x:464.6437,y:223.8514},0).wait(1).to({scaleX:0.6063,scaleY:0.6063,x:462.928,y:223.391},0).wait(1).to({scaleX:0.6052,scaleY:0.6052,x:461.2124,y:222.9307},0).wait(1).to({scaleX:0.6041,scaleY:0.6041,x:459.4967,y:222.4703},0).wait(1).to({scaleX:0.603,scaleY:0.603,x:457.781,y:222.0099},0).wait(1).to({scaleX:0.602,scaleY:0.602,x:456.0654,y:221.5495},0).wait(1).to({scaleX:0.6009,scaleY:0.6009,x:454.3497,y:221.0892},0).wait(1).to({scaleX:0.5998,scaleY:0.5998,x:452.6341,y:220.6288},0).wait(1).to({scaleX:0.5987,scaleY:0.5987,x:450.9184,y:220.1684},0).wait(1).to({scaleX:0.599,scaleY:0.599,x:453.4725,y:220.2321},0).wait(1).to({scaleX:0.5993,scaleY:0.5993,x:456.0267,y:220.2958},0).wait(1).to({scaleX:0.5996,scaleY:0.5996,x:458.5808,y:220.3595},0).wait(1).to({scaleX:0.5999,scaleY:0.5999,x:461.1349,y:220.4232},0).wait(1).to({scaleX:0.6001,scaleY:0.6001,x:463.6891,y:220.4869},0).wait(1).to({scaleX:0.6004,scaleY:0.6004,x:466.2432,y:220.5506},0).wait(1).to({scaleX:0.6007,scaleY:0.6007,x:468.7973,y:220.6143},0).wait(1).to({scaleX:0.601,scaleY:0.601,x:471.3514,y:220.678},0).wait(1).to({scaleX:0.6013,scaleY:0.6013,x:473.9056,y:220.7417},0).wait(1).to({scaleX:0.6016,scaleY:0.6016,x:476.4597,y:220.8054},0).wait(1).to({scaleX:0.6018,scaleY:0.6018,x:479.0138,y:220.8691},0).wait(1).to({scaleX:0.6021,scaleY:0.6021,x:481.568,y:220.9328},0).wait(1).to({scaleX:0.6024,scaleY:0.6024,x:484.1221,y:220.9965},0).wait(1).to({scaleX:0.6027,scaleY:0.6027,x:486.6762,y:221.0602},0).wait(1).to({scaleX:0.6013,scaleY:0.6013,x:490.8145,y:220.6044},0).wait(1).to({scaleX:0.5998,scaleY:0.5998,x:494.9528,y:220.1486},0).wait(1).to({scaleX:0.5984,scaleY:0.5984,x:499.091,y:219.6927},0).wait(1).to({scaleX:0.597,scaleY:0.597,x:503.2293,y:219.2369},0).wait(1).to({scaleX:0.5955,scaleY:0.5955,x:507.3676,y:218.7811},0).wait(1).to({scaleX:0.5941,scaleY:0.5941,x:511.5058,y:218.3252},0).wait(1).to({scaleX:0.5927,scaleY:0.5927,x:515.6441,y:217.8694},0).wait(1).to({scaleX:0.5913,scaleY:0.5913,x:519.7824,y:217.4136},0).wait(1).to({scaleX:0.5898,scaleY:0.5898,x:523.9207,y:216.9578},0).wait(1).to({scaleX:0.5884,scaleY:0.5884,x:528.0589,y:216.5019},0).wait(1).to({scaleX:0.587,scaleY:0.587,x:535.1904,y:215.9302},0).wait(1).to({scaleX:0.5855,scaleY:0.5855,x:542.3218,y:215.3586},0).wait(1).to({scaleX:0.5841,scaleY:0.5841,x:549.4533,y:214.7869},0).wait(1).to({scaleX:0.5827,scaleY:0.5827,x:556.5847,y:214.2152},0).wait(1).to({scaleX:0.5813,scaleY:0.5813,x:563.7162,y:213.6435},0).wait(1).to({scaleX:0.5798,scaleY:0.5798,x:570.8476,y:213.0719},0).wait(1).to({scaleX:0.5784,scaleY:0.5784,x:577.9791,y:212.5002},0).wait(1).to({scaleX:0.577,scaleY:0.577,x:585.1105,y:211.9285},0).wait(1).to({scaleX:0.5771,scaleY:0.5771,x:590.7757,y:211.7839},0).wait(1).to({scaleX:0.5772,scaleY:0.5772,x:596.441,y:211.6392},0).wait(1).to({scaleX:0.5774,scaleY:0.5774,x:602.1062,y:211.4946},0).wait(1).to({scaleX:0.5775,scaleY:0.5775,x:607.7714,y:211.3499},0).wait(1).to({scaleX:0.5777,scaleY:0.5777,x:613.4366,y:211.2053},0).wait(1).to({scaleX:0.5778,scaleY:0.5778,x:619.1019,y:211.0606},0).wait(1).to({scaleX:0.5779,scaleY:0.5779,x:624.7671,y:210.916},0).wait(1).to({scaleX:0.5781,scaleY:0.5781,x:630.4323,y:210.7714},0).wait(1).to({scaleX:0.5782,scaleY:0.5782,x:636.0976,y:210.6267},0).wait(1).to({scaleX:0.5783,scaleY:0.5783,x:641.7628,y:210.4821},0).wait(1).to({scaleX:0.5785,scaleY:0.5785,x:647.428,y:210.3374},0).wait(1).to({scaleX:0.5808,scaleY:0.5808,x:649.9309,y:211.3682},0).wait(1).to({scaleX:0.583,scaleY:0.583,x:652.4337,y:212.3989},0).wait(1).to({scaleX:0.5853,scaleY:0.5853,x:654.9366,y:213.4297},0).wait(1).to({scaleX:0.5876,scaleY:0.5876,x:657.4394,y:214.4604},0).wait(1).to({scaleX:0.5899,scaleY:0.5899,x:659.9422,y:215.4911},0).wait(1).to({scaleX:0.5921,scaleY:0.5921,x:662.4451,y:216.5219},0).wait(1).to({scaleX:0.5944,scaleY:0.5944,x:664.9479,y:217.5526},0).wait(1).to({scaleX:0.5967,scaleY:0.5967,x:667.4508,y:218.5834},0).wait(1).to({scaleX:0.5989,scaleY:0.5989,x:669.9536,y:219.6141},0).wait(1).to({scaleX:0.6012,scaleY:0.6012,x:672.4565,y:220.6449},0).wait(1).to({scaleX:0.6035,scaleY:0.6035,x:674.9593,y:221.6756},0).wait(1).to({scaleX:0.6058,scaleY:0.6058,x:677.4621,y:222.7063},0).wait(1).to({scaleX:0.608,scaleY:0.608,x:679.965,y:223.7371},0).wait(1).to({scaleX:0.6103,scaleY:0.6103,x:682.4678,y:224.7678},0).wait(1).to({scaleX:0.6104,scaleY:0.6104,x:691.0522,y:224.6585},0).wait(1).to({scaleX:0.6105,scaleY:0.6105,x:699.6366,y:224.5491},0).wait(1).to({scaleX:0.6106,scaleY:0.6106,x:708.2209,y:224.4397},0).wait(1).to({x:716.8053,y:224.3303},0).wait(1).to({scaleX:0.6107,scaleY:0.6107,x:725.3897,y:224.2209},0).wait(1).to({scaleX:0.6108,scaleY:0.6108,x:733.9741,y:224.1116},0).wait(1).to({scaleX:0.6109,scaleY:0.6109,x:742.5584,y:224.0022},0).wait(1).to({scaleX:0.611,scaleY:0.611,x:751.1428,y:223.8928},0).wait(1).to({x:759.7272,y:223.7834},0).wait(1).to({scaleX:0.6111,scaleY:0.6111,x:768.3115,y:223.674},0).wait(1).to({scaleX:0.6112,scaleY:0.6112,x:776.8959,y:223.5647},0).wait(1).to({scaleX:0.6113,scaleY:0.6113,x:785.4803,y:223.4553},0).wait(1).to({scaleX:0.6114,scaleY:0.6114,x:794.0647,y:223.3459},0).wait(1).to({scaleX:0.6115,scaleY:0.6115,x:802.649,y:223.2365},0).wait(1).to({x:811.2334,y:223.1271},0).wait(1).to({scaleX:0.6116,scaleY:0.6116,x:819.8178,y:223.0178},0).wait(1).to({scaleX:0.6118,scaleY:0.6118,x:820.032,y:223.0737},0).wait(1).to({scaleX:0.612,scaleY:0.612,x:820.2463,y:223.1296},0).wait(1).to({scaleX:0.6121,scaleY:0.6121,x:820.4605,y:223.1855},0).wait(1).to({scaleX:0.6123,scaleY:0.6123,x:820.6748,y:223.2415},0).wait(1).to({scaleX:0.6125,scaleY:0.6125,x:820.8891,y:223.2974},0).wait(1).to({scaleX:0.6127,scaleY:0.6127,x:821.1033,y:223.3533},0).wait(1).to({scaleX:0.6128,scaleY:0.6128,x:821.3176,y:223.4092},0).wait(1).to({scaleX:0.613,scaleY:0.613,x:821.5318,y:223.4652},0).wait(1).to({scaleX:0.6132,scaleY:0.6132,x:821.7461,y:223.5211},0).wait(1).to({scaleX:0.6134,scaleY:0.6134,x:821.9603,y:223.577},0).wait(1).to({scaleX:0.6135,scaleY:0.6135,x:822.1746,y:223.6329},0).wait(1).to({scaleX:0.6137,scaleY:0.6137,x:822.3889,y:223.6889},0).wait(1).to({scaleX:0.6139,scaleY:0.6139,x:822.6031,y:223.7448},0).wait(1).to({scaleX:0.6141,scaleY:0.6141,x:822.8174,y:223.8007},0).wait(1).to({scaleX:0.6143,scaleY:0.6143,x:823.0316,y:223.8566},0).wait(1).to({scaleX:0.6144,scaleY:0.6144,x:823.2459,y:223.9126},0).wait(1).to({scaleX:0.6146,scaleY:0.6146,x:823.4601,y:223.9685},0).wait(1).to({scaleX:0.6148,scaleY:0.6148,x:823.6744,y:224.0244},0).wait(1).to({scaleX:0.615,scaleY:0.615,x:823.8887,y:224.0803},0).wait(1).to({scaleX:0.6151,scaleY:0.6151,x:824.1029,y:224.1363},0).wait(1).to({scaleX:0.6153,scaleY:0.6153,x:824.3172,y:224.1922},0).wait(1).to({scaleX:0.6155,scaleY:0.6155,x:824.5314,y:224.2481},0).wait(1).to({scaleX:0.6157,scaleY:0.6157,x:824.7457,y:224.304},0).wait(1).to({scaleX:0.6158,scaleY:0.6158,x:824.96,y:224.36},0).wait(1).to({scaleX:0.616,scaleY:0.616,x:825.1742,y:224.4159},0).wait(1).to({scaleX:0.6162,scaleY:0.6162,x:825.3885,y:224.4718},0).wait(1).to({scaleX:0.6164,scaleY:0.6164,x:825.6027,y:224.5277},0).wait(1).to({scaleX:0.6165,scaleY:0.6165,x:825.817,y:224.5837},0).wait(1).to({scaleX:0.6167,scaleY:0.6167,x:826.0312,y:224.6396},0).wait(1).to({scaleX:0.6169,scaleY:0.6169,x:826.2455,y:224.6955},0).wait(1).to({x:826.8269,y:224.7087},0).wait(1).to({x:827.4083,y:224.722},0).wait(1).to({x:827.9897,y:224.7352},0).wait(1).to({x:828.5711,y:224.7484},0).wait(1).to({x:829.1525,y:224.7616},0).wait(1).to({x:829.734,y:224.7749},0).wait(1).to({x:830.3154,y:224.7881},0).wait(1).to({scaleX:0.617,scaleY:0.617,x:830.8968,y:224.8013},0).wait(1).to({x:831.4782,y:224.8145},0).wait(1).to({x:832.0596,y:224.8278},0).wait(1).to({x:832.641,y:224.841},0).wait(1).to({x:833.2224,y:224.8542},0).wait(1).to({x:833.8038,y:224.8674},0).wait(1).to({x:834.3852,y:224.8807},0).wait(1).to({x:834.9666,y:224.8939},0).wait(1).to({x:835.548,y:224.9071},0).wait(1).to({x:836.1294,y:224.9204},0).wait(1).to({x:836.7109,y:224.9336},0).wait(1).to({scaleX:0.6171,scaleY:0.6171,x:837.2923,y:224.9468},0).wait(1).to({x:837.8737,y:224.96},0).wait(1).to({x:838.4551,y:224.9733},0).wait(1).to({x:839.0365,y:224.9865},0).wait(1).to({scaleX:0.6168,scaleY:0.6168,x:839.9883,y:225.0434},0).wait(1).to({scaleX:0.6165,scaleY:0.6165,x:840.9401,y:225.1003},0).wait(1).to({scaleX:0.6162,scaleY:0.6162,x:841.8919,y:225.1572},0).wait(1).to({scaleX:0.6159,scaleY:0.6159,x:842.8437,y:225.2141},0).wait(1).to({scaleX:0.6156,scaleY:0.6156,x:843.7956,y:225.2711},0).wait(1).to({scaleX:0.6154,scaleY:0.6154,x:844.7474,y:225.328},0).wait(1).to({scaleX:0.6151,scaleY:0.6151,x:845.6992,y:225.3849},0).wait(1).to({scaleX:0.6148,scaleY:0.6148,x:846.651,y:225.4418},0).wait(1).to({scaleX:0.6145,scaleY:0.6145,x:847.6028,y:225.4987},0).wait(1).to({scaleX:0.6142,scaleY:0.6142,x:848.5546,y:225.5556},0).wait(1));

	// play_again_obj_
	this.play_again = new lib.Scene_1_play_again();
	this.play_again.name = "play_again";
	this.play_again.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.play_again.depth = 0;
	this.play_again.isAttachedToCamera = 0
	this.play_again.isAttachedToMask = 0
	this.play_again.layerDepth = 0
	this.play_again.layerIndex = 0
	this.play_again.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.play_again).wait(566).to({regX:455.4,regY:4.4,scaleX:1.6282,scaleY:1.6282,x:0.05,y:-0.05},0).wait(1));

	// birds_obj_
	this.birds = new lib.Scene_1_birds();
	this.birds.name = "birds";
	this.birds.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.birds.depth = 0;
	this.birds.isAttachedToCamera = 0
	this.birds.isAttachedToMask = 0
	this.birds.layerDepth = 0
	this.birds.layerIndex = 1
	this.birds.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.birds).wait(40).to({regX:46.2,regY:4.1,x:-0.05,y:0},0).wait(237).to({regX:192.8,regY:27.4,scaleX:1.4158,scaleY:1.4158,x:0.1,y:0.1},0).to({regX:78.6,regY:4.8,scaleX:1.0897,scaleY:1.0897,x:0,y:0},33).to({regX:78.2,regY:1.3,scaleX:1.0851,scaleY:1.0851,x:0.05},28).to({regX:77.9,regY:3.1,scaleX:1.0921,scaleY:1.0921},19).to({regX:81.2,regY:7.2,scaleX:1.1753,scaleY:1.1753,x:0.1,y:0.05},27).to({regX:82.1,regY:5.7,scaleX:1.6292,scaleY:1.6292,x:0,y:0.1},33).to({regX:101,regY:4.1,scaleX:1.6593,scaleY:1.6593,x:0.1,y:0},28).to({regX:221.5,scaleX:1.7328,scaleY:1.7328,x:0},19).to({regX:317.4,regY:4.7,scaleX:1.6379,scaleY:1.6379,x:-0.05,y:0.05},27).to({regX:430.4,regY:2.8,scaleX:1.6257,scaleY:1.6257,x:0,y:0.1},33).to({regX:442.9,scaleX:1.6207,scaleY:1.6207,x:-0.05,y:0.05},30).to({regX:455.4,regY:4.4,scaleX:1.6282,scaleY:1.6282,x:0.05,y:-0.05},12).wait(1));

	// sun2_obj_
	this.sun2 = new lib.Scene_1_sun2();
	this.sun2.name = "sun2";
	this.sun2.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.sun2.depth = 0;
	this.sun2.isAttachedToCamera = 0
	this.sun2.isAttachedToMask = 0
	this.sun2.layerDepth = 0
	this.sun2.layerIndex = 2
	this.sun2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun2).wait(277).to({regX:192.8,regY:27.4,scaleX:1.4158,scaleY:1.4158,x:0.1,y:0.1},0).to({regX:80.5,regY:6.2,scaleX:1.0908,scaleY:1.0908,x:0,y:-0.05},15).to({regX:78.1,regY:1.1,scaleX:1.0849,scaleY:1.0849,y:0},47).to({regX:81.2,regY:7.2,scaleX:1.1753,scaleY:1.1753,x:0.1,y:0.05},45).to({regX:221.5,regY:4.1,scaleX:1.7328,scaleY:1.7328,x:0,y:0},80).to({regX:430.4,regY:2.8,scaleX:1.6257,scaleY:1.6257,y:0.1},60).to({regX:455.4,regY:4.4,scaleX:1.6282,scaleY:1.6282,x:0.05,y:-0.05},42).wait(1));

	// wheels2_obj_
	this.wheels2 = new lib.Scene_1_wheels2();
	this.wheels2.name = "wheels2";
	this.wheels2.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.wheels2.depth = 0;
	this.wheels2.isAttachedToCamera = 0
	this.wheels2.isAttachedToMask = 0
	this.wheels2.layerDepth = 0
	this.wheels2.layerIndex = 3
	this.wheels2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.wheels2).wait(292).to({regX:80.5,regY:6.2,scaleX:1.0908,scaleY:1.0908,y:-0.05},0).to({regX:78.8,regY:5,scaleX:1.0899,scaleY:1.0899,y:0.05},16).to({regX:77.9,regY:3.5,scaleX:1.0882,scaleY:1.0882,x:-0.05,y:0},15).to({regY:3.1,scaleX:1.0876,scaleY:1.0876,y:0.05},3).to({regX:78.2,regY:0.7,scaleX:1.0842,scaleY:1.0842,x:0.05,y:0},16).to({regX:77.7,regY:3.6,scaleX:1.0935,scaleY:1.0935,x:0,y:0.05},17).to({regX:81.9,regY:7,scaleX:1.1875,scaleY:1.1875,x:0.05},26).to({regX:87.5,regY:5.5,scaleX:1.295,scaleY:1.295,x:0},8).to({_off:true},1).wait(173));

	// wheels_obj_
	this.wheels = new lib.Scene_1_wheels();
	this.wheels.name = "wheels";
	this.wheels.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.wheels.depth = 0;
	this.wheels.isAttachedToCamera = 0
	this.wheels.isAttachedToMask = 0
	this.wheels.layerDepth = 0
	this.wheels.layerIndex = 4
	this.wheels.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.wheels).wait(292).to({regX:80.5,regY:6.2,scaleX:1.0908,scaleY:1.0908,y:-0.05},0).to({regX:78.8,regY:5,scaleX:1.0899,scaleY:1.0899,y:0.05},16).to({regX:77.9,regY:3.5,scaleX:1.0882,scaleY:1.0882,x:-0.05,y:0},15).to({regX:78.2,regY:0.7,scaleX:1.0842,scaleY:1.0842,x:0.05},19).to({regX:77.7,regY:3.6,scaleX:1.0935,scaleY:1.0935,x:0,y:0.05},17).to({regX:81.9,regY:7,scaleX:1.1875,scaleY:1.1875,x:0.05},26).to({regX:87.5,regY:5.5,scaleX:1.295,scaleY:1.295,x:0},8).to({_off:true},1).wait(173));

	// car_obj_
	this.car = new lib.Scene_1_car();
	this.car.name = "car";
	this.car.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.car.depth = 0;
	this.car.isAttachedToCamera = 0
	this.car.isAttachedToMask = 0
	this.car.layerDepth = 0
	this.car.layerIndex = 5
	this.car.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.car).wait(292).to({regX:80.5,regY:6.2,scaleX:1.0908,scaleY:1.0908,y:-0.05},0).to({regX:78.8,regY:5,scaleX:1.0899,scaleY:1.0899,y:0.05},16).to({regX:77.9,regY:3.5,scaleX:1.0882,scaleY:1.0882,x:-0.05,y:0},15).to({regX:78.2,regY:0.7,scaleX:1.0842,scaleY:1.0842,x:0.05},19).to({regX:77.7,regY:3.6,scaleX:1.0935,scaleY:1.0935,x:0,y:0.05},17).to({regX:81.9,regY:7,scaleX:1.1875,scaleY:1.1875,x:0.05},26).to({regX:87.5,regY:5.5,scaleX:1.295,scaleY:1.295,x:0},8).to({_off:true},1).wait(173));

	// boy2_car_obj_
	this.boy2_car = new lib.Scene_1_boy2_car();
	this.boy2_car.name = "boy2_car";
	this.boy2_car.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.boy2_car.depth = 0;
	this.boy2_car.isAttachedToCamera = 0
	this.boy2_car.isAttachedToMask = 0
	this.boy2_car.layerDepth = 0
	this.boy2_car.layerIndex = 6
	this.boy2_car.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boy2_car).wait(292).to({regX:80.5,regY:6.2,scaleX:1.0908,scaleY:1.0908,y:-0.05},0).to({regX:78.8,regY:5,scaleX:1.0899,scaleY:1.0899,y:0.05},16).to({regX:77.9,regY:3.5,scaleX:1.0882,scaleY:1.0882,x:-0.05,y:0},15).to({regX:78.2,regY:0.7,scaleX:1.0842,scaleY:1.0842,x:0.05},19).to({regX:77.7,regY:3.6,scaleX:1.0935,scaleY:1.0935,x:0,y:0.05},17).to({regX:81.9,regY:7,scaleX:1.1875,scaleY:1.1875,x:0.05},26).to({regX:87.5,regY:5.5,scaleX:1.295,scaleY:1.295,x:0},8).to({_off:true},1).wait(173));

	// boy_car_obj_
	this.boy_car = new lib.Scene_1_boy_car();
	this.boy_car.name = "boy_car";
	this.boy_car.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.boy_car.depth = 0;
	this.boy_car.isAttachedToCamera = 0
	this.boy_car.isAttachedToMask = 0
	this.boy_car.layerDepth = 0
	this.boy_car.layerIndex = 7
	this.boy_car.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boy_car).wait(292).to({regX:80.5,regY:6.2,scaleX:1.0908,scaleY:1.0908,y:-0.05},0).to({regX:78.8,regY:5,scaleX:1.0899,scaleY:1.0899,y:0.05},16).to({regX:77.9,regY:3.5,scaleX:1.0882,scaleY:1.0882,x:-0.05,y:0},15).to({regX:78.2,regY:0.7,scaleX:1.0842,scaleY:1.0842,x:0.05},19).to({regX:77.7,regY:3.6,scaleX:1.0935,scaleY:1.0935,x:0,y:0.05},17).to({regX:77.2,regY:6.5,scaleX:1.1021,scaleY:1.1021,x:0.05,y:-0.05},12).to({regX:81.9,regY:7,scaleX:1.1875,scaleY:1.1875,y:0.05},14).to({regX:87.5,regY:5.5,scaleX:1.295,scaleY:1.295,x:0},8).to({_off:true},1).wait(173));

	// girl_copy_obj_
	this.girl_copy = new lib.Scene_1_girl_copy();
	this.girl_copy.name = "girl_copy";
	this.girl_copy.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.girl_copy.depth = 0;
	this.girl_copy.isAttachedToCamera = 0
	this.girl_copy.isAttachedToMask = 0
	this.girl_copy.layerDepth = 0
	this.girl_copy.layerIndex = 8
	this.girl_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.girl_copy).wait(376).to({regX:77,regY:7.8,scaleX:1.1057,scaleY:1.1057,x:0.05,y:0},0).to({_off:true},125).wait(66));

	// girl_obj_
	this.girl = new lib.Scene_1_girl();
	this.girl.name = "girl";
	this.girl.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.girl.depth = 0;
	this.girl.isAttachedToCamera = 0
	this.girl.isAttachedToMask = 0
	this.girl.layerDepth = 0
	this.girl.layerIndex = 9
	this.girl.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(376).to({regX:77,regY:7.8,scaleX:1.1057,scaleY:1.1057,x:0.05,y:0},0).to({_off:true},125).wait(66));

	// wheels_part2_obj_
	this.wheels_part2 = new lib.Scene_1_wheels_part2();
	this.wheels_part2.name = "wheels_part2";
	this.wheels_part2.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.wheels_part2.depth = 0;
	this.wheels_part2.isAttachedToCamera = 0
	this.wheels_part2.isAttachedToMask = 0
	this.wheels_part2.layerDepth = 0
	this.wheels_part2.layerIndex = 10
	this.wheels_part2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.wheels_part2).wait(453).to({regX:141.4,regY:4.5,scaleX:1.6914,scaleY:1.6914,y:-0.05},0).to({regX:232.6,regY:3.7,scaleX:1.732,scaleY:1.732,y:0},13).to({regX:279.4,regY:2.5,scaleX:1.7153,scaleY:1.7153,x:0.1,y:0.05},10).to({regX:317.4,regY:4.7,scaleX:1.6379,scaleY:1.6379,x:-0.05},15).to({regX:428.4,regY:2.9,scaleX:1.6346,scaleY:1.6346},14).to({regX:430.2,regY:2.8,scaleX:1.6267,scaleY:1.6267,x:0,y:0.1},17).to({_off:true},1).wait(44));

	// car_end2_obj_
	this.car_end2 = new lib.Scene_1_car_end2();
	this.car_end2.name = "car_end2";
	this.car_end2.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.car_end2.depth = 0;
	this.car_end2.isAttachedToCamera = 0
	this.car_end2.isAttachedToMask = 0
	this.car_end2.layerDepth = 0
	this.car_end2.layerIndex = 11
	this.car_end2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.car_end2).wait(453).to({regX:141.4,regY:4.5,scaleX:1.6914,scaleY:1.6914,y:-0.05},0).to({regX:232.6,regY:3.7,scaleX:1.732,scaleY:1.732,y:0},13).to({regX:279.4,regY:2.5,scaleX:1.7153,scaleY:1.7153,x:0.1,y:0.05},10).to({regX:317.4,regY:4.7,scaleX:1.6379,scaleY:1.6379,x:-0.05},15).to({regX:428.4,regY:2.9,scaleX:1.6346,scaleY:1.6346},14).to({regX:430.2,regY:2.8,scaleX:1.6267,scaleY:1.6267,x:0,y:0.1},17).to({_off:true},1).wait(44));

	// car_end_obj_
	this.car_end = new lib.Scene_1_car_end();
	this.car_end.name = "car_end";
	this.car_end.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.car_end.depth = 0;
	this.car_end.isAttachedToCamera = 0
	this.car_end.isAttachedToMask = 0
	this.car_end.layerDepth = 0
	this.car_end.layerIndex = 12
	this.car_end.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.car_end).wait(95).to({regX:46.2,regY:4.1,x:-0.05,y:0},0).wait(410).to({regX:428.4,regY:2.9,scaleX:1.6346,scaleY:1.6346,y:0.05},0).wait(62));

	// surfboard_end_obj_
	this.surfboard_end = new lib.Scene_1_surfboard_end();
	this.surfboard_end.name = "surfboard_end";
	this.surfboard_end.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.surfboard_end.depth = 0;
	this.surfboard_end.isAttachedToCamera = 0
	this.surfboard_end.isAttachedToMask = 0
	this.surfboard_end.layerDepth = 0
	this.surfboard_end.layerIndex = 13
	this.surfboard_end.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.surfboard_end).wait(505).to({regX:428.4,regY:2.9,scaleX:1.6346,scaleY:1.6346,x:-0.05},0).to({regX:428.9,scaleX:1.6327,scaleY:1.6327,x:0,y:0.1},4).to({regX:429.2,regY:2.8,scaleX:1.6309,scaleY:1.6309,x:-0.1,y:-0.05},4).to({regX:429.6,scaleX:1.629,scaleY:1.629,x:-0.05,y:0.1},4).to({regX:430.3,scaleX:1.6262,scaleY:1.6262,x:0},6).to({regX:430.8,regY:2.6,scaleX:1.6239,scaleY:1.6239,x:0.05,y:-0.1},5).to({regX:431.2,scaleX:1.6221,scaleY:1.6221,x:0,y:-0.05},4).to({regX:433.8,scaleX:1.621,scaleY:1.621,x:0.1},6).to({regX:437.2,regY:2.8,scaleX:1.6209,scaleY:1.6209,y:0.1},6).to({regX:441.8,regY:2.9,scaleX:1.6207,scaleY:1.6207},8).to({regX:445.2,regY:3,scaleX:1.6214,scaleY:1.6214,x:0.05,y:0},5).to({regX:455.4,regY:4.4,scaleX:1.6282,scaleY:1.6282,y:-0.05},9).wait(1));

	// beach_obj_
	this.beach = new lib.Scene_1_beach();
	this.beach.name = "beach";
	this.beach.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.beach.depth = 0;
	this.beach.isAttachedToCamera = 0
	this.beach.isAttachedToMask = 0
	this.beach.layerDepth = 0
	this.beach.layerIndex = 14
	this.beach.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.beach).wait(273).to({regX:256.4,regY:39,scaleX:1.7058,scaleY:1.7058,x:0.1,y:0},0).wait(34).to({regX:78.9,regY:5.1,scaleX:1.0899,scaleY:1.0899,x:0},0).wait(260));

	// road_obj_
	this.road = new lib.Scene_1_road();
	this.road.name = "road";
	this.road.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.road.depth = 0;
	this.road.isAttachedToCamera = 0
	this.road.isAttachedToMask = 0
	this.road.layerDepth = 0
	this.road.layerIndex = 15
	this.road.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.road).wait(273).to({regX:256.4,regY:39,scaleX:1.7058,scaleY:1.7058,x:0.1,y:0},0).wait(294));

	// boy3_obj_
	this.boy3 = new lib.Scene_1_boy3();
	this.boy3.name = "boy3";
	this.boy3.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.boy3.depth = 0;
	this.boy3.isAttachedToCamera = 0
	this.boy3.isAttachedToMask = 0
	this.boy3.layerDepth = 0
	this.boy3.layerIndex = 16
	this.boy3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boy3).wait(173).to({regX:46.2,regY:4.1,x:-0.05,y:0},0).to({_off:true},100).wait(294));

	// boy2_obj_
	this.boy2 = new lib.Scene_1_boy2();
	this.boy2.name = "boy2";
	this.boy2.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.boy2.depth = 0;
	this.boy2.isAttachedToCamera = 0
	this.boy2.isAttachedToMask = 0
	this.boy2.layerDepth = 0
	this.boy2.layerIndex = 17
	this.boy2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boy2).wait(46).to({regX:46.2,regY:4.1,x:-0.05,y:0},0).wait(108).to({_off:true},119).wait(294));

	// parasol_obj_
	this.parasol = new lib.Scene_1_parasol();
	this.parasol.name = "parasol";
	this.parasol.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.parasol.depth = 0;
	this.parasol.isAttachedToCamera = 0
	this.parasol.isAttachedToMask = 0
	this.parasol.layerDepth = 0
	this.parasol.layerIndex = 18
	this.parasol.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.parasol).wait(225).to({regX:301.4,regY:23.2,scaleX:1.8639,scaleY:1.8639,x:0.1},0).wait(17).to({regX:467.7,regY:147.4,scaleX:4.9871,scaleY:4.9871,x:0.05,y:0},0).wait(1).to({regX:467.5,regY:147.3,scaleX:4.9777,scaleY:4.9777,x:0,y:-0.25},0).to({_off:true},30).wait(294));

	// thought_obj_
	this.thought = new lib.Scene_1_thought();
	this.thought.name = "thought";
	this.thought.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.thought.depth = 0;
	this.thought.isAttachedToCamera = 0
	this.thought.isAttachedToMask = 0
	this.thought.layerDepth = 0
	this.thought.layerIndex = 19
	this.thought.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.thought).wait(225).to({regX:301.4,regY:23.2,scaleX:1.8639,scaleY:1.8639,x:0.1},0).to({_off:true},48).wait(294));

	// boy_obj_
	this.boy = new lib.Scene_1_boy();
	this.boy.name = "boy";
	this.boy.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.boy.depth = 0;
	this.boy.isAttachedToCamera = 0
	this.boy.isAttachedToMask = 0
	this.boy.layerDepth = 0
	this.boy.layerIndex = 20
	this.boy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boy).wait(127).to({regX:46.2,regY:4.1,x:-0.05,y:0},0).wait(75).to({regX:105.9,regY:25.1,scaleX:1.2657,scaleY:1.2657,x:0,y:0.05},0).wait(9).to({regX:173.8,regY:25.3,scaleX:1.4338,scaleY:1.4338,x:0.05,y:-0.05},0).wait(14).to({regX:301.4,regY:23.2,scaleX:1.8639,scaleY:1.8639,x:0.1,y:0.05},0).to({_off:true},48).wait(294));

	// flowers_obj_
	this.flowers = new lib.Scene_1_flowers();
	this.flowers.name = "flowers";
	this.flowers.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.flowers.depth = 0;
	this.flowers.isAttachedToCamera = 0
	this.flowers.isAttachedToMask = 0
	this.flowers.layerDepth = 0
	this.flowers.layerIndex = 21
	this.flowers.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.flowers).wait(1).to({regX:46.2,regY:4.1,x:-0.05,y:0},0).to({_off:true},272).wait(294));

	// grass_obj_
	this.grass = new lib.Scene_1_grass();
	this.grass.name = "grass";
	this.grass.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.grass.depth = 0;
	this.grass.isAttachedToCamera = 0
	this.grass.isAttachedToMask = 0
	this.grass.layerDepth = 0
	this.grass.layerIndex = 22
	this.grass.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.grass).wait(1).to({regX:46.2,regY:4.1,x:-0.05,y:0},0).to({_off:true},272).wait(294));

	// sun_obj_
	this.sun = new lib.Scene_1_sun();
	this.sun.name = "sun";
	this.sun.setTransform(0,0.05,1.0343,1.0343,0,0,0,46.3,4.2);
	this.sun.depth = 0;
	this.sun.isAttachedToCamera = 0
	this.sun.isAttachedToMask = 0
	this.sun.layerDepth = 0
	this.sun.layerIndex = 23
	this.sun.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(1).to({regX:46.2,regY:4.1,x:-0.05,y:0},0).wait(158).to({regX:64.9,regY:10.7,scaleX:1.0966,scaleY:1.0966,x:0,y:0.05},23).to({regX:137.4,regY:26,scaleX:1.3451,scaleY:1.3451,y:0},25).to({regX:320.2,regY:30.9,scaleX:1.9813,scaleY:1.9813,x:-0.1,y:0.1},20).to({regX:467.2,regY:147.2,scaleX:4.9592,scaleY:4.9592,x:0.3,y:0.05},18).to({regX:468.2,regY:146.4,scaleX:5.1292,scaleY:5.1292,x:-0.25,y:0},27).to({_off:true},1).wait(294));

	// text_obj_
	this.text = new lib.Scene_1_text();
	this.text.name = "text";
	this.text.setTransform(1089.35,39.55,1.0343,1.0343,0,0,0,1099.5,42.4);
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 24
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(566));

	// sky_obj_
	this.sky = new lib.Scene_1_sky();
	this.sky.name = "sky";
	this.sky.setTransform(666.5,46.3,1.0343,1.0343,0,0,0,690.7,48.9);
	this.sky.depth = 0;
	this.sky.isAttachedToCamera = 0
	this.sky.isAttachedToMask = 0
	this.sky.layerDepth = 0
	this.sky.layerIndex = 25
	this.sky.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(567));

	// surfboard_start_obj_
	this.surfboard_start = new lib.Scene_1_surfboard_start();
	this.surfboard_start.name = "surfboard_start";
	this.surfboard_start.setTransform(666.4,401.45,1.0343,1.0343,0,0,0,690.6,392.3);
	this.surfboard_start.depth = 0;
	this.surfboard_start.isAttachedToCamera = 0
	this.surfboard_start.isAttachedToMask = 0
	this.surfboard_start.layerDepth = 0
	this.surfboard_start.layerIndex = 26
	this.surfboard_start.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.surfboard_start).to({_off:true},1).wait(566));

	// waves_start_obj_
	this.waves_start = new lib.Scene_1_waves_start();
	this.waves_start.name = "waves_start";
	this.waves_start.setTransform(649.15,536.15,1.0343,1.0343,0,0,0,673.9,522.5);
	this.waves_start.depth = 0;
	this.waves_start.isAttachedToCamera = 0
	this.waves_start.isAttachedToMask = 0
	this.waves_start.layerDepth = 0
	this.waves_start.layerIndex = 27
	this.waves_start.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.waves_start).to({_off:true},1).wait(566));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(574.5,303.4,1079,436.4);
// library properties:
lib.properties = {
	id: 'F69C47C357B43746BB59EF6CA4F29EFA',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Animation_atlas_1.png?1619035932710", id:"Animation_atlas_1"},
		{src:"sounds/מיקיואליגלשןשירקיץילדיםשיריילדותישראליתmp3cutnet.mp3?1619035932921", id:"מיקיואליגלשןשירקיץילדיםשיריילדותישראליתmp3cutnet"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F69C47C357B43746BB59EF6CA4F29EFA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;