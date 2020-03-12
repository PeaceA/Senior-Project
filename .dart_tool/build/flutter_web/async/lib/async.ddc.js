define(['dart_sdk', 'packages/collection/collection'], function(dart_sdk, packages__collection__collection) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const queue_list = packages__collection__collection.src__queue_list;
  var stream_subscription_transformer = Object.create(dart.library);
  var async_memoizer = Object.create(dart.library);
  var future = Object.create(dart.library);
  var stream_consumer = Object.create(dart.library);
  var stream_sink_completer = Object.create(dart.library);
  var null_stream_sink = Object.create(dart.library);
  var future$ = Object.create(dart.library);
  var result = Object.create(dart.library);
  var stream_sink_transformer = Object.create(dart.library);
  var typed = Object.create(dart.library);
  var stream_sink = Object.create(dart.library);
  var stream_transformer_wrapper = Object.create(dart.library);
  var handler_transformer = Object.create(dart.library);
  var value$ = Object.create(dart.library);
  var error$ = Object.create(dart.library);
  var release_transformer = Object.create(dart.library);
  var release_sink = Object.create(dart.library);
  var capture_transformer = Object.create(dart.library);
  var capture_sink = Object.create(dart.library);
  var stream_subscription = Object.create(dart.library);
  var stream_subscription$ = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var stream_completer = Object.create(dart.library);
  var async$ = Object.create(dart.library);
  var typed_stream_transformer = Object.create(dart.library);
  var stream$ = Object.create(dart.library);
  var subscription_stream = Object.create(dart.library);
  var stream_zip = Object.create(dart.library);
  var stream_splitter = Object.create(dart.library);
  var future_group = Object.create(dart.library);
  var stream_queue = Object.create(dart.library);
  var cancelable_operation = Object.create(dart.library);
  var stream_group = Object.create(dart.library);
  var single_subscription_transformer = Object.create(dart.library);
  var restartable_timer = Object.create(dart.library);
  var lazy_stream = Object.create(dart.library);
  var sink$ = Object.create(dart.library);
  var event_sink = Object.create(dart.library);
  var byte_collector = Object.create(dart.library);
  var async_cache = Object.create(dart.library);
  var $length = dartx.length;
  var $add = dartx.add;
  var $_set = dartx._set;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var $_get = dartx._get;
  var $isEmpty = dartx.isEmpty;
  var $clear = dartx.clear;
  var $every = dartx.every;
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  var $elementAt = dartx.elementAt;
  var $forEach = dartx.forEach;
  var $putIfAbsent = dartx.putIfAbsent;
  var $remove = dartx.remove;
  var $values = dartx.values;
  var $map = dartx.map;
  var $where = dartx.where;
  var $toList = dartx.toList;
  var $setRange = dartx.setRange;
  var dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  var VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  var VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var dynamicAnddynamicToErrorResult = () => (dynamicAnddynamicToErrorResult = dart.constFn(dart.fnType(error$.ErrorResult, [dart.dynamic, dart.dynamic])))();
  var CaptureStreamTransformerOfObject = () => (CaptureStreamTransformerOfObject = dart.constFn(capture_transformer.CaptureStreamTransformer$(core.Object)))();
  var ReleaseStreamTransformerOfObject = () => (ReleaseStreamTransformerOfObject = dart.constFn(release_transformer.ReleaseStreamTransformer$(core.Object)))();
  var ResultOfObject = () => (ResultOfObject = dart.constFn(result.Result$(core.Object)))();
  var StreamTransformerWrapperOfObject$ResultOfObject = () => (StreamTransformerWrapperOfObject$ResultOfObject = dart.constFn(stream_transformer_wrapper.StreamTransformerWrapper$(core.Object, ResultOfObject())))();
  var StreamTransformerWrapperOfResultOfObject$Object = () => (StreamTransformerWrapperOfResultOfObject$Object = dart.constFn(stream_transformer_wrapper.StreamTransformerWrapper$(ResultOfObject(), core.Object)))();
  var EventSinkTovoid = () => (EventSinkTovoid = dart.constFn(dart.fnType(dart.void, [async.EventSink])))();
  var FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  var dynamicAnddynamicTodynamic = () => (dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))();
  var EventSinkOfResult = () => (EventSinkOfResult = dart.constFn(async.EventSink$(result.Result)))();
  var EventSinkToEventSinkOfResult = () => (EventSinkToEventSinkOfResult = dart.constFn(dart.fnType(EventSinkOfResult(), [async.EventSink])))();
  var dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  var dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  var ObjectAndStackTraceTovoid = () => (ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ListQueueOf_EventRequest = () => (ListQueueOf_EventRequest = dart.constFn(collection.ListQueue$(stream_queue._EventRequest)))();
  var boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  var _HashSetOfStreamQueue = () => (_HashSetOfStreamQueue = dart.constFn(collection._HashSet$(stream_queue.StreamQueue)))();
  var CompleterOfint = () => (CompleterOfint = dart.constFn(async.Completer$(core.int)))();
  var CompleterOfbool = () => (CompleterOfbool = dart.constFn(async.Completer$(core.bool)))();
  var VoidToFutureOr = () => (VoidToFutureOr = dart.constFn(dart.fnType(async.FutureOr, [])))();
  var FutureTobool = () => (FutureTobool = dart.constFn(dart.fnType(core.bool, [async.Future])))();
  var FutureOfUint8List = () => (FutureOfUint8List = dart.constFn(async.Future$(typed_data.Uint8List)))();
  var ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  var StreamSubscriptionOfListOfint = () => (StreamSubscriptionOfListOfint = dart.constFn(async.StreamSubscription$(ListOfint())))();
  var StreamSubscriptionOfListOfintAndFutureOfUint8ListToFutureOfUint8List = () => (StreamSubscriptionOfListOfintAndFutureOfUint8ListToFutureOfUint8List = dart.constFn(dart.fnType(FutureOfUint8List(), [StreamSubscriptionOfListOfint(), FutureOfUint8List()])))();
  var CancelableOperationOfUint8List = () => (CancelableOperationOfUint8List = dart.constFn(cancelable_operation.CancelableOperation$(typed_data.Uint8List)))();
  var StreamSubscriptionOfListOfintAndFutureOfUint8ListToCancelableOperationOfUint8List = () => (StreamSubscriptionOfListOfintAndFutureOfUint8ListToCancelableOperationOfUint8List = dart.constFn(dart.fnType(CancelableOperationOfUint8List(), [StreamSubscriptionOfListOfint(), FutureOfUint8List()])))();
  var JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  var CompleterOfUint8List = () => (CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))();
  var ListOfintToNull = () => (ListOfintToNull = dart.constFn(dart.fnType(core.Null, [ListOfint()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: CaptureStreamTransformerOfObject().prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ReleaseStreamTransformerOfObject().prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: StreamTransformerWrapperOfObject$ResultOfObject().prototype,
        [StreamTransformerWrapper__transformer]: C0 || CT.C0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: StreamTransformerWrapperOfResultOfObject$Object().prototype,
        [StreamTransformerWrapper__transformer]: C1 || CT.C1
      });
    },
    get C4() {
      return C4 = dart.fn(handler_transformer._closeSink, EventSinkTovoid());
    },
    get C5() {
      return C5 = dart.fn(release_transformer.ReleaseStreamTransformer._createSink, EventSinkToEventSinkOfResult());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: stream_group._StreamGroupState.prototype,
        [name$]: "dormant"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: stream_group._StreamGroupState.prototype,
        [name$]: "listening"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: stream_group._StreamGroupState.prototype,
        [name$]: "paused"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: stream_group._StreamGroupState.prototype,
        [name$]: "canceled"
      });
    }
  });
  var _cancelMemoizer = dart.privateName(stream_subscription_transformer, "_cancelMemoizer");
  var _inner$ = dart.privateName(stream_subscription_transformer, "_inner");
  var _handleCancel$ = dart.privateName(stream_subscription_transformer, "_handleCancel");
  var _handlePause$ = dart.privateName(stream_subscription_transformer, "_handlePause");
  var _handleResume$ = dart.privateName(stream_subscription_transformer, "_handleResume");
  const _is__TransformedSubscription_default = Symbol('_is__TransformedSubscription_default');
  stream_subscription_transformer._TransformedSubscription$ = dart.generic(T => {
    class _TransformedSubscription extends core.Object {
      get isPaused() {
        let t0, t0$;
        t0$ = (t0 = this[_inner$], t0 == null ? null : t0.isPaused);
        return t0$ == null ? false : t0$;
      }
      onData(handleData) {
        let t0;
        t0 = this[_inner$];
        t0 == null ? null : t0.onData(handleData);
      }
      onError(handleError) {
        let t0;
        t0 = this[_inner$];
        t0 == null ? null : t0.onError(handleError);
      }
      onDone(handleDone) {
        let t0;
        t0 = this[_inner$];
        t0 == null ? null : t0.onDone(handleDone);
      }
      cancel() {
        return this[_cancelMemoizer].runOnce(dart.fn(() => {
          let inner = this[_inner$];
          this[_inner$].onData(null);
          this[_inner$].onDone(null);
          this[_inner$].onError(dart.fn((_, __) => {
          }, dynamicAnddynamicToNull()));
          this[_inner$] = null;
          return this[_handleCancel$](inner);
        }, VoidToFuture()));
      }
      pause(resumeFuture = null) {
        if (dart.test(this[_cancelMemoizer].hasRun)) return;
        if (resumeFuture != null) resumeFuture.whenComplete(dart.bind(this, 'resume'));
        this[_handlePause$](this[_inner$]);
      }
      resume() {
        if (dart.test(this[_cancelMemoizer].hasRun)) return;
        this[_handleResume$](this[_inner$]);
      }
      asFuture(E, futureValue = null) {
        let t0, t0$;
        t0$ = (t0 = this[_inner$], t0 == null ? null : t0.asFuture(E, futureValue));
        return t0$ == null ? async.Completer$(E).new().future : t0$;
      }
    }
    (_TransformedSubscription.new = function(_inner, _handleCancel, _handlePause, _handleResume) {
      this[_cancelMemoizer] = new async_memoizer.AsyncMemoizer.new();
      this[_inner$] = _inner;
      this[_handleCancel$] = _handleCancel;
      this[_handlePause$] = _handlePause;
      this[_handleResume$] = _handleResume;
      ;
    }).prototype = _TransformedSubscription.prototype;
    _TransformedSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(_TransformedSubscription);
    _TransformedSubscription.prototype[_is__TransformedSubscription_default] = true;
    _TransformedSubscription[dart.implements] = () => [async.StreamSubscription$(T)];
    dart.setMethodSignature(_TransformedSubscription, () => ({
      __proto__: dart.getMethods(_TransformedSubscription.__proto__),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onError: dart.fnType(dart.void, [core.Function]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      cancel: dart.fnType(async.Future, []),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]])
    }));
    dart.setGetterSignature(_TransformedSubscription, () => ({
      __proto__: dart.getGetters(_TransformedSubscription.__proto__),
      isPaused: core.bool
    }));
    dart.setLibraryUri(_TransformedSubscription, "package:async/src/stream_subscription_transformer.dart");
    dart.setFieldSignature(_TransformedSubscription, () => ({
      __proto__: dart.getFields(_TransformedSubscription.__proto__),
      [_inner$]: dart.fieldType(async.StreamSubscription$(T)),
      [_handleCancel$]: dart.finalFieldType(dart.fnType(async.Future, [async.StreamSubscription$(T)])),
      [_handlePause$]: dart.finalFieldType(dart.fnType(dart.void, [async.StreamSubscription$(T)])),
      [_handleResume$]: dart.finalFieldType(dart.fnType(dart.void, [async.StreamSubscription$(T)])),
      [_cancelMemoizer]: dart.finalFieldType(async_memoizer.AsyncMemoizer)
    }));
    return _TransformedSubscription;
  });
  stream_subscription_transformer._TransformedSubscription = stream_subscription_transformer._TransformedSubscription$();
  dart.addTypeTests(stream_subscription_transformer._TransformedSubscription, _is__TransformedSubscription_default);
  stream_subscription_transformer.subscriptionTransformer = function subscriptionTransformer(T, opts) {
    let handleCancel = opts && 'handleCancel' in opts ? opts.handleCancel : null;
    let handlePause = opts && 'handlePause' in opts ? opts.handlePause : null;
    let handleResume = opts && 'handleResume' in opts ? opts.handleResume : null;
    return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((stream, cancelOnError) => {
      let t0, t0$, t0$0;
      return new (stream_subscription_transformer._TransformedSubscription$(T)).new(stream.listen(null, {cancelOnError: cancelOnError}), (t0 = handleCancel, t0 == null ? dart.fn(inner => inner.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])) : t0), (t0$ = handlePause, t0$ == null ? dart.fn(inner => {
        inner.pause();
      }, dart.fnType(core.Null, [async.StreamSubscription$(T)])) : t0$), (t0$0 = handleResume, t0$0 == null ? dart.fn(inner => {
        inner.resume();
      }, dart.fnType(core.Null, [async.StreamSubscription$(T)])) : t0$0));
    }, dart.fnType(stream_subscription_transformer._TransformedSubscription$(T), [async.Stream$(T), core.bool])));
  };
  var _completer = dart.privateName(async_memoizer, "_completer");
  const _is_AsyncMemoizer_default = Symbol('_is_AsyncMemoizer_default');
  async_memoizer.AsyncMemoizer$ = dart.generic(T => {
    var CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    var FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    var VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    var FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class AsyncMemoizer extends core.Object {
      get future() {
        return this[_completer].future;
      }
      get hasRun() {
        return this[_completer].isCompleted;
      }
      runOnce(computation) {
        VoidToFutureOrOfT()._check(computation);
        if (!dart.test(this.hasRun)) this[_completer].complete(FutureOfT().sync(computation));
        return this.future;
      }
    }
    (AsyncMemoizer.new = function() {
      this[_completer] = CompleterOfT().new();
      ;
    }).prototype = AsyncMemoizer.prototype;
    dart.addTypeTests(AsyncMemoizer);
    AsyncMemoizer.prototype[_is_AsyncMemoizer_default] = true;
    dart.setMethodSignature(AsyncMemoizer, () => ({
      __proto__: dart.getMethods(AsyncMemoizer.__proto__),
      runOnce: dart.fnType(async.Future$(T), [core.Object])
    }));
    dart.setGetterSignature(AsyncMemoizer, () => ({
      __proto__: dart.getGetters(AsyncMemoizer.__proto__),
      future: async.Future$(T),
      hasRun: core.bool
    }));
    dart.setLibraryUri(AsyncMemoizer, "package:async/src/async_memoizer.dart");
    dart.setFieldSignature(AsyncMemoizer, () => ({
      __proto__: dart.getFields(AsyncMemoizer.__proto__),
      [_completer]: dart.finalFieldType(async.Completer$(T))
    }));
    return AsyncMemoizer;
  });
  async_memoizer.AsyncMemoizer = async_memoizer.AsyncMemoizer$();
  dart.addTypeTests(async_memoizer.AsyncMemoizer, _is_AsyncMemoizer_default);
  var _future$ = dart.privateName(future, "_future");
  const _is_DelegatingFuture_default = Symbol('_is_DelegatingFuture_default');
  future.DelegatingFuture$ = dart.generic(T => {
    var FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    var VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    class DelegatingFuture extends core.Object {
      static typed(T, future) {
        return async.Future$(T).is(future) ? future : future.then(T, dart.fn(v => T.as(v), dart.fnType(T, [dart.dynamic])));
      }
      asStream() {
        return this[_future$].asStream();
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return this[_future$].catchError(onError, {test: test});
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return this[_future$].then(S, onValue, {onError: onError});
      }
      whenComplete(action) {
        return this[_future$].whenComplete(action);
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        VoidTodynamic()._check(onTimeout);
        return this[_future$].timeout(timeLimit, {onTimeout: VoidToFutureOrOfT()._check(onTimeout)});
      }
    }
    (DelegatingFuture.new = function(_future) {
      this[_future$] = _future;
      ;
    }).prototype = DelegatingFuture.prototype;
    DelegatingFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(DelegatingFuture);
    DelegatingFuture.prototype[_is_DelegatingFuture_default] = true;
    DelegatingFuture[dart.implements] = () => [async.Future$(T)];
    dart.setMethodSignature(DelegatingFuture, () => ({
      __proto__: dart.getMethods(DelegatingFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.fnType(core.bool, [core.Object])}, {}),
      then: dart.gFnType(S => [async.Future$(S), [dart.fnType(async.FutureOr$(S), [T])], {onError: core.Function}, {}]),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(dart.dynamic, [])]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: core.Object}, {})
    }));
    dart.setLibraryUri(DelegatingFuture, "package:async/src/delegate/future.dart");
    dart.setFieldSignature(DelegatingFuture, () => ({
      __proto__: dart.getFields(DelegatingFuture.__proto__),
      [_future$]: dart.finalFieldType(async.Future$(T))
    }));
    return DelegatingFuture;
  });
  future.DelegatingFuture = future.DelegatingFuture$();
  dart.addTypeTests(future.DelegatingFuture, _is_DelegatingFuture_default);
  var _consumer$ = dart.privateName(stream_consumer, "_consumer");
  const _is_DelegatingStreamConsumer_default = Symbol('_is_DelegatingStreamConsumer_default');
  stream_consumer.DelegatingStreamConsumer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DelegatingStreamConsumer extends core.Object {
      static typed(T, consumer) {
        return async.StreamConsumer$(T).is(consumer) ? consumer : new (stream_consumer.DelegatingStreamConsumer$(T)).__(consumer);
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        return this[_consumer$].addStream(stream);
      }
      close() {
        return this[_consumer$].close();
      }
    }
    (DelegatingStreamConsumer.new = function(consumer) {
      this[_consumer$] = consumer;
      ;
    }).prototype = DelegatingStreamConsumer.prototype;
    (DelegatingStreamConsumer.__ = function(_consumer) {
      this[_consumer$] = _consumer;
      ;
    }).prototype = DelegatingStreamConsumer.prototype;
    dart.addTypeTests(DelegatingStreamConsumer);
    DelegatingStreamConsumer.prototype[_is_DelegatingStreamConsumer_default] = true;
    DelegatingStreamConsumer[dart.implements] = () => [async.StreamConsumer$(T)];
    dart.setMethodSignature(DelegatingStreamConsumer, () => ({
      __proto__: dart.getMethods(DelegatingStreamConsumer.__proto__),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setLibraryUri(DelegatingStreamConsumer, "package:async/src/delegate/stream_consumer.dart");
    dart.setFieldSignature(DelegatingStreamConsumer, () => ({
      __proto__: dart.getFields(DelegatingStreamConsumer.__proto__),
      [_consumer$]: dart.finalFieldType(async.StreamConsumer)
    }));
    return DelegatingStreamConsumer;
  });
  stream_consumer.DelegatingStreamConsumer = stream_consumer.DelegatingStreamConsumer$();
  dart.addTypeTests(stream_consumer.DelegatingStreamConsumer, _is_DelegatingStreamConsumer_default);
  var _sink = dart.privateName(stream_sink_completer, "_sink");
  var _destinationSink = dart.privateName(stream_sink_completer, "_destinationSink");
  var _setDestinationSink = dart.privateName(stream_sink_completer, "_setDestinationSink");
  const _is_StreamSinkCompleter_default = Symbol('_is_StreamSinkCompleter_default');
  var sink = dart.privateName(stream_sink_completer, "StreamSinkCompleter.sink");
  stream_sink_completer.StreamSinkCompleter$ = dart.generic(T => {
    var _CompleterSinkOfT = () => (_CompleterSinkOfT = dart.constFn(stream_sink_completer._CompleterSink$(T)))();
    var StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    var NullStreamSinkOfT = () => (NullStreamSinkOfT = dart.constFn(null_stream_sink.NullStreamSink$(T)))();
    class StreamSinkCompleter extends core.Object {
      get sink() {
        return this[sink];
      }
      set sink(value) {
        super.sink = value;
      }
      get [_sink]() {
        return _CompleterSinkOfT()._check(this.sink);
      }
      static fromFuture(T, sinkFuture) {
        let completer = new (stream_sink_completer.StreamSinkCompleter$(T)).new();
        sinkFuture.then(dart.void, dart.bind(completer, 'setDestinationSink'), {onError: dart.bind(completer, 'setError')});
        return completer.sink;
      }
      setDestinationSink(destinationSink) {
        StreamSinkOfT()._check(destinationSink);
        if (this[_sink][_destinationSink] != null) {
          dart.throw(new core.StateError.new("Destination sink already set"));
        }
        this[_sink][_setDestinationSink](destinationSink);
      }
      setError(error, stackTrace = null) {
        this.setDestinationSink(new (NullStreamSinkOfT()).error(error, stackTrace));
      }
    }
    (StreamSinkCompleter.new = function() {
      this[sink] = new (_CompleterSinkOfT()).new();
      ;
    }).prototype = StreamSinkCompleter.prototype;
    dart.addTypeTests(StreamSinkCompleter);
    StreamSinkCompleter.prototype[_is_StreamSinkCompleter_default] = true;
    dart.setMethodSignature(StreamSinkCompleter, () => ({
      __proto__: dart.getMethods(StreamSinkCompleter.__proto__),
      setDestinationSink: dart.fnType(dart.void, [core.Object]),
      setError: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace])
    }));
    dart.setGetterSignature(StreamSinkCompleter, () => ({
      __proto__: dart.getGetters(StreamSinkCompleter.__proto__),
      [_sink]: stream_sink_completer._CompleterSink$(T)
    }));
    dart.setLibraryUri(StreamSinkCompleter, "package:async/src/stream_sink_completer.dart");
    dart.setFieldSignature(StreamSinkCompleter, () => ({
      __proto__: dart.getFields(StreamSinkCompleter.__proto__),
      sink: dart.finalFieldType(async.StreamSink$(T))
    }));
    return StreamSinkCompleter;
  });
  stream_sink_completer.StreamSinkCompleter = stream_sink_completer.StreamSinkCompleter$();
  dart.addTypeTests(stream_sink_completer.StreamSinkCompleter, _is_StreamSinkCompleter_default);
  var _controller = dart.privateName(stream_sink_completer, "_controller");
  var _doneCompleter = dart.privateName(stream_sink_completer, "_doneCompleter");
  var _canSendDirectly = dart.privateName(stream_sink_completer, "_canSendDirectly");
  var _ensureController = dart.privateName(stream_sink_completer, "_ensureController");
  const _is__CompleterSink_default = Symbol('_is__CompleterSink_default');
  stream_sink_completer._CompleterSink$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    var StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    var StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class _CompleterSink extends core.Object {
      get [_canSendDirectly]() {
        return this[_controller] == null && this[_destinationSink] != null;
      }
      get done() {
        if (this[_doneCompleter] != null) return this[_doneCompleter].future;
        if (this[_destinationSink] == null) {
          this[_doneCompleter] = async.Completer.sync();
          return this[_doneCompleter].future;
        }
        return this[_destinationSink].done;
      }
      add(event) {
        T._check(event);
        if (dart.test(this[_canSendDirectly])) {
          this[_destinationSink].add(event);
        } else {
          this[_ensureController]();
          this[_controller].add(event);
        }
      }
      addError(error, stackTrace = null) {
        if (dart.test(this[_canSendDirectly])) {
          this[_destinationSink].addError(error, stackTrace);
        } else {
          this[_ensureController]();
          this[_controller].addError(error, stackTrace);
        }
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_canSendDirectly])) return this[_destinationSink].addStream(stream);
        this[_ensureController]();
        return this[_controller].addStream(stream, {cancelOnError: false});
      }
      close() {
        if (dart.test(this[_canSendDirectly])) {
          this[_destinationSink].close();
        } else {
          this[_ensureController]();
          this[_controller].close();
        }
        return this.done;
      }
      [_ensureController]() {
        if (this[_controller] == null) this[_controller] = StreamControllerOfT().new({sync: true});
      }
      [_setDestinationSink](sink) {
        StreamSinkOfT()._check(sink);
        if (!(this[_destinationSink] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_sink_completer.dart", 157, 12, "_destinationSink == null");
        this[_destinationSink] = sink;
        if (this[_controller] != null) {
          sink.addStream(this[_controller].stream).whenComplete(dart.bind(sink, 'close')).catchError(dart.fn(_ => {
          }, dynamicToNull()));
        }
        if (this[_doneCompleter] != null) {
          this[_doneCompleter].complete(sink.done);
        }
      }
    }
    (_CompleterSink.new = function() {
      this[_controller] = null;
      this[_doneCompleter] = null;
      this[_destinationSink] = null;
      ;
    }).prototype = _CompleterSink.prototype;
    dart.addTypeTests(_CompleterSink);
    _CompleterSink.prototype[_is__CompleterSink_default] = true;
    _CompleterSink[dart.implements] = () => [async.StreamSink$(T)];
    dart.setMethodSignature(_CompleterSink, () => ({
      __proto__: dart.getMethods(_CompleterSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, []),
      [_ensureController]: dart.fnType(dart.void, []),
      [_setDestinationSink]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(_CompleterSink, () => ({
      __proto__: dart.getGetters(_CompleterSink.__proto__),
      [_canSendDirectly]: core.bool,
      done: async.Future
    }));
    dart.setLibraryUri(_CompleterSink, "package:async/src/stream_sink_completer.dart");
    dart.setFieldSignature(_CompleterSink, () => ({
      __proto__: dart.getFields(_CompleterSink.__proto__),
      [_controller]: dart.fieldType(async.StreamController$(T)),
      [_doneCompleter]: dart.fieldType(async.Completer),
      [_destinationSink]: dart.fieldType(async.StreamSink$(T))
    }));
    return _CompleterSink;
  });
  stream_sink_completer._CompleterSink = stream_sink_completer._CompleterSink$();
  dart.addTypeTests(stream_sink_completer._CompleterSink, _is__CompleterSink_default);
  var _closed = dart.privateName(null_stream_sink, "_closed");
  var _addingStream = dart.privateName(null_stream_sink, "_addingStream");
  var _checkEventAllowed = dart.privateName(null_stream_sink, "_checkEventAllowed");
  const _is_NullStreamSink_default = Symbol('_is_NullStreamSink_default');
  var done$ = dart.privateName(null_stream_sink, "NullStreamSink.done");
  null_stream_sink.NullStreamSink$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class NullStreamSink extends core.Object {
      get done() {
        return this[done$];
      }
      set done(value) {
        super.done = value;
      }
      add(data) {
        T._check(data);
        this[_checkEventAllowed]();
      }
      addError(error, stackTrace = null) {
        this[_checkEventAllowed]();
      }
      addStream(stream) {
        let t0;
        StreamOfT()._check(stream);
        this[_checkEventAllowed]();
        this[_addingStream] = true;
        let future = (t0 = stream.listen(null).cancel(), t0 == null ? async.Future.value() : t0);
        return future.whenComplete(dart.fn(() => {
          this[_addingStream] = false;
        }, VoidToNull()));
      }
      [_checkEventAllowed]() {
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("Cannot add to a closed sink."));
        if (dart.test(this[_addingStream])) {
          dart.throw(new core.StateError.new("Cannot add to a sink while adding a stream."));
        }
      }
      close() {
        this[_closed] = true;
        return this.done;
      }
    }
    (NullStreamSink.new = function(opts) {
      let t0;
      let done = opts && 'done' in opts ? opts.done : null;
      this[_closed] = false;
      this[_addingStream] = false;
      this[done$] = (t0 = done, t0 == null ? async.Future.value() : t0);
      ;
    }).prototype = NullStreamSink.prototype;
    (NullStreamSink.error = function(error, stackTrace = null) {
      let t0;
      this[_closed] = false;
      this[_addingStream] = false;
      this[done$] = (t0 = async.Future.error(error, stackTrace), t0.catchError(dart.fn(_ => {
      }, dynamicToNull())), t0);
      ;
    }).prototype = NullStreamSink.prototype;
    dart.addTypeTests(NullStreamSink);
    NullStreamSink.prototype[_is_NullStreamSink_default] = true;
    NullStreamSink[dart.implements] = () => [async.StreamSink$(T)];
    dart.setMethodSignature(NullStreamSink, () => ({
      __proto__: dart.getMethods(NullStreamSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      [_checkEventAllowed]: dart.fnType(dart.void, []),
      close: dart.fnType(async.Future, [])
    }));
    dart.setLibraryUri(NullStreamSink, "package:async/src/null_stream_sink.dart");
    dart.setFieldSignature(NullStreamSink, () => ({
      __proto__: dart.getFields(NullStreamSink.__proto__),
      done: dart.finalFieldType(async.Future),
      [_closed]: dart.fieldType(core.bool),
      [_addingStream]: dart.fieldType(core.bool)
    }));
    return NullStreamSink;
  });
  null_stream_sink.NullStreamSink = null_stream_sink.NullStreamSink$();
  dart.addTypeTests(null_stream_sink.NullStreamSink, _is_NullStreamSink_default);
  var _result = dart.privateName(future$, "_result");
  const _is_ResultFuture_default = Symbol('_is_ResultFuture_default');
  future$.ResultFuture$ = dart.generic(T => {
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var ResultOfTToNull = () => (ResultOfTToNull = dart.constFn(dart.fnType(core.Null, [ResultOfT()])))();
    class ResultFuture extends future.DelegatingFuture$(T) {
      get isComplete() {
        return this.result != null;
      }
      get result() {
        return this[_result];
      }
    }
    (ResultFuture.new = function(future) {
      this[_result] = null;
      ResultFuture.__proto__.new.call(this, future);
      result.Result.capture(T, future).then(core.Null, dart.fn(result => {
        this[_result] = result;
      }, ResultOfTToNull()));
    }).prototype = ResultFuture.prototype;
    dart.addTypeTests(ResultFuture);
    ResultFuture.prototype[_is_ResultFuture_default] = true;
    dart.setGetterSignature(ResultFuture, () => ({
      __proto__: dart.getGetters(ResultFuture.__proto__),
      isComplete: core.bool,
      result: result.Result$(T)
    }));
    dart.setLibraryUri(ResultFuture, "package:async/src/result/future.dart");
    dart.setFieldSignature(ResultFuture, () => ({
      __proto__: dart.getFields(ResultFuture.__proto__),
      [_result]: dart.fieldType(result.Result$(T))
    }));
    return ResultFuture;
  });
  future$.ResultFuture = future$.ResultFuture$();
  dart.addTypeTests(future$.ResultFuture, _is_ResultFuture_default);
  const _is_Result_default = Symbol('_is_Result_default');
  var C0;
  var C1;
  var StreamTransformerWrapper__transformer = dart.privateName(stream_transformer_wrapper, "StreamTransformerWrapper._transformer");
  var C2;
  var C3;
  result.Result$ = dart.generic(T => {
    class Result extends core.Object {
      static new(computation) {
        try {
          return new (value$.ValueResult$(T)).new(computation());
        } catch (e$) {
          let e = dart.getThrown(e$);
          let s = dart.stackTrace(e$);
          return new error$.ErrorResult.new(e, s);
        }
      }
      static error(error, stackTrace = null) {
        return new error$.ErrorResult.new(error, stackTrace);
      }
      static capture(T, future) {
        return future.then(result.Result$(T), dart.fn(value => new (value$.ValueResult$(T)).new(value), dart.fnType(value$.ValueResult$(T), [T])), {onError: dart.fn((error, stackTrace) => new error$.ErrorResult.new(error, core.StackTrace._check(stackTrace)), dynamicAnddynamicToErrorResult())});
      }
      static captureAll(T, elements) {
        let results = _interceptors.JSArray$(result.Result$(T)).of([]);
        let pending = 0;
        let completer = null;
        for (let element of elements) {
          if (async.Future$(T).is(element)) {
            let i = results[$length];
            results[$add](null);
            pending = pending + 1;
            result.Result.capture(T, element).then(core.Null, dart.fn(result => {
              results[$_set](i, result);
              if ((pending = pending - 1) === 0) {
                completer.complete(results);
              }
            }, dart.fnType(core.Null, [result.Result$(T)])));
          } else {
            results[$add](new (value$.ValueResult$(T)).new(T._check(element)));
          }
        }
        if (pending === 0) {
          return async.Future$(core.List$(result.Result$(T))).value(results);
        }
        completer = async.Completer$(core.List$(result.Result$(T))).new();
        return completer.future;
      }
      static release(T, future) {
        return future.then(T, dart.fn(result => result.asFuture, dart.fnType(async.Future$(T), [result.Result$(T)])));
      }
      static captureStream(T, source) {
        return source.transform(result.Result$(T), new (capture_transformer.CaptureStreamTransformer$(T)).new());
      }
      static releaseStream(T, source) {
        return source.transform(T, new (release_transformer.ReleaseStreamTransformer$(T)).new());
      }
      static releaseSink(T, sink) {
        return new (release_sink.ReleaseSink$(T)).new(sink);
      }
      static captureSink(T, sink) {
        return new (capture_sink.CaptureSink$(T)).new(sink);
      }
      static flatten(T, result) {
        if (dart.test(result.isValue)) return result.asValue.value;
        return result.asError;
      }
      static flattenAll(T, results) {
        let values = _interceptors.JSArray$(T).of([]);
        for (let result of results) {
          if (dart.test(result.isValue)) {
            values[$add](result.asValue.value);
          } else {
            return result.asError;
          }
        }
        return new (value$.ValueResult$(core.List$(T))).new(values);
      }
    }
    (Result[dart.mixinNew] = function() {
    }).prototype = Result.prototype;
    dart.addTypeTests(Result);
    Result.prototype[_is_Result_default] = true;
    dart.setLibraryUri(Result, "package:async/src/result/result.dart");
    return Result;
  });
  result.Result = result.Result$();
  dart.defineLazy(result.Result, {
    /*result.Result.captureStreamTransformer*/get captureStreamTransformer() {
      return C0 || CT.C0;
    },
    /*result.Result.releaseStreamTransformer*/get releaseStreamTransformer() {
      return C1 || CT.C1;
    },
    /*result.Result.captureSinkTransformer*/get captureSinkTransformer() {
      return C2 || CT.C2;
    },
    /*result.Result.releaseSinkTransformer*/get releaseSinkTransformer() {
      return C3 || CT.C3;
    }
  });
  dart.addTypeTests(result.Result, _is_Result_default);
  const _is_StreamSinkTransformer_default = Symbol('_is_StreamSinkTransformer_default');
  stream_sink_transformer.StreamSinkTransformer$ = dart.generic((S, T) => {
    class StreamSinkTransformer extends core.Object {
      static fromHandlers(opts) {
        let handleData = opts && 'handleData' in opts ? opts.handleData : null;
        let handleError = opts && 'handleError' in opts ? opts.handleError : null;
        let handleDone = opts && 'handleDone' in opts ? opts.handleDone : null;
        return new (handler_transformer.HandlerTransformer$(S, T)).new(handleData, handleError, handleDone);
      }
      static typed(S, T, transformer) {
        return stream_sink_transformer.StreamSinkTransformer$(S, T).is(transformer) ? transformer : new (typed.TypeSafeStreamSinkTransformer$(S, T)).new(transformer);
      }
    }
    (StreamSinkTransformer[dart.mixinNew] = function() {
    }).prototype = StreamSinkTransformer.prototype;
    dart.addTypeTests(StreamSinkTransformer);
    StreamSinkTransformer.prototype[_is_StreamSinkTransformer_default] = true;
    dart.setLibraryUri(StreamSinkTransformer, "package:async/src/stream_sink_transformer.dart");
    return StreamSinkTransformer;
  });
  stream_sink_transformer.StreamSinkTransformer = stream_sink_transformer.StreamSinkTransformer$();
  dart.addTypeTests(stream_sink_transformer.StreamSinkTransformer, _is_StreamSinkTransformer_default);
  var _inner$0 = dart.privateName(typed, "_inner");
  const _is_TypeSafeStreamSinkTransformer_default = Symbol('_is_TypeSafeStreamSinkTransformer_default');
  typed.TypeSafeStreamSinkTransformer$ = dart.generic((S, T) => {
    var StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class TypeSafeStreamSinkTransformer extends core.Object {
      bind(sink) {
        StreamSinkOfT()._check(sink);
        return stream_sink.DelegatingStreamSink.typed(S, this[_inner$0].bind(sink));
      }
    }
    (TypeSafeStreamSinkTransformer.new = function(_inner) {
      this[_inner$0] = _inner;
      ;
    }).prototype = TypeSafeStreamSinkTransformer.prototype;
    dart.addTypeTests(TypeSafeStreamSinkTransformer);
    TypeSafeStreamSinkTransformer.prototype[_is_TypeSafeStreamSinkTransformer_default] = true;
    TypeSafeStreamSinkTransformer[dart.implements] = () => [stream_sink_transformer.StreamSinkTransformer$(S, T)];
    dart.setMethodSignature(TypeSafeStreamSinkTransformer, () => ({
      __proto__: dart.getMethods(TypeSafeStreamSinkTransformer.__proto__),
      bind: dart.fnType(async.StreamSink$(S), [core.Object])
    }));
    dart.setLibraryUri(TypeSafeStreamSinkTransformer, "package:async/src/stream_sink_transformer/typed.dart");
    dart.setFieldSignature(TypeSafeStreamSinkTransformer, () => ({
      __proto__: dart.getFields(TypeSafeStreamSinkTransformer.__proto__),
      [_inner$0]: dart.finalFieldType(stream_sink_transformer.StreamSinkTransformer)
    }));
    return TypeSafeStreamSinkTransformer;
  });
  typed.TypeSafeStreamSinkTransformer = typed.TypeSafeStreamSinkTransformer$();
  dart.addTypeTests(typed.TypeSafeStreamSinkTransformer, _is_TypeSafeStreamSinkTransformer_default);
  var _sink$ = dart.privateName(stream_sink, "_sink");
  const _is_DelegatingStreamSink_default = Symbol('_is_DelegatingStreamSink_default');
  stream_sink.DelegatingStreamSink$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DelegatingStreamSink extends core.Object {
      get done() {
        return this[_sink$].done;
      }
      static typed(T, sink) {
        return async.StreamSink$(T).is(sink) ? sink : new (stream_sink.DelegatingStreamSink$(T)).__(sink);
      }
      add(data) {
        T._check(data);
        this[_sink$].add(data);
      }
      addError(error, stackTrace = null) {
        this[_sink$].addError(error, stackTrace);
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        return this[_sink$].addStream(stream);
      }
      close() {
        return this[_sink$].close();
      }
    }
    (DelegatingStreamSink.new = function(sink) {
      this[_sink$] = sink;
      ;
    }).prototype = DelegatingStreamSink.prototype;
    (DelegatingStreamSink.__ = function(_sink) {
      this[_sink$] = _sink;
      ;
    }).prototype = DelegatingStreamSink.prototype;
    dart.addTypeTests(DelegatingStreamSink);
    DelegatingStreamSink.prototype[_is_DelegatingStreamSink_default] = true;
    DelegatingStreamSink[dart.implements] = () => [async.StreamSink$(T)];
    dart.setMethodSignature(DelegatingStreamSink, () => ({
      __proto__: dart.getMethods(DelegatingStreamSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(DelegatingStreamSink, () => ({
      __proto__: dart.getGetters(DelegatingStreamSink.__proto__),
      done: async.Future
    }));
    dart.setLibraryUri(DelegatingStreamSink, "package:async/src/delegate/stream_sink.dart");
    dart.setFieldSignature(DelegatingStreamSink, () => ({
      __proto__: dart.getFields(DelegatingStreamSink.__proto__),
      [_sink$]: dart.finalFieldType(async.StreamSink)
    }));
    return DelegatingStreamSink;
  });
  stream_sink.DelegatingStreamSink = stream_sink.DelegatingStreamSink$();
  dart.addTypeTests(stream_sink.DelegatingStreamSink, _is_DelegatingStreamSink_default);
  var _transformer = dart.privateName(stream_transformer_wrapper, "_transformer");
  const _is_StreamTransformerWrapper_default = Symbol('_is_StreamTransformerWrapper_default');
  stream_transformer_wrapper.StreamTransformerWrapper$ = dart.generic((S, T) => {
    var _StreamTransformerWrapperSinkOfS$T = () => (_StreamTransformerWrapperSinkOfS$T = dart.constFn(stream_transformer_wrapper._StreamTransformerWrapperSink$(S, T)))();
    var StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class StreamTransformerWrapper extends core.Object {
      get [_transformer]() {
        return this[_transformer$];
      }
      set [_transformer](value) {
        super[_transformer] = value;
      }
      bind(sink) {
        StreamSinkOfT()._check(sink);
        return new (_StreamTransformerWrapperSinkOfS$T()).new(this[_transformer], sink);
      }
    }
    (StreamTransformerWrapper.new = function(_transformer) {
      this[_transformer$] = _transformer;
      ;
    }).prototype = StreamTransformerWrapper.prototype;
    dart.addTypeTests(StreamTransformerWrapper);
    StreamTransformerWrapper.prototype[_is_StreamTransformerWrapper_default] = true;
    const _transformer$ = StreamTransformerWrapper__transformer;
    StreamTransformerWrapper[dart.implements] = () => [stream_sink_transformer.StreamSinkTransformer$(S, T)];
    dart.setMethodSignature(StreamTransformerWrapper, () => ({
      __proto__: dart.getMethods(StreamTransformerWrapper.__proto__),
      bind: dart.fnType(async.StreamSink$(S), [core.Object])
    }));
    dart.setLibraryUri(StreamTransformerWrapper, "package:async/src/stream_sink_transformer/stream_transformer_wrapper.dart");
    dart.setFieldSignature(StreamTransformerWrapper, () => ({
      __proto__: dart.getFields(StreamTransformerWrapper.__proto__),
      [_transformer]: dart.finalFieldType(async.StreamTransformer$(S, T))
    }));
    return StreamTransformerWrapper;
  });
  stream_transformer_wrapper.StreamTransformerWrapper = stream_transformer_wrapper.StreamTransformerWrapper$();
  dart.addTypeTests(stream_transformer_wrapper.StreamTransformerWrapper, _is_StreamTransformerWrapper_default);
  var _controller$ = dart.privateName(stream_transformer_wrapper, "_controller");
  var _inner$1 = dart.privateName(stream_transformer_wrapper, "_inner");
  const _is__StreamTransformerWrapperSink_default = Symbol('_is__StreamTransformerWrapperSink_default');
  stream_transformer_wrapper._StreamTransformerWrapperSink$ = dart.generic((S, T) => {
    var StreamControllerOfS = () => (StreamControllerOfS = dart.constFn(async.StreamController$(S)))();
    var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class _StreamTransformerWrapperSink extends core.Object {
      get done() {
        return this[_inner$1].done;
      }
      add(event) {
        S._check(event);
        this[_controller$].add(event);
      }
      addError(error, stackTrace = null) {
        this[_controller$].addError(error, stackTrace);
      }
      addStream(stream) {
        StreamOfS()._check(stream);
        return this[_controller$].addStream(stream);
      }
      close() {
        this[_controller$].close();
        return this[_inner$1].done;
      }
    }
    (_StreamTransformerWrapperSink.new = function(transformer, _inner) {
      this[_controller$] = StreamControllerOfS().new({sync: true});
      this[_inner$1] = _inner;
      this[_controller$].stream.transform(T, transformer).listen(dart.bind(this[_inner$1], 'add'), {onError: dart.bind(this[_inner$1], 'addError'), onDone: dart.fn(() => {
          this[_inner$1].close().catchError(dart.fn(_ => {
          }, dynamicToNull()));
        }, VoidToNull())});
    }).prototype = _StreamTransformerWrapperSink.prototype;
    dart.addTypeTests(_StreamTransformerWrapperSink);
    _StreamTransformerWrapperSink.prototype[_is__StreamTransformerWrapperSink_default] = true;
    _StreamTransformerWrapperSink[dart.implements] = () => [async.StreamSink$(S)];
    dart.setMethodSignature(_StreamTransformerWrapperSink, () => ({
      __proto__: dart.getMethods(_StreamTransformerWrapperSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(_StreamTransformerWrapperSink, () => ({
      __proto__: dart.getGetters(_StreamTransformerWrapperSink.__proto__),
      done: async.Future
    }));
    dart.setLibraryUri(_StreamTransformerWrapperSink, "package:async/src/stream_sink_transformer/stream_transformer_wrapper.dart");
    dart.setFieldSignature(_StreamTransformerWrapperSink, () => ({
      __proto__: dart.getFields(_StreamTransformerWrapperSink.__proto__),
      [_controller$]: dart.finalFieldType(async.StreamController$(S)),
      [_inner$1]: dart.finalFieldType(async.StreamSink$(T))
    }));
    return _StreamTransformerWrapperSink;
  });
  stream_transformer_wrapper._StreamTransformerWrapperSink = stream_transformer_wrapper._StreamTransformerWrapperSink$();
  dart.addTypeTests(stream_transformer_wrapper._StreamTransformerWrapperSink, _is__StreamTransformerWrapperSink_default);
  var _handleData$ = dart.privateName(handler_transformer, "_handleData");
  var _handleError$ = dart.privateName(handler_transformer, "_handleError");
  var _handleDone$ = dart.privateName(handler_transformer, "_handleDone");
  const _is_HandlerTransformer_default = Symbol('_is_HandlerTransformer_default');
  handler_transformer.HandlerTransformer$ = dart.generic((S, T) => {
    var _HandlerSinkOfS$T = () => (_HandlerSinkOfS$T = dart.constFn(handler_transformer._HandlerSink$(S, T)))();
    var StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class HandlerTransformer extends core.Object {
      bind(sink) {
        StreamSinkOfT()._check(sink);
        return new (_HandlerSinkOfS$T()).new(this, sink);
      }
    }
    (HandlerTransformer.new = function(_handleData, _handleError, _handleDone) {
      this[_handleData$] = _handleData;
      this[_handleError$] = _handleError;
      this[_handleDone$] = _handleDone;
      ;
    }).prototype = HandlerTransformer.prototype;
    dart.addTypeTests(HandlerTransformer);
    HandlerTransformer.prototype[_is_HandlerTransformer_default] = true;
    HandlerTransformer[dart.implements] = () => [stream_sink_transformer.StreamSinkTransformer$(S, T)];
    dart.setMethodSignature(HandlerTransformer, () => ({
      __proto__: dart.getMethods(HandlerTransformer.__proto__),
      bind: dart.fnType(async.StreamSink$(S), [core.Object])
    }));
    dart.setLibraryUri(HandlerTransformer, "package:async/src/stream_sink_transformer/handler_transformer.dart");
    dart.setFieldSignature(HandlerTransformer, () => ({
      __proto__: dart.getFields(HandlerTransformer.__proto__),
      [_handleData$]: dart.finalFieldType(dart.fnType(dart.void, [S, async.EventSink$(T)])),
      [_handleError$]: dart.finalFieldType(dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(T)])),
      [_handleDone$]: dart.finalFieldType(dart.fnType(dart.void, [async.EventSink$(T)]))
    }));
    return HandlerTransformer;
  });
  handler_transformer.HandlerTransformer = handler_transformer.HandlerTransformer$();
  dart.addTypeTests(handler_transformer.HandlerTransformer, _is_HandlerTransformer_default);
  var _transformer$ = dart.privateName(handler_transformer, "_transformer");
  var _inner = dart.privateName(handler_transformer, "_inner");
  var _safeCloseInner = dart.privateName(handler_transformer, "_safeCloseInner");
  var C4;
  const _is__HandlerSink_default = Symbol('_is__HandlerSink_default');
  handler_transformer._HandlerSink$ = dart.generic((S, T) => {
    var SAndEventSinkOfTTovoid = () => (SAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [S, EventSinkOfT()])))();
    var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    var _StreamHandlerTransformerOfS$T = () => (_StreamHandlerTransformerOfS$T = dart.constFn(async._StreamHandlerTransformer$(S, T)))();
    var _SafeCloseSinkOfT = () => (_SafeCloseSinkOfT = dart.constFn(handler_transformer._SafeCloseSink$(T)))();
    var EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    var ObjectAndStackTraceAndEventSinkOfTTovoid = () => (ObjectAndStackTraceAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace, EventSinkOfT()])))();
    var EventSinkOfTTovoid = () => (EventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [EventSinkOfT()])))();
    class _HandlerSink extends core.Object {
      get done() {
        return this[_inner].done;
      }
      add(event) {
        S._check(event);
        if (SAndEventSinkOfTTovoid()._check(this[_transformer$][_handleData$]) == null) {
          this[_inner].add(T.as(event));
        } else {
          SAndEventSinkOfTTovoid()._check(this[_transformer$][_handleData$])(event, this[_safeCloseInner]);
        }
      }
      addError(error, stackTrace = null) {
        if (ObjectAndStackTraceAndEventSinkOfTTovoid()._check(this[_transformer$][_handleError$]) == null) {
          this[_inner].addError(error, stackTrace);
        } else {
          ObjectAndStackTraceAndEventSinkOfTTovoid()._check(this[_transformer$][_handleError$])(error, stackTrace, this[_safeCloseInner]);
        }
      }
      addStream(stream) {
        StreamOfS()._check(stream);
        return this[_inner].addStream(stream.transform(T, new (_StreamHandlerTransformerOfS$T()).new({handleData: SAndEventSinkOfTTovoid()._check(this[_transformer$][_handleData$]), handleError: ObjectAndStackTraceAndEventSinkOfTTovoid()._check(this[_transformer$][_handleError$]), handleDone: C4 || CT.C4})));
      }
      close() {
        if (EventSinkOfTTovoid()._check(this[_transformer$][_handleDone$]) == null) return this[_inner].close();
        EventSinkOfTTovoid()._check(this[_transformer$][_handleDone$])(this[_safeCloseInner]);
        return this[_inner].done;
      }
    }
    (_HandlerSink.new = function(_transformer, inner) {
      this[_transformer$] = _transformer;
      this[_inner] = inner;
      this[_safeCloseInner] = new (_SafeCloseSinkOfT()).new(inner);
      ;
    }).prototype = _HandlerSink.prototype;
    dart.addTypeTests(_HandlerSink);
    _HandlerSink.prototype[_is__HandlerSink_default] = true;
    _HandlerSink[dart.implements] = () => [async.StreamSink$(S)];
    dart.setMethodSignature(_HandlerSink, () => ({
      __proto__: dart.getMethods(_HandlerSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(_HandlerSink, () => ({
      __proto__: dart.getGetters(_HandlerSink.__proto__),
      done: async.Future
    }));
    dart.setLibraryUri(_HandlerSink, "package:async/src/stream_sink_transformer/handler_transformer.dart");
    dart.setFieldSignature(_HandlerSink, () => ({
      __proto__: dart.getFields(_HandlerSink.__proto__),
      [_transformer$]: dart.finalFieldType(handler_transformer.HandlerTransformer$(S, T)),
      [_inner]: dart.finalFieldType(async.StreamSink$(T)),
      [_safeCloseInner]: dart.finalFieldType(async.StreamSink$(T))
    }));
    return _HandlerSink;
  });
  handler_transformer._HandlerSink = handler_transformer._HandlerSink$();
  dart.addTypeTests(handler_transformer._HandlerSink, _is__HandlerSink_default);
  const _is__SafeCloseSink_default = Symbol('_is__SafeCloseSink_default');
  handler_transformer._SafeCloseSink$ = dart.generic(T => {
    class _SafeCloseSink extends stream_sink.DelegatingStreamSink$(T) {
      close() {
        return super.close().catchError(dart.fn(_ => {
        }, dynamicToNull()));
      }
    }
    (_SafeCloseSink.new = function(inner) {
      _SafeCloseSink.__proto__.new.call(this, inner);
      ;
    }).prototype = _SafeCloseSink.prototype;
    dart.addTypeTests(_SafeCloseSink);
    _SafeCloseSink.prototype[_is__SafeCloseSink_default] = true;
    dart.setLibraryUri(_SafeCloseSink, "package:async/src/stream_sink_transformer/handler_transformer.dart");
    return _SafeCloseSink;
  });
  handler_transformer._SafeCloseSink = handler_transformer._SafeCloseSink$();
  dart.addTypeTests(handler_transformer._SafeCloseSink, _is__SafeCloseSink_default);
  handler_transformer._closeSink = function _closeSink(sink) {
    sink.close();
  };
  const _is_ValueResult_default = Symbol('_is_ValueResult_default');
  var value$0 = dart.privateName(value$, "ValueResult.value");
  value$.ValueResult$ = dart.generic(T => {
    var CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    var EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    var FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class ValueResult extends core.Object {
      get value() {
        return this[value$0];
      }
      set value(value) {
        super.value = value;
      }
      get isValue() {
        return true;
      }
      get isError() {
        return false;
      }
      get asValue() {
        return this;
      }
      get asError() {
        return null;
      }
      complete(completer) {
        CompleterOfT()._check(completer);
        completer.complete(this.value);
      }
      addTo(sink) {
        EventSinkOfT()._check(sink);
        sink.add(this.value);
      }
      get asFuture() {
        return FutureOfT().value(this.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.value)) ^ 842997089) >>> 0;
      }
      _equals(other) {
        if (other == null) return false;
        return value$.ValueResult.is(other) && dart.equals(this.value, other.value);
      }
    }
    (ValueResult.new = function(value) {
      this[value$0] = value;
      ;
    }).prototype = ValueResult.prototype;
    dart.addTypeTests(ValueResult);
    ValueResult.prototype[_is_ValueResult_default] = true;
    ValueResult[dart.implements] = () => [result.Result$(T)];
    dart.setMethodSignature(ValueResult, () => ({
      __proto__: dart.getMethods(ValueResult.__proto__),
      complete: dart.fnType(dart.void, [core.Object]),
      addTo: dart.fnType(dart.void, [core.Object]),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(ValueResult, () => ({
      __proto__: dart.getGetters(ValueResult.__proto__),
      isValue: core.bool,
      isError: core.bool,
      asValue: value$.ValueResult$(T),
      asError: error$.ErrorResult,
      asFuture: async.Future$(T)
    }));
    dart.setLibraryUri(ValueResult, "package:async/src/result/value.dart");
    dart.setFieldSignature(ValueResult, () => ({
      __proto__: dart.getFields(ValueResult.__proto__),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(ValueResult, ['_equals']);
    dart.defineExtensionAccessors(ValueResult, ['hashCode']);
    return ValueResult;
  });
  value$.ValueResult = value$.ValueResult$();
  dart.addTypeTests(value$.ValueResult, _is_ValueResult_default);
  var error$0 = dart.privateName(error$, "ErrorResult.error");
  var stackTrace$ = dart.privateName(error$, "ErrorResult.stackTrace");
  error$.ErrorResult = class ErrorResult extends core.Object {
    get error() {
      return this[error$0];
    }
    set error(value) {
      super.error = value;
    }
    get stackTrace() {
      return this[stackTrace$];
    }
    set stackTrace(value) {
      super.stackTrace = value;
    }
    get isValue() {
      return false;
    }
    get isError() {
      return true;
    }
    get asValue() {
      return null;
    }
    get asError() {
      return this;
    }
    complete(completer) {
      async.Completer._check(completer);
      completer.completeError(this.error, this.stackTrace);
    }
    addTo(sink) {
      async.EventSink._check(sink);
      sink.addError(this.error, this.stackTrace);
    }
    get asFuture() {
      return FutureOfNull().error(this.error, this.stackTrace);
    }
    handle(errorHandler) {
      if (dynamicAnddynamicTodynamic().is(errorHandler)) {
        errorHandler(this.error, this.stackTrace);
      } else {
        dart.dcall(errorHandler, [this.error]);
      }
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.error)) ^ dart.notNull(dart.hashCode(this.stackTrace)) ^ 492929599) >>> 0;
    }
    _equals(other) {
      if (other == null) return false;
      return error$.ErrorResult.is(other) && dart.equals(this.error, other.error) && dart.equals(this.stackTrace, other.stackTrace);
    }
  };
  (error$.ErrorResult.new = function(error, stackTrace) {
    this[error$0] = error;
    this[stackTrace$] = stackTrace;
    ;
  }).prototype = error$.ErrorResult.prototype;
  dart.addTypeTests(error$.ErrorResult);
  error$.ErrorResult[dart.implements] = () => [result.Result$(core.Null)];
  dart.setMethodSignature(error$.ErrorResult, () => ({
    __proto__: dart.getMethods(error$.ErrorResult.__proto__),
    complete: dart.fnType(dart.void, [core.Object]),
    addTo: dart.fnType(dart.void, [core.Object]),
    handle: dart.fnType(dart.void, [core.Function]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(error$.ErrorResult, () => ({
    __proto__: dart.getGetters(error$.ErrorResult.__proto__),
    isValue: core.bool,
    isError: core.bool,
    asValue: value$.ValueResult$(core.Null),
    asError: error$.ErrorResult,
    asFuture: async.Future$(core.Null)
  }));
  dart.setLibraryUri(error$.ErrorResult, "package:async/src/result/error.dart");
  dart.setFieldSignature(error$.ErrorResult, () => ({
    __proto__: dart.getFields(error$.ErrorResult.__proto__),
    error: dart.finalFieldType(core.Object),
    stackTrace: dart.finalFieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(error$.ErrorResult, ['_equals']);
  dart.defineExtensionAccessors(error$.ErrorResult, ['hashCode']);
  var C5;
  const _is_ReleaseStreamTransformer_default = Symbol('_is_ReleaseStreamTransformer_default');
  release_transformer.ReleaseStreamTransformer$ = dart.generic(T => {
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var StreamOfResultOfT = () => (StreamOfResultOfT = dart.constFn(async.Stream$(ResultOfT())))();
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ReleaseStreamTransformer extends async.StreamTransformerBase$(result.Result$(T), T) {
      bind(source) {
        StreamOfResultOfT()._check(source);
        return StreamOfT().eventTransformed(source, C5 || CT.C5);
      }
      static _createSink(sink) {
        return new release_sink.ReleaseSink.new(sink);
      }
    }
    (ReleaseStreamTransformer.new = function() {
      ReleaseStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = ReleaseStreamTransformer.prototype;
    dart.addTypeTests(ReleaseStreamTransformer);
    ReleaseStreamTransformer.prototype[_is_ReleaseStreamTransformer_default] = true;
    dart.setMethodSignature(ReleaseStreamTransformer, () => ({
      __proto__: dart.getMethods(ReleaseStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(ReleaseStreamTransformer, "package:async/src/result/release_transformer.dart");
    return ReleaseStreamTransformer;
  });
  release_transformer.ReleaseStreamTransformer = release_transformer.ReleaseStreamTransformer$();
  dart.addTypeTests(release_transformer.ReleaseStreamTransformer, _is_ReleaseStreamTransformer_default);
  var _sink$0 = dart.privateName(release_sink, "_sink");
  const _is_ReleaseSink_default = Symbol('_is_ReleaseSink_default');
  release_sink.ReleaseSink$ = dart.generic(T => {
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    class ReleaseSink extends core.Object {
      add(result) {
        ResultOfT()._check(result);
        result.addTo(EventSinkOfT()._check(this[_sink$0]));
      }
      addError(error, stackTrace = null) {
        this[_sink$0].addError(error, stackTrace);
      }
      close() {
        this[_sink$0].close();
      }
    }
    (ReleaseSink.new = function(sink) {
      this[_sink$0] = sink;
      ;
    }).prototype = ReleaseSink.prototype;
    dart.addTypeTests(ReleaseSink);
    ReleaseSink.prototype[_is_ReleaseSink_default] = true;
    ReleaseSink[dart.implements] = () => [async.EventSink$(result.Result$(T))];
    dart.setMethodSignature(ReleaseSink, () => ({
      __proto__: dart.getMethods(ReleaseSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ReleaseSink, "package:async/src/result/release_sink.dart");
    dart.setFieldSignature(ReleaseSink, () => ({
      __proto__: dart.getFields(ReleaseSink.__proto__),
      [_sink$0]: dart.finalFieldType(async.EventSink)
    }));
    return ReleaseSink;
  });
  release_sink.ReleaseSink = release_sink.ReleaseSink$();
  dart.addTypeTests(release_sink.ReleaseSink, _is_ReleaseSink_default);
  const _is_CaptureStreamTransformer_default = Symbol('_is_CaptureStreamTransformer_default');
  capture_transformer.CaptureStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var StreamOfResultOfT = () => (StreamOfResultOfT = dart.constFn(async.Stream$(ResultOfT())))();
    var CaptureSinkOfT = () => (CaptureSinkOfT = dart.constFn(capture_sink.CaptureSink$(T)))();
    var EventSinkOfResultOfT = () => (EventSinkOfResultOfT = dart.constFn(async.EventSink$(ResultOfT())))();
    var EventSinkOfResultOfTToCaptureSinkOfT = () => (EventSinkOfResultOfTToCaptureSinkOfT = dart.constFn(dart.fnType(CaptureSinkOfT(), [EventSinkOfResultOfT()])))();
    class CaptureStreamTransformer extends async.StreamTransformerBase$(T, result.Result$(T)) {
      bind(source) {
        StreamOfT()._check(source);
        return StreamOfResultOfT().eventTransformed(source, dart.fn(sink => new (CaptureSinkOfT()).new(sink), EventSinkOfResultOfTToCaptureSinkOfT()));
      }
    }
    (CaptureStreamTransformer.new = function() {
      CaptureStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = CaptureStreamTransformer.prototype;
    dart.addTypeTests(CaptureStreamTransformer);
    CaptureStreamTransformer.prototype[_is_CaptureStreamTransformer_default] = true;
    dart.setMethodSignature(CaptureStreamTransformer, () => ({
      __proto__: dart.getMethods(CaptureStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(result.Result$(T)), [core.Object])
    }));
    dart.setLibraryUri(CaptureStreamTransformer, "package:async/src/result/capture_transformer.dart");
    return CaptureStreamTransformer;
  });
  capture_transformer.CaptureStreamTransformer = capture_transformer.CaptureStreamTransformer$();
  dart.addTypeTests(capture_transformer.CaptureStreamTransformer, _is_CaptureStreamTransformer_default);
  var _sink$1 = dart.privateName(capture_sink, "_sink");
  const _is_CaptureSink_default = Symbol('_is_CaptureSink_default');
  capture_sink.CaptureSink$ = dart.generic(T => {
    var ValueResultOfT = () => (ValueResultOfT = dart.constFn(value$.ValueResult$(T)))();
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    class CaptureSink extends core.Object {
      add(value) {
        T._check(value);
        this[_sink$1].add(new (ValueResultOfT()).new(value));
      }
      addError(error, stackTrace = null) {
        this[_sink$1].add(ResultOfT().error(error, stackTrace));
      }
      close() {
        this[_sink$1].close();
      }
    }
    (CaptureSink.new = function(sink) {
      this[_sink$1] = sink;
      ;
    }).prototype = CaptureSink.prototype;
    dart.addTypeTests(CaptureSink);
    CaptureSink.prototype[_is_CaptureSink_default] = true;
    CaptureSink[dart.implements] = () => [async.EventSink$(T)];
    dart.setMethodSignature(CaptureSink, () => ({
      __proto__: dart.getMethods(CaptureSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(CaptureSink, "package:async/src/result/capture_sink.dart");
    dart.setFieldSignature(CaptureSink, () => ({
      __proto__: dart.getFields(CaptureSink.__proto__),
      [_sink$1]: dart.finalFieldType(async.EventSink$(result.Result$(T)))
    }));
    return CaptureSink;
  });
  capture_sink.CaptureSink = capture_sink.CaptureSink$();
  dart.addTypeTests(capture_sink.CaptureSink, _is_CaptureSink_default);
  var _source = dart.privateName(stream_subscription, "_source");
  const _is_DelegatingStreamSubscription_default = Symbol('_is_DelegatingStreamSubscription_default');
  stream_subscription.DelegatingStreamSubscription$ = dart.generic(T => {
    class DelegatingStreamSubscription extends core.Object {
      static typed(T, subscription) {
        return async.StreamSubscription$(T).is(subscription) ? subscription : new (stream_subscription$.TypeSafeStreamSubscription$(T)).new(subscription);
      }
      onData(handleData) {
        this[_source].onData(handleData);
      }
      onError(handleError) {
        this[_source].onError(handleError);
      }
      onDone(handleDone) {
        this[_source].onDone(handleDone);
      }
      pause(resumeFuture = null) {
        this[_source].pause(resumeFuture);
      }
      resume() {
        this[_source].resume();
      }
      cancel() {
        return this[_source].cancel();
      }
      asFuture(E, futureValue = null) {
        return this[_source].asFuture(E, futureValue);
      }
      get isPaused() {
        return this[_source].isPaused;
      }
    }
    (DelegatingStreamSubscription.new = function(sourceSubscription) {
      this[_source] = sourceSubscription;
      ;
    }).prototype = DelegatingStreamSubscription.prototype;
    DelegatingStreamSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(DelegatingStreamSubscription);
    DelegatingStreamSubscription.prototype[_is_DelegatingStreamSubscription_default] = true;
    DelegatingStreamSubscription[dart.implements] = () => [async.StreamSubscription$(T)];
    dart.setMethodSignature(DelegatingStreamSubscription, () => ({
      __proto__: dart.getMethods(DelegatingStreamSubscription.__proto__),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onError: dart.fnType(dart.void, [core.Function]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, []),
      cancel: dart.fnType(async.Future, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]])
    }));
    dart.setGetterSignature(DelegatingStreamSubscription, () => ({
      __proto__: dart.getGetters(DelegatingStreamSubscription.__proto__),
      isPaused: core.bool
    }));
    dart.setLibraryUri(DelegatingStreamSubscription, "package:async/src/delegate/stream_subscription.dart");
    dart.setFieldSignature(DelegatingStreamSubscription, () => ({
      __proto__: dart.getFields(DelegatingStreamSubscription.__proto__),
      [_source]: dart.finalFieldType(async.StreamSubscription$(T))
    }));
    return DelegatingStreamSubscription;
  });
  stream_subscription.DelegatingStreamSubscription = stream_subscription.DelegatingStreamSubscription$();
  dart.addTypeTests(stream_subscription.DelegatingStreamSubscription, _is_DelegatingStreamSubscription_default);
  var _subscription$ = dart.privateName(stream_subscription$, "_subscription");
  const _is_TypeSafeStreamSubscription_default = Symbol('_is_TypeSafeStreamSubscription_default');
  stream_subscription$.TypeSafeStreamSubscription$ = dart.generic(T => {
    class TypeSafeStreamSubscription extends core.Object {
      get isPaused() {
        return this[_subscription$].isPaused;
      }
      onData(handleData) {
        this[_subscription$].onData(dart.fn(data => handleData(T.as(data)), dynamicTovoid()));
      }
      onError(handleError) {
        this[_subscription$].onError(handleError);
      }
      onDone(handleDone) {
        this[_subscription$].onDone(handleDone);
      }
      pause(resumeFuture = null) {
        this[_subscription$].pause(resumeFuture);
      }
      resume() {
        this[_subscription$].resume();
      }
      cancel() {
        return this[_subscription$].cancel();
      }
      asFuture(E, futureValue = null) {
        return this[_subscription$].asFuture(E, futureValue);
      }
    }
    (TypeSafeStreamSubscription.new = function(_subscription) {
      this[_subscription$] = _subscription;
      ;
    }).prototype = TypeSafeStreamSubscription.prototype;
    TypeSafeStreamSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(TypeSafeStreamSubscription);
    TypeSafeStreamSubscription.prototype[_is_TypeSafeStreamSubscription_default] = true;
    TypeSafeStreamSubscription[dart.implements] = () => [async.StreamSubscription$(T)];
    dart.setMethodSignature(TypeSafeStreamSubscription, () => ({
      __proto__: dart.getMethods(TypeSafeStreamSubscription.__proto__),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onError: dart.fnType(dart.void, [core.Function]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, []),
      cancel: dart.fnType(async.Future, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]])
    }));
    dart.setGetterSignature(TypeSafeStreamSubscription, () => ({
      __proto__: dart.getGetters(TypeSafeStreamSubscription.__proto__),
      isPaused: core.bool
    }));
    dart.setLibraryUri(TypeSafeStreamSubscription, "package:async/src/typed/stream_subscription.dart");
    dart.setFieldSignature(TypeSafeStreamSubscription, () => ({
      __proto__: dart.getFields(TypeSafeStreamSubscription.__proto__),
      [_subscription$]: dart.finalFieldType(async.StreamSubscription)
    }));
    return TypeSafeStreamSubscription;
  });
  stream_subscription$.TypeSafeStreamSubscription = stream_subscription$.TypeSafeStreamSubscription$();
  dart.addTypeTests(stream_subscription$.TypeSafeStreamSubscription, _is_TypeSafeStreamSubscription_default);
  var _stream = dart.privateName(stream_completer, "_stream");
  var _isSourceStreamSet = dart.privateName(stream_completer, "_isSourceStreamSet");
  var _setSourceStream = dart.privateName(stream_completer, "_setSourceStream");
  var _setEmpty = dart.privateName(stream_completer, "_setEmpty");
  const _is_StreamCompleter_default = Symbol('_is_StreamCompleter_default');
  stream_completer.StreamCompleter$ = dart.generic(T => {
    var _CompleterStreamOfT = () => (_CompleterStreamOfT = dart.constFn(stream_completer._CompleterStream$(T)))();
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    var FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class StreamCompleter extends core.Object {
      static fromFuture(T, streamFuture) {
        let completer = new (stream_completer.StreamCompleter$(T)).new();
        streamFuture.then(dart.void, dart.bind(completer, 'setSourceStream'), {onError: dart.bind(completer, 'setError')});
        return completer.stream;
      }
      get stream() {
        return this[_stream];
      }
      setSourceStream(sourceStream) {
        StreamOfT()._check(sourceStream);
        if (dart.test(this[_stream][_isSourceStreamSet])) {
          dart.throw(new core.StateError.new("Source stream already set"));
        }
        this[_stream][_setSourceStream](sourceStream);
      }
      setEmpty() {
        if (dart.test(this[_stream][_isSourceStreamSet])) {
          dart.throw(new core.StateError.new("Source stream already set"));
        }
        this[_stream][_setEmpty]();
      }
      setError(error, stackTrace = null) {
        this.setSourceStream(StreamOfT().fromFuture(FutureOfT().error(error, stackTrace)));
      }
    }
    (StreamCompleter.new = function() {
      this[_stream] = new (_CompleterStreamOfT()).new();
      ;
    }).prototype = StreamCompleter.prototype;
    dart.addTypeTests(StreamCompleter);
    StreamCompleter.prototype[_is_StreamCompleter_default] = true;
    dart.setMethodSignature(StreamCompleter, () => ({
      __proto__: dart.getMethods(StreamCompleter.__proto__),
      setSourceStream: dart.fnType(dart.void, [core.Object]),
      setEmpty: dart.fnType(dart.void, []),
      setError: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace])
    }));
    dart.setGetterSignature(StreamCompleter, () => ({
      __proto__: dart.getGetters(StreamCompleter.__proto__),
      stream: async.Stream$(T)
    }));
    dart.setLibraryUri(StreamCompleter, "package:async/src/stream_completer.dart");
    dart.setFieldSignature(StreamCompleter, () => ({
      __proto__: dart.getFields(StreamCompleter.__proto__),
      [_stream]: dart.finalFieldType(stream_completer._CompleterStream$(T))
    }));
    return StreamCompleter;
  });
  stream_completer.StreamCompleter = stream_completer.StreamCompleter$();
  dart.addTypeTests(stream_completer.StreamCompleter, _is_StreamCompleter_default);
  var _controller$0 = dart.privateName(stream_completer, "_controller");
  var _sourceStream = dart.privateName(stream_completer, "_sourceStream");
  var _createController = dart.privateName(stream_completer, "_createController");
  var _linkStreamToController = dart.privateName(stream_completer, "_linkStreamToController");
  const _is__CompleterStream_default = Symbol('_is__CompleterStream_default');
  stream_completer._CompleterStream$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    var StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class _CompleterStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (this[_controller$0] == null) {
          if (this[_sourceStream] != null && !dart.test(this[_sourceStream].isBroadcast)) {
            return this[_sourceStream].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
          }
          this[_createController]();
          if (this[_sourceStream] != null) {
            this[_linkStreamToController]();
          }
        }
        return this[_controller$0].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      get [_isSourceStreamSet]() {
        return this[_sourceStream] != null;
      }
      [_setSourceStream](sourceStream) {
        StreamOfT()._check(sourceStream);
        if (!(this[_sourceStream] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_completer.dart", 149, 12, "_sourceStream == null");
        this[_sourceStream] = sourceStream;
        if (this[_controller$0] != null) {
          this[_linkStreamToController]();
        }
      }
      [_linkStreamToController]() {
        if (!(this[_controller$0] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_completer.dart", 159, 12, "_controller != null");
        if (!(this[_sourceStream] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_completer.dart", 160, 12, "_sourceStream != null");
        this[_controller$0].addStream(this[_sourceStream], {cancelOnError: false}).whenComplete(dart.bind(this[_controller$0], 'close'));
      }
      [_setEmpty]() {
        if (!(this[_sourceStream] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_completer.dart", 171, 12, "_sourceStream == null");
        if (this[_controller$0] == null) {
          this[_createController]();
        }
        this[_sourceStream] = this[_controller$0].stream;
        this[_controller$0].close();
      }
      [_createController]() {
        if (!(this[_controller$0] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_completer.dart", 181, 12, "_controller == null");
        this[_controller$0] = StreamControllerOfT().new({sync: true});
      }
    }
    (_CompleterStream.new = function() {
      this[_controller$0] = null;
      this[_sourceStream] = null;
      _CompleterStream.__proto__.new.call(this);
      ;
    }).prototype = _CompleterStream.prototype;
    dart.addTypeTests(_CompleterStream);
    _CompleterStream.prototype[_is__CompleterStream_default] = true;
    dart.setMethodSignature(_CompleterStream, () => ({
      __proto__: dart.getMethods(_CompleterStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.dynamic, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {}),
      [_setSourceStream]: dart.fnType(dart.void, [core.Object]),
      [_linkStreamToController]: dart.fnType(dart.void, []),
      [_setEmpty]: dart.fnType(dart.void, []),
      [_createController]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_CompleterStream, () => ({
      __proto__: dart.getGetters(_CompleterStream.__proto__),
      [_isSourceStreamSet]: core.bool
    }));
    dart.setLibraryUri(_CompleterStream, "package:async/src/stream_completer.dart");
    dart.setFieldSignature(_CompleterStream, () => ({
      __proto__: dart.getFields(_CompleterStream.__proto__),
      [_controller$0]: dart.fieldType(async.StreamController$(T)),
      [_sourceStream]: dart.fieldType(async.Stream$(T))
    }));
    return _CompleterStream;
  });
  stream_completer._CompleterStream = stream_completer._CompleterStream$();
  dart.addTypeTests(stream_completer._CompleterStream, _is__CompleterStream_default);
  var _inner$2 = dart.privateName(typed_stream_transformer, "_inner");
  const _is__TypeSafeStreamTransformer_default = Symbol('_is__TypeSafeStreamTransformer_default');
  typed_stream_transformer._TypeSafeStreamTransformer$ = dart.generic((S, T) => {
    var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class _TypeSafeStreamTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        return stream$.DelegatingStream.typed(T, this[_inner$2].bind(stream));
      }
    }
    (_TypeSafeStreamTransformer.new = function(_inner) {
      this[_inner$2] = _inner;
      _TypeSafeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = _TypeSafeStreamTransformer.prototype;
    dart.addTypeTests(_TypeSafeStreamTransformer);
    _TypeSafeStreamTransformer.prototype[_is__TypeSafeStreamTransformer_default] = true;
    dart.setMethodSignature(_TypeSafeStreamTransformer, () => ({
      __proto__: dart.getMethods(_TypeSafeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(_TypeSafeStreamTransformer, "package:async/src/typed_stream_transformer.dart");
    dart.setFieldSignature(_TypeSafeStreamTransformer, () => ({
      __proto__: dart.getFields(_TypeSafeStreamTransformer.__proto__),
      [_inner$2]: dart.finalFieldType(async.StreamTransformer)
    }));
    return _TypeSafeStreamTransformer;
  });
  typed_stream_transformer._TypeSafeStreamTransformer = typed_stream_transformer._TypeSafeStreamTransformer$();
  dart.addTypeTests(typed_stream_transformer._TypeSafeStreamTransformer, _is__TypeSafeStreamTransformer_default);
  typed_stream_transformer.typedStreamTransformer = function typedStreamTransformer(S, T, transformer) {
    return async.StreamTransformer$(S, T).is(transformer) ? transformer : new (typed_stream_transformer._TypeSafeStreamTransformer$(S, T)).new(transformer);
  };
  const _is_DelegatingStream_default = Symbol('_is_DelegatingStream_default');
  stream$.DelegatingStream$ = dart.generic(T => {
    class DelegatingStream extends async.StreamView$(T) {
      static typed(T, stream) {
        return stream.cast(T);
      }
    }
    (DelegatingStream.new = function(stream) {
      DelegatingStream.__proto__.new.call(this, stream);
      ;
    }).prototype = DelegatingStream.prototype;
    dart.addTypeTests(DelegatingStream);
    DelegatingStream.prototype[_is_DelegatingStream_default] = true;
    dart.setLibraryUri(DelegatingStream, "package:async/src/delegate/stream.dart");
    return DelegatingStream;
  });
  stream$.DelegatingStream = stream$.DelegatingStream$();
  dart.addTypeTests(stream$.DelegatingStream, _is_DelegatingStream_default);
  var _source$ = dart.privateName(subscription_stream, "_source");
  const _is_SubscriptionStream_default = Symbol('_is_SubscriptionStream_default');
  subscription_stream.SubscriptionStream$ = dart.generic(T => {
    var _CancelOnErrorSubscriptionWrapperOfT = () => (_CancelOnErrorSubscriptionWrapperOfT = dart.constFn(subscription_stream._CancelOnErrorSubscriptionWrapper$(T)))();
    class SubscriptionStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (this[_source$] == null) {
          dart.throw(new core.StateError.new("Stream has already been listened to."));
        }
        cancelOnError = true[$_equals](cancelOnError);
        let subscription = this[_source$];
        this[_source$] = null;
        let result = dart.test(cancelOnError) ? new (_CancelOnErrorSubscriptionWrapperOfT()).new(subscription) : subscription;
        result.onData(onData);
        result.onError(onError);
        result.onDone(onDone);
        subscription.resume();
        return result;
      }
    }
    (SubscriptionStream.new = function(subscription) {
      this[_source$] = subscription;
      SubscriptionStream.__proto__.new.call(this);
      this[_source$].pause();
      this[_source$].onData(null);
      this[_source$].onError(null);
      this[_source$].onDone(null);
    }).prototype = SubscriptionStream.prototype;
    dart.addTypeTests(SubscriptionStream);
    SubscriptionStream.prototype[_is_SubscriptionStream_default] = true;
    dart.setMethodSignature(SubscriptionStream, () => ({
      __proto__: dart.getMethods(SubscriptionStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(SubscriptionStream, "package:async/src/subscription_stream.dart");
    dart.setFieldSignature(SubscriptionStream, () => ({
      __proto__: dart.getFields(SubscriptionStream.__proto__),
      [_source$]: dart.fieldType(async.StreamSubscription$(T))
    }));
    return SubscriptionStream;
  });
  subscription_stream.SubscriptionStream = subscription_stream.SubscriptionStream$();
  dart.addTypeTests(subscription_stream.SubscriptionStream, _is_SubscriptionStream_default);
  const _is__CancelOnErrorSubscriptionWrapper_default = Symbol('_is__CancelOnErrorSubscriptionWrapper_default');
  subscription_stream._CancelOnErrorSubscriptionWrapper$ = dart.generic(T => {
    class _CancelOnErrorSubscriptionWrapper extends stream_subscription.DelegatingStreamSubscription$(T) {
      onError(handleError) {
        super.onError(dart.fn((error, stackTrace) => {
          let cancelFuture = super.cancel();
          if (cancelFuture != null) {
            cancelFuture.whenComplete(dart.fn(() => {
              if (dynamicAnddynamicTodynamic().is(handleError)) {
                handleError(error, stackTrace);
              } else {
                dart.dcall(handleError, [error]);
              }
            }, VoidToNull()));
          } else {
            if (dynamicAnddynamicTodynamic().is(handleError)) {
              handleError(error, stackTrace);
            } else {
              dart.dcall(handleError, [error]);
            }
          }
        }, dynamicAndStackTraceToNull()));
      }
    }
    (_CancelOnErrorSubscriptionWrapper.new = function(subscription) {
      _CancelOnErrorSubscriptionWrapper.__proto__.new.call(this, subscription);
      ;
    }).prototype = _CancelOnErrorSubscriptionWrapper.prototype;
    dart.addTypeTests(_CancelOnErrorSubscriptionWrapper);
    _CancelOnErrorSubscriptionWrapper.prototype[_is__CancelOnErrorSubscriptionWrapper_default] = true;
    dart.setLibraryUri(_CancelOnErrorSubscriptionWrapper, "package:async/src/subscription_stream.dart");
    return _CancelOnErrorSubscriptionWrapper;
  });
  subscription_stream._CancelOnErrorSubscriptionWrapper = subscription_stream._CancelOnErrorSubscriptionWrapper$();
  dart.addTypeTests(subscription_stream._CancelOnErrorSubscriptionWrapper, _is__CancelOnErrorSubscriptionWrapper_default);
  var _streams = dart.privateName(stream_zip, "_streams");
  const _is_StreamZip_default = Symbol('_is_StreamZip_default');
  stream_zip.StreamZip$ = dart.generic(T => {
    var StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    var JSArrayOfStreamSubscriptionOfT = () => (JSArrayOfStreamSubscriptionOfT = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfT())))();
    var ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    var intAndTTovoid = () => (intAndTTovoid = dart.constFn(dart.fnType(dart.void, [core.int, T])))();
    var TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    var StreamControllerOfListOfT = () => (StreamControllerOfListOfT = dart.constFn(async.StreamController$(ListOfT())))();
    class StreamZip extends async.Stream$(core.List$(T)) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        cancelOnError = true === cancelOnError;
        let subscriptions = JSArrayOfStreamSubscriptionOfT().of([]);
        let controller = null;
        let current = null;
        let dataCount = 0;
        function handleData(index, data) {
          current[$_set](index, data);
          dataCount = dataCount + 1;
          if (dataCount === subscriptions[$length]) {
            let data = current;
            current = ListOfT().new(subscriptions[$length]);
            dataCount = 0;
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i = i + 1) {
              if (i !== index) subscriptions[$_get](i).resume();
            }
            controller.add(data);
          } else {
            subscriptions[$_get](index).pause();
          }
        }
        dart.fn(handleData, intAndTTovoid());
        function handleError(error, stackTrace) {
          controller.addError(error, stackTrace);
        }
        dart.fn(handleError, ObjectAndStackTraceTovoid());
        function handleErrorCancel(error, stackTrace) {
          for (let i = 0; i < dart.notNull(subscriptions[$length]); i = i + 1) {
            subscriptions[$_get](i).cancel();
          }
          controller.addError(error, stackTrace);
        }
        dart.fn(handleErrorCancel, ObjectAndStackTraceTovoid());
        function handleDone() {
          for (let i = 0; i < dart.notNull(subscriptions[$length]); i = i + 1) {
            subscriptions[$_get](i).cancel();
          }
          controller.close();
        }
        dart.fn(handleDone, VoidTovoid());
        try {
          for (let stream of this[_streams]) {
            let index = subscriptions[$length];
            subscriptions[$add](stream.listen(dart.fn(data => {
              handleData(index, data);
            }, TToNull()), {onError: dart.test(cancelOnError) ? handleError : handleErrorCancel, onDone: handleDone, cancelOnError: cancelOnError}));
          }
        } catch (e$) {
          let e = dart.getThrown(e$);
          for (let i = dart.notNull(subscriptions[$length]) - 1; i >= 0; i = i - 1) {
            subscriptions[$_get](i).cancel();
          }
          dart.rethrow(e$);
        }
        current = ListOfT().new(subscriptions[$length]);
        controller = StreamControllerOfListOfT().new({onPause: dart.fn(() => {
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i = i + 1) {
              subscriptions[$_get](i).pause();
            }
          }, VoidToNull()), onResume: dart.fn(() => {
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i = i + 1) {
              subscriptions[$_get](i).resume();
            }
          }, VoidToNull()), onCancel: dart.fn(() => {
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i = i + 1) {
              subscriptions[$_get](i).cancel();
            }
          }, VoidToNull())});
        if (dart.test(subscriptions[$isEmpty])) {
          controller.close();
        }
        return controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (StreamZip.new = function(streams) {
      this[_streams] = streams;
      StreamZip.__proto__.new.call(this);
      ;
    }).prototype = StreamZip.prototype;
    dart.addTypeTests(StreamZip);
    StreamZip.prototype[_is_StreamZip_default] = true;
    dart.setMethodSignature(StreamZip, () => ({
      __proto__: dart.getMethods(StreamZip.__proto__),
      listen: dart.fnType(async.StreamSubscription$(core.List$(T)), [dart.fnType(dart.void, [core.List$(T)])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(StreamZip, "package:async/src/stream_zip.dart");
    dart.setFieldSignature(StreamZip, () => ({
      __proto__: dart.getFields(StreamZip.__proto__),
      [_streams]: dart.finalFieldType(core.Iterable$(async.Stream$(T)))
    }));
    return StreamZip;
  });
  stream_zip.StreamZip = stream_zip.StreamZip$();
  dart.addTypeTests(stream_zip.StreamZip, _is_StreamZip_default);
  var _subscription = dart.privateName(stream_splitter, "_subscription");
  var _buffer = dart.privateName(stream_splitter, "_buffer");
  var _controllers = dart.privateName(stream_splitter, "_controllers");
  var _closeGroup = dart.privateName(stream_splitter, "_closeGroup");
  var _isDone = dart.privateName(stream_splitter, "_isDone");
  var _isClosed = dart.privateName(stream_splitter, "_isClosed");
  var _stream$ = dart.privateName(stream_splitter, "_stream");
  var _onListen = dart.privateName(stream_splitter, "_onListen");
  var _onPause = dart.privateName(stream_splitter, "_onPause");
  var _onResume = dart.privateName(stream_splitter, "_onResume");
  var _onCancel = dart.privateName(stream_splitter, "_onCancel");
  var _cancelSubscription = dart.privateName(stream_splitter, "_cancelSubscription");
  var _onData = dart.privateName(stream_splitter, "_onData");
  var _onError = dart.privateName(stream_splitter, "_onError");
  var _onDone = dart.privateName(stream_splitter, "_onDone");
  const _is_StreamSplitter_default = Symbol('_is_StreamSplitter_default');
  stream_splitter.StreamSplitter$ = dart.generic(T => {
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var JSArrayOfResultOfT = () => (JSArrayOfResultOfT = dart.constFn(_interceptors.JSArray$(ResultOfT())))();
    var StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    var _HashSetOfStreamControllerOfT = () => (_HashSetOfStreamControllerOfT = dart.constFn(collection._HashSet$(StreamControllerOfT())))();
    var StreamControllerOfTTobool = () => (StreamControllerOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamControllerOfT()])))();
    var ValueResultOfT = () => (ValueResultOfT = dart.constFn(value$.ValueResult$(T)))();
    class StreamSplitter extends core.Object {
      static splitFrom(T, stream, count = null) {
        if (count == null) count = 2;
        let splitter = new (stream_splitter.StreamSplitter$(T)).new(stream);
        let streams = core.List$(async.Stream$(T)).generate(count, dart.fn(_ => splitter.split(), dart.fnType(async.Stream$(T), [core.int])));
        splitter.close();
        return streams;
      }
      split() {
        if (dart.test(this[_isClosed])) {
          dart.throw(new core.StateError.new("Can't call split() on a closed StreamSplitter."));
        }
        let controller = StreamControllerOfT().new({onListen: dart.bind(this, _onListen), onPause: dart.bind(this, _onPause), onResume: dart.bind(this, _onResume)});
        controller.onCancel = dart.fn(() => this[_onCancel](controller), VoidTovoid());
        for (let result of this[_buffer]) {
          result.addTo(controller);
        }
        if (dart.test(this[_isDone])) {
          this[_closeGroup].add(controller.close());
        } else {
          this[_controllers].add(controller);
        }
        return controller.stream;
      }
      close() {
        if (dart.test(this[_isClosed])) return this[_closeGroup].future;
        this[_isClosed] = true;
        this[_buffer][$clear]();
        if (dart.test(this[_controllers][$isEmpty])) this[_cancelSubscription]();
        return this[_closeGroup].future;
      }
      [_cancelSubscription]() {
        if (!dart.test(this[_controllers][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_splitter.dart", 125, 12, "_controllers.isEmpty");
        if (!dart.test(this[_isClosed])) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_splitter.dart", 126, 12, "_isClosed");
        let future = null;
        if (this[_subscription] != null) future = this[_subscription].cancel();
        if (future != null) this[_closeGroup].add(future);
        this[_closeGroup].close();
      }
      [_onListen]() {
        if (dart.test(this[_isDone])) return;
        if (this[_subscription] != null) {
          this[_subscription].resume();
        } else {
          this[_subscription] = this[_stream$].listen(dart.bind(this, _onData), {onError: dart.bind(this, _onError), onDone: dart.bind(this, _onDone)});
        }
      }
      [_onPause]() {
        if (!dart.test(this[_controllers][$every](dart.fn(controller => controller.isPaused, StreamControllerOfTTobool())))) return;
        this[_subscription].pause();
      }
      [_onResume]() {
        this[_subscription].resume();
      }
      [_onCancel](controller) {
        this[_controllers].remove(controller);
        if (dart.test(this[_controllers][$isNotEmpty])) return;
        if (dart.test(this[_isClosed])) {
          this[_cancelSubscription]();
        } else {
          this[_subscription].pause();
        }
      }
      [_onData](data) {
        T._check(data);
        if (!dart.test(this[_isClosed])) this[_buffer][$add](new (ValueResultOfT()).new(data));
        for (let controller of this[_controllers]) {
          controller.add(data);
        }
      }
      [_onError](error, stackTrace) {
        if (!dart.test(this[_isClosed])) this[_buffer][$add](ResultOfT().error(error, stackTrace));
        for (let controller of this[_controllers]) {
          controller.addError(error, stackTrace);
        }
      }
      [_onDone]() {
        this[_isDone] = true;
        for (let controller of this[_controllers]) {
          this[_closeGroup].add(controller.close());
        }
      }
    }
    (StreamSplitter.new = function(_stream) {
      this[_subscription] = null;
      this[_buffer] = JSArrayOfResultOfT().of([]);
      this[_controllers] = new (_HashSetOfStreamControllerOfT()).new();
      this[_closeGroup] = new future_group.FutureGroup.new();
      this[_isDone] = false;
      this[_isClosed] = false;
      this[_stream$] = _stream;
      ;
    }).prototype = StreamSplitter.prototype;
    dart.addTypeTests(StreamSplitter);
    StreamSplitter.prototype[_is_StreamSplitter_default] = true;
    dart.setMethodSignature(StreamSplitter, () => ({
      __proto__: dart.getMethods(StreamSplitter.__proto__),
      split: dart.fnType(async.Stream$(T), []),
      close: dart.fnType(async.Future, []),
      [_cancelSubscription]: dart.fnType(dart.void, []),
      [_onListen]: dart.fnType(dart.void, []),
      [_onPause]: dart.fnType(dart.void, []),
      [_onResume]: dart.fnType(dart.void, []),
      [_onCancel]: dart.fnType(dart.void, [async.StreamController]),
      [_onData]: dart.fnType(dart.void, [core.Object]),
      [_onError]: dart.fnType(dart.void, [core.Object, core.StackTrace]),
      [_onDone]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(StreamSplitter, "package:async/src/stream_splitter.dart");
    dart.setFieldSignature(StreamSplitter, () => ({
      __proto__: dart.getFields(StreamSplitter.__proto__),
      [_stream$]: dart.finalFieldType(async.Stream$(T)),
      [_subscription]: dart.fieldType(async.StreamSubscription$(T)),
      [_buffer]: dart.finalFieldType(core.List$(result.Result$(T))),
      [_controllers]: dart.finalFieldType(core.Set$(async.StreamController$(T))),
      [_closeGroup]: dart.finalFieldType(future_group.FutureGroup),
      [_isDone]: dart.fieldType(core.bool),
      [_isClosed]: dart.fieldType(core.bool)
    }));
    return StreamSplitter;
  });
  stream_splitter.StreamSplitter = stream_splitter.StreamSplitter$();
  dart.addTypeTests(stream_splitter.StreamSplitter, _is_StreamSplitter_default);
  var _pending = dart.privateName(future_group, "_pending");
  var _closed$ = dart.privateName(future_group, "_closed");
  var _completer$ = dart.privateName(future_group, "_completer");
  var _onIdleController = dart.privateName(future_group, "_onIdleController");
  var _values = dart.privateName(future_group, "_values");
  const _is_FutureGroup_default = Symbol('_is_FutureGroup_default');
  future_group.FutureGroup$ = dart.generic(T => {
    var ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    var CompleterOfListOfT = () => (CompleterOfListOfT = dart.constFn(async.Completer$(ListOfT())))();
    var JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    var FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    var TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    class FutureGroup extends core.Object {
      get future() {
        return this[_completer$].future;
      }
      get isIdle() {
        return this[_pending] === 0;
      }
      get onIdle() {
        if (this[_onIdleController] == null) {
          this[_onIdleController] = async.StreamController.broadcast({sync: true});
        }
        return this[_onIdleController].stream;
      }
      add(task) {
        FutureOfT()._check(task);
        if (dart.test(this[_closed$])) dart.throw(new core.StateError.new("The FutureGroup is closed."));
        let index = this[_values][$length];
        this[_values][$add](null);
        this[_pending] = dart.notNull(this[_pending]) + 1;
        task.then(core.Null, dart.fn(value => {
          if (dart.test(this[_completer$].isCompleted)) return null;
          this[_pending] = dart.notNull(this[_pending]) - 1;
          this[_values][$_set](index, value);
          if (this[_pending] !== 0) return null;
          if (this[_onIdleController] != null) this[_onIdleController].add(null);
          if (!dart.test(this[_closed$])) return null;
          if (this[_onIdleController] != null) this[_onIdleController].close();
          this[_completer$].complete(this[_values]);
        }, TToNull())).catchError(dart.fn((error, stackTrace) => {
          if (dart.test(this[_completer$].isCompleted)) return null;
          this[_completer$].completeError(error, core.StackTrace._check(stackTrace));
        }, dynamicAnddynamicToNull()));
      }
      close() {
        this[_closed$] = true;
        if (this[_pending] !== 0) return;
        if (dart.test(this[_completer$].isCompleted)) return;
        this[_completer$].complete(this[_values]);
      }
    }
    (FutureGroup.new = function() {
      this[_pending] = 0;
      this[_closed$] = false;
      this[_completer$] = CompleterOfListOfT().new();
      this[_onIdleController] = null;
      this[_values] = JSArrayOfT().of([]);
      ;
    }).prototype = FutureGroup.prototype;
    dart.addTypeTests(FutureGroup);
    FutureGroup.prototype[_is_FutureGroup_default] = true;
    FutureGroup[dart.implements] = () => [core.Sink$(async.Future$(T))];
    dart.setMethodSignature(FutureGroup, () => ({
      __proto__: dart.getMethods(FutureGroup.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(FutureGroup, () => ({
      __proto__: dart.getGetters(FutureGroup.__proto__),
      future: async.Future$(core.List$(T)),
      isIdle: core.bool,
      onIdle: async.Stream
    }));
    dart.setLibraryUri(FutureGroup, "package:async/src/future_group.dart");
    dart.setFieldSignature(FutureGroup, () => ({
      __proto__: dart.getFields(FutureGroup.__proto__),
      [_pending]: dart.fieldType(core.int),
      [_closed$]: dart.fieldType(core.bool),
      [_completer$]: dart.finalFieldType(async.Completer$(core.List$(T))),
      [_onIdleController]: dart.fieldType(async.StreamController),
      [_values]: dart.finalFieldType(core.List$(T))
    }));
    return FutureGroup;
  });
  future_group.FutureGroup = future_group.FutureGroup$();
  dart.addTypeTests(future_group.FutureGroup, _is_FutureGroup_default);
  var _subscription$0 = dart.privateName(stream_queue, "_subscription");
  var _isDone$ = dart.privateName(stream_queue, "_isDone");
  var _isClosed$ = dart.privateName(stream_queue, "_isClosed");
  var _eventsReceived = dart.privateName(stream_queue, "_eventsReceived");
  var _eventQueue = dart.privateName(stream_queue, "_eventQueue");
  var _requestQueue = dart.privateName(stream_queue, "_requestQueue");
  var _source$0 = dart.privateName(stream_queue, "_source");
  var _addRequest = dart.privateName(stream_queue, "_addRequest");
  var _failClosed = dart.privateName(stream_queue, "_failClosed");
  var _cancel = dart.privateName(stream_queue, "_cancel");
  var _pause = dart.privateName(stream_queue, "_pause");
  var _updateRequests = dart.privateName(stream_queue, "_updateRequests");
  var _extractStream = dart.privateName(stream_queue, "_extractStream");
  var _addResult = dart.privateName(stream_queue, "_addResult");
  var _close = dart.privateName(stream_queue, "_close");
  var _ensureListening = dart.privateName(stream_queue, "_ensureListening");
  const _is_StreamQueue_default = Symbol('_is_StreamQueue_default');
  stream_queue.StreamQueue$ = dart.generic(T => {
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(queue_list.QueueList$(ResultOfT())))();
    var _HasNextRequestOfT = () => (_HasNextRequestOfT = dart.constFn(stream_queue._HasNextRequest$(T)))();
    var _LookAheadRequestOfT = () => (_LookAheadRequestOfT = dart.constFn(stream_queue._LookAheadRequest$(T)))();
    var _NextRequestOfT = () => (_NextRequestOfT = dart.constFn(stream_queue._NextRequest$(T)))();
    var _PeekRequestOfT = () => (_PeekRequestOfT = dart.constFn(stream_queue._PeekRequest$(T)))();
    var _RestRequestOfT = () => (_RestRequestOfT = dart.constFn(stream_queue._RestRequest$(T)))();
    var _SkipRequestOfT = () => (_SkipRequestOfT = dart.constFn(stream_queue._SkipRequest$(T)))();
    var _TakeRequestOfT = () => (_TakeRequestOfT = dart.constFn(stream_queue._TakeRequest$(T)))();
    var _TransactionRequestOfT = () => (_TransactionRequestOfT = dart.constFn(stream_queue._TransactionRequest$(T)))();
    var _CancelRequestOfT = () => (_CancelRequestOfT = dart.constFn(stream_queue._CancelRequest$(T)))();
    var _EmptyStreamOfT = () => (_EmptyStreamOfT = dart.constFn(async._EmptyStream$(T)))();
    var SubscriptionStreamOfT = () => (SubscriptionStreamOfT = dart.constFn(subscription_stream.SubscriptionStream$(T)))();
    var ValueResultOfT = () => (ValueResultOfT = dart.constFn(value$.ValueResult$(T)))();
    var TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    class StreamQueue extends core.Object {
      get eventsDispatched() {
        return dart.notNull(this[_eventsReceived]) - dart.notNull(this[_eventQueue].length);
      }
      static new(source) {
        return new (stream_queue.StreamQueue$(T)).__(source);
      }
      get hasNext() {
        if (!dart.test(this[_isClosed$])) {
          let hasNextRequest = new (_HasNextRequestOfT()).new();
          this[_addRequest](hasNextRequest);
          return hasNextRequest.future;
        }
        dart.throw(this[_failClosed]());
      }
      lookAhead(count) {
        if (dart.notNull(count) < 0) dart.throw(new core.RangeError.range(count, 0, null, "count"));
        if (!dart.test(this[_isClosed$])) {
          let request = new (_LookAheadRequestOfT()).new(count);
          this[_addRequest](request);
          return request.future;
        }
        dart.throw(this[_failClosed]());
      }
      get next() {
        if (!dart.test(this[_isClosed$])) {
          let nextRequest = new (_NextRequestOfT()).new();
          this[_addRequest](nextRequest);
          return nextRequest.future;
        }
        dart.throw(this[_failClosed]());
      }
      get peek() {
        if (!dart.test(this[_isClosed$])) {
          let nextRequest = new (_PeekRequestOfT()).new();
          this[_addRequest](nextRequest);
          return nextRequest.future;
        }
        dart.throw(this[_failClosed]());
      }
      get rest() {
        if (dart.test(this[_isClosed$])) {
          dart.throw(this[_failClosed]());
        }
        let request = new (_RestRequestOfT()).new(this);
        this[_isClosed$] = true;
        this[_addRequest](request);
        return request.stream;
      }
      skip(count) {
        if (dart.notNull(count) < 0) dart.throw(new core.RangeError.range(count, 0, null, "count"));
        if (!dart.test(this[_isClosed$])) {
          let request = new (_SkipRequestOfT()).new(count);
          this[_addRequest](request);
          return request.future;
        }
        dart.throw(this[_failClosed]());
      }
      take(count) {
        if (dart.notNull(count) < 0) dart.throw(new core.RangeError.range(count, 0, null, "count"));
        if (!dart.test(this[_isClosed$])) {
          let request = new (_TakeRequestOfT()).new(count);
          this[_addRequest](request);
          return request.future;
        }
        dart.throw(this[_failClosed]());
      }
      startTransaction() {
        if (dart.test(this[_isClosed$])) dart.throw(this[_failClosed]());
        let request = new (_TransactionRequestOfT()).new(this);
        this[_addRequest](request);
        return request.transaction;
      }
      withTransaction(callback) {
        let transaction = this.startTransaction();
        let queue = transaction.newQueue();
        return callback(queue).then(core.bool, dart.fn(result => {
          if (dart.test(result)) {
            transaction.commit(queue);
          } else {
            transaction.reject();
          }
          return result;
        }, boolTobool()), {onError: dart.fn(error => {
            transaction.commit(queue);
            dart.throw(error);
          }, dynamicToNull())});
      }
      cancelable(S, callback) {
        let transaction = this.startTransaction();
        let completer = new (cancelable_operation.CancelableCompleter$(S)).new({onCancel: dart.fn(() => {
            transaction.reject();
          }, VoidToNull())});
        let queue = transaction.newQueue();
        completer.complete(callback(queue).whenComplete(dart.fn(() => {
          if (!dart.test(completer.isCanceled)) transaction.commit(queue);
        }, VoidToNull())));
        return completer.operation;
      }
      cancel(opts) {
        let immediate = opts && 'immediate' in opts ? opts.immediate : false;
        if (dart.test(this[_isClosed$])) dart.throw(this[_failClosed]());
        this[_isClosed$] = true;
        if (!dart.test(immediate)) {
          let request = new (_CancelRequestOfT()).new(this);
          this[_addRequest](request);
          return request.future;
        }
        if (dart.test(this[_isDone$]) && dart.test(this[_eventQueue][$isEmpty])) return async.Future.value();
        return this[_cancel]();
      }
      [_updateRequests]() {
        while (dart.test(this[_requestQueue][$isNotEmpty])) {
          if (dart.test(this[_requestQueue][$first].update(this[_eventQueue], this[_isDone$]))) {
            this[_requestQueue].removeFirst();
          } else {
            return;
          }
        }
        if (!dart.test(this[_isDone$])) {
          this[_pause]();
        }
      }
      [_extractStream]() {
        if (!dart.test(this[_isClosed$])) dart.assertFailed(null, "org-dartlang-app:///packages/async/src/stream_queue.dart", 445, 12, "_isClosed");
        if (dart.test(this[_isDone$])) {
          return new (_EmptyStreamOfT()).new();
        }
        this[_isDone$] = true;
        if (this[_subscription$0] == null) {
          return this[_source$0];
        }
        let subscription = this[_subscription$0];
        this[_subscription$0] = null;
        let wasPaused = subscription.isPaused;
        let result = new (SubscriptionStreamOfT()).new(subscription);
        if (dart.test(wasPaused)) subscription.resume();
        return result;
      }
      [_pause]() {
        this[_subscription$0].pause();
      }
      [_ensureListening]() {
        if (dart.test(this[_isDone$])) return;
        if (this[_subscription$0] == null) {
          this[_subscription$0] = this[_source$0].listen(dart.fn(data => {
            this[_addResult](new (ValueResultOfT()).new(data));
          }, TToNull()), {onError: dart.fn((error, stackTrace) => {
              this[_addResult](ResultOfT().error(error, stackTrace));
            }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
              this[_subscription$0] = null;
              this[_close]();
            }, VoidToNull())});
        } else {
          this[_subscription$0].resume();
        }
      }
      [_cancel]() {
        if (dart.test(this[_isDone$])) return null;
        this[_subscription$0] == null ? this[_subscription$0] = this[_source$0].listen(null) : null;
        let future = this[_subscription$0].cancel();
        this[_close]();
        return future;
      }
      [_addResult](result) {
        this[_eventsReceived] = dart.notNull(this[_eventsReceived]) + 1;
        this[_eventQueue].add(result);
        this[_updateRequests]();
      }
      [_close]() {
        this[_isDone$] = true;
        this[_updateRequests]();
      }
      [_failClosed]() {
        return new core.StateError.new("Already cancelled");
      }
      [_addRequest](request) {
        if (dart.test(this[_requestQueue][$isEmpty])) {
          if (dart.test(request.update(this[_eventQueue], this[_isDone$]))) return;
          this[_ensureListening]();
        }
        this[_requestQueue].add(request);
      }
    }
    (StreamQueue.__ = function(_source) {
      this[_subscription$0] = null;
      this[_isDone$] = false;
      this[_isClosed$] = false;
      this[_eventsReceived] = 0;
      this[_eventQueue] = new (QueueListOfResultOfT()).new();
      this[_requestQueue] = new (ListQueueOf_EventRequest()).new();
      this[_source$0] = _source;
      ;
    }).prototype = StreamQueue.prototype;
    dart.addTypeTests(StreamQueue);
    StreamQueue.prototype[_is_StreamQueue_default] = true;
    dart.setMethodSignature(StreamQueue, () => ({
      __proto__: dart.getMethods(StreamQueue.__proto__),
      lookAhead: dart.fnType(async.Future$(core.List$(T)), [core.int]),
      skip: dart.fnType(async.Future$(core.int), [core.int]),
      take: dart.fnType(async.Future$(core.List$(T)), [core.int]),
      startTransaction: dart.fnType(stream_queue.StreamQueueTransaction$(T), []),
      withTransaction: dart.fnType(async.Future$(core.bool), [dart.fnType(async.Future$(core.bool), [stream_queue.StreamQueue$(T)])]),
      cancelable: dart.gFnType(S => [cancelable_operation.CancelableOperation$(S), [dart.fnType(async.Future$(S), [stream_queue.StreamQueue$(T)])]]),
      cancel: dart.fnType(async.Future, [], {immediate: core.bool}, {}),
      [_updateRequests]: dart.fnType(dart.void, []),
      [_extractStream]: dart.fnType(async.Stream$(T), []),
      [_pause]: dart.fnType(dart.void, []),
      [_ensureListening]: dart.fnType(dart.void, []),
      [_cancel]: dart.fnType(async.Future, []),
      [_addResult]: dart.fnType(dart.void, [result.Result$(T)]),
      [_close]: dart.fnType(dart.void, []),
      [_failClosed]: dart.fnType(core.Error, []),
      [_addRequest]: dart.fnType(dart.void, [stream_queue._EventRequest$(T)])
    }));
    dart.setGetterSignature(StreamQueue, () => ({
      __proto__: dart.getGetters(StreamQueue.__proto__),
      eventsDispatched: core.int,
      hasNext: async.Future$(core.bool),
      next: async.Future$(T),
      peek: async.Future$(T),
      rest: async.Stream$(T)
    }));
    dart.setLibraryUri(StreamQueue, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(StreamQueue, () => ({
      __proto__: dart.getFields(StreamQueue.__proto__),
      [_source$0]: dart.finalFieldType(async.Stream$(T)),
      [_subscription$0]: dart.fieldType(async.StreamSubscription$(T)),
      [_isDone$]: dart.fieldType(core.bool),
      [_isClosed$]: dart.fieldType(core.bool),
      [_eventsReceived]: dart.fieldType(core.int),
      [_eventQueue]: dart.finalFieldType(queue_list.QueueList$(result.Result$(T))),
      [_requestQueue]: dart.finalFieldType(collection.Queue$(stream_queue._EventRequest))
    }));
    return StreamQueue;
  });
  stream_queue.StreamQueue = stream_queue.StreamQueue$();
  dart.addTypeTests(stream_queue.StreamQueue, _is_StreamQueue_default);
  var _queues = dart.privateName(stream_queue, "_queues");
  var _committed = dart.privateName(stream_queue, "_committed");
  var _rejected = dart.privateName(stream_queue, "_rejected");
  var _parent$ = dart.privateName(stream_queue, "_parent");
  var _splitter = dart.privateName(stream_queue, "_splitter");
  var _assertActive = dart.privateName(stream_queue, "_assertActive");
  var _done = dart.privateName(stream_queue, "_done");
  const _is_StreamQueueTransaction_default = Symbol('_is_StreamQueueTransaction_default');
  stream_queue.StreamQueueTransaction$ = dart.generic(T => {
    var StreamSplitterOfT = () => (StreamSplitterOfT = dart.constFn(stream_splitter.StreamSplitter$(T)))();
    var StreamQueueOfT = () => (StreamQueueOfT = dart.constFn(stream_queue.StreamQueue$(T)))();
    class StreamQueueTransaction extends core.Object {
      newQueue() {
        let queue = StreamQueueOfT().new(this[_splitter].split());
        this[_queues].add(queue);
        return queue;
      }
      commit(queue) {
        StreamQueueOfT()._check(queue);
        this[_assertActive]();
        if (!dart.test(this[_queues].contains(queue))) {
          dart.throw(new core.ArgumentError.new("Queue doesn't belong to this transaction."));
        } else if (dart.test(queue[_requestQueue][$isNotEmpty])) {
          dart.throw(new core.StateError.new("A queue with pending requests can't be committed."));
        }
        this[_committed] = true;
        for (let j = 0; j < dart.notNull(queue.eventsDispatched); j = j + 1) {
          this[_parent$][_eventQueue].removeFirst();
        }
        this[_done]();
      }
      reject() {
        this[_assertActive]();
        this[_rejected] = true;
        this[_done]();
      }
      [_done]() {
        this[_splitter].close();
        for (let queue of this[_queues]) {
          queue[_cancel]();
        }
        let currentRequest = this[_parent$][_requestQueue][$first];
        if (stream_queue._TransactionRequest.is(currentRequest) && dart.equals(currentRequest.transaction, this)) {
          this[_parent$][_requestQueue].removeFirst();
          this[_parent$][_updateRequests]();
        }
      }
      [_assertActive]() {
        if (dart.test(this[_committed])) {
          dart.throw(new core.StateError.new("This transaction has already been accepted."));
        } else if (dart.test(this[_rejected])) {
          dart.throw(new core.StateError.new("This transaction has already been rejected."));
        }
      }
    }
    (StreamQueueTransaction.__ = function(_parent, source) {
      this[_queues] = new (_HashSetOfStreamQueue()).new();
      this[_committed] = false;
      this[_rejected] = false;
      this[_parent$] = _parent;
      this[_splitter] = new (StreamSplitterOfT()).new(source);
      ;
    }).prototype = StreamQueueTransaction.prototype;
    dart.addTypeTests(StreamQueueTransaction);
    StreamQueueTransaction.prototype[_is_StreamQueueTransaction_default] = true;
    dart.setMethodSignature(StreamQueueTransaction, () => ({
      __proto__: dart.getMethods(StreamQueueTransaction.__proto__),
      newQueue: dart.fnType(stream_queue.StreamQueue$(T), []),
      commit: dart.fnType(dart.void, [core.Object]),
      reject: dart.fnType(dart.void, []),
      [_done]: dart.fnType(dart.void, []),
      [_assertActive]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(StreamQueueTransaction, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(StreamQueueTransaction, () => ({
      __proto__: dart.getFields(StreamQueueTransaction.__proto__),
      [_parent$]: dart.finalFieldType(stream_queue.StreamQueue$(T)),
      [_splitter]: dart.finalFieldType(stream_splitter.StreamSplitter$(T)),
      [_queues]: dart.finalFieldType(core.Set$(stream_queue.StreamQueue)),
      [_committed]: dart.fieldType(core.bool),
      [_rejected]: dart.fieldType(core.bool)
    }));
    return StreamQueueTransaction;
  });
  stream_queue.StreamQueueTransaction = stream_queue.StreamQueueTransaction$();
  dart.addTypeTests(stream_queue.StreamQueueTransaction, _is_StreamQueueTransaction_default);
  const _is__EventRequest_default = Symbol('_is__EventRequest_default');
  stream_queue._EventRequest$ = dart.generic(T => {
    class _EventRequest extends core.Object {}
    (_EventRequest.new = function() {
      ;
    }).prototype = _EventRequest.prototype;
    dart.addTypeTests(_EventRequest);
    _EventRequest.prototype[_is__EventRequest_default] = true;
    dart.setLibraryUri(_EventRequest, "package:async/src/stream_queue.dart");
    return _EventRequest;
  });
  stream_queue._EventRequest = stream_queue._EventRequest$();
  dart.addTypeTests(stream_queue._EventRequest, _is__EventRequest_default);
  var _completer$0 = dart.privateName(stream_queue, "_completer");
  const _is__NextRequest_default = Symbol('_is__NextRequest_default');
  stream_queue._NextRequest$ = dart.generic(T => {
    var CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(queue_list.QueueList$(ResultOfT())))();
    class _NextRequest extends core.Object {
      get future() {
        return this[_completer$0].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events[$isNotEmpty])) {
          events.removeFirst().complete(this[_completer$0]);
          return true;
        }
        if (dart.test(isDone)) {
          this[_completer$0].completeError(new core.StateError.new("No elements"), core.StackTrace.current);
          return true;
        }
        return false;
      }
    }
    (_NextRequest.new = function() {
      this[_completer$0] = CompleterOfT().new();
      ;
    }).prototype = _NextRequest.prototype;
    dart.addTypeTests(_NextRequest);
    _NextRequest.prototype[_is__NextRequest_default] = true;
    _NextRequest[dart.implements] = () => [stream_queue._EventRequest$(T)];
    dart.setMethodSignature(_NextRequest, () => ({
      __proto__: dart.getMethods(_NextRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_NextRequest, () => ({
      __proto__: dart.getGetters(_NextRequest.__proto__),
      future: async.Future$(T)
    }));
    dart.setLibraryUri(_NextRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_NextRequest, () => ({
      __proto__: dart.getFields(_NextRequest.__proto__),
      [_completer$0]: dart.finalFieldType(async.Completer$(T))
    }));
    return _NextRequest;
  });
  stream_queue._NextRequest = stream_queue._NextRequest$();
  dart.addTypeTests(stream_queue._NextRequest, _is__NextRequest_default);
  const _is__PeekRequest_default = Symbol('_is__PeekRequest_default');
  stream_queue._PeekRequest$ = dart.generic(T => {
    var CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(queue_list.QueueList$(ResultOfT())))();
    class _PeekRequest extends core.Object {
      get future() {
        return this[_completer$0].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events[$isNotEmpty])) {
          events[$first].complete(this[_completer$0]);
          return true;
        }
        if (dart.test(isDone)) {
          this[_completer$0].completeError(new core.StateError.new("No elements"), core.StackTrace.current);
          return true;
        }
        return false;
      }
    }
    (_PeekRequest.new = function() {
      this[_completer$0] = CompleterOfT().new();
      ;
    }).prototype = _PeekRequest.prototype;
    dart.addTypeTests(_PeekRequest);
    _PeekRequest.prototype[_is__PeekRequest_default] = true;
    _PeekRequest[dart.implements] = () => [stream_queue._EventRequest$(T)];
    dart.setMethodSignature(_PeekRequest, () => ({
      __proto__: dart.getMethods(_PeekRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_PeekRequest, () => ({
      __proto__: dart.getGetters(_PeekRequest.__proto__),
      future: async.Future$(T)
    }));
    dart.setLibraryUri(_PeekRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_PeekRequest, () => ({
      __proto__: dart.getFields(_PeekRequest.__proto__),
      [_completer$0]: dart.finalFieldType(async.Completer$(T))
    }));
    return _PeekRequest;
  });
  stream_queue._PeekRequest = stream_queue._PeekRequest$();
  dart.addTypeTests(stream_queue._PeekRequest, _is__PeekRequest_default);
  var _eventsToSkip$ = dart.privateName(stream_queue, "_eventsToSkip");
  const _is__SkipRequest_default = Symbol('_is__SkipRequest_default');
  stream_queue._SkipRequest$ = dart.generic(T => {
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(queue_list.QueueList$(ResultOfT())))();
    class _SkipRequest extends core.Object {
      get future() {
        return this[_completer$0].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_eventsToSkip$]) > 0) {
          if (dart.test(events[$isEmpty])) {
            if (dart.test(isDone)) break;
            return false;
          }
          this[_eventsToSkip$] = dart.notNull(this[_eventsToSkip$]) - 1;
          let event = events.removeFirst();
          if (dart.test(event.isError)) {
            this[_completer$0].completeError(event.asError.error, event.asError.stackTrace);
            return true;
          }
        }
        this[_completer$0].complete(this[_eventsToSkip$]);
        return true;
      }
    }
    (_SkipRequest.new = function(_eventsToSkip) {
      this[_completer$0] = CompleterOfint().new();
      this[_eventsToSkip$] = _eventsToSkip;
      ;
    }).prototype = _SkipRequest.prototype;
    dart.addTypeTests(_SkipRequest);
    _SkipRequest.prototype[_is__SkipRequest_default] = true;
    _SkipRequest[dart.implements] = () => [stream_queue._EventRequest$(T)];
    dart.setMethodSignature(_SkipRequest, () => ({
      __proto__: dart.getMethods(_SkipRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_SkipRequest, () => ({
      __proto__: dart.getGetters(_SkipRequest.__proto__),
      future: async.Future$(core.int)
    }));
    dart.setLibraryUri(_SkipRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_SkipRequest, () => ({
      __proto__: dart.getFields(_SkipRequest.__proto__),
      [_completer$0]: dart.finalFieldType(async.Completer$(core.int)),
      [_eventsToSkip$]: dart.fieldType(core.int)
    }));
    return _SkipRequest;
  });
  stream_queue._SkipRequest = stream_queue._SkipRequest$();
  dart.addTypeTests(stream_queue._SkipRequest, _is__SkipRequest_default);
  var _list = dart.privateName(stream_queue, "_list");
  var _eventsToTake$ = dart.privateName(stream_queue, "_eventsToTake");
  const _is__ListRequest_default = Symbol('_is__ListRequest_default');
  stream_queue._ListRequest$ = dart.generic(T => {
    var ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    var CompleterOfListOfT = () => (CompleterOfListOfT = dart.constFn(async.Completer$(ListOfT())))();
    var JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    class _ListRequest extends core.Object {
      get future() {
        return this[_completer$0].future;
      }
    }
    (_ListRequest.new = function(_eventsToTake) {
      this[_completer$0] = CompleterOfListOfT().new();
      this[_list] = JSArrayOfT().of([]);
      this[_eventsToTake$] = _eventsToTake;
      ;
    }).prototype = _ListRequest.prototype;
    dart.addTypeTests(_ListRequest);
    _ListRequest.prototype[_is__ListRequest_default] = true;
    _ListRequest[dart.implements] = () => [stream_queue._EventRequest$(T)];
    dart.setGetterSignature(_ListRequest, () => ({
      __proto__: dart.getGetters(_ListRequest.__proto__),
      future: async.Future$(core.List$(T))
    }));
    dart.setLibraryUri(_ListRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_ListRequest, () => ({
      __proto__: dart.getFields(_ListRequest.__proto__),
      [_completer$0]: dart.finalFieldType(async.Completer$(core.List$(T))),
      [_list]: dart.finalFieldType(core.List$(T)),
      [_eventsToTake$]: dart.finalFieldType(core.int)
    }));
    return _ListRequest;
  });
  stream_queue._ListRequest = stream_queue._ListRequest$();
  dart.addTypeTests(stream_queue._ListRequest, _is__ListRequest_default);
  const _is__TakeRequest_default = Symbol('_is__TakeRequest_default');
  stream_queue._TakeRequest$ = dart.generic(T => {
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(queue_list.QueueList$(ResultOfT())))();
    class _TakeRequest extends stream_queue._ListRequest$(T) {
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_list][$length]) < dart.notNull(this[_eventsToTake$])) {
          if (dart.test(events[$isEmpty])) {
            if (dart.test(isDone)) break;
            return false;
          }
          let event = events.removeFirst();
          if (dart.test(event.isError)) {
            event.asError.complete(this[_completer$0]);
            return true;
          }
          this[_list][$add](event.asValue.value);
        }
        this[_completer$0].complete(this[_list]);
        return true;
      }
    }
    (_TakeRequest.new = function(eventsToTake) {
      _TakeRequest.__proto__.new.call(this, eventsToTake);
      ;
    }).prototype = _TakeRequest.prototype;
    dart.addTypeTests(_TakeRequest);
    _TakeRequest.prototype[_is__TakeRequest_default] = true;
    dart.setMethodSignature(_TakeRequest, () => ({
      __proto__: dart.getMethods(_TakeRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setLibraryUri(_TakeRequest, "package:async/src/stream_queue.dart");
    return _TakeRequest;
  });
  stream_queue._TakeRequest = stream_queue._TakeRequest$();
  dart.addTypeTests(stream_queue._TakeRequest, _is__TakeRequest_default);
  const _is__LookAheadRequest_default = Symbol('_is__LookAheadRequest_default');
  stream_queue._LookAheadRequest$ = dart.generic(T => {
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(queue_list.QueueList$(ResultOfT())))();
    class _LookAheadRequest extends stream_queue._ListRequest$(T) {
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_list][$length]) < dart.notNull(this[_eventsToTake$])) {
          if (events.length == this[_list][$length]) {
            if (dart.test(isDone)) break;
            return false;
          }
          let event = events[$elementAt](this[_list][$length]);
          if (dart.test(event.isError)) {
            event.asError.complete(this[_completer$0]);
            return true;
          }
          this[_list][$add](event.asValue.value);
        }
        this[_completer$0].complete(this[_list]);
        return true;
      }
    }
    (_LookAheadRequest.new = function(eventsToTake) {
      _LookAheadRequest.__proto__.new.call(this, eventsToTake);
      ;
    }).prototype = _LookAheadRequest.prototype;
    dart.addTypeTests(_LookAheadRequest);
    _LookAheadRequest.prototype[_is__LookAheadRequest_default] = true;
    dart.setMethodSignature(_LookAheadRequest, () => ({
      __proto__: dart.getMethods(_LookAheadRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setLibraryUri(_LookAheadRequest, "package:async/src/stream_queue.dart");
    return _LookAheadRequest;
  });
  stream_queue._LookAheadRequest = stream_queue._LookAheadRequest$();
  dart.addTypeTests(stream_queue._LookAheadRequest, _is__LookAheadRequest_default);
  var _streamQueue$ = dart.privateName(stream_queue, "_streamQueue");
  const _is__CancelRequest_default = Symbol('_is__CancelRequest_default');
  stream_queue._CancelRequest$ = dart.generic(T => {
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(queue_list.QueueList$(ResultOfT())))();
    class _CancelRequest extends core.Object {
      get future() {
        return this[_completer$0].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(this[_streamQueue$][_isDone$])) {
          this[_completer$0].complete();
        } else {
          this[_streamQueue$][_ensureListening]();
          this[_completer$0].complete(this[_streamQueue$][_extractStream]().listen(null).cancel());
        }
        return true;
      }
    }
    (_CancelRequest.new = function(_streamQueue) {
      this[_completer$0] = async.Completer.new();
      this[_streamQueue$] = _streamQueue;
      ;
    }).prototype = _CancelRequest.prototype;
    dart.addTypeTests(_CancelRequest);
    _CancelRequest.prototype[_is__CancelRequest_default] = true;
    _CancelRequest[dart.implements] = () => [stream_queue._EventRequest$(T)];
    dart.setMethodSignature(_CancelRequest, () => ({
      __proto__: dart.getMethods(_CancelRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_CancelRequest, () => ({
      __proto__: dart.getGetters(_CancelRequest.__proto__),
      future: async.Future
    }));
    dart.setLibraryUri(_CancelRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_CancelRequest, () => ({
      __proto__: dart.getFields(_CancelRequest.__proto__),
      [_completer$0]: dart.finalFieldType(async.Completer),
      [_streamQueue$]: dart.finalFieldType(stream_queue.StreamQueue)
    }));
    return _CancelRequest;
  });
  stream_queue._CancelRequest = stream_queue._CancelRequest$();
  dart.addTypeTests(stream_queue._CancelRequest, _is__CancelRequest_default);
  const _is__RestRequest_default = Symbol('_is__RestRequest_default');
  stream_queue._RestRequest$ = dart.generic(T => {
    var StreamCompleterOfT = () => (StreamCompleterOfT = dart.constFn(stream_completer.StreamCompleter$(T)))();
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(queue_list.QueueList$(ResultOfT())))();
    var StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class _RestRequest extends core.Object {
      get stream() {
        return this[_completer$0].stream;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events[$isEmpty])) {
          if (dart.test(this[_streamQueue$][_isDone$])) {
            this[_completer$0].setEmpty();
          } else {
            this[_completer$0].setSourceStream(this[_streamQueue$][_extractStream]());
          }
        } else {
          let controller = StreamControllerOfT().new();
          for (let event of events) {
            event.addTo(controller);
          }
          controller.addStream(this[_streamQueue$][_extractStream](), {cancelOnError: false}).whenComplete(dart.bind(controller, 'close'));
          this[_completer$0].setSourceStream(controller.stream);
        }
        return true;
      }
    }
    (_RestRequest.new = function(_streamQueue) {
      this[_completer$0] = new (StreamCompleterOfT()).new();
      this[_streamQueue$] = _streamQueue;
      ;
    }).prototype = _RestRequest.prototype;
    dart.addTypeTests(_RestRequest);
    _RestRequest.prototype[_is__RestRequest_default] = true;
    _RestRequest[dart.implements] = () => [stream_queue._EventRequest$(T)];
    dart.setMethodSignature(_RestRequest, () => ({
      __proto__: dart.getMethods(_RestRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_RestRequest, () => ({
      __proto__: dart.getGetters(_RestRequest.__proto__),
      stream: async.Stream$(T)
    }));
    dart.setLibraryUri(_RestRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_RestRequest, () => ({
      __proto__: dart.getFields(_RestRequest.__proto__),
      [_completer$0]: dart.finalFieldType(stream_completer.StreamCompleter$(T)),
      [_streamQueue$]: dart.finalFieldType(stream_queue.StreamQueue$(T))
    }));
    return _RestRequest;
  });
  stream_queue._RestRequest = stream_queue._RestRequest$();
  dart.addTypeTests(stream_queue._RestRequest, _is__RestRequest_default);
  const _is__HasNextRequest_default = Symbol('_is__HasNextRequest_default');
  stream_queue._HasNextRequest$ = dart.generic(T => {
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(queue_list.QueueList$(ResultOfT())))();
    class _HasNextRequest extends core.Object {
      get future() {
        return this[_completer$0].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events[$isNotEmpty])) {
          this[_completer$0].complete(true);
          return true;
        }
        if (dart.test(isDone)) {
          this[_completer$0].complete(false);
          return true;
        }
        return false;
      }
    }
    (_HasNextRequest.new = function() {
      this[_completer$0] = CompleterOfbool().new();
      ;
    }).prototype = _HasNextRequest.prototype;
    dart.addTypeTests(_HasNextRequest);
    _HasNextRequest.prototype[_is__HasNextRequest_default] = true;
    _HasNextRequest[dart.implements] = () => [stream_queue._EventRequest$(T)];
    dart.setMethodSignature(_HasNextRequest, () => ({
      __proto__: dart.getMethods(_HasNextRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_HasNextRequest, () => ({
      __proto__: dart.getGetters(_HasNextRequest.__proto__),
      future: async.Future$(core.bool)
    }));
    dart.setLibraryUri(_HasNextRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_HasNextRequest, () => ({
      __proto__: dart.getFields(_HasNextRequest.__proto__),
      [_completer$0]: dart.finalFieldType(async.Completer$(core.bool))
    }));
    return _HasNextRequest;
  });
  stream_queue._HasNextRequest = stream_queue._HasNextRequest$();
  dart.addTypeTests(stream_queue._HasNextRequest, _is__HasNextRequest_default);
  var _transaction = dart.privateName(stream_queue, "_transaction");
  var _controller$1 = dart.privateName(stream_queue, "_controller");
  var _eventsSent = dart.privateName(stream_queue, "_eventsSent");
  const _is__TransactionRequest_default = Symbol('_is__TransactionRequest_default');
  stream_queue._TransactionRequest$ = dart.generic(T => {
    var StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    var StreamQueueTransactionOfT = () => (StreamQueueTransactionOfT = dart.constFn(stream_queue.StreamQueueTransaction$(T)))();
    var ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    var QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(queue_list.QueueList$(ResultOfT())))();
    class _TransactionRequest extends core.Object {
      get transaction() {
        return this[_transaction];
      }
      update(events, isDone) {
        let t2;
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_eventsSent]) < dart.notNull(events.length)) {
          events._get((t2 = this[_eventsSent], this[_eventsSent] = dart.notNull(t2) + 1, t2)).addTo(this[_controller$1]);
        }
        if (dart.test(isDone) && !dart.test(this[_controller$1].isClosed)) this[_controller$1].close();
        return dart.test(this.transaction[_committed]) || dart.test(this[_transaction][_rejected]);
      }
    }
    (_TransactionRequest.new = function(parent) {
      this[_transaction] = null;
      this[_controller$1] = StreamControllerOfT().new({sync: true});
      this[_eventsSent] = 0;
      this[_transaction] = new (StreamQueueTransactionOfT()).__(parent, this[_controller$1].stream);
    }).prototype = _TransactionRequest.prototype;
    dart.addTypeTests(_TransactionRequest);
    _TransactionRequest.prototype[_is__TransactionRequest_default] = true;
    _TransactionRequest[dart.implements] = () => [stream_queue._EventRequest$(T)];
    dart.setMethodSignature(_TransactionRequest, () => ({
      __proto__: dart.getMethods(_TransactionRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_TransactionRequest, () => ({
      __proto__: dart.getGetters(_TransactionRequest.__proto__),
      transaction: stream_queue.StreamQueueTransaction$(T)
    }));
    dart.setLibraryUri(_TransactionRequest, "package:async/src/stream_queue.dart");
    dart.setFieldSignature(_TransactionRequest, () => ({
      __proto__: dart.getFields(_TransactionRequest.__proto__),
      [_transaction]: dart.fieldType(stream_queue.StreamQueueTransaction$(T)),
      [_controller$1]: dart.finalFieldType(async.StreamController$(T)),
      [_eventsSent]: dart.fieldType(core.int)
    }));
    return _TransactionRequest;
  });
  stream_queue._TransactionRequest = stream_queue._TransactionRequest$();
  dart.addTypeTests(stream_queue._TransactionRequest, _is__TransactionRequest_default);
  var _completer$1 = dart.privateName(cancelable_operation, "_completer");
  var _inner$3 = dart.privateName(cancelable_operation, "_inner");
  var _cancel$ = dart.privateName(cancelable_operation, "_cancel");
  var _cancelMemo = dart.privateName(cancelable_operation, "_cancelMemo");
  const _is_CancelableOperation_default = Symbol('_is_CancelableOperation_default');
  cancelable_operation.CancelableOperation$ = dart.generic(T => {
    var StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    var TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    var CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    var TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class CancelableOperation extends core.Object {
      static fromFuture(inner, opts) {
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let completer = new (cancelable_operation.CancelableCompleter$(T)).new({onCancel: onCancel});
        completer.complete(inner);
        return completer.operation;
      }
      get value() {
        return this[_completer$1][_inner$3].future;
      }
      asStream() {
        let controller = StreamControllerOfT().new({sync: true, onCancel: dart.bind(this[_completer$1], _cancel$)});
        this.value.then(core.Null, dart.fn(value => {
          controller.add(value);
          controller.close();
        }, TToNull()), {onError: dart.fn((error, stackTrace) => {
            controller.addError(error, core.StackTrace._check(stackTrace));
            controller.close();
          }, dynamicAnddynamicToNull())});
        return controller.stream;
      }
      valueOrCancellation(cancellationValue = null) {
        T._check(cancellationValue);
        let completer = CompleterOfT().sync();
        this.value.then(dart.void, dart.fn(result => completer.complete(result), TTovoid()), {onError: dart.bind(completer, 'completeError')});
        this[_completer$1][_cancelMemo].future.then(core.Null, dart.fn(_ => {
          completer.complete(cancellationValue);
        }, dynamicToNull()), {onError: dart.bind(completer, 'completeError')});
        return completer.future;
      }
      then(R, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let propagateCancel = opts && 'propagateCancel' in opts ? opts.propagateCancel : false;
        let completer = new (cancelable_operation.CancelableCompleter$(R)).new({onCancel: dart.test(propagateCancel) ? dart.bind(this, 'cancel') : null});
        this.valueOrCancellation().then(core.Null, dart.fn(result => {
          if (!dart.test(completer.isCanceled)) {
            if (dart.test(this.isCompleted)) {
              completer.complete(async.Future$(R).sync(dart.fn(() => onValue(result), dart.fnType(async.FutureOr$(R), []))));
            } else if (onCancel != null) {
              completer.complete(async.Future$(R).sync(onCancel));
            } else {
              completer[_cancel$]();
            }
          }
        }, TToNull()), {onError: dart.fn((error, stackTrace) => {
            if (!dart.test(completer.isCanceled)) {
              if (onError != null) {
                completer.complete(async.Future$(R).sync(dart.fn(() => onError(error, core.StackTrace._check(stackTrace)), dart.fnType(async.FutureOr$(R), []))));
              } else {
                completer.completeError(error, core.StackTrace._check(stackTrace));
              }
            }
          }, dynamicAnddynamicToNull())});
        return completer.operation;
      }
      cancel() {
        return this[_completer$1][_cancel$]();
      }
      get isCanceled() {
        return this[_completer$1].isCanceled;
      }
      get isCompleted() {
        return this[_completer$1].isCompleted;
      }
    }
    (CancelableOperation.__ = function(_completer) {
      this[_completer$1] = _completer;
      ;
    }).prototype = CancelableOperation.prototype;
    dart.addTypeTests(CancelableOperation);
    CancelableOperation.prototype[_is_CancelableOperation_default] = true;
    dart.setMethodSignature(CancelableOperation, () => ({
      __proto__: dart.getMethods(CancelableOperation.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      valueOrCancellation: dart.fnType(async.Future$(T), [], [core.Object]),
      then: dart.gFnType(R => [cancelable_operation.CancelableOperation$(R), [dart.fnType(async.FutureOr$(R), [T])], {onCancel: dart.fnType(async.FutureOr$(R), []), onError: dart.fnType(async.FutureOr$(R), [core.Object, core.StackTrace]), propagateCancel: core.bool}, {}]),
      cancel: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(CancelableOperation, () => ({
      __proto__: dart.getGetters(CancelableOperation.__proto__),
      value: async.Future$(T),
      isCanceled: core.bool,
      isCompleted: core.bool
    }));
    dart.setLibraryUri(CancelableOperation, "package:async/src/cancelable_operation.dart");
    dart.setFieldSignature(CancelableOperation, () => ({
      __proto__: dart.getFields(CancelableOperation.__proto__),
      [_completer$1]: dart.finalFieldType(cancelable_operation.CancelableCompleter$(T))
    }));
    return CancelableOperation;
  });
  cancelable_operation.CancelableOperation = cancelable_operation.CancelableOperation$();
  dart.addTypeTests(cancelable_operation.CancelableOperation, _is_CancelableOperation_default);
  var _operation = dart.privateName(cancelable_operation, "_operation");
  var _isCompleted = dart.privateName(cancelable_operation, "_isCompleted");
  var _isCanceled = dart.privateName(cancelable_operation, "_isCanceled");
  var _onCancel$ = dart.privateName(cancelable_operation, "_onCancel");
  const _is_CancelableCompleter_default = Symbol('_is_CancelableCompleter_default');
  cancelable_operation.CancelableCompleter$ = dart.generic(T => {
    var CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    var CancelableOperationOfT = () => (CancelableOperationOfT = dart.constFn(cancelable_operation.CancelableOperation$(T)))();
    var FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    class CancelableCompleter extends core.Object {
      get operation() {
        return this[_operation];
      }
      get isCompleted() {
        return this[_isCompleted];
      }
      get isCanceled() {
        return this[_isCanceled];
      }
      complete(value = null) {
        if (dart.test(this[_isCompleted])) dart.throw(new core.StateError.new("Operation already completed"));
        this[_isCompleted] = true;
        if (!async.Future.is(value)) {
          if (dart.test(this[_isCanceled])) return;
          this[_inner$3].complete(FutureOrOfT()._check(value));
          return;
        }
        if (dart.test(this[_isCanceled])) {
          dart.dsend(value, 'catchError', [dart.fn(_ => {
            }, dynamicToNull())]);
          return;
        }
        dart.dsend(value, 'then', [dart.fn(result => {
            if (dart.test(this[_isCanceled])) return;
            this[_inner$3].complete(FutureOrOfT()._check(result));
          }, dynamicToNull())], {onError: dart.fn((error, stackTrace) => {
            if (dart.test(this[_isCanceled])) return;
            this[_inner$3].completeError(error, core.StackTrace._check(stackTrace));
          }, dynamicAnddynamicToNull())});
      }
      completeError(error, stackTrace = null) {
        if (dart.test(this[_isCompleted])) dart.throw(new core.StateError.new("Operation already completed"));
        this[_isCompleted] = true;
        if (dart.test(this[_isCanceled])) return;
        this[_inner$3].completeError(error, stackTrace);
      }
      [_cancel$]() {
        if (dart.test(this[_inner$3].isCompleted)) return async.Future.value();
        return this[_cancelMemo].runOnce(dart.fn(() => {
          this[_isCanceled] = true;
          if (this[_onCancel$] != null) return this[_onCancel$]();
        }, VoidToFutureOr()));
      }
    }
    (CancelableCompleter.new = function(opts) {
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      this[_operation] = null;
      this[_isCompleted] = false;
      this[_isCanceled] = false;
      this[_cancelMemo] = new async_memoizer.AsyncMemoizer.new();
      this[_onCancel$] = onCancel;
      this[_inner$3] = CompleterOfT().new();
      this[_operation] = new (CancelableOperationOfT()).__(this);
    }).prototype = CancelableCompleter.prototype;
    dart.addTypeTests(CancelableCompleter);
    CancelableCompleter.prototype[_is_CancelableCompleter_default] = true;
    dart.setMethodSignature(CancelableCompleter, () => ({
      __proto__: dart.getMethods(CancelableCompleter.__proto__),
      complete: dart.fnType(dart.void, [], [dart.dynamic]),
      completeError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      [_cancel$]: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(CancelableCompleter, () => ({
      __proto__: dart.getGetters(CancelableCompleter.__proto__),
      operation: cancelable_operation.CancelableOperation$(T),
      isCompleted: core.bool,
      isCanceled: core.bool
    }));
    dart.setLibraryUri(CancelableCompleter, "package:async/src/cancelable_operation.dart");
    dart.setFieldSignature(CancelableCompleter, () => ({
      __proto__: dart.getFields(CancelableCompleter.__proto__),
      [_inner$3]: dart.finalFieldType(async.Completer$(T)),
      [_onCancel$]: dart.finalFieldType(dart.fnType(async.FutureOr, [])),
      [_operation]: dart.fieldType(cancelable_operation.CancelableOperation$(T)),
      [_isCompleted]: dart.fieldType(core.bool),
      [_isCanceled]: dart.fieldType(core.bool),
      [_cancelMemo]: dart.finalFieldType(async_memoizer.AsyncMemoizer)
    }));
    return CancelableCompleter;
  });
  cancelable_operation.CancelableCompleter = cancelable_operation.CancelableCompleter$();
  dart.addTypeTests(cancelable_operation.CancelableCompleter, _is_CancelableCompleter_default);
  var _controller$2 = dart.privateName(stream_group, "_controller");
  var _closed$0 = dart.privateName(stream_group, "_closed");
  var _state = dart.privateName(stream_group, "_state");
  var _subscriptions = dart.privateName(stream_group, "_subscriptions");
  var _onListen$ = dart.privateName(stream_group, "_onListen");
  var _onPause$ = dart.privateName(stream_group, "_onPause");
  var _onResume$ = dart.privateName(stream_group, "_onResume");
  var _onCancel$0 = dart.privateName(stream_group, "_onCancel");
  var _onCancelBroadcast = dart.privateName(stream_group, "_onCancelBroadcast");
  var _listenToStream = dart.privateName(stream_group, "_listenToStream");
  const _is_StreamGroup_default = Symbol('_is_StreamGroup_default');
  stream_group.StreamGroup$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    var StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    var LinkedMapOfStreamOfT$StreamSubscriptionOfT = () => (LinkedMapOfStreamOfT$StreamSubscriptionOfT = dart.constFn(_js_helper.LinkedMap$(StreamOfT(), StreamSubscriptionOfT())))();
    var StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    var VoidToStreamSubscriptionOfT = () => (VoidToStreamSubscriptionOfT = dart.constFn(dart.fnType(StreamSubscriptionOfT(), [])))();
    var StreamOfTAndStreamSubscriptionOfTToNull = () => (StreamOfTAndStreamSubscriptionOfTToNull = dart.constFn(dart.fnType(core.Null, [StreamOfT(), StreamSubscriptionOfT()])))();
    var StreamSubscriptionOfTToFuture = () => (StreamSubscriptionOfTToFuture = dart.constFn(dart.fnType(async.Future, [StreamSubscriptionOfT()])))();
    class StreamGroup extends core.Object {
      get stream() {
        return this[_controller$2].stream;
      }
      static merge(T, streams) {
        let group = new (stream_group.StreamGroup$(T)).new();
        streams[$forEach](dart.bind(group, 'add'));
        group.close();
        return group.stream;
      }
      static mergeBroadcast(T, streams) {
        let group = new (stream_group.StreamGroup$(T)).broadcast();
        streams[$forEach](dart.bind(group, 'add'));
        group.close();
        return group.stream;
      }
      add(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_closed$0])) {
          dart.throw(new core.StateError.new("Can't add a Stream to a closed StreamGroup."));
        }
        if (dart.equals(this[_state], stream_group._StreamGroupState.dormant)) {
          this[_subscriptions][$putIfAbsent](stream, dart.fn(() => null, VoidToNull()));
        } else if (dart.equals(this[_state], stream_group._StreamGroupState.canceled)) {
          return stream.listen(null).cancel();
        } else {
          this[_subscriptions][$putIfAbsent](stream, dart.fn(() => this[_listenToStream](stream), VoidToStreamSubscriptionOfT()));
        }
        return null;
      }
      remove(stream) {
        StreamOfT()._check(stream);
        let subscription = this[_subscriptions][$remove](stream);
        let future = subscription == null ? null : subscription.cancel();
        if (dart.test(this[_closed$0]) && dart.test(this[_subscriptions][$isEmpty])) this[_controller$2].close();
        return future;
      }
      [_onListen$]() {
        this[_state] = stream_group._StreamGroupState.listening;
        this[_subscriptions][$forEach](dart.fn((stream, subscription) => {
          if (subscription != null) return;
          this[_subscriptions][$_set](stream, this[_listenToStream](stream));
        }, StreamOfTAndStreamSubscriptionOfTToNull()));
      }
      [_onPause$]() {
        this[_state] = stream_group._StreamGroupState.paused;
        for (let subscription of this[_subscriptions][$values]) {
          subscription.pause();
        }
      }
      [_onResume$]() {
        this[_state] = stream_group._StreamGroupState.listening;
        for (let subscription of this[_subscriptions][$values]) {
          subscription.resume();
        }
      }
      [_onCancel$0]() {
        this[_state] = stream_group._StreamGroupState.canceled;
        let futures = this[_subscriptions][$values][$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionOfTToFuture()))[$where](dart.fn(future => future != null, FutureTobool()))[$toList]();
        this[_subscriptions][$clear]();
        return dart.test(futures[$isEmpty]) ? null : async.Future.wait(dart.dynamic, futures);
      }
      [_onCancelBroadcast]() {
        this[_state] = stream_group._StreamGroupState.dormant;
        this[_subscriptions][$forEach](dart.fn((stream, subscription) => {
          if (!dart.test(stream.isBroadcast)) return;
          subscription.cancel();
          this[_subscriptions][$_set](stream, null);
        }, StreamOfTAndStreamSubscriptionOfTToNull()));
      }
      [_listenToStream](stream) {
        let subscription = stream.listen(dart.bind(this[_controller$2], 'add'), {onError: dart.bind(this[_controller$2], 'addError'), onDone: dart.fn(() => this.remove(stream), VoidToFuture())});
        if (dart.equals(this[_state], stream_group._StreamGroupState.paused)) subscription.pause();
        return subscription;
      }
      close() {
        if (dart.test(this[_closed$0])) return this[_controller$2].done;
        this[_closed$0] = true;
        if (dart.test(this[_subscriptions][$isEmpty])) this[_controller$2].close();
        return this[_controller$2].done;
      }
    }
    (StreamGroup.new = function() {
      this[_controller$2] = null;
      this[_closed$0] = false;
      this[_state] = stream_group._StreamGroupState.dormant;
      this[_subscriptions] = new (LinkedMapOfStreamOfT$StreamSubscriptionOfT()).new();
      this[_controller$2] = StreamControllerOfT().new({onListen: dart.bind(this, _onListen$), onPause: dart.bind(this, _onPause$), onResume: dart.bind(this, _onResume$), onCancel: dart.bind(this, _onCancel$0), sync: true});
    }).prototype = StreamGroup.prototype;
    (StreamGroup.broadcast = function() {
      this[_controller$2] = null;
      this[_closed$0] = false;
      this[_state] = stream_group._StreamGroupState.dormant;
      this[_subscriptions] = new (LinkedMapOfStreamOfT$StreamSubscriptionOfT()).new();
      this[_controller$2] = StreamControllerOfT().broadcast({onListen: dart.bind(this, _onListen$), onCancel: dart.bind(this, _onCancelBroadcast), sync: true});
    }).prototype = StreamGroup.prototype;
    dart.addTypeTests(StreamGroup);
    StreamGroup.prototype[_is_StreamGroup_default] = true;
    StreamGroup[dart.implements] = () => [core.Sink$(async.Stream$(T))];
    dart.setMethodSignature(StreamGroup, () => ({
      __proto__: dart.getMethods(StreamGroup.__proto__),
      add: dart.fnType(async.Future, [core.Object]),
      remove: dart.fnType(async.Future, [core.Object]),
      [_onListen$]: dart.fnType(dart.void, []),
      [_onPause$]: dart.fnType(dart.void, []),
      [_onResume$]: dart.fnType(dart.void, []),
      [_onCancel$0]: dart.fnType(async.Future, []),
      [_onCancelBroadcast]: dart.fnType(dart.void, []),
      [_listenToStream]: dart.fnType(async.StreamSubscription$(T), [async.Stream$(T)]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(StreamGroup, () => ({
      __proto__: dart.getGetters(StreamGroup.__proto__),
      stream: async.Stream$(T)
    }));
    dart.setLibraryUri(StreamGroup, "package:async/src/stream_group.dart");
    dart.setFieldSignature(StreamGroup, () => ({
      __proto__: dart.getFields(StreamGroup.__proto__),
      [_controller$2]: dart.fieldType(async.StreamController$(T)),
      [_closed$0]: dart.fieldType(core.bool),
      [_state]: dart.fieldType(stream_group._StreamGroupState),
      [_subscriptions]: dart.finalFieldType(core.Map$(async.Stream$(T), async.StreamSubscription$(T)))
    }));
    return StreamGroup;
  });
  stream_group.StreamGroup = stream_group.StreamGroup$();
  dart.addTypeTests(stream_group.StreamGroup, _is_StreamGroup_default);
  var name$ = dart.privateName(stream_group, "_StreamGroupState.name");
  var C6;
  var C7;
  var C8;
  var C9;
  stream_group._StreamGroupState = class _StreamGroupState extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    toString() {
      return this.name;
    }
  };
  (stream_group._StreamGroupState.new = function(name) {
    this[name$] = name;
    ;
  }).prototype = stream_group._StreamGroupState.prototype;
  dart.addTypeTests(stream_group._StreamGroupState);
  dart.setLibraryUri(stream_group._StreamGroupState, "package:async/src/stream_group.dart");
  dart.setFieldSignature(stream_group._StreamGroupState, () => ({
    __proto__: dart.getFields(stream_group._StreamGroupState.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(stream_group._StreamGroupState, ['toString']);
  dart.defineLazy(stream_group._StreamGroupState, {
    /*stream_group._StreamGroupState.dormant*/get dormant() {
      return C6 || CT.C6;
    },
    /*stream_group._StreamGroupState.listening*/get listening() {
      return C7 || CT.C7;
    },
    /*stream_group._StreamGroupState.paused*/get paused() {
      return C8 || CT.C8;
    },
    /*stream_group._StreamGroupState.canceled*/get canceled() {
      return C9 || CT.C9;
    }
  });
  const _is_SingleSubscriptionTransformer_default = Symbol('_is_SingleSubscriptionTransformer_default');
  single_subscription_transformer.SingleSubscriptionTransformer$ = dart.generic((S, T) => {
    var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    var SToNull = () => (SToNull = dart.constFn(dart.fnType(core.Null, [S])))();
    var StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class SingleSubscriptionTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        let subscription = null;
        let controller = StreamControllerOfT().new({sync: true, onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
        subscription = stream.listen(dart.fn(value => {
          try {
            controller.add(T.as(value));
          } catch (e) {
            let error = dart.getThrown(e);
            let stackTrace = dart.stackTrace(e);
            if (core.CastError.is(error)) {
              controller.addError(error, stackTrace);
            } else
              throw e;
          }
        }, SToNull()), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close')});
        return controller.stream;
      }
    }
    (SingleSubscriptionTransformer.new = function() {
      SingleSubscriptionTransformer.__proto__.new.call(this);
      ;
    }).prototype = SingleSubscriptionTransformer.prototype;
    dart.addTypeTests(SingleSubscriptionTransformer);
    SingleSubscriptionTransformer.prototype[_is_SingleSubscriptionTransformer_default] = true;
    dart.setMethodSignature(SingleSubscriptionTransformer, () => ({
      __proto__: dart.getMethods(SingleSubscriptionTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(SingleSubscriptionTransformer, "package:async/src/single_subscription_transformer.dart");
    return SingleSubscriptionTransformer;
  });
  single_subscription_transformer.SingleSubscriptionTransformer = single_subscription_transformer.SingleSubscriptionTransformer$();
  dart.addTypeTests(single_subscription_transformer.SingleSubscriptionTransformer, _is_SingleSubscriptionTransformer_default);
  var _duration$ = dart.privateName(restartable_timer, "_duration");
  var _callback$ = dart.privateName(restartable_timer, "_callback");
  var _timer = dart.privateName(restartable_timer, "_timer");
  restartable_timer.RestartableTimer = class RestartableTimer extends core.Object {
    get isActive() {
      return this[_timer].isActive;
    }
    reset() {
      this[_timer].cancel();
      this[_timer] = async.Timer.new(this[_duration$], this[_callback$]);
    }
    cancel() {
      this[_timer].cancel();
    }
    get tick() {
      return this[_timer].tick;
    }
  };
  (restartable_timer.RestartableTimer.new = function(_duration, _callback) {
    this[_duration$] = _duration;
    this[_callback$] = _callback;
    this[_timer] = async.Timer.new(_duration, _callback);
    ;
  }).prototype = restartable_timer.RestartableTimer.prototype;
  dart.addTypeTests(restartable_timer.RestartableTimer);
  restartable_timer.RestartableTimer[dart.implements] = () => [async.Timer];
  dart.setMethodSignature(restartable_timer.RestartableTimer, () => ({
    __proto__: dart.getMethods(restartable_timer.RestartableTimer.__proto__),
    reset: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(restartable_timer.RestartableTimer, () => ({
    __proto__: dart.getGetters(restartable_timer.RestartableTimer.__proto__),
    isActive: core.bool,
    tick: core.int
  }));
  dart.setLibraryUri(restartable_timer.RestartableTimer, "package:async/src/restartable_timer.dart");
  dart.setFieldSignature(restartable_timer.RestartableTimer, () => ({
    __proto__: dart.getFields(restartable_timer.RestartableTimer.__proto__),
    [_duration$]: dart.finalFieldType(core.Duration),
    [_callback$]: dart.finalFieldType(dart.fnType(dart.dynamic, [])),
    [_timer]: dart.fieldType(async.Timer)
  }));
  var _callback = dart.privateName(lazy_stream, "_callback");
  const _is_LazyStream_default = Symbol('_is_LazyStream_default');
  lazy_stream.LazyStream$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    var FutureOfStreamOfT = () => (FutureOfStreamOfT = dart.constFn(async.Future$(StreamOfT())))();
    var StreamOfTToStreamOfT = () => (StreamOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [StreamOfT()])))();
    class LazyStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (this[_callback] == null) {
          dart.throw(new core.StateError.new("Stream has already been listened to."));
        }
        let callback = this[_callback];
        this[_callback] = null;
        let result = callback();
        let stream = null;
        if (FutureOfStreamOfT().is(result)) {
          stream = stream_completer.StreamCompleter.fromFuture(T, result.then(StreamOfT(), dart.fn(stream => stream$.DelegatingStream.typed(T, stream), StreamOfTToStreamOfT())));
        } else {
          stream = stream$.DelegatingStream.typed(T, async.Stream.as(result));
        }
        return stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (LazyStream.new = function(callback) {
      this[_callback] = callback;
      LazyStream.__proto__.new.call(this);
      if (this[_callback] == null) dart.throw(new core.ArgumentError.notNull("callback"));
    }).prototype = LazyStream.prototype;
    dart.addTypeTests(LazyStream);
    LazyStream.prototype[_is_LazyStream_default] = true;
    dart.setMethodSignature(LazyStream, () => ({
      __proto__: dart.getMethods(LazyStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(LazyStream, "package:async/src/lazy_stream.dart");
    dart.setFieldSignature(LazyStream, () => ({
      __proto__: dart.getFields(LazyStream.__proto__),
      [_callback]: dart.fieldType(dart.fnType(async.FutureOr$(async.Stream$(T)), []))
    }));
    return LazyStream;
  });
  lazy_stream.LazyStream = lazy_stream.LazyStream$();
  dart.addTypeTests(lazy_stream.LazyStream, _is_LazyStream_default);
  var _sink$2 = dart.privateName(sink$, "_sink");
  const _is_DelegatingSink_default = Symbol('_is_DelegatingSink_default');
  sink$.DelegatingSink$ = dart.generic(T => {
    class DelegatingSink extends core.Object {
      static typed(T, sink) {
        return core.Sink$(T).is(sink) ? sink : new (sink$.DelegatingSink$(T)).__(sink);
      }
      add(data) {
        T._check(data);
        this[_sink$2].add(data);
      }
      close() {
        this[_sink$2].close();
      }
    }
    (DelegatingSink.new = function(sink) {
      this[_sink$2] = sink;
      ;
    }).prototype = DelegatingSink.prototype;
    (DelegatingSink.__ = function(_sink) {
      this[_sink$2] = _sink;
      ;
    }).prototype = DelegatingSink.prototype;
    dart.addTypeTests(DelegatingSink);
    DelegatingSink.prototype[_is_DelegatingSink_default] = true;
    DelegatingSink[dart.implements] = () => [core.Sink$(T)];
    dart.setMethodSignature(DelegatingSink, () => ({
      __proto__: dart.getMethods(DelegatingSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(DelegatingSink, "package:async/src/delegate/sink.dart");
    dart.setFieldSignature(DelegatingSink, () => ({
      __proto__: dart.getFields(DelegatingSink.__proto__),
      [_sink$2]: dart.finalFieldType(core.Sink)
    }));
    return DelegatingSink;
  });
  sink$.DelegatingSink = sink$.DelegatingSink$();
  dart.addTypeTests(sink$.DelegatingSink, _is_DelegatingSink_default);
  var _sink$3 = dart.privateName(event_sink, "_sink");
  const _is_DelegatingEventSink_default = Symbol('_is_DelegatingEventSink_default');
  event_sink.DelegatingEventSink$ = dart.generic(T => {
    class DelegatingEventSink extends core.Object {
      static typed(T, sink) {
        return async.EventSink$(T).is(sink) ? sink : new (event_sink.DelegatingEventSink$(T)).__(sink);
      }
      add(data) {
        T._check(data);
        this[_sink$3].add(data);
      }
      addError(error, stackTrace = null) {
        this[_sink$3].addError(error, stackTrace);
      }
      close() {
        this[_sink$3].close();
      }
    }
    (DelegatingEventSink.new = function(sink) {
      this[_sink$3] = sink;
      ;
    }).prototype = DelegatingEventSink.prototype;
    (DelegatingEventSink.__ = function(_sink) {
      this[_sink$3] = _sink;
      ;
    }).prototype = DelegatingEventSink.prototype;
    dart.addTypeTests(DelegatingEventSink);
    DelegatingEventSink.prototype[_is_DelegatingEventSink_default] = true;
    DelegatingEventSink[dart.implements] = () => [async.EventSink$(T)];
    dart.setMethodSignature(DelegatingEventSink, () => ({
      __proto__: dart.getMethods(DelegatingEventSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(DelegatingEventSink, "package:async/src/delegate/event_sink.dart");
    dart.setFieldSignature(DelegatingEventSink, () => ({
      __proto__: dart.getFields(DelegatingEventSink.__proto__),
      [_sink$3]: dart.finalFieldType(async.EventSink)
    }));
    return DelegatingEventSink;
  });
  event_sink.DelegatingEventSink = event_sink.DelegatingEventSink$();
  dart.addTypeTests(event_sink.DelegatingEventSink, _is_DelegatingEventSink_default);
  byte_collector.collectBytes = function collectBytes(source) {
    return byte_collector._collectBytes(FutureOfUint8List(), source, dart.fn((_, result) => result, StreamSubscriptionOfListOfintAndFutureOfUint8ListToFutureOfUint8List()));
  };
  byte_collector.collectBytesCancelable = function collectBytesCancelable(source) {
    return byte_collector._collectBytes(CancelableOperationOfUint8List(), source, dart.fn((subscription, result) => CancelableOperationOfUint8List().fromFuture(result, {onCancel: dart.bind(subscription, 'cancel')}), StreamSubscriptionOfListOfintAndFutureOfUint8ListToCancelableOperationOfUint8List()));
  };
  byte_collector._collectBytes = function _collectBytes(T, source, result) {
    let byteLists = JSArrayOfListOfint().of([]);
    let length = 0;
    let completer = CompleterOfUint8List().sync();
    let subscription = source.listen(dart.fn(bytes => {
      byteLists[$add](bytes);
      length = length + dart.notNull(bytes[$length]);
    }, ListOfintToNull()), {onError: dart.bind(completer, 'completeError'), onDone: dart.fn(() => {
        completer.complete(byte_collector._collect(length, byteLists));
      }, VoidToNull()), cancelOnError: true});
    return result(subscription, completer.future);
  };
  byte_collector._collect = function _collect(length, byteLists) {
    let result = _native_typed_data.NativeUint8List.new(length);
    let i = 0;
    for (let byteList of byteLists) {
      let end = i + dart.notNull(byteList[$length]);
      result[$setRange](i, end, byteList);
      i = end;
    }
    return result;
  };
  var _cachedStreamSplitter = dart.privateName(async_cache, "_cachedStreamSplitter");
  var _cachedValueFuture = dart.privateName(async_cache, "_cachedValueFuture");
  var _stale = dart.privateName(async_cache, "_stale");
  var _duration$0 = dart.privateName(async_cache, "_duration");
  var _startStaleTimer = dart.privateName(async_cache, "_startStaleTimer");
  const _is_AsyncCache_default = Symbol('_is_AsyncCache_default');
  async_cache.AsyncCache$ = dart.generic(T => {
    var FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    var VoidToFutureOfT = () => (VoidToFutureOfT = dart.constFn(dart.fnType(FutureOfT(), [])))();
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    var VoidToStreamOfT = () => (VoidToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [])))();
    var StreamSplitterOfT = () => (StreamSplitterOfT = dart.constFn(stream_splitter.StreamSplitter$(T)))();
    var _StreamHandlerTransformerOfT$T = () => (_StreamHandlerTransformerOfT$T = dart.constFn(async._StreamHandlerTransformer$(T, T)))();
    var EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    var EventSinkOfTToNull = () => (EventSinkOfTToNull = dart.constFn(dart.fnType(core.Null, [EventSinkOfT()])))();
    class AsyncCache extends core.Object {
      static ephemeral() {
        return new (async_cache.AsyncCache$(T)).new(core.Duration.zero);
      }
      fetch(callback) {
        VoidToFutureOfT()._check(callback);
        return async.async(T, (function* fetch() {
          if (this[_cachedStreamSplitter] != null) {
            dart.throw(new core.StateError.new("Previously used to cache via `fetchStream`"));
          }
          if (this[_cachedValueFuture] == null) {
            this[_cachedValueFuture] = callback();
            yield this[_cachedValueFuture];
            this[_startStaleTimer]();
          }
          return this[_cachedValueFuture];
        }).bind(this));
      }
      fetchStream(callback) {
        VoidToStreamOfT()._check(callback);
        if (this[_cachedValueFuture] != null) {
          dart.throw(new core.StateError.new("Previously used to cache via `fetch`"));
        }
        if (this[_cachedStreamSplitter] == null) {
          this[_cachedStreamSplitter] = new (StreamSplitterOfT()).new(callback().transform(T, new (_StreamHandlerTransformerOfT$T()).new({handleDone: dart.fn(sink => {
              this[_startStaleTimer]();
              sink.close();
            }, EventSinkOfTToNull())})));
        }
        return this[_cachedStreamSplitter].split();
      }
      invalidate() {
        let t3, t3$;
        this[_cachedValueFuture] = null;
        t3 = this[_cachedStreamSplitter];
        t3 == null ? null : t3.close();
        this[_cachedStreamSplitter] = null;
        t3$ = this[_stale];
        t3$ == null ? null : t3$.cancel();
        this[_stale] = null;
      }
      [_startStaleTimer]() {
        this[_stale] = async.Timer.new(this[_duration$0], dart.bind(this, 'invalidate'));
      }
    }
    (AsyncCache.new = function(_duration) {
      this[_cachedStreamSplitter] = null;
      this[_cachedValueFuture] = null;
      this[_stale] = null;
      this[_duration$0] = _duration;
      ;
    }).prototype = AsyncCache.prototype;
    dart.addTypeTests(AsyncCache);
    AsyncCache.prototype[_is_AsyncCache_default] = true;
    dart.setMethodSignature(AsyncCache, () => ({
      __proto__: dart.getMethods(AsyncCache.__proto__),
      fetch: dart.fnType(async.Future$(T), [core.Object]),
      fetchStream: dart.fnType(async.Stream$(T), [core.Object]),
      invalidate: dart.fnType(dart.void, []),
      [_startStaleTimer]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(AsyncCache, "package:async/src/async_cache.dart");
    dart.setFieldSignature(AsyncCache, () => ({
      __proto__: dart.getFields(AsyncCache.__proto__),
      [_duration$0]: dart.finalFieldType(core.Duration),
      [_cachedStreamSplitter]: dart.fieldType(stream_splitter.StreamSplitter$(T)),
      [_cachedValueFuture]: dart.fieldType(async.Future$(T)),
      [_stale]: dart.fieldType(async.Timer)
    }));
    return AsyncCache;
  });
  async_cache.AsyncCache = async_cache.AsyncCache$();
  dart.addTypeTests(async_cache.AsyncCache, _is_AsyncCache_default);
  dart.trackLibraries("packages/async/async", {
    "package:async/src/stream_subscription_transformer.dart": stream_subscription_transformer,
    "package:async/src/async_memoizer.dart": async_memoizer,
    "package:async/src/delegate/future.dart": future,
    "package:async/src/delegate/stream_consumer.dart": stream_consumer,
    "package:async/src/stream_sink_completer.dart": stream_sink_completer,
    "package:async/src/null_stream_sink.dart": null_stream_sink,
    "package:async/src/result/future.dart": future$,
    "package:async/src/result/result.dart": result,
    "package:async/src/stream_sink_transformer.dart": stream_sink_transformer,
    "package:async/src/stream_sink_transformer/typed.dart": typed,
    "package:async/src/delegate/stream_sink.dart": stream_sink,
    "package:async/src/stream_sink_transformer/stream_transformer_wrapper.dart": stream_transformer_wrapper,
    "package:async/src/stream_sink_transformer/handler_transformer.dart": handler_transformer,
    "package:async/src/result/value.dart": value$,
    "package:async/src/result/error.dart": error$,
    "package:async/src/result/release_transformer.dart": release_transformer,
    "package:async/src/result/release_sink.dart": release_sink,
    "package:async/src/result/capture_transformer.dart": capture_transformer,
    "package:async/src/result/capture_sink.dart": capture_sink,
    "package:async/src/delegate/stream_subscription.dart": stream_subscription,
    "package:async/src/typed/stream_subscription.dart": stream_subscription$,
    "package:async/src/utils.dart": utils,
    "package:async/src/stream_completer.dart": stream_completer,
    "package:async/async.dart": async$,
    "package:async/src/typed_stream_transformer.dart": typed_stream_transformer,
    "package:async/src/delegate/stream.dart": stream$,
    "package:async/src/subscription_stream.dart": subscription_stream,
    "package:async/src/stream_zip.dart": stream_zip,
    "package:async/src/stream_splitter.dart": stream_splitter,
    "package:async/src/future_group.dart": future_group,
    "package:async/src/stream_queue.dart": stream_queue,
    "package:async/src/cancelable_operation.dart": cancelable_operation,
    "package:async/src/stream_group.dart": stream_group,
    "package:async/src/single_subscription_transformer.dart": single_subscription_transformer,
    "package:async/src/restartable_timer.dart": restartable_timer,
    "package:async/src/lazy_stream.dart": lazy_stream,
    "package:async/src/delegate/sink.dart": sink$,
    "package:async/src/delegate/event_sink.dart": event_sink,
    "package:async/src/byte_collector.dart": byte_collector,
    "package:async/src/async_cache.dart": async_cache
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/stream_subscription_transformer.dart","src/async_memoizer.dart","src/delegate/future.dart","src/delegate/stream_consumer.dart","src/stream_sink_completer.dart","src/null_stream_sink.dart","src/result/future.dart","src/result/result.dart","src/stream_sink_transformer.dart","src/stream_sink_transformer/typed.dart","src/delegate/stream_sink.dart","src/stream_sink_transformer/stream_transformer_wrapper.dart","src/stream_sink_transformer/handler_transformer.dart","src/result/value.dart","src/result/error.dart","src/result/release_transformer.dart","src/result/release_sink.dart","src/result/capture_transformer.dart","src/result/capture_sink.dart","src/delegate/stream_subscription.dart","src/typed/stream_subscription.dart","src/stream_completer.dart","src/typed_stream_transformer.dart","src/delegate/stream.dart","src/subscription_stream.dart","src/stream_zip.dart","src/stream_splitter.dart","src/future_group.dart","src/stream_queue.dart","src/cancelable_operation.dart","src/stream_group.dart","src/single_subscription_transformer.dart","src/restartable_timer.dart","src/lazy_stream.dart","src/delegate/sink.dart","src/delegate/event_sink.dart","src/byte_collector.dart","src/async_cache.dart"],"names":[],"mappings":"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","file":"async.ddc.js"}');
  // Exports:
  return {
    src__stream_subscription_transformer: stream_subscription_transformer,
    src__async_memoizer: async_memoizer,
    src__delegate__future: future,
    src__delegate__stream_consumer: stream_consumer,
    src__stream_sink_completer: stream_sink_completer,
    src__null_stream_sink: null_stream_sink,
    src__result__future: future$,
    src__result__result: result,
    src__stream_sink_transformer: stream_sink_transformer,
    src__stream_sink_transformer__typed: typed,
    src__delegate__stream_sink: stream_sink,
    src__stream_sink_transformer__stream_transformer_wrapper: stream_transformer_wrapper,
    src__stream_sink_transformer__handler_transformer: handler_transformer,
    src__result__value: value$,
    src__result__error: error$,
    src__result__release_transformer: release_transformer,
    src__result__release_sink: release_sink,
    src__result__capture_transformer: capture_transformer,
    src__result__capture_sink: capture_sink,
    src__delegate__stream_subscription: stream_subscription,
    src__typed__stream_subscription: stream_subscription$,
    src__utils: utils,
    src__stream_completer: stream_completer,
    async: async$,
    src__typed_stream_transformer: typed_stream_transformer,
    src__delegate__stream: stream$,
    src__subscription_stream: subscription_stream,
    src__stream_zip: stream_zip,
    src__stream_splitter: stream_splitter,
    src__future_group: future_group,
    src__stream_queue: stream_queue,
    src__cancelable_operation: cancelable_operation,
    src__stream_group: stream_group,
    src__single_subscription_transformer: single_subscription_transformer,
    src__restartable_timer: restartable_timer,
    src__lazy_stream: lazy_stream,
    src__delegate__sink: sink$,
    src__delegate__event_sink: event_sink,
    src__byte_collector: byte_collector,
    src__async_cache: async_cache
  };
});

//# sourceMappingURL=async.ddc.js.map
