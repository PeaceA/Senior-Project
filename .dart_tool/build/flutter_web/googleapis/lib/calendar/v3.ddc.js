define(['dart_sdk', 'packages/_discoveryapis_commons/_discoveryapis_commons'], function(dart_sdk, packages___discoveryapis_commons___discoveryapis_commons) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const clients = packages___discoveryapis_commons___discoveryapis_commons.src__clients;
  const requests = packages___discoveryapis_commons___discoveryapis_commons.src__requests;
  var v3 = Object.create(dart.library);
  var $_set = dartx._set;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $cast = dartx.cast;
  var $toString = dartx.toString;
  var $padLeft = dartx.padLeft;
  var ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  var LinkedMapOfString$ListOfString = () => (LinkedMapOfString$ListOfString = dart.constFn(_js_helper.LinkedMap$(core.String, ListOfString())))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var dynamicToAclRule = () => (dynamicToAclRule = dart.constFn(dart.fnType(v3.AclRule, [dart.dynamic])))();
  var dynamicToAcl = () => (dynamicToAcl = dart.constFn(dart.fnType(v3.Acl, [dart.dynamic])))();
  var dynamicToChannel = () => (dynamicToChannel = dart.constFn(dart.fnType(v3.Channel, [dart.dynamic])))();
  var dynamicToCalendarListEntry = () => (dynamicToCalendarListEntry = dart.constFn(dart.fnType(v3.CalendarListEntry, [dart.dynamic])))();
  var dynamicToCalendarList = () => (dynamicToCalendarList = dart.constFn(dart.fnType(v3.CalendarList, [dart.dynamic])))();
  var dynamicToCalendar = () => (dynamicToCalendar = dart.constFn(dart.fnType(v3.Calendar, [dart.dynamic])))();
  var dynamicToColors = () => (dynamicToColors = dart.constFn(dart.fnType(v3.Colors, [dart.dynamic])))();
  var dynamicToEvent = () => (dynamicToEvent = dart.constFn(dart.fnType(v3.Event, [dart.dynamic])))();
  var dynamicToEvents = () => (dynamicToEvents = dart.constFn(dart.fnType(v3.Events, [dart.dynamic])))();
  var dynamicToFreeBusyResponse = () => (dynamicToFreeBusyResponse = dart.constFn(dart.fnType(v3.FreeBusyResponse, [dart.dynamic])))();
  var dynamicToSetting = () => (dynamicToSetting = dart.constFn(dart.fnType(v3.Setting, [dart.dynamic])))();
  var dynamicToSettings = () => (dynamicToSettings = dart.constFn(dart.fnType(v3.Settings, [dart.dynamic])))();
  var LinkedMapOfString$Object = () => (LinkedMapOfString$Object = dart.constFn(_js_helper.LinkedMap$(core.String, core.Object)))();
  var MapOfString$Object = () => (MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))();
  var AclRuleToMapOfString$Object = () => (AclRuleToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [v3.AclRule])))();
  var CalendarListEntryToMapOfString$Object = () => (CalendarListEntryToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [v3.CalendarListEntry])))();
  var dynamicToCalendarNotification = () => (dynamicToCalendarNotification = dart.constFn(dart.fnType(v3.CalendarNotification, [dart.dynamic])))();
  var CalendarNotificationToMapOfString$Object = () => (CalendarNotificationToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [v3.CalendarNotification])))();
  var dynamicToEventReminder = () => (dynamicToEventReminder = dart.constFn(dart.fnType(v3.EventReminder, [dart.dynamic])))();
  var EventReminderToMapOfString$Object = () => (EventReminderToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [v3.EventReminder])))();
  var MapOfString$Map = () => (MapOfString$Map = dart.constFn(core.Map$(core.String, core.Map)))();
  var MapToColorDefinition = () => (MapToColorDefinition = dart.constFn(dart.fnType(v3.ColorDefinition, [core.Map])))();
  var ColorDefinitionToMapOfString$Object = () => (ColorDefinitionToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [v3.ColorDefinition])))();
  var dynamicToEntryPoint = () => (dynamicToEntryPoint = dart.constFn(dart.fnType(v3.EntryPoint, [dart.dynamic])))();
  var EntryPointToMapOfString$Object = () => (EntryPointToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [v3.EntryPoint])))();
  var dynamicToEventAttachment = () => (dynamicToEventAttachment = dart.constFn(dart.fnType(v3.EventAttachment, [dart.dynamic])))();
  var dynamicToEventAttendee = () => (dynamicToEventAttendee = dart.constFn(dart.fnType(v3.EventAttendee, [dart.dynamic])))();
  var EventAttachmentToMapOfString$Object = () => (EventAttachmentToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [v3.EventAttachment])))();
  var EventAttendeeToMapOfString$Object = () => (EventAttendeeToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [v3.EventAttendee])))();
  var EventToMapOfString$Object = () => (EventToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [v3.Event])))();
  var dynamicToTimePeriod = () => (dynamicToTimePeriod = dart.constFn(dart.fnType(v3.TimePeriod, [dart.dynamic])))();
  var dynamicToError = () => (dynamicToError = dart.constFn(dart.fnType(v3.Error, [dart.dynamic])))();
  var TimePeriodToMapOfString$Object = () => (TimePeriodToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [v3.TimePeriod])))();
  var ErrorToMapOfString$Object = () => (ErrorToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [v3.Error])))();
  var dynamicToFreeBusyRequestItem = () => (dynamicToFreeBusyRequestItem = dart.constFn(dart.fnType(v3.FreeBusyRequestItem, [dart.dynamic])))();
  var FreeBusyRequestItemToMapOfString$Object = () => (FreeBusyRequestItemToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [v3.FreeBusyRequestItem])))();
  var MapToFreeBusyCalendar = () => (MapToFreeBusyCalendar = dart.constFn(dart.fnType(v3.FreeBusyCalendar, [core.Map])))();
  var MapToFreeBusyGroup = () => (MapToFreeBusyGroup = dart.constFn(dart.fnType(v3.FreeBusyGroup, [core.Map])))();
  var FreeBusyCalendarToMapOfString$Object = () => (FreeBusyCalendarToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [v3.FreeBusyCalendar])))();
  var FreeBusyGroupToMapOfString$Object = () => (FreeBusyGroupToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [v3.FreeBusyGroup])))();
  var SettingToMapOfString$Object = () => (SettingToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [v3.Setting])))();
  const CT = Object.create(null);
  var _requester = dart.privateName(v3, "_requester");
  v3.CalendarApi = class CalendarApi extends core.Object {
    get acl() {
      return new v3.AclResourceApi.new(this[_requester]);
    }
    get calendarList() {
      return new v3.CalendarListResourceApi.new(this[_requester]);
    }
    get calendars() {
      return new v3.CalendarsResourceApi.new(this[_requester]);
    }
    get channels() {
      return new v3.ChannelsResourceApi.new(this[_requester]);
    }
    get colors() {
      return new v3.ColorsResourceApi.new(this[_requester]);
    }
    get events() {
      return new v3.EventsResourceApi.new(this[_requester]);
    }
    get freebusy() {
      return new v3.FreebusyResourceApi.new(this[_requester]);
    }
    get settings() {
      return new v3.SettingsResourceApi.new(this[_requester]);
    }
  };
  (v3.CalendarApi.new = function(client, opts) {
    let rootUrl = opts && 'rootUrl' in opts ? opts.rootUrl : "https://www.googleapis.com/";
    let servicePath = opts && 'servicePath' in opts ? opts.servicePath : "calendar/v3/";
    this[_requester] = new clients.ApiRequester.new(client, rootUrl, servicePath, "dart-api-client calendar/v3");
    ;
  }).prototype = v3.CalendarApi.prototype;
  dart.addTypeTests(v3.CalendarApi);
  dart.setGetterSignature(v3.CalendarApi, () => ({
    __proto__: dart.getGetters(v3.CalendarApi.__proto__),
    acl: v3.AclResourceApi,
    calendarList: v3.CalendarListResourceApi,
    calendars: v3.CalendarsResourceApi,
    channels: v3.ChannelsResourceApi,
    colors: v3.ColorsResourceApi,
    events: v3.EventsResourceApi,
    freebusy: v3.FreebusyResourceApi,
    settings: v3.SettingsResourceApi
  }));
  dart.setLibraryUri(v3.CalendarApi, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.CalendarApi, () => ({
    __proto__: dart.getFields(v3.CalendarApi.__proto__),
    [_requester]: dart.finalFieldType(clients.ApiRequester)
  }));
  dart.defineLazy(v3.CalendarApi, {
    /*v3.CalendarApi.CalendarScope*/get CalendarScope() {
      return "https://www.googleapis.com/auth/calendar";
    },
    /*v3.CalendarApi.CalendarEventsScope*/get CalendarEventsScope() {
      return "https://www.googleapis.com/auth/calendar.events";
    },
    /*v3.CalendarApi.CalendarEventsReadonlyScope*/get CalendarEventsReadonlyScope() {
      return "https://www.googleapis.com/auth/calendar.events.readonly";
    },
    /*v3.CalendarApi.CalendarReadonlyScope*/get CalendarReadonlyScope() {
      return "https://www.googleapis.com/auth/calendar.readonly";
    },
    /*v3.CalendarApi.CalendarSettingsReadonlyScope*/get CalendarSettingsReadonlyScope() {
      return "https://www.googleapis.com/auth/calendar.settings.readonly";
    }
  });
  v3.AclResourceApi = class AclResourceApi extends core.Object {
    delete(calendarId, ruleId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (ruleId == null) {
        dart.throw(new core.ArgumentError.new("Parameter ruleId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _downloadOptions = null;
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/acl/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(ruleId)));
      let _response = this[_requester].request(core.String._check(_url), "DELETE", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNull()));
    }
    get(calendarId, ruleId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (ruleId == null) {
        dart.throw(new core.ArgumentError.new("Parameter ruleId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/acl/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(ruleId)));
      let _response = this[_requester].request(core.String._check(_url), "GET", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.AclRule, dart.fn(data => new v3.AclRule.fromJson(core.Map._check(data)), dynamicToAclRule()));
    }
    insert(request, calendarId, opts) {
      let sendNotifications = opts && 'sendNotifications' in opts ? opts.sendNotifications : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (sendNotifications != null) {
        _queryParams[$_set]("sendNotifications", JSArrayOfString().of([dart.str(sendNotifications)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/acl";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.AclRule, dart.fn(data => new v3.AclRule.fromJson(core.Map._check(data)), dynamicToAclRule()));
    }
    list(calendarId, opts) {
      let maxResults = opts && 'maxResults' in opts ? opts.maxResults : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let showDeleted = opts && 'showDeleted' in opts ? opts.showDeleted : null;
      let syncToken = opts && 'syncToken' in opts ? opts.syncToken : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (maxResults != null) {
        _queryParams[$_set]("maxResults", JSArrayOfString().of([dart.str(maxResults)]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfString().of([pageToken]));
      }
      if (showDeleted != null) {
        _queryParams[$_set]("showDeleted", JSArrayOfString().of([dart.str(showDeleted)]));
      }
      if (syncToken != null) {
        _queryParams[$_set]("syncToken", JSArrayOfString().of([syncToken]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/acl";
      let _response = this[_requester].request(core.String._check(_url), "GET", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Acl, dart.fn(data => new v3.Acl.fromJson(core.Map._check(data)), dynamicToAcl()));
    }
    patch(request, calendarId, ruleId, opts) {
      let sendNotifications = opts && 'sendNotifications' in opts ? opts.sendNotifications : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (ruleId == null) {
        dart.throw(new core.ArgumentError.new("Parameter ruleId is required."));
      }
      if (sendNotifications != null) {
        _queryParams[$_set]("sendNotifications", JSArrayOfString().of([dart.str(sendNotifications)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/acl/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(ruleId)));
      let _response = this[_requester].request(core.String._check(_url), "PATCH", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.AclRule, dart.fn(data => new v3.AclRule.fromJson(core.Map._check(data)), dynamicToAclRule()));
    }
    update(request, calendarId, ruleId, opts) {
      let sendNotifications = opts && 'sendNotifications' in opts ? opts.sendNotifications : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (ruleId == null) {
        dart.throw(new core.ArgumentError.new("Parameter ruleId is required."));
      }
      if (sendNotifications != null) {
        _queryParams[$_set]("sendNotifications", JSArrayOfString().of([dart.str(sendNotifications)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/acl/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(ruleId)));
      let _response = this[_requester].request(core.String._check(_url), "PUT", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.AclRule, dart.fn(data => new v3.AclRule.fromJson(core.Map._check(data)), dynamicToAclRule()));
    }
    watch(request, calendarId, opts) {
      let maxResults = opts && 'maxResults' in opts ? opts.maxResults : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let showDeleted = opts && 'showDeleted' in opts ? opts.showDeleted : null;
      let syncToken = opts && 'syncToken' in opts ? opts.syncToken : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (maxResults != null) {
        _queryParams[$_set]("maxResults", JSArrayOfString().of([dart.str(maxResults)]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfString().of([pageToken]));
      }
      if (showDeleted != null) {
        _queryParams[$_set]("showDeleted", JSArrayOfString().of([dart.str(showDeleted)]));
      }
      if (syncToken != null) {
        _queryParams[$_set]("syncToken", JSArrayOfString().of([syncToken]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/acl/watch";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Channel, dart.fn(data => new v3.Channel.fromJson(core.Map._check(data)), dynamicToChannel()));
    }
  };
  (v3.AclResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.AclResourceApi.prototype;
  dart.addTypeTests(v3.AclResourceApi);
  dart.setMethodSignature(v3.AclResourceApi, () => ({
    __proto__: dart.getMethods(v3.AclResourceApi.__proto__),
    delete: dart.fnType(async.Future, [core.String, core.String], {$fields: core.String}, {}),
    get: dart.fnType(async.Future$(v3.AclRule), [core.String, core.String], {$fields: core.String}, {}),
    insert: dart.fnType(async.Future$(v3.AclRule), [v3.AclRule, core.String], {$fields: core.String, sendNotifications: core.bool}, {}),
    list: dart.fnType(async.Future$(v3.Acl), [core.String], {$fields: core.String, maxResults: core.int, pageToken: core.String, showDeleted: core.bool, syncToken: core.String}, {}),
    patch: dart.fnType(async.Future$(v3.AclRule), [v3.AclRule, core.String, core.String], {$fields: core.String, sendNotifications: core.bool}, {}),
    update: dart.fnType(async.Future$(v3.AclRule), [v3.AclRule, core.String, core.String], {$fields: core.String, sendNotifications: core.bool}, {}),
    watch: dart.fnType(async.Future$(v3.Channel), [v3.Channel, core.String], {$fields: core.String, maxResults: core.int, pageToken: core.String, showDeleted: core.bool, syncToken: core.String}, {})
  }));
  dart.setLibraryUri(v3.AclResourceApi, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.AclResourceApi, () => ({
    __proto__: dart.getFields(v3.AclResourceApi.__proto__),
    [_requester]: dart.finalFieldType(clients.ApiRequester)
  }));
  v3.CalendarListResourceApi = class CalendarListResourceApi extends core.Object {
    delete(calendarId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _downloadOptions = null;
      _url = "users/me/calendarList/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId)));
      let _response = this[_requester].request(core.String._check(_url), "DELETE", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNull()));
    }
    get(calendarId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "users/me/calendarList/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId)));
      let _response = this[_requester].request(core.String._check(_url), "GET", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.CalendarListEntry, dart.fn(data => new v3.CalendarListEntry.fromJson(core.Map._check(data)), dynamicToCalendarListEntry()));
    }
    insert(request, opts) {
      let colorRgbFormat = opts && 'colorRgbFormat' in opts ? opts.colorRgbFormat : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (colorRgbFormat != null) {
        _queryParams[$_set]("colorRgbFormat", JSArrayOfString().of([dart.str(colorRgbFormat)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "users/me/calendarList";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.CalendarListEntry, dart.fn(data => new v3.CalendarListEntry.fromJson(core.Map._check(data)), dynamicToCalendarListEntry()));
    }
    list(opts) {
      let maxResults = opts && 'maxResults' in opts ? opts.maxResults : null;
      let minAccessRole = opts && 'minAccessRole' in opts ? opts.minAccessRole : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let showDeleted = opts && 'showDeleted' in opts ? opts.showDeleted : null;
      let showHidden = opts && 'showHidden' in opts ? opts.showHidden : null;
      let syncToken = opts && 'syncToken' in opts ? opts.syncToken : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (maxResults != null) {
        _queryParams[$_set]("maxResults", JSArrayOfString().of([dart.str(maxResults)]));
      }
      if (minAccessRole != null) {
        _queryParams[$_set]("minAccessRole", JSArrayOfString().of([minAccessRole]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfString().of([pageToken]));
      }
      if (showDeleted != null) {
        _queryParams[$_set]("showDeleted", JSArrayOfString().of([dart.str(showDeleted)]));
      }
      if (showHidden != null) {
        _queryParams[$_set]("showHidden", JSArrayOfString().of([dart.str(showHidden)]));
      }
      if (syncToken != null) {
        _queryParams[$_set]("syncToken", JSArrayOfString().of([syncToken]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "users/me/calendarList";
      let _response = this[_requester].request(core.String._check(_url), "GET", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.CalendarList, dart.fn(data => new v3.CalendarList.fromJson(core.Map._check(data)), dynamicToCalendarList()));
    }
    patch(request, calendarId, opts) {
      let colorRgbFormat = opts && 'colorRgbFormat' in opts ? opts.colorRgbFormat : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (colorRgbFormat != null) {
        _queryParams[$_set]("colorRgbFormat", JSArrayOfString().of([dart.str(colorRgbFormat)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "users/me/calendarList/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId)));
      let _response = this[_requester].request(core.String._check(_url), "PATCH", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.CalendarListEntry, dart.fn(data => new v3.CalendarListEntry.fromJson(core.Map._check(data)), dynamicToCalendarListEntry()));
    }
    update(request, calendarId, opts) {
      let colorRgbFormat = opts && 'colorRgbFormat' in opts ? opts.colorRgbFormat : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (colorRgbFormat != null) {
        _queryParams[$_set]("colorRgbFormat", JSArrayOfString().of([dart.str(colorRgbFormat)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "users/me/calendarList/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId)));
      let _response = this[_requester].request(core.String._check(_url), "PUT", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.CalendarListEntry, dart.fn(data => new v3.CalendarListEntry.fromJson(core.Map._check(data)), dynamicToCalendarListEntry()));
    }
    watch(request, opts) {
      let maxResults = opts && 'maxResults' in opts ? opts.maxResults : null;
      let minAccessRole = opts && 'minAccessRole' in opts ? opts.minAccessRole : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let showDeleted = opts && 'showDeleted' in opts ? opts.showDeleted : null;
      let showHidden = opts && 'showHidden' in opts ? opts.showHidden : null;
      let syncToken = opts && 'syncToken' in opts ? opts.syncToken : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (maxResults != null) {
        _queryParams[$_set]("maxResults", JSArrayOfString().of([dart.str(maxResults)]));
      }
      if (minAccessRole != null) {
        _queryParams[$_set]("minAccessRole", JSArrayOfString().of([minAccessRole]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfString().of([pageToken]));
      }
      if (showDeleted != null) {
        _queryParams[$_set]("showDeleted", JSArrayOfString().of([dart.str(showDeleted)]));
      }
      if (showHidden != null) {
        _queryParams[$_set]("showHidden", JSArrayOfString().of([dart.str(showHidden)]));
      }
      if (syncToken != null) {
        _queryParams[$_set]("syncToken", JSArrayOfString().of([syncToken]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "users/me/calendarList/watch";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Channel, dart.fn(data => new v3.Channel.fromJson(core.Map._check(data)), dynamicToChannel()));
    }
  };
  (v3.CalendarListResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.CalendarListResourceApi.prototype;
  dart.addTypeTests(v3.CalendarListResourceApi);
  dart.setMethodSignature(v3.CalendarListResourceApi, () => ({
    __proto__: dart.getMethods(v3.CalendarListResourceApi.__proto__),
    delete: dart.fnType(async.Future, [core.String], {$fields: core.String}, {}),
    get: dart.fnType(async.Future$(v3.CalendarListEntry), [core.String], {$fields: core.String}, {}),
    insert: dart.fnType(async.Future$(v3.CalendarListEntry), [v3.CalendarListEntry], {$fields: core.String, colorRgbFormat: core.bool}, {}),
    list: dart.fnType(async.Future$(v3.CalendarList), [], {$fields: core.String, maxResults: core.int, minAccessRole: core.String, pageToken: core.String, showDeleted: core.bool, showHidden: core.bool, syncToken: core.String}, {}),
    patch: dart.fnType(async.Future$(v3.CalendarListEntry), [v3.CalendarListEntry, core.String], {$fields: core.String, colorRgbFormat: core.bool}, {}),
    update: dart.fnType(async.Future$(v3.CalendarListEntry), [v3.CalendarListEntry, core.String], {$fields: core.String, colorRgbFormat: core.bool}, {}),
    watch: dart.fnType(async.Future$(v3.Channel), [v3.Channel], {$fields: core.String, maxResults: core.int, minAccessRole: core.String, pageToken: core.String, showDeleted: core.bool, showHidden: core.bool, syncToken: core.String}, {})
  }));
  dart.setLibraryUri(v3.CalendarListResourceApi, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.CalendarListResourceApi, () => ({
    __proto__: dart.getFields(v3.CalendarListResourceApi.__proto__),
    [_requester]: dart.finalFieldType(clients.ApiRequester)
  }));
  v3.CalendarsResourceApi = class CalendarsResourceApi extends core.Object {
    clear(calendarId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _downloadOptions = null;
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/clear";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNull()));
    }
    delete(calendarId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _downloadOptions = null;
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId)));
      let _response = this[_requester].request(core.String._check(_url), "DELETE", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNull()));
    }
    get(calendarId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId)));
      let _response = this[_requester].request(core.String._check(_url), "GET", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Calendar, dart.fn(data => new v3.Calendar.fromJson(core.Map._check(data)), dynamicToCalendar()));
    }
    insert(request, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Calendar, dart.fn(data => new v3.Calendar.fromJson(core.Map._check(data)), dynamicToCalendar()));
    }
    patch(request, calendarId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId)));
      let _response = this[_requester].request(core.String._check(_url), "PATCH", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Calendar, dart.fn(data => new v3.Calendar.fromJson(core.Map._check(data)), dynamicToCalendar()));
    }
    update(request, calendarId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId)));
      let _response = this[_requester].request(core.String._check(_url), "PUT", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Calendar, dart.fn(data => new v3.Calendar.fromJson(core.Map._check(data)), dynamicToCalendar()));
    }
  };
  (v3.CalendarsResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.CalendarsResourceApi.prototype;
  dart.addTypeTests(v3.CalendarsResourceApi);
  dart.setMethodSignature(v3.CalendarsResourceApi, () => ({
    __proto__: dart.getMethods(v3.CalendarsResourceApi.__proto__),
    clear: dart.fnType(async.Future, [core.String], {$fields: core.String}, {}),
    delete: dart.fnType(async.Future, [core.String], {$fields: core.String}, {}),
    get: dart.fnType(async.Future$(v3.Calendar), [core.String], {$fields: core.String}, {}),
    insert: dart.fnType(async.Future$(v3.Calendar), [v3.Calendar], {$fields: core.String}, {}),
    patch: dart.fnType(async.Future$(v3.Calendar), [v3.Calendar, core.String], {$fields: core.String}, {}),
    update: dart.fnType(async.Future$(v3.Calendar), [v3.Calendar, core.String], {$fields: core.String}, {})
  }));
  dart.setLibraryUri(v3.CalendarsResourceApi, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.CalendarsResourceApi, () => ({
    __proto__: dart.getFields(v3.CalendarsResourceApi.__proto__),
    [_requester]: dart.finalFieldType(clients.ApiRequester)
  }));
  v3.ChannelsResourceApi = class ChannelsResourceApi extends core.Object {
    stop(request, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _downloadOptions = null;
      _url = "channels/stop";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNull()));
    }
  };
  (v3.ChannelsResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.ChannelsResourceApi.prototype;
  dart.addTypeTests(v3.ChannelsResourceApi);
  dart.setMethodSignature(v3.ChannelsResourceApi, () => ({
    __proto__: dart.getMethods(v3.ChannelsResourceApi.__proto__),
    stop: dart.fnType(async.Future, [v3.Channel], {$fields: core.String}, {})
  }));
  dart.setLibraryUri(v3.ChannelsResourceApi, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.ChannelsResourceApi, () => ({
    __proto__: dart.getFields(v3.ChannelsResourceApi.__proto__),
    [_requester]: dart.finalFieldType(clients.ApiRequester)
  }));
  v3.ColorsResourceApi = class ColorsResourceApi extends core.Object {
    get(opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "colors";
      let _response = this[_requester].request(core.String._check(_url), "GET", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Colors, dart.fn(data => new v3.Colors.fromJson(core.Map._check(data)), dynamicToColors()));
    }
  };
  (v3.ColorsResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.ColorsResourceApi.prototype;
  dart.addTypeTests(v3.ColorsResourceApi);
  dart.setMethodSignature(v3.ColorsResourceApi, () => ({
    __proto__: dart.getMethods(v3.ColorsResourceApi.__proto__),
    get: dart.fnType(async.Future$(v3.Colors), [], {$fields: core.String}, {})
  }));
  dart.setLibraryUri(v3.ColorsResourceApi, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.ColorsResourceApi, () => ({
    __proto__: dart.getFields(v3.ColorsResourceApi.__proto__),
    [_requester]: dart.finalFieldType(clients.ApiRequester)
  }));
  v3.EventsResourceApi = class EventsResourceApi extends core.Object {
    delete(calendarId, eventId, opts) {
      let sendNotifications = opts && 'sendNotifications' in opts ? opts.sendNotifications : null;
      let sendUpdates = opts && 'sendUpdates' in opts ? opts.sendUpdates : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (eventId == null) {
        dart.throw(new core.ArgumentError.new("Parameter eventId is required."));
      }
      if (sendNotifications != null) {
        _queryParams[$_set]("sendNotifications", JSArrayOfString().of([dart.str(sendNotifications)]));
      }
      if (sendUpdates != null) {
        _queryParams[$_set]("sendUpdates", JSArrayOfString().of([sendUpdates]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _downloadOptions = null;
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/events/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(eventId)));
      let _response = this[_requester].request(core.String._check(_url), "DELETE", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNull()));
    }
    get(calendarId, eventId, opts) {
      let alwaysIncludeEmail = opts && 'alwaysIncludeEmail' in opts ? opts.alwaysIncludeEmail : null;
      let maxAttendees = opts && 'maxAttendees' in opts ? opts.maxAttendees : null;
      let timeZone = opts && 'timeZone' in opts ? opts.timeZone : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (eventId == null) {
        dart.throw(new core.ArgumentError.new("Parameter eventId is required."));
      }
      if (alwaysIncludeEmail != null) {
        _queryParams[$_set]("alwaysIncludeEmail", JSArrayOfString().of([dart.str(alwaysIncludeEmail)]));
      }
      if (maxAttendees != null) {
        _queryParams[$_set]("maxAttendees", JSArrayOfString().of([dart.str(maxAttendees)]));
      }
      if (timeZone != null) {
        _queryParams[$_set]("timeZone", JSArrayOfString().of([timeZone]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/events/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(eventId)));
      let _response = this[_requester].request(core.String._check(_url), "GET", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Event, dart.fn(data => new v3.Event.fromJson(core.Map._check(data)), dynamicToEvent()));
    }
    import(request, calendarId, opts) {
      let conferenceDataVersion = opts && 'conferenceDataVersion' in opts ? opts.conferenceDataVersion : null;
      let supportsAttachments = opts && 'supportsAttachments' in opts ? opts.supportsAttachments : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (conferenceDataVersion != null) {
        _queryParams[$_set]("conferenceDataVersion", JSArrayOfString().of([dart.str(conferenceDataVersion)]));
      }
      if (supportsAttachments != null) {
        _queryParams[$_set]("supportsAttachments", JSArrayOfString().of([dart.str(supportsAttachments)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/events/import";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Event, dart.fn(data => new v3.Event.fromJson(core.Map._check(data)), dynamicToEvent()));
    }
    insert(request, calendarId, opts) {
      let conferenceDataVersion = opts && 'conferenceDataVersion' in opts ? opts.conferenceDataVersion : null;
      let maxAttendees = opts && 'maxAttendees' in opts ? opts.maxAttendees : null;
      let sendNotifications = opts && 'sendNotifications' in opts ? opts.sendNotifications : null;
      let sendUpdates = opts && 'sendUpdates' in opts ? opts.sendUpdates : null;
      let supportsAttachments = opts && 'supportsAttachments' in opts ? opts.supportsAttachments : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (conferenceDataVersion != null) {
        _queryParams[$_set]("conferenceDataVersion", JSArrayOfString().of([dart.str(conferenceDataVersion)]));
      }
      if (maxAttendees != null) {
        _queryParams[$_set]("maxAttendees", JSArrayOfString().of([dart.str(maxAttendees)]));
      }
      if (sendNotifications != null) {
        _queryParams[$_set]("sendNotifications", JSArrayOfString().of([dart.str(sendNotifications)]));
      }
      if (sendUpdates != null) {
        _queryParams[$_set]("sendUpdates", JSArrayOfString().of([sendUpdates]));
      }
      if (supportsAttachments != null) {
        _queryParams[$_set]("supportsAttachments", JSArrayOfString().of([dart.str(supportsAttachments)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/events";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Event, dart.fn(data => new v3.Event.fromJson(core.Map._check(data)), dynamicToEvent()));
    }
    instances(calendarId, eventId, opts) {
      let alwaysIncludeEmail = opts && 'alwaysIncludeEmail' in opts ? opts.alwaysIncludeEmail : null;
      let maxAttendees = opts && 'maxAttendees' in opts ? opts.maxAttendees : null;
      let maxResults = opts && 'maxResults' in opts ? opts.maxResults : null;
      let originalStart = opts && 'originalStart' in opts ? opts.originalStart : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let showDeleted = opts && 'showDeleted' in opts ? opts.showDeleted : null;
      let timeMax = opts && 'timeMax' in opts ? opts.timeMax : null;
      let timeMin = opts && 'timeMin' in opts ? opts.timeMin : null;
      let timeZone = opts && 'timeZone' in opts ? opts.timeZone : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (eventId == null) {
        dart.throw(new core.ArgumentError.new("Parameter eventId is required."));
      }
      if (alwaysIncludeEmail != null) {
        _queryParams[$_set]("alwaysIncludeEmail", JSArrayOfString().of([dart.str(alwaysIncludeEmail)]));
      }
      if (maxAttendees != null) {
        _queryParams[$_set]("maxAttendees", JSArrayOfString().of([dart.str(maxAttendees)]));
      }
      if (maxResults != null) {
        _queryParams[$_set]("maxResults", JSArrayOfString().of([dart.str(maxResults)]));
      }
      if (originalStart != null) {
        _queryParams[$_set]("originalStart", JSArrayOfString().of([originalStart]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfString().of([pageToken]));
      }
      if (showDeleted != null) {
        _queryParams[$_set]("showDeleted", JSArrayOfString().of([dart.str(showDeleted)]));
      }
      if (timeMax != null) {
        _queryParams[$_set]("timeMax", JSArrayOfString().of([timeMax.toIso8601String()]));
      }
      if (timeMin != null) {
        _queryParams[$_set]("timeMin", JSArrayOfString().of([timeMin.toIso8601String()]));
      }
      if (timeZone != null) {
        _queryParams[$_set]("timeZone", JSArrayOfString().of([timeZone]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/events/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(eventId))) + "/instances";
      let _response = this[_requester].request(core.String._check(_url), "GET", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Events, dart.fn(data => new v3.Events.fromJson(core.Map._check(data)), dynamicToEvents()));
    }
    list(calendarId, opts) {
      let alwaysIncludeEmail = opts && 'alwaysIncludeEmail' in opts ? opts.alwaysIncludeEmail : null;
      let iCalUID = opts && 'iCalUID' in opts ? opts.iCalUID : null;
      let maxAttendees = opts && 'maxAttendees' in opts ? opts.maxAttendees : null;
      let maxResults = opts && 'maxResults' in opts ? opts.maxResults : null;
      let orderBy = opts && 'orderBy' in opts ? opts.orderBy : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let privateExtendedProperty = opts && 'privateExtendedProperty' in opts ? opts.privateExtendedProperty : null;
      let q = opts && 'q' in opts ? opts.q : null;
      let sharedExtendedProperty = opts && 'sharedExtendedProperty' in opts ? opts.sharedExtendedProperty : null;
      let showDeleted = opts && 'showDeleted' in opts ? opts.showDeleted : null;
      let showHiddenInvitations = opts && 'showHiddenInvitations' in opts ? opts.showHiddenInvitations : null;
      let singleEvents = opts && 'singleEvents' in opts ? opts.singleEvents : null;
      let syncToken = opts && 'syncToken' in opts ? opts.syncToken : null;
      let timeMax = opts && 'timeMax' in opts ? opts.timeMax : null;
      let timeMin = opts && 'timeMin' in opts ? opts.timeMin : null;
      let timeZone = opts && 'timeZone' in opts ? opts.timeZone : null;
      let updatedMin = opts && 'updatedMin' in opts ? opts.updatedMin : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (alwaysIncludeEmail != null) {
        _queryParams[$_set]("alwaysIncludeEmail", JSArrayOfString().of([dart.str(alwaysIncludeEmail)]));
      }
      if (iCalUID != null) {
        _queryParams[$_set]("iCalUID", JSArrayOfString().of([iCalUID]));
      }
      if (maxAttendees != null) {
        _queryParams[$_set]("maxAttendees", JSArrayOfString().of([dart.str(maxAttendees)]));
      }
      if (maxResults != null) {
        _queryParams[$_set]("maxResults", JSArrayOfString().of([dart.str(maxResults)]));
      }
      if (orderBy != null) {
        _queryParams[$_set]("orderBy", JSArrayOfString().of([orderBy]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfString().of([pageToken]));
      }
      if (privateExtendedProperty != null) {
        _queryParams[$_set]("privateExtendedProperty", privateExtendedProperty);
      }
      if (q != null) {
        _queryParams[$_set]("q", JSArrayOfString().of([q]));
      }
      if (sharedExtendedProperty != null) {
        _queryParams[$_set]("sharedExtendedProperty", sharedExtendedProperty);
      }
      if (showDeleted != null) {
        _queryParams[$_set]("showDeleted", JSArrayOfString().of([dart.str(showDeleted)]));
      }
      if (showHiddenInvitations != null) {
        _queryParams[$_set]("showHiddenInvitations", JSArrayOfString().of([dart.str(showHiddenInvitations)]));
      }
      if (singleEvents != null) {
        _queryParams[$_set]("singleEvents", JSArrayOfString().of([dart.str(singleEvents)]));
      }
      if (syncToken != null) {
        _queryParams[$_set]("syncToken", JSArrayOfString().of([syncToken]));
      }
      if (timeMax != null) {
        _queryParams[$_set]("timeMax", JSArrayOfString().of([timeMax.toIso8601String()]));
      }
      if (timeMin != null) {
        _queryParams[$_set]("timeMin", JSArrayOfString().of([timeMin.toIso8601String()]));
      }
      if (timeZone != null) {
        _queryParams[$_set]("timeZone", JSArrayOfString().of([timeZone]));
      }
      if (updatedMin != null) {
        _queryParams[$_set]("updatedMin", JSArrayOfString().of([updatedMin.toIso8601String()]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/events";
      let _response = this[_requester].request(core.String._check(_url), "GET", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Events, dart.fn(data => new v3.Events.fromJson(core.Map._check(data)), dynamicToEvents()));
    }
    move(calendarId, eventId, destination, opts) {
      let sendNotifications = opts && 'sendNotifications' in opts ? opts.sendNotifications : null;
      let sendUpdates = opts && 'sendUpdates' in opts ? opts.sendUpdates : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (eventId == null) {
        dart.throw(new core.ArgumentError.new("Parameter eventId is required."));
      }
      if (destination == null) {
        dart.throw(new core.ArgumentError.new("Parameter destination is required."));
      }
      _queryParams[$_set]("destination", JSArrayOfString().of([destination]));
      if (sendNotifications != null) {
        _queryParams[$_set]("sendNotifications", JSArrayOfString().of([dart.str(sendNotifications)]));
      }
      if (sendUpdates != null) {
        _queryParams[$_set]("sendUpdates", JSArrayOfString().of([sendUpdates]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/events/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(eventId))) + "/move";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Event, dart.fn(data => new v3.Event.fromJson(core.Map._check(data)), dynamicToEvent()));
    }
    patch(request, calendarId, eventId, opts) {
      let alwaysIncludeEmail = opts && 'alwaysIncludeEmail' in opts ? opts.alwaysIncludeEmail : null;
      let conferenceDataVersion = opts && 'conferenceDataVersion' in opts ? opts.conferenceDataVersion : null;
      let maxAttendees = opts && 'maxAttendees' in opts ? opts.maxAttendees : null;
      let sendNotifications = opts && 'sendNotifications' in opts ? opts.sendNotifications : null;
      let sendUpdates = opts && 'sendUpdates' in opts ? opts.sendUpdates : null;
      let supportsAttachments = opts && 'supportsAttachments' in opts ? opts.supportsAttachments : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (eventId == null) {
        dart.throw(new core.ArgumentError.new("Parameter eventId is required."));
      }
      if (alwaysIncludeEmail != null) {
        _queryParams[$_set]("alwaysIncludeEmail", JSArrayOfString().of([dart.str(alwaysIncludeEmail)]));
      }
      if (conferenceDataVersion != null) {
        _queryParams[$_set]("conferenceDataVersion", JSArrayOfString().of([dart.str(conferenceDataVersion)]));
      }
      if (maxAttendees != null) {
        _queryParams[$_set]("maxAttendees", JSArrayOfString().of([dart.str(maxAttendees)]));
      }
      if (sendNotifications != null) {
        _queryParams[$_set]("sendNotifications", JSArrayOfString().of([dart.str(sendNotifications)]));
      }
      if (sendUpdates != null) {
        _queryParams[$_set]("sendUpdates", JSArrayOfString().of([sendUpdates]));
      }
      if (supportsAttachments != null) {
        _queryParams[$_set]("supportsAttachments", JSArrayOfString().of([dart.str(supportsAttachments)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/events/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(eventId)));
      let _response = this[_requester].request(core.String._check(_url), "PATCH", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Event, dart.fn(data => new v3.Event.fromJson(core.Map._check(data)), dynamicToEvent()));
    }
    quickAdd(calendarId, text, opts) {
      let sendNotifications = opts && 'sendNotifications' in opts ? opts.sendNotifications : null;
      let sendUpdates = opts && 'sendUpdates' in opts ? opts.sendUpdates : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (text == null) {
        dart.throw(new core.ArgumentError.new("Parameter text is required."));
      }
      _queryParams[$_set]("text", JSArrayOfString().of([text]));
      if (sendNotifications != null) {
        _queryParams[$_set]("sendNotifications", JSArrayOfString().of([dart.str(sendNotifications)]));
      }
      if (sendUpdates != null) {
        _queryParams[$_set]("sendUpdates", JSArrayOfString().of([sendUpdates]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/events/quickAdd";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Event, dart.fn(data => new v3.Event.fromJson(core.Map._check(data)), dynamicToEvent()));
    }
    update(request, calendarId, eventId, opts) {
      let alwaysIncludeEmail = opts && 'alwaysIncludeEmail' in opts ? opts.alwaysIncludeEmail : null;
      let conferenceDataVersion = opts && 'conferenceDataVersion' in opts ? opts.conferenceDataVersion : null;
      let maxAttendees = opts && 'maxAttendees' in opts ? opts.maxAttendees : null;
      let sendNotifications = opts && 'sendNotifications' in opts ? opts.sendNotifications : null;
      let sendUpdates = opts && 'sendUpdates' in opts ? opts.sendUpdates : null;
      let supportsAttachments = opts && 'supportsAttachments' in opts ? opts.supportsAttachments : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (eventId == null) {
        dart.throw(new core.ArgumentError.new("Parameter eventId is required."));
      }
      if (alwaysIncludeEmail != null) {
        _queryParams[$_set]("alwaysIncludeEmail", JSArrayOfString().of([dart.str(alwaysIncludeEmail)]));
      }
      if (conferenceDataVersion != null) {
        _queryParams[$_set]("conferenceDataVersion", JSArrayOfString().of([dart.str(conferenceDataVersion)]));
      }
      if (maxAttendees != null) {
        _queryParams[$_set]("maxAttendees", JSArrayOfString().of([dart.str(maxAttendees)]));
      }
      if (sendNotifications != null) {
        _queryParams[$_set]("sendNotifications", JSArrayOfString().of([dart.str(sendNotifications)]));
      }
      if (sendUpdates != null) {
        _queryParams[$_set]("sendUpdates", JSArrayOfString().of([sendUpdates]));
      }
      if (supportsAttachments != null) {
        _queryParams[$_set]("supportsAttachments", JSArrayOfString().of([dart.str(supportsAttachments)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/events/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(eventId)));
      let _response = this[_requester].request(core.String._check(_url), "PUT", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Event, dart.fn(data => new v3.Event.fromJson(core.Map._check(data)), dynamicToEvent()));
    }
    watch(request, calendarId, opts) {
      let alwaysIncludeEmail = opts && 'alwaysIncludeEmail' in opts ? opts.alwaysIncludeEmail : null;
      let iCalUID = opts && 'iCalUID' in opts ? opts.iCalUID : null;
      let maxAttendees = opts && 'maxAttendees' in opts ? opts.maxAttendees : null;
      let maxResults = opts && 'maxResults' in opts ? opts.maxResults : null;
      let orderBy = opts && 'orderBy' in opts ? opts.orderBy : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let privateExtendedProperty = opts && 'privateExtendedProperty' in opts ? opts.privateExtendedProperty : null;
      let q = opts && 'q' in opts ? opts.q : null;
      let sharedExtendedProperty = opts && 'sharedExtendedProperty' in opts ? opts.sharedExtendedProperty : null;
      let showDeleted = opts && 'showDeleted' in opts ? opts.showDeleted : null;
      let showHiddenInvitations = opts && 'showHiddenInvitations' in opts ? opts.showHiddenInvitations : null;
      let singleEvents = opts && 'singleEvents' in opts ? opts.singleEvents : null;
      let syncToken = opts && 'syncToken' in opts ? opts.syncToken : null;
      let timeMax = opts && 'timeMax' in opts ? opts.timeMax : null;
      let timeMin = opts && 'timeMin' in opts ? opts.timeMin : null;
      let timeZone = opts && 'timeZone' in opts ? opts.timeZone : null;
      let updatedMin = opts && 'updatedMin' in opts ? opts.updatedMin : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (calendarId == null) {
        dart.throw(new core.ArgumentError.new("Parameter calendarId is required."));
      }
      if (alwaysIncludeEmail != null) {
        _queryParams[$_set]("alwaysIncludeEmail", JSArrayOfString().of([dart.str(alwaysIncludeEmail)]));
      }
      if (iCalUID != null) {
        _queryParams[$_set]("iCalUID", JSArrayOfString().of([iCalUID]));
      }
      if (maxAttendees != null) {
        _queryParams[$_set]("maxAttendees", JSArrayOfString().of([dart.str(maxAttendees)]));
      }
      if (maxResults != null) {
        _queryParams[$_set]("maxResults", JSArrayOfString().of([dart.str(maxResults)]));
      }
      if (orderBy != null) {
        _queryParams[$_set]("orderBy", JSArrayOfString().of([orderBy]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfString().of([pageToken]));
      }
      if (privateExtendedProperty != null) {
        _queryParams[$_set]("privateExtendedProperty", privateExtendedProperty);
      }
      if (q != null) {
        _queryParams[$_set]("q", JSArrayOfString().of([q]));
      }
      if (sharedExtendedProperty != null) {
        _queryParams[$_set]("sharedExtendedProperty", sharedExtendedProperty);
      }
      if (showDeleted != null) {
        _queryParams[$_set]("showDeleted", JSArrayOfString().of([dart.str(showDeleted)]));
      }
      if (showHiddenInvitations != null) {
        _queryParams[$_set]("showHiddenInvitations", JSArrayOfString().of([dart.str(showHiddenInvitations)]));
      }
      if (singleEvents != null) {
        _queryParams[$_set]("singleEvents", JSArrayOfString().of([dart.str(singleEvents)]));
      }
      if (syncToken != null) {
        _queryParams[$_set]("syncToken", JSArrayOfString().of([syncToken]));
      }
      if (timeMax != null) {
        _queryParams[$_set]("timeMax", JSArrayOfString().of([timeMax.toIso8601String()]));
      }
      if (timeMin != null) {
        _queryParams[$_set]("timeMin", JSArrayOfString().of([timeMin.toIso8601String()]));
      }
      if (timeZone != null) {
        _queryParams[$_set]("timeZone", JSArrayOfString().of([timeZone]));
      }
      if (updatedMin != null) {
        _queryParams[$_set]("updatedMin", JSArrayOfString().of([updatedMin.toIso8601String()]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "calendars/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(calendarId))) + "/events/watch";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Channel, dart.fn(data => new v3.Channel.fromJson(core.Map._check(data)), dynamicToChannel()));
    }
  };
  (v3.EventsResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.EventsResourceApi.prototype;
  dart.addTypeTests(v3.EventsResourceApi);
  dart.setMethodSignature(v3.EventsResourceApi, () => ({
    __proto__: dart.getMethods(v3.EventsResourceApi.__proto__),
    delete: dart.fnType(async.Future, [core.String, core.String], {$fields: core.String, sendNotifications: core.bool, sendUpdates: core.String}, {}),
    get: dart.fnType(async.Future$(v3.Event), [core.String, core.String], {$fields: core.String, alwaysIncludeEmail: core.bool, maxAttendees: core.int, timeZone: core.String}, {}),
    import: dart.fnType(async.Future$(v3.Event), [v3.Event, core.String], {$fields: core.String, conferenceDataVersion: core.int, supportsAttachments: core.bool}, {}),
    insert: dart.fnType(async.Future$(v3.Event), [v3.Event, core.String], {$fields: core.String, conferenceDataVersion: core.int, maxAttendees: core.int, sendNotifications: core.bool, sendUpdates: core.String, supportsAttachments: core.bool}, {}),
    instances: dart.fnType(async.Future$(v3.Events), [core.String, core.String], {$fields: core.String, alwaysIncludeEmail: core.bool, maxAttendees: core.int, maxResults: core.int, originalStart: core.String, pageToken: core.String, showDeleted: core.bool, timeMax: core.DateTime, timeMin: core.DateTime, timeZone: core.String}, {}),
    list: dart.fnType(async.Future$(v3.Events), [core.String], {$fields: core.String, alwaysIncludeEmail: core.bool, iCalUID: core.String, maxAttendees: core.int, maxResults: core.int, orderBy: core.String, pageToken: core.String, privateExtendedProperty: core.List$(core.String), q: core.String, sharedExtendedProperty: core.List$(core.String), showDeleted: core.bool, showHiddenInvitations: core.bool, singleEvents: core.bool, syncToken: core.String, timeMax: core.DateTime, timeMin: core.DateTime, timeZone: core.String, updatedMin: core.DateTime}, {}),
    move: dart.fnType(async.Future$(v3.Event), [core.String, core.String, core.String], {$fields: core.String, sendNotifications: core.bool, sendUpdates: core.String}, {}),
    patch: dart.fnType(async.Future$(v3.Event), [v3.Event, core.String, core.String], {$fields: core.String, alwaysIncludeEmail: core.bool, conferenceDataVersion: core.int, maxAttendees: core.int, sendNotifications: core.bool, sendUpdates: core.String, supportsAttachments: core.bool}, {}),
    quickAdd: dart.fnType(async.Future$(v3.Event), [core.String, core.String], {$fields: core.String, sendNotifications: core.bool, sendUpdates: core.String}, {}),
    update: dart.fnType(async.Future$(v3.Event), [v3.Event, core.String, core.String], {$fields: core.String, alwaysIncludeEmail: core.bool, conferenceDataVersion: core.int, maxAttendees: core.int, sendNotifications: core.bool, sendUpdates: core.String, supportsAttachments: core.bool}, {}),
    watch: dart.fnType(async.Future$(v3.Channel), [v3.Channel, core.String], {$fields: core.String, alwaysIncludeEmail: core.bool, iCalUID: core.String, maxAttendees: core.int, maxResults: core.int, orderBy: core.String, pageToken: core.String, privateExtendedProperty: core.List$(core.String), q: core.String, sharedExtendedProperty: core.List$(core.String), showDeleted: core.bool, showHiddenInvitations: core.bool, singleEvents: core.bool, syncToken: core.String, timeMax: core.DateTime, timeMin: core.DateTime, timeZone: core.String, updatedMin: core.DateTime}, {})
  }));
  dart.setLibraryUri(v3.EventsResourceApi, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.EventsResourceApi, () => ({
    __proto__: dart.getFields(v3.EventsResourceApi.__proto__),
    [_requester]: dart.finalFieldType(clients.ApiRequester)
  }));
  v3.FreebusyResourceApi = class FreebusyResourceApi extends core.Object {
    query(request, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "freeBusy";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.FreeBusyResponse, dart.fn(data => new v3.FreeBusyResponse.fromJson(core.Map._check(data)), dynamicToFreeBusyResponse()));
    }
  };
  (v3.FreebusyResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.FreebusyResourceApi.prototype;
  dart.addTypeTests(v3.FreebusyResourceApi);
  dart.setMethodSignature(v3.FreebusyResourceApi, () => ({
    __proto__: dart.getMethods(v3.FreebusyResourceApi.__proto__),
    query: dart.fnType(async.Future$(v3.FreeBusyResponse), [v3.FreeBusyRequest], {$fields: core.String}, {})
  }));
  dart.setLibraryUri(v3.FreebusyResourceApi, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.FreebusyResourceApi, () => ({
    __proto__: dart.getFields(v3.FreebusyResourceApi.__proto__),
    [_requester]: dart.finalFieldType(clients.ApiRequester)
  }));
  v3.SettingsResourceApi = class SettingsResourceApi extends core.Object {
    get(setting, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (setting == null) {
        dart.throw(new core.ArgumentError.new("Parameter setting is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "users/me/settings/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(setting)));
      let _response = this[_requester].request(core.String._check(_url), "GET", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Setting, dart.fn(data => new v3.Setting.fromJson(core.Map._check(data)), dynamicToSetting()));
    }
    list(opts) {
      let maxResults = opts && 'maxResults' in opts ? opts.maxResults : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let syncToken = opts && 'syncToken' in opts ? opts.syncToken : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (maxResults != null) {
        _queryParams[$_set]("maxResults", JSArrayOfString().of([dart.str(maxResults)]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfString().of([pageToken]));
      }
      if (syncToken != null) {
        _queryParams[$_set]("syncToken", JSArrayOfString().of([syncToken]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "users/me/settings";
      let _response = this[_requester].request(core.String._check(_url), "GET", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Settings, dart.fn(data => new v3.Settings.fromJson(core.Map._check(data)), dynamicToSettings()));
    }
    watch(request, opts) {
      let maxResults = opts && 'maxResults' in opts ? opts.maxResults : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let syncToken = opts && 'syncToken' in opts ? opts.syncToken : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (maxResults != null) {
        _queryParams[$_set]("maxResults", JSArrayOfString().of([dart.str(maxResults)]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfString().of([pageToken]));
      }
      if (syncToken != null) {
        _queryParams[$_set]("syncToken", JSArrayOfString().of([syncToken]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfString().of([$36fields]));
      }
      _url = "users/me/settings/watch";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(v3.Channel, dart.fn(data => new v3.Channel.fromJson(core.Map._check(data)), dynamicToChannel()));
    }
  };
  (v3.SettingsResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.SettingsResourceApi.prototype;
  dart.addTypeTests(v3.SettingsResourceApi);
  dart.setMethodSignature(v3.SettingsResourceApi, () => ({
    __proto__: dart.getMethods(v3.SettingsResourceApi.__proto__),
    get: dart.fnType(async.Future$(v3.Setting), [core.String], {$fields: core.String}, {}),
    list: dart.fnType(async.Future$(v3.Settings), [], {$fields: core.String, maxResults: core.int, pageToken: core.String, syncToken: core.String}, {}),
    watch: dart.fnType(async.Future$(v3.Channel), [v3.Channel], {$fields: core.String, maxResults: core.int, pageToken: core.String, syncToken: core.String}, {})
  }));
  dart.setLibraryUri(v3.SettingsResourceApi, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.SettingsResourceApi, () => ({
    __proto__: dart.getFields(v3.SettingsResourceApi.__proto__),
    [_requester]: dart.finalFieldType(clients.ApiRequester)
  }));
  var etag = dart.privateName(v3, "Acl.etag");
  var items = dart.privateName(v3, "Acl.items");
  var kind = dart.privateName(v3, "Acl.kind");
  var nextPageToken = dart.privateName(v3, "Acl.nextPageToken");
  var nextSyncToken = dart.privateName(v3, "Acl.nextSyncToken");
  v3.Acl = class Acl extends core.Object {
    get etag() {
      return this[etag];
    }
    set etag(value) {
      this[etag] = value;
    }
    get items() {
      return this[items];
    }
    set items(value) {
      this[items] = value;
    }
    get kind() {
      return this[kind];
    }
    set kind(value) {
      this[kind] = value;
    }
    get nextPageToken() {
      return this[nextPageToken];
    }
    set nextPageToken(value) {
      this[nextPageToken] = value;
    }
    get nextSyncToken() {
      return this[nextSyncToken];
    }
    set nextSyncToken(value) {
      this[nextSyncToken] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.etag != null) {
        _json[$_set]("etag", this.etag);
      }
      if (this.items != null) {
        _json[$_set]("items", this.items[$map](MapOfString$Object(), dart.fn(value => value.toJson(), AclRuleToMapOfString$Object()))[$toList]());
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.nextPageToken != null) {
        _json[$_set]("nextPageToken", this.nextPageToken);
      }
      if (this.nextSyncToken != null) {
        _json[$_set]("nextSyncToken", this.nextSyncToken);
      }
      return _json;
    }
  };
  (v3.Acl.new = function() {
    this[etag] = null;
    this[items] = null;
    this[kind] = null;
    this[nextPageToken] = null;
    this[nextSyncToken] = null;
    ;
  }).prototype = v3.Acl.prototype;
  (v3.Acl.fromJson = function(_json) {
    this[etag] = null;
    this[items] = null;
    this[kind] = null;
    this[nextPageToken] = null;
    this[nextSyncToken] = null;
    if (dart.test(_json[$containsKey]("etag"))) {
      this.etag = core.String._check(_json[$_get]("etag"));
    }
    if (dart.test(_json[$containsKey]("items"))) {
      this.items = core.List.as(_json[$_get]("items"))[$map](v3.AclRule, dart.fn(value => new v3.AclRule.fromJson(core.Map._check(value)), dynamicToAclRule()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = core.String._check(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("nextPageToken"))) {
      this.nextPageToken = core.String._check(_json[$_get]("nextPageToken"));
    }
    if (dart.test(_json[$containsKey]("nextSyncToken"))) {
      this.nextSyncToken = core.String._check(_json[$_get]("nextSyncToken"));
    }
  }).prototype = v3.Acl.prototype;
  dart.addTypeTests(v3.Acl);
  dart.setMethodSignature(v3.Acl, () => ({
    __proto__: dart.getMethods(v3.Acl.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.Acl, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.Acl, () => ({
    __proto__: dart.getFields(v3.Acl.__proto__),
    etag: dart.fieldType(core.String),
    items: dart.fieldType(core.List$(v3.AclRule)),
    kind: dart.fieldType(core.String),
    nextPageToken: dart.fieldType(core.String),
    nextSyncToken: dart.fieldType(core.String)
  }));
  var type = dart.privateName(v3, "AclRuleScope.type");
  var value$ = dart.privateName(v3, "AclRuleScope.value");
  v3.AclRuleScope = class AclRuleScope extends core.Object {
    get type() {
      return this[type];
    }
    set type(value) {
      this[type] = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.type != null) {
        _json[$_set]("type", this.type);
      }
      if (this.value != null) {
        _json[$_set]("value", this.value);
      }
      return _json;
    }
  };
  (v3.AclRuleScope.new = function() {
    this[type] = null;
    this[value$] = null;
    ;
  }).prototype = v3.AclRuleScope.prototype;
  (v3.AclRuleScope.fromJson = function(_json) {
    this[type] = null;
    this[value$] = null;
    if (dart.test(_json[$containsKey]("type"))) {
      this.type = core.String._check(_json[$_get]("type"));
    }
    if (dart.test(_json[$containsKey]("value"))) {
      this.value = core.String._check(_json[$_get]("value"));
    }
  }).prototype = v3.AclRuleScope.prototype;
  dart.addTypeTests(v3.AclRuleScope);
  dart.setMethodSignature(v3.AclRuleScope, () => ({
    __proto__: dart.getMethods(v3.AclRuleScope.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.AclRuleScope, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.AclRuleScope, () => ({
    __proto__: dart.getFields(v3.AclRuleScope.__proto__),
    type: dart.fieldType(core.String),
    value: dart.fieldType(core.String)
  }));
  var etag$ = dart.privateName(v3, "AclRule.etag");
  var id = dart.privateName(v3, "AclRule.id");
  var kind$ = dart.privateName(v3, "AclRule.kind");
  var role = dart.privateName(v3, "AclRule.role");
  var scope = dart.privateName(v3, "AclRule.scope");
  v3.AclRule = class AclRule extends core.Object {
    get etag() {
      return this[etag$];
    }
    set etag(value) {
      this[etag$] = value;
    }
    get id() {
      return this[id];
    }
    set id(value) {
      this[id] = value;
    }
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      this[kind$] = value;
    }
    get role() {
      return this[role];
    }
    set role(value) {
      this[role] = value;
    }
    get scope() {
      return this[scope];
    }
    set scope(value) {
      this[scope] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.etag != null) {
        _json[$_set]("etag", this.etag);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.role != null) {
        _json[$_set]("role", this.role);
      }
      if (this.scope != null) {
        _json[$_set]("scope", this.scope.toJson());
      }
      return _json;
    }
  };
  (v3.AclRule.new = function() {
    this[etag$] = null;
    this[id] = null;
    this[kind$] = null;
    this[role] = null;
    this[scope] = null;
    ;
  }).prototype = v3.AclRule.prototype;
  (v3.AclRule.fromJson = function(_json) {
    this[etag$] = null;
    this[id] = null;
    this[kind$] = null;
    this[role] = null;
    this[scope] = null;
    if (dart.test(_json[$containsKey]("etag"))) {
      this.etag = core.String._check(_json[$_get]("etag"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = core.String._check(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = core.String._check(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("role"))) {
      this.role = core.String._check(_json[$_get]("role"));
    }
    if (dart.test(_json[$containsKey]("scope"))) {
      this.scope = new v3.AclRuleScope.fromJson(core.Map._check(_json[$_get]("scope")));
    }
  }).prototype = v3.AclRule.prototype;
  dart.addTypeTests(v3.AclRule);
  dart.setMethodSignature(v3.AclRule, () => ({
    __proto__: dart.getMethods(v3.AclRule.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.AclRule, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.AclRule, () => ({
    __proto__: dart.getFields(v3.AclRule.__proto__),
    etag: dart.fieldType(core.String),
    id: dart.fieldType(core.String),
    kind: dart.fieldType(core.String),
    role: dart.fieldType(core.String),
    scope: dart.fieldType(v3.AclRuleScope)
  }));
  var conferenceProperties = dart.privateName(v3, "Calendar.conferenceProperties");
  var description = dart.privateName(v3, "Calendar.description");
  var etag$0 = dart.privateName(v3, "Calendar.etag");
  var id$ = dart.privateName(v3, "Calendar.id");
  var kind$0 = dart.privateName(v3, "Calendar.kind");
  var location = dart.privateName(v3, "Calendar.location");
  var summary = dart.privateName(v3, "Calendar.summary");
  var timeZone = dart.privateName(v3, "Calendar.timeZone");
  v3.Calendar = class Calendar extends core.Object {
    get conferenceProperties() {
      return this[conferenceProperties];
    }
    set conferenceProperties(value) {
      this[conferenceProperties] = value;
    }
    get description() {
      return this[description];
    }
    set description(value) {
      this[description] = value;
    }
    get etag() {
      return this[etag$0];
    }
    set etag(value) {
      this[etag$0] = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get kind() {
      return this[kind$0];
    }
    set kind(value) {
      this[kind$0] = value;
    }
    get location() {
      return this[location];
    }
    set location(value) {
      this[location] = value;
    }
    get summary() {
      return this[summary];
    }
    set summary(value) {
      this[summary] = value;
    }
    get timeZone() {
      return this[timeZone];
    }
    set timeZone(value) {
      this[timeZone] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.conferenceProperties != null) {
        _json[$_set]("conferenceProperties", this.conferenceProperties.toJson());
      }
      if (this.description != null) {
        _json[$_set]("description", this.description);
      }
      if (this.etag != null) {
        _json[$_set]("etag", this.etag);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.location != null) {
        _json[$_set]("location", this.location);
      }
      if (this.summary != null) {
        _json[$_set]("summary", this.summary);
      }
      if (this.timeZone != null) {
        _json[$_set]("timeZone", this.timeZone);
      }
      return _json;
    }
  };
  (v3.Calendar.new = function() {
    this[conferenceProperties] = null;
    this[description] = null;
    this[etag$0] = null;
    this[id$] = null;
    this[kind$0] = null;
    this[location] = null;
    this[summary] = null;
    this[timeZone] = null;
    ;
  }).prototype = v3.Calendar.prototype;
  (v3.Calendar.fromJson = function(_json) {
    this[conferenceProperties] = null;
    this[description] = null;
    this[etag$0] = null;
    this[id$] = null;
    this[kind$0] = null;
    this[location] = null;
    this[summary] = null;
    this[timeZone] = null;
    if (dart.test(_json[$containsKey]("conferenceProperties"))) {
      this.conferenceProperties = new v3.ConferenceProperties.fromJson(core.Map._check(_json[$_get]("conferenceProperties")));
    }
    if (dart.test(_json[$containsKey]("description"))) {
      this.description = core.String._check(_json[$_get]("description"));
    }
    if (dart.test(_json[$containsKey]("etag"))) {
      this.etag = core.String._check(_json[$_get]("etag"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = core.String._check(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = core.String._check(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("location"))) {
      this.location = core.String._check(_json[$_get]("location"));
    }
    if (dart.test(_json[$containsKey]("summary"))) {
      this.summary = core.String._check(_json[$_get]("summary"));
    }
    if (dart.test(_json[$containsKey]("timeZone"))) {
      this.timeZone = core.String._check(_json[$_get]("timeZone"));
    }
  }).prototype = v3.Calendar.prototype;
  dart.addTypeTests(v3.Calendar);
  dart.setMethodSignature(v3.Calendar, () => ({
    __proto__: dart.getMethods(v3.Calendar.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.Calendar, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.Calendar, () => ({
    __proto__: dart.getFields(v3.Calendar.__proto__),
    conferenceProperties: dart.fieldType(v3.ConferenceProperties),
    description: dart.fieldType(core.String),
    etag: dart.fieldType(core.String),
    id: dart.fieldType(core.String),
    kind: dart.fieldType(core.String),
    location: dart.fieldType(core.String),
    summary: dart.fieldType(core.String),
    timeZone: dart.fieldType(core.String)
  }));
  var etag$1 = dart.privateName(v3, "CalendarList.etag");
  var items$ = dart.privateName(v3, "CalendarList.items");
  var kind$1 = dart.privateName(v3, "CalendarList.kind");
  var nextPageToken$ = dart.privateName(v3, "CalendarList.nextPageToken");
  var nextSyncToken$ = dart.privateName(v3, "CalendarList.nextSyncToken");
  v3.CalendarList = class CalendarList extends core.Object {
    get etag() {
      return this[etag$1];
    }
    set etag(value) {
      this[etag$1] = value;
    }
    get items() {
      return this[items$];
    }
    set items(value) {
      this[items$] = value;
    }
    get kind() {
      return this[kind$1];
    }
    set kind(value) {
      this[kind$1] = value;
    }
    get nextPageToken() {
      return this[nextPageToken$];
    }
    set nextPageToken(value) {
      this[nextPageToken$] = value;
    }
    get nextSyncToken() {
      return this[nextSyncToken$];
    }
    set nextSyncToken(value) {
      this[nextSyncToken$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.etag != null) {
        _json[$_set]("etag", this.etag);
      }
      if (this.items != null) {
        _json[$_set]("items", this.items[$map](MapOfString$Object(), dart.fn(value => value.toJson(), CalendarListEntryToMapOfString$Object()))[$toList]());
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.nextPageToken != null) {
        _json[$_set]("nextPageToken", this.nextPageToken);
      }
      if (this.nextSyncToken != null) {
        _json[$_set]("nextSyncToken", this.nextSyncToken);
      }
      return _json;
    }
  };
  (v3.CalendarList.new = function() {
    this[etag$1] = null;
    this[items$] = null;
    this[kind$1] = null;
    this[nextPageToken$] = null;
    this[nextSyncToken$] = null;
    ;
  }).prototype = v3.CalendarList.prototype;
  (v3.CalendarList.fromJson = function(_json) {
    this[etag$1] = null;
    this[items$] = null;
    this[kind$1] = null;
    this[nextPageToken$] = null;
    this[nextSyncToken$] = null;
    if (dart.test(_json[$containsKey]("etag"))) {
      this.etag = core.String._check(_json[$_get]("etag"));
    }
    if (dart.test(_json[$containsKey]("items"))) {
      this.items = core.List.as(_json[$_get]("items"))[$map](v3.CalendarListEntry, dart.fn(value => new v3.CalendarListEntry.fromJson(core.Map._check(value)), dynamicToCalendarListEntry()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = core.String._check(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("nextPageToken"))) {
      this.nextPageToken = core.String._check(_json[$_get]("nextPageToken"));
    }
    if (dart.test(_json[$containsKey]("nextSyncToken"))) {
      this.nextSyncToken = core.String._check(_json[$_get]("nextSyncToken"));
    }
  }).prototype = v3.CalendarList.prototype;
  dart.addTypeTests(v3.CalendarList);
  dart.setMethodSignature(v3.CalendarList, () => ({
    __proto__: dart.getMethods(v3.CalendarList.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.CalendarList, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.CalendarList, () => ({
    __proto__: dart.getFields(v3.CalendarList.__proto__),
    etag: dart.fieldType(core.String),
    items: dart.fieldType(core.List$(v3.CalendarListEntry)),
    kind: dart.fieldType(core.String),
    nextPageToken: dart.fieldType(core.String),
    nextSyncToken: dart.fieldType(core.String)
  }));
  var notifications = dart.privateName(v3, "CalendarListEntryNotificationSettings.notifications");
  v3.CalendarListEntryNotificationSettings = class CalendarListEntryNotificationSettings extends core.Object {
    get notifications() {
      return this[notifications];
    }
    set notifications(value) {
      this[notifications] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.notifications != null) {
        _json[$_set]("notifications", this.notifications[$map](MapOfString$Object(), dart.fn(value => value.toJson(), CalendarNotificationToMapOfString$Object()))[$toList]());
      }
      return _json;
    }
  };
  (v3.CalendarListEntryNotificationSettings.new = function() {
    this[notifications] = null;
    ;
  }).prototype = v3.CalendarListEntryNotificationSettings.prototype;
  (v3.CalendarListEntryNotificationSettings.fromJson = function(_json) {
    this[notifications] = null;
    if (dart.test(_json[$containsKey]("notifications"))) {
      this.notifications = core.List.as(_json[$_get]("notifications"))[$map](v3.CalendarNotification, dart.fn(value => new v3.CalendarNotification.fromJson(core.Map._check(value)), dynamicToCalendarNotification()))[$toList]();
    }
  }).prototype = v3.CalendarListEntryNotificationSettings.prototype;
  dart.addTypeTests(v3.CalendarListEntryNotificationSettings);
  dart.setMethodSignature(v3.CalendarListEntryNotificationSettings, () => ({
    __proto__: dart.getMethods(v3.CalendarListEntryNotificationSettings.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.CalendarListEntryNotificationSettings, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.CalendarListEntryNotificationSettings, () => ({
    __proto__: dart.getFields(v3.CalendarListEntryNotificationSettings.__proto__),
    notifications: dart.fieldType(core.List$(v3.CalendarNotification))
  }));
  var accessRole = dart.privateName(v3, "CalendarListEntry.accessRole");
  var backgroundColor = dart.privateName(v3, "CalendarListEntry.backgroundColor");
  var colorId = dart.privateName(v3, "CalendarListEntry.colorId");
  var conferenceProperties$ = dart.privateName(v3, "CalendarListEntry.conferenceProperties");
  var defaultReminders = dart.privateName(v3, "CalendarListEntry.defaultReminders");
  var deleted = dart.privateName(v3, "CalendarListEntry.deleted");
  var description$ = dart.privateName(v3, "CalendarListEntry.description");
  var etag$2 = dart.privateName(v3, "CalendarListEntry.etag");
  var foregroundColor = dart.privateName(v3, "CalendarListEntry.foregroundColor");
  var hidden = dart.privateName(v3, "CalendarListEntry.hidden");
  var id$0 = dart.privateName(v3, "CalendarListEntry.id");
  var kind$2 = dart.privateName(v3, "CalendarListEntry.kind");
  var location$ = dart.privateName(v3, "CalendarListEntry.location");
  var notificationSettings = dart.privateName(v3, "CalendarListEntry.notificationSettings");
  var primary = dart.privateName(v3, "CalendarListEntry.primary");
  var selected = dart.privateName(v3, "CalendarListEntry.selected");
  var summary$ = dart.privateName(v3, "CalendarListEntry.summary");
  var summaryOverride = dart.privateName(v3, "CalendarListEntry.summaryOverride");
  var timeZone$ = dart.privateName(v3, "CalendarListEntry.timeZone");
  v3.CalendarListEntry = class CalendarListEntry extends core.Object {
    get accessRole() {
      return this[accessRole];
    }
    set accessRole(value) {
      this[accessRole] = value;
    }
    get backgroundColor() {
      return this[backgroundColor];
    }
    set backgroundColor(value) {
      this[backgroundColor] = value;
    }
    get colorId() {
      return this[colorId];
    }
    set colorId(value) {
      this[colorId] = value;
    }
    get conferenceProperties() {
      return this[conferenceProperties$];
    }
    set conferenceProperties(value) {
      this[conferenceProperties$] = value;
    }
    get defaultReminders() {
      return this[defaultReminders];
    }
    set defaultReminders(value) {
      this[defaultReminders] = value;
    }
    get deleted() {
      return this[deleted];
    }
    set deleted(value) {
      this[deleted] = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      this[description$] = value;
    }
    get etag() {
      return this[etag$2];
    }
    set etag(value) {
      this[etag$2] = value;
    }
    get foregroundColor() {
      return this[foregroundColor];
    }
    set foregroundColor(value) {
      this[foregroundColor] = value;
    }
    get hidden() {
      return this[hidden];
    }
    set hidden(value) {
      this[hidden] = value;
    }
    get id() {
      return this[id$0];
    }
    set id(value) {
      this[id$0] = value;
    }
    get kind() {
      return this[kind$2];
    }
    set kind(value) {
      this[kind$2] = value;
    }
    get location() {
      return this[location$];
    }
    set location(value) {
      this[location$] = value;
    }
    get notificationSettings() {
      return this[notificationSettings];
    }
    set notificationSettings(value) {
      this[notificationSettings] = value;
    }
    get primary() {
      return this[primary];
    }
    set primary(value) {
      this[primary] = value;
    }
    get selected() {
      return this[selected];
    }
    set selected(value) {
      this[selected] = value;
    }
    get summary() {
      return this[summary$];
    }
    set summary(value) {
      this[summary$] = value;
    }
    get summaryOverride() {
      return this[summaryOverride];
    }
    set summaryOverride(value) {
      this[summaryOverride] = value;
    }
    get timeZone() {
      return this[timeZone$];
    }
    set timeZone(value) {
      this[timeZone$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.accessRole != null) {
        _json[$_set]("accessRole", this.accessRole);
      }
      if (this.backgroundColor != null) {
        _json[$_set]("backgroundColor", this.backgroundColor);
      }
      if (this.colorId != null) {
        _json[$_set]("colorId", this.colorId);
      }
      if (this.conferenceProperties != null) {
        _json[$_set]("conferenceProperties", this.conferenceProperties.toJson());
      }
      if (this.defaultReminders != null) {
        _json[$_set]("defaultReminders", this.defaultReminders[$map](MapOfString$Object(), dart.fn(value => value.toJson(), EventReminderToMapOfString$Object()))[$toList]());
      }
      if (this.deleted != null) {
        _json[$_set]("deleted", this.deleted);
      }
      if (this.description != null) {
        _json[$_set]("description", this.description);
      }
      if (this.etag != null) {
        _json[$_set]("etag", this.etag);
      }
      if (this.foregroundColor != null) {
        _json[$_set]("foregroundColor", this.foregroundColor);
      }
      if (this.hidden != null) {
        _json[$_set]("hidden", this.hidden);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.location != null) {
        _json[$_set]("location", this.location);
      }
      if (this.notificationSettings != null) {
        _json[$_set]("notificationSettings", this.notificationSettings.toJson());
      }
      if (this.primary != null) {
        _json[$_set]("primary", this.primary);
      }
      if (this.selected != null) {
        _json[$_set]("selected", this.selected);
      }
      if (this.summary != null) {
        _json[$_set]("summary", this.summary);
      }
      if (this.summaryOverride != null) {
        _json[$_set]("summaryOverride", this.summaryOverride);
      }
      if (this.timeZone != null) {
        _json[$_set]("timeZone", this.timeZone);
      }
      return _json;
    }
  };
  (v3.CalendarListEntry.new = function() {
    this[accessRole] = null;
    this[backgroundColor] = null;
    this[colorId] = null;
    this[conferenceProperties$] = null;
    this[defaultReminders] = null;
    this[deleted] = null;
    this[description$] = null;
    this[etag$2] = null;
    this[foregroundColor] = null;
    this[hidden] = null;
    this[id$0] = null;
    this[kind$2] = null;
    this[location$] = null;
    this[notificationSettings] = null;
    this[primary] = null;
    this[selected] = null;
    this[summary$] = null;
    this[summaryOverride] = null;
    this[timeZone$] = null;
    ;
  }).prototype = v3.CalendarListEntry.prototype;
  (v3.CalendarListEntry.fromJson = function(_json) {
    this[accessRole] = null;
    this[backgroundColor] = null;
    this[colorId] = null;
    this[conferenceProperties$] = null;
    this[defaultReminders] = null;
    this[deleted] = null;
    this[description$] = null;
    this[etag$2] = null;
    this[foregroundColor] = null;
    this[hidden] = null;
    this[id$0] = null;
    this[kind$2] = null;
    this[location$] = null;
    this[notificationSettings] = null;
    this[primary] = null;
    this[selected] = null;
    this[summary$] = null;
    this[summaryOverride] = null;
    this[timeZone$] = null;
    if (dart.test(_json[$containsKey]("accessRole"))) {
      this.accessRole = core.String._check(_json[$_get]("accessRole"));
    }
    if (dart.test(_json[$containsKey]("backgroundColor"))) {
      this.backgroundColor = core.String._check(_json[$_get]("backgroundColor"));
    }
    if (dart.test(_json[$containsKey]("colorId"))) {
      this.colorId = core.String._check(_json[$_get]("colorId"));
    }
    if (dart.test(_json[$containsKey]("conferenceProperties"))) {
      this.conferenceProperties = new v3.ConferenceProperties.fromJson(core.Map._check(_json[$_get]("conferenceProperties")));
    }
    if (dart.test(_json[$containsKey]("defaultReminders"))) {
      this.defaultReminders = core.List.as(_json[$_get]("defaultReminders"))[$map](v3.EventReminder, dart.fn(value => new v3.EventReminder.fromJson(core.Map._check(value)), dynamicToEventReminder()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("deleted"))) {
      this.deleted = core.bool._check(_json[$_get]("deleted"));
    }
    if (dart.test(_json[$containsKey]("description"))) {
      this.description = core.String._check(_json[$_get]("description"));
    }
    if (dart.test(_json[$containsKey]("etag"))) {
      this.etag = core.String._check(_json[$_get]("etag"));
    }
    if (dart.test(_json[$containsKey]("foregroundColor"))) {
      this.foregroundColor = core.String._check(_json[$_get]("foregroundColor"));
    }
    if (dart.test(_json[$containsKey]("hidden"))) {
      this.hidden = core.bool._check(_json[$_get]("hidden"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = core.String._check(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = core.String._check(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("location"))) {
      this.location = core.String._check(_json[$_get]("location"));
    }
    if (dart.test(_json[$containsKey]("notificationSettings"))) {
      this.notificationSettings = new v3.CalendarListEntryNotificationSettings.fromJson(core.Map._check(_json[$_get]("notificationSettings")));
    }
    if (dart.test(_json[$containsKey]("primary"))) {
      this.primary = core.bool._check(_json[$_get]("primary"));
    }
    if (dart.test(_json[$containsKey]("selected"))) {
      this.selected = core.bool._check(_json[$_get]("selected"));
    }
    if (dart.test(_json[$containsKey]("summary"))) {
      this.summary = core.String._check(_json[$_get]("summary"));
    }
    if (dart.test(_json[$containsKey]("summaryOverride"))) {
      this.summaryOverride = core.String._check(_json[$_get]("summaryOverride"));
    }
    if (dart.test(_json[$containsKey]("timeZone"))) {
      this.timeZone = core.String._check(_json[$_get]("timeZone"));
    }
  }).prototype = v3.CalendarListEntry.prototype;
  dart.addTypeTests(v3.CalendarListEntry);
  dart.setMethodSignature(v3.CalendarListEntry, () => ({
    __proto__: dart.getMethods(v3.CalendarListEntry.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.CalendarListEntry, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.CalendarListEntry, () => ({
    __proto__: dart.getFields(v3.CalendarListEntry.__proto__),
    accessRole: dart.fieldType(core.String),
    backgroundColor: dart.fieldType(core.String),
    colorId: dart.fieldType(core.String),
    conferenceProperties: dart.fieldType(v3.ConferenceProperties),
    defaultReminders: dart.fieldType(core.List$(v3.EventReminder)),
    deleted: dart.fieldType(core.bool),
    description: dart.fieldType(core.String),
    etag: dart.fieldType(core.String),
    foregroundColor: dart.fieldType(core.String),
    hidden: dart.fieldType(core.bool),
    id: dart.fieldType(core.String),
    kind: dart.fieldType(core.String),
    location: dart.fieldType(core.String),
    notificationSettings: dart.fieldType(v3.CalendarListEntryNotificationSettings),
    primary: dart.fieldType(core.bool),
    selected: dart.fieldType(core.bool),
    summary: dart.fieldType(core.String),
    summaryOverride: dart.fieldType(core.String),
    timeZone: dart.fieldType(core.String)
  }));
  var method = dart.privateName(v3, "CalendarNotification.method");
  var type$ = dart.privateName(v3, "CalendarNotification.type");
  v3.CalendarNotification = class CalendarNotification extends core.Object {
    get method() {
      return this[method];
    }
    set method(value) {
      this[method] = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      this[type$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.method != null) {
        _json[$_set]("method", this.method);
      }
      if (this.type != null) {
        _json[$_set]("type", this.type);
      }
      return _json;
    }
  };
  (v3.CalendarNotification.new = function() {
    this[method] = null;
    this[type$] = null;
    ;
  }).prototype = v3.CalendarNotification.prototype;
  (v3.CalendarNotification.fromJson = function(_json) {
    this[method] = null;
    this[type$] = null;
    if (dart.test(_json[$containsKey]("method"))) {
      this.method = core.String._check(_json[$_get]("method"));
    }
    if (dart.test(_json[$containsKey]("type"))) {
      this.type = core.String._check(_json[$_get]("type"));
    }
  }).prototype = v3.CalendarNotification.prototype;
  dart.addTypeTests(v3.CalendarNotification);
  dart.setMethodSignature(v3.CalendarNotification, () => ({
    __proto__: dart.getMethods(v3.CalendarNotification.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.CalendarNotification, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.CalendarNotification, () => ({
    __proto__: dart.getFields(v3.CalendarNotification.__proto__),
    method: dart.fieldType(core.String),
    type: dart.fieldType(core.String)
  }));
  var address = dart.privateName(v3, "Channel.address");
  var expiration = dart.privateName(v3, "Channel.expiration");
  var id$1 = dart.privateName(v3, "Channel.id");
  var kind$3 = dart.privateName(v3, "Channel.kind");
  var params = dart.privateName(v3, "Channel.params");
  var payload = dart.privateName(v3, "Channel.payload");
  var resourceId = dart.privateName(v3, "Channel.resourceId");
  var resourceUri = dart.privateName(v3, "Channel.resourceUri");
  var token = dart.privateName(v3, "Channel.token");
  var type$0 = dart.privateName(v3, "Channel.type");
  v3.Channel = class Channel extends core.Object {
    get address() {
      return this[address];
    }
    set address(value) {
      this[address] = value;
    }
    get expiration() {
      return this[expiration];
    }
    set expiration(value) {
      this[expiration] = value;
    }
    get id() {
      return this[id$1];
    }
    set id(value) {
      this[id$1] = value;
    }
    get kind() {
      return this[kind$3];
    }
    set kind(value) {
      this[kind$3] = value;
    }
    get params() {
      return this[params];
    }
    set params(value) {
      this[params] = value;
    }
    get payload() {
      return this[payload];
    }
    set payload(value) {
      this[payload] = value;
    }
    get resourceId() {
      return this[resourceId];
    }
    set resourceId(value) {
      this[resourceId] = value;
    }
    get resourceUri() {
      return this[resourceUri];
    }
    set resourceUri(value) {
      this[resourceUri] = value;
    }
    get token() {
      return this[token];
    }
    set token(value) {
      this[token] = value;
    }
    get type() {
      return this[type$0];
    }
    set type(value) {
      this[type$0] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.address != null) {
        _json[$_set]("address", this.address);
      }
      if (this.expiration != null) {
        _json[$_set]("expiration", this.expiration);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.params != null) {
        _json[$_set]("params", this.params);
      }
      if (this.payload != null) {
        _json[$_set]("payload", this.payload);
      }
      if (this.resourceId != null) {
        _json[$_set]("resourceId", this.resourceId);
      }
      if (this.resourceUri != null) {
        _json[$_set]("resourceUri", this.resourceUri);
      }
      if (this.token != null) {
        _json[$_set]("token", this.token);
      }
      if (this.type != null) {
        _json[$_set]("type", this.type);
      }
      return _json;
    }
  };
  (v3.Channel.new = function() {
    this[address] = null;
    this[expiration] = null;
    this[id$1] = null;
    this[kind$3] = null;
    this[params] = null;
    this[payload] = null;
    this[resourceId] = null;
    this[resourceUri] = null;
    this[token] = null;
    this[type$0] = null;
    ;
  }).prototype = v3.Channel.prototype;
  (v3.Channel.fromJson = function(_json) {
    this[address] = null;
    this[expiration] = null;
    this[id$1] = null;
    this[kind$3] = null;
    this[params] = null;
    this[payload] = null;
    this[resourceId] = null;
    this[resourceUri] = null;
    this[token] = null;
    this[type$0] = null;
    if (dart.test(_json[$containsKey]("address"))) {
      this.address = core.String._check(_json[$_get]("address"));
    }
    if (dart.test(_json[$containsKey]("expiration"))) {
      this.expiration = core.String._check(_json[$_get]("expiration"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = core.String._check(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = core.String._check(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("params"))) {
      this.params = core.Map.as(_json[$_get]("params"))[$cast](core.String, core.String);
    }
    if (dart.test(_json[$containsKey]("payload"))) {
      this.payload = core.bool._check(_json[$_get]("payload"));
    }
    if (dart.test(_json[$containsKey]("resourceId"))) {
      this.resourceId = core.String._check(_json[$_get]("resourceId"));
    }
    if (dart.test(_json[$containsKey]("resourceUri"))) {
      this.resourceUri = core.String._check(_json[$_get]("resourceUri"));
    }
    if (dart.test(_json[$containsKey]("token"))) {
      this.token = core.String._check(_json[$_get]("token"));
    }
    if (dart.test(_json[$containsKey]("type"))) {
      this.type = core.String._check(_json[$_get]("type"));
    }
  }).prototype = v3.Channel.prototype;
  dart.addTypeTests(v3.Channel);
  dart.setMethodSignature(v3.Channel, () => ({
    __proto__: dart.getMethods(v3.Channel.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.Channel, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.Channel, () => ({
    __proto__: dart.getFields(v3.Channel.__proto__),
    address: dart.fieldType(core.String),
    expiration: dart.fieldType(core.String),
    id: dart.fieldType(core.String),
    kind: dart.fieldType(core.String),
    params: dart.fieldType(core.Map$(core.String, core.String)),
    payload: dart.fieldType(core.bool),
    resourceId: dart.fieldType(core.String),
    resourceUri: dart.fieldType(core.String),
    token: dart.fieldType(core.String),
    type: dart.fieldType(core.String)
  }));
  var background = dart.privateName(v3, "ColorDefinition.background");
  var foreground = dart.privateName(v3, "ColorDefinition.foreground");
  v3.ColorDefinition = class ColorDefinition extends core.Object {
    get background() {
      return this[background];
    }
    set background(value) {
      this[background] = value;
    }
    get foreground() {
      return this[foreground];
    }
    set foreground(value) {
      this[foreground] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.background != null) {
        _json[$_set]("background", this.background);
      }
      if (this.foreground != null) {
        _json[$_set]("foreground", this.foreground);
      }
      return _json;
    }
  };
  (v3.ColorDefinition.new = function() {
    this[background] = null;
    this[foreground] = null;
    ;
  }).prototype = v3.ColorDefinition.prototype;
  (v3.ColorDefinition.fromJson = function(_json) {
    this[background] = null;
    this[foreground] = null;
    if (dart.test(_json[$containsKey]("background"))) {
      this.background = core.String._check(_json[$_get]("background"));
    }
    if (dart.test(_json[$containsKey]("foreground"))) {
      this.foreground = core.String._check(_json[$_get]("foreground"));
    }
  }).prototype = v3.ColorDefinition.prototype;
  dart.addTypeTests(v3.ColorDefinition);
  dart.setMethodSignature(v3.ColorDefinition, () => ({
    __proto__: dart.getMethods(v3.ColorDefinition.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.ColorDefinition, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.ColorDefinition, () => ({
    __proto__: dart.getFields(v3.ColorDefinition.__proto__),
    background: dart.fieldType(core.String),
    foreground: dart.fieldType(core.String)
  }));
  var calendar = dart.privateName(v3, "Colors.calendar");
  var event = dart.privateName(v3, "Colors.event");
  var kind$4 = dart.privateName(v3, "Colors.kind");
  var updated = dart.privateName(v3, "Colors.updated");
  v3.Colors = class Colors extends core.Object {
    get calendar() {
      return this[calendar];
    }
    set calendar(value) {
      this[calendar] = value;
    }
    get event() {
      return this[event];
    }
    set event(value) {
      this[event] = value;
    }
    get kind() {
      return this[kind$4];
    }
    set kind(value) {
      this[kind$4] = value;
    }
    get updated() {
      return this[updated];
    }
    set updated(value) {
      this[updated] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.calendar != null) {
        _json[$_set]("calendar", clients.mapMap(v3.ColorDefinition, MapOfString$Object(), this.calendar, dart.fn(item => item.toJson(), ColorDefinitionToMapOfString$Object())));
      }
      if (this.event != null) {
        _json[$_set]("event", clients.mapMap(v3.ColorDefinition, MapOfString$Object(), this.event, dart.fn(item => item.toJson(), ColorDefinitionToMapOfString$Object())));
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.updated != null) {
        _json[$_set]("updated", this.updated.toIso8601String());
      }
      return _json;
    }
  };
  (v3.Colors.new = function() {
    this[calendar] = null;
    this[event] = null;
    this[kind$4] = null;
    this[updated] = null;
    ;
  }).prototype = v3.Colors.prototype;
  (v3.Colors.fromJson = function(_json) {
    this[calendar] = null;
    this[event] = null;
    this[kind$4] = null;
    this[updated] = null;
    if (dart.test(_json[$containsKey]("calendar"))) {
      this.calendar = clients.mapMap(core.Map, v3.ColorDefinition, MapOfString$Map()._check(dart.dgsend(_json[$_get]("calendar"), [core.String, core.Map], 'cast', [])), dart.fn(item => new v3.ColorDefinition.fromJson(item), MapToColorDefinition()));
    }
    if (dart.test(_json[$containsKey]("event"))) {
      this.event = clients.mapMap(core.Map, v3.ColorDefinition, MapOfString$Map()._check(dart.dgsend(_json[$_get]("event"), [core.String, core.Map], 'cast', [])), dart.fn(item => new v3.ColorDefinition.fromJson(item), MapToColorDefinition()));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = core.String._check(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("updated"))) {
      this.updated = core.DateTime.parse(core.String._check(_json[$_get]("updated")));
    }
  }).prototype = v3.Colors.prototype;
  dart.addTypeTests(v3.Colors);
  dart.setMethodSignature(v3.Colors, () => ({
    __proto__: dart.getMethods(v3.Colors.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.Colors, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.Colors, () => ({
    __proto__: dart.getFields(v3.Colors.__proto__),
    calendar: dart.fieldType(core.Map$(core.String, v3.ColorDefinition)),
    event: dart.fieldType(core.Map$(core.String, v3.ColorDefinition)),
    kind: dart.fieldType(core.String),
    updated: dart.fieldType(core.DateTime)
  }));
  var conferenceId = dart.privateName(v3, "ConferenceData.conferenceId");
  var conferenceSolution = dart.privateName(v3, "ConferenceData.conferenceSolution");
  var createRequest = dart.privateName(v3, "ConferenceData.createRequest");
  var entryPoints = dart.privateName(v3, "ConferenceData.entryPoints");
  var notes = dart.privateName(v3, "ConferenceData.notes");
  var parameters = dart.privateName(v3, "ConferenceData.parameters");
  var signature = dart.privateName(v3, "ConferenceData.signature");
  v3.ConferenceData = class ConferenceData extends core.Object {
    get conferenceId() {
      return this[conferenceId];
    }
    set conferenceId(value) {
      this[conferenceId] = value;
    }
    get conferenceSolution() {
      return this[conferenceSolution];
    }
    set conferenceSolution(value) {
      this[conferenceSolution] = value;
    }
    get createRequest() {
      return this[createRequest];
    }
    set createRequest(value) {
      this[createRequest] = value;
    }
    get entryPoints() {
      return this[entryPoints];
    }
    set entryPoints(value) {
      this[entryPoints] = value;
    }
    get notes() {
      return this[notes];
    }
    set notes(value) {
      this[notes] = value;
    }
    get parameters() {
      return this[parameters];
    }
    set parameters(value) {
      this[parameters] = value;
    }
    get signature() {
      return this[signature];
    }
    set signature(value) {
      this[signature] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.conferenceId != null) {
        _json[$_set]("conferenceId", this.conferenceId);
      }
      if (this.conferenceSolution != null) {
        _json[$_set]("conferenceSolution", this.conferenceSolution.toJson());
      }
      if (this.createRequest != null) {
        _json[$_set]("createRequest", this.createRequest.toJson());
      }
      if (this.entryPoints != null) {
        _json[$_set]("entryPoints", this.entryPoints[$map](MapOfString$Object(), dart.fn(value => value.toJson(), EntryPointToMapOfString$Object()))[$toList]());
      }
      if (this.notes != null) {
        _json[$_set]("notes", this.notes);
      }
      if (this.parameters != null) {
        _json[$_set]("parameters", this.parameters.toJson());
      }
      if (this.signature != null) {
        _json[$_set]("signature", this.signature);
      }
      return _json;
    }
  };
  (v3.ConferenceData.new = function() {
    this[conferenceId] = null;
    this[conferenceSolution] = null;
    this[createRequest] = null;
    this[entryPoints] = null;
    this[notes] = null;
    this[parameters] = null;
    this[signature] = null;
    ;
  }).prototype = v3.ConferenceData.prototype;
  (v3.ConferenceData.fromJson = function(_json) {
    this[conferenceId] = null;
    this[conferenceSolution] = null;
    this[createRequest] = null;
    this[entryPoints] = null;
    this[notes] = null;
    this[parameters] = null;
    this[signature] = null;
    if (dart.test(_json[$containsKey]("conferenceId"))) {
      this.conferenceId = core.String._check(_json[$_get]("conferenceId"));
    }
    if (dart.test(_json[$containsKey]("conferenceSolution"))) {
      this.conferenceSolution = new v3.ConferenceSolution.fromJson(core.Map._check(_json[$_get]("conferenceSolution")));
    }
    if (dart.test(_json[$containsKey]("createRequest"))) {
      this.createRequest = new v3.CreateConferenceRequest.fromJson(core.Map._check(_json[$_get]("createRequest")));
    }
    if (dart.test(_json[$containsKey]("entryPoints"))) {
      this.entryPoints = core.List.as(_json[$_get]("entryPoints"))[$map](v3.EntryPoint, dart.fn(value => new v3.EntryPoint.fromJson(core.Map._check(value)), dynamicToEntryPoint()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("notes"))) {
      this.notes = core.String._check(_json[$_get]("notes"));
    }
    if (dart.test(_json[$containsKey]("parameters"))) {
      this.parameters = new v3.ConferenceParameters.fromJson(core.Map._check(_json[$_get]("parameters")));
    }
    if (dart.test(_json[$containsKey]("signature"))) {
      this.signature = core.String._check(_json[$_get]("signature"));
    }
  }).prototype = v3.ConferenceData.prototype;
  dart.addTypeTests(v3.ConferenceData);
  dart.setMethodSignature(v3.ConferenceData, () => ({
    __proto__: dart.getMethods(v3.ConferenceData.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.ConferenceData, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.ConferenceData, () => ({
    __proto__: dart.getFields(v3.ConferenceData.__proto__),
    conferenceId: dart.fieldType(core.String),
    conferenceSolution: dart.fieldType(v3.ConferenceSolution),
    createRequest: dart.fieldType(v3.CreateConferenceRequest),
    entryPoints: dart.fieldType(core.List$(v3.EntryPoint)),
    notes: dart.fieldType(core.String),
    parameters: dart.fieldType(v3.ConferenceParameters),
    signature: dart.fieldType(core.String)
  }));
  var addOnParameters = dart.privateName(v3, "ConferenceParameters.addOnParameters");
  v3.ConferenceParameters = class ConferenceParameters extends core.Object {
    get addOnParameters() {
      return this[addOnParameters];
    }
    set addOnParameters(value) {
      this[addOnParameters] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.addOnParameters != null) {
        _json[$_set]("addOnParameters", this.addOnParameters.toJson());
      }
      return _json;
    }
  };
  (v3.ConferenceParameters.new = function() {
    this[addOnParameters] = null;
    ;
  }).prototype = v3.ConferenceParameters.prototype;
  (v3.ConferenceParameters.fromJson = function(_json) {
    this[addOnParameters] = null;
    if (dart.test(_json[$containsKey]("addOnParameters"))) {
      this.addOnParameters = new v3.ConferenceParametersAddOnParameters.fromJson(core.Map._check(_json[$_get]("addOnParameters")));
    }
  }).prototype = v3.ConferenceParameters.prototype;
  dart.addTypeTests(v3.ConferenceParameters);
  dart.setMethodSignature(v3.ConferenceParameters, () => ({
    __proto__: dart.getMethods(v3.ConferenceParameters.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.ConferenceParameters, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.ConferenceParameters, () => ({
    __proto__: dart.getFields(v3.ConferenceParameters.__proto__),
    addOnParameters: dart.fieldType(v3.ConferenceParametersAddOnParameters)
  }));
  var parameters$ = dart.privateName(v3, "ConferenceParametersAddOnParameters.parameters");
  v3.ConferenceParametersAddOnParameters = class ConferenceParametersAddOnParameters extends core.Object {
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      this[parameters$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.parameters != null) {
        _json[$_set]("parameters", this.parameters);
      }
      return _json;
    }
  };
  (v3.ConferenceParametersAddOnParameters.new = function() {
    this[parameters$] = null;
    ;
  }).prototype = v3.ConferenceParametersAddOnParameters.prototype;
  (v3.ConferenceParametersAddOnParameters.fromJson = function(_json) {
    this[parameters$] = null;
    if (dart.test(_json[$containsKey]("parameters"))) {
      this.parameters = core.Map.as(_json[$_get]("parameters"))[$cast](core.String, core.String);
    }
  }).prototype = v3.ConferenceParametersAddOnParameters.prototype;
  dart.addTypeTests(v3.ConferenceParametersAddOnParameters);
  dart.setMethodSignature(v3.ConferenceParametersAddOnParameters, () => ({
    __proto__: dart.getMethods(v3.ConferenceParametersAddOnParameters.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.ConferenceParametersAddOnParameters, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.ConferenceParametersAddOnParameters, () => ({
    __proto__: dart.getFields(v3.ConferenceParametersAddOnParameters.__proto__),
    parameters: dart.fieldType(core.Map$(core.String, core.String))
  }));
  var allowedConferenceSolutionTypes = dart.privateName(v3, "ConferenceProperties.allowedConferenceSolutionTypes");
  v3.ConferenceProperties = class ConferenceProperties extends core.Object {
    get allowedConferenceSolutionTypes() {
      return this[allowedConferenceSolutionTypes];
    }
    set allowedConferenceSolutionTypes(value) {
      this[allowedConferenceSolutionTypes] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.allowedConferenceSolutionTypes != null) {
        _json[$_set]("allowedConferenceSolutionTypes", this.allowedConferenceSolutionTypes);
      }
      return _json;
    }
  };
  (v3.ConferenceProperties.new = function() {
    this[allowedConferenceSolutionTypes] = null;
    ;
  }).prototype = v3.ConferenceProperties.prototype;
  (v3.ConferenceProperties.fromJson = function(_json) {
    this[allowedConferenceSolutionTypes] = null;
    if (dart.test(_json[$containsKey]("allowedConferenceSolutionTypes"))) {
      this.allowedConferenceSolutionTypes = core.List.as(_json[$_get]("allowedConferenceSolutionTypes"))[$cast](core.String);
    }
  }).prototype = v3.ConferenceProperties.prototype;
  dart.addTypeTests(v3.ConferenceProperties);
  dart.setMethodSignature(v3.ConferenceProperties, () => ({
    __proto__: dart.getMethods(v3.ConferenceProperties.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.ConferenceProperties, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.ConferenceProperties, () => ({
    __proto__: dart.getFields(v3.ConferenceProperties.__proto__),
    allowedConferenceSolutionTypes: dart.fieldType(core.List$(core.String))
  }));
  var statusCode = dart.privateName(v3, "ConferenceRequestStatus.statusCode");
  v3.ConferenceRequestStatus = class ConferenceRequestStatus extends core.Object {
    get statusCode() {
      return this[statusCode];
    }
    set statusCode(value) {
      this[statusCode] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.statusCode != null) {
        _json[$_set]("statusCode", this.statusCode);
      }
      return _json;
    }
  };
  (v3.ConferenceRequestStatus.new = function() {
    this[statusCode] = null;
    ;
  }).prototype = v3.ConferenceRequestStatus.prototype;
  (v3.ConferenceRequestStatus.fromJson = function(_json) {
    this[statusCode] = null;
    if (dart.test(_json[$containsKey]("statusCode"))) {
      this.statusCode = core.String._check(_json[$_get]("statusCode"));
    }
  }).prototype = v3.ConferenceRequestStatus.prototype;
  dart.addTypeTests(v3.ConferenceRequestStatus);
  dart.setMethodSignature(v3.ConferenceRequestStatus, () => ({
    __proto__: dart.getMethods(v3.ConferenceRequestStatus.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.ConferenceRequestStatus, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.ConferenceRequestStatus, () => ({
    __proto__: dart.getFields(v3.ConferenceRequestStatus.__proto__),
    statusCode: dart.fieldType(core.String)
  }));
  var iconUri = dart.privateName(v3, "ConferenceSolution.iconUri");
  var key = dart.privateName(v3, "ConferenceSolution.key");
  var name = dart.privateName(v3, "ConferenceSolution.name");
  v3.ConferenceSolution = class ConferenceSolution extends core.Object {
    get iconUri() {
      return this[iconUri];
    }
    set iconUri(value) {
      this[iconUri] = value;
    }
    get key() {
      return this[key];
    }
    set key(value) {
      this[key] = value;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.iconUri != null) {
        _json[$_set]("iconUri", this.iconUri);
      }
      if (this.key != null) {
        _json[$_set]("key", this.key.toJson());
      }
      if (this.name != null) {
        _json[$_set]("name", this.name);
      }
      return _json;
    }
  };
  (v3.ConferenceSolution.new = function() {
    this[iconUri] = null;
    this[key] = null;
    this[name] = null;
    ;
  }).prototype = v3.ConferenceSolution.prototype;
  (v3.ConferenceSolution.fromJson = function(_json) {
    this[iconUri] = null;
    this[key] = null;
    this[name] = null;
    if (dart.test(_json[$containsKey]("iconUri"))) {
      this.iconUri = core.String._check(_json[$_get]("iconUri"));
    }
    if (dart.test(_json[$containsKey]("key"))) {
      this.key = new v3.ConferenceSolutionKey.fromJson(core.Map._check(_json[$_get]("key")));
    }
    if (dart.test(_json[$containsKey]("name"))) {
      this.name = core.String._check(_json[$_get]("name"));
    }
  }).prototype = v3.ConferenceSolution.prototype;
  dart.addTypeTests(v3.ConferenceSolution);
  dart.setMethodSignature(v3.ConferenceSolution, () => ({
    __proto__: dart.getMethods(v3.ConferenceSolution.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.ConferenceSolution, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.ConferenceSolution, () => ({
    __proto__: dart.getFields(v3.ConferenceSolution.__proto__),
    iconUri: dart.fieldType(core.String),
    key: dart.fieldType(v3.ConferenceSolutionKey),
    name: dart.fieldType(core.String)
  }));
  var type$1 = dart.privateName(v3, "ConferenceSolutionKey.type");
  v3.ConferenceSolutionKey = class ConferenceSolutionKey extends core.Object {
    get type() {
      return this[type$1];
    }
    set type(value) {
      this[type$1] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.type != null) {
        _json[$_set]("type", this.type);
      }
      return _json;
    }
  };
  (v3.ConferenceSolutionKey.new = function() {
    this[type$1] = null;
    ;
  }).prototype = v3.ConferenceSolutionKey.prototype;
  (v3.ConferenceSolutionKey.fromJson = function(_json) {
    this[type$1] = null;
    if (dart.test(_json[$containsKey]("type"))) {
      this.type = core.String._check(_json[$_get]("type"));
    }
  }).prototype = v3.ConferenceSolutionKey.prototype;
  dart.addTypeTests(v3.ConferenceSolutionKey);
  dart.setMethodSignature(v3.ConferenceSolutionKey, () => ({
    __proto__: dart.getMethods(v3.ConferenceSolutionKey.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.ConferenceSolutionKey, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.ConferenceSolutionKey, () => ({
    __proto__: dart.getFields(v3.ConferenceSolutionKey.__proto__),
    type: dart.fieldType(core.String)
  }));
  var conferenceSolutionKey = dart.privateName(v3, "CreateConferenceRequest.conferenceSolutionKey");
  var requestId = dart.privateName(v3, "CreateConferenceRequest.requestId");
  var status = dart.privateName(v3, "CreateConferenceRequest.status");
  v3.CreateConferenceRequest = class CreateConferenceRequest extends core.Object {
    get conferenceSolutionKey() {
      return this[conferenceSolutionKey];
    }
    set conferenceSolutionKey(value) {
      this[conferenceSolutionKey] = value;
    }
    get requestId() {
      return this[requestId];
    }
    set requestId(value) {
      this[requestId] = value;
    }
    get status() {
      return this[status];
    }
    set status(value) {
      this[status] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.conferenceSolutionKey != null) {
        _json[$_set]("conferenceSolutionKey", this.conferenceSolutionKey.toJson());
      }
      if (this.requestId != null) {
        _json[$_set]("requestId", this.requestId);
      }
      if (this.status != null) {
        _json[$_set]("status", this.status.toJson());
      }
      return _json;
    }
  };
  (v3.CreateConferenceRequest.new = function() {
    this[conferenceSolutionKey] = null;
    this[requestId] = null;
    this[status] = null;
    ;
  }).prototype = v3.CreateConferenceRequest.prototype;
  (v3.CreateConferenceRequest.fromJson = function(_json) {
    this[conferenceSolutionKey] = null;
    this[requestId] = null;
    this[status] = null;
    if (dart.test(_json[$containsKey]("conferenceSolutionKey"))) {
      this.conferenceSolutionKey = new v3.ConferenceSolutionKey.fromJson(core.Map._check(_json[$_get]("conferenceSolutionKey")));
    }
    if (dart.test(_json[$containsKey]("requestId"))) {
      this.requestId = core.String._check(_json[$_get]("requestId"));
    }
    if (dart.test(_json[$containsKey]("status"))) {
      this.status = new v3.ConferenceRequestStatus.fromJson(core.Map._check(_json[$_get]("status")));
    }
  }).prototype = v3.CreateConferenceRequest.prototype;
  dart.addTypeTests(v3.CreateConferenceRequest);
  dart.setMethodSignature(v3.CreateConferenceRequest, () => ({
    __proto__: dart.getMethods(v3.CreateConferenceRequest.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.CreateConferenceRequest, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.CreateConferenceRequest, () => ({
    __proto__: dart.getFields(v3.CreateConferenceRequest.__proto__),
    conferenceSolutionKey: dart.fieldType(v3.ConferenceSolutionKey),
    requestId: dart.fieldType(core.String),
    status: dart.fieldType(v3.ConferenceRequestStatus)
  }));
  var accessCode = dart.privateName(v3, "EntryPoint.accessCode");
  var entryPointFeatures = dart.privateName(v3, "EntryPoint.entryPointFeatures");
  var entryPointType = dart.privateName(v3, "EntryPoint.entryPointType");
  var label = dart.privateName(v3, "EntryPoint.label");
  var meetingCode = dart.privateName(v3, "EntryPoint.meetingCode");
  var passcode = dart.privateName(v3, "EntryPoint.passcode");
  var password = dart.privateName(v3, "EntryPoint.password");
  var pin = dart.privateName(v3, "EntryPoint.pin");
  var regionCode = dart.privateName(v3, "EntryPoint.regionCode");
  var uri = dart.privateName(v3, "EntryPoint.uri");
  v3.EntryPoint = class EntryPoint extends core.Object {
    get accessCode() {
      return this[accessCode];
    }
    set accessCode(value) {
      this[accessCode] = value;
    }
    get entryPointFeatures() {
      return this[entryPointFeatures];
    }
    set entryPointFeatures(value) {
      this[entryPointFeatures] = value;
    }
    get entryPointType() {
      return this[entryPointType];
    }
    set entryPointType(value) {
      this[entryPointType] = value;
    }
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    get meetingCode() {
      return this[meetingCode];
    }
    set meetingCode(value) {
      this[meetingCode] = value;
    }
    get passcode() {
      return this[passcode];
    }
    set passcode(value) {
      this[passcode] = value;
    }
    get password() {
      return this[password];
    }
    set password(value) {
      this[password] = value;
    }
    get pin() {
      return this[pin];
    }
    set pin(value) {
      this[pin] = value;
    }
    get regionCode() {
      return this[regionCode];
    }
    set regionCode(value) {
      this[regionCode] = value;
    }
    get uri() {
      return this[uri];
    }
    set uri(value) {
      this[uri] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.accessCode != null) {
        _json[$_set]("accessCode", this.accessCode);
      }
      if (this.entryPointFeatures != null) {
        _json[$_set]("entryPointFeatures", this.entryPointFeatures);
      }
      if (this.entryPointType != null) {
        _json[$_set]("entryPointType", this.entryPointType);
      }
      if (this.label != null) {
        _json[$_set]("label", this.label);
      }
      if (this.meetingCode != null) {
        _json[$_set]("meetingCode", this.meetingCode);
      }
      if (this.passcode != null) {
        _json[$_set]("passcode", this.passcode);
      }
      if (this.password != null) {
        _json[$_set]("password", this.password);
      }
      if (this.pin != null) {
        _json[$_set]("pin", this.pin);
      }
      if (this.regionCode != null) {
        _json[$_set]("regionCode", this.regionCode);
      }
      if (this.uri != null) {
        _json[$_set]("uri", this.uri);
      }
      return _json;
    }
  };
  (v3.EntryPoint.new = function() {
    this[accessCode] = null;
    this[entryPointFeatures] = null;
    this[entryPointType] = null;
    this[label] = null;
    this[meetingCode] = null;
    this[passcode] = null;
    this[password] = null;
    this[pin] = null;
    this[regionCode] = null;
    this[uri] = null;
    ;
  }).prototype = v3.EntryPoint.prototype;
  (v3.EntryPoint.fromJson = function(_json) {
    this[accessCode] = null;
    this[entryPointFeatures] = null;
    this[entryPointType] = null;
    this[label] = null;
    this[meetingCode] = null;
    this[passcode] = null;
    this[password] = null;
    this[pin] = null;
    this[regionCode] = null;
    this[uri] = null;
    if (dart.test(_json[$containsKey]("accessCode"))) {
      this.accessCode = core.String._check(_json[$_get]("accessCode"));
    }
    if (dart.test(_json[$containsKey]("entryPointFeatures"))) {
      this.entryPointFeatures = core.List.as(_json[$_get]("entryPointFeatures"))[$cast](core.String);
    }
    if (dart.test(_json[$containsKey]("entryPointType"))) {
      this.entryPointType = core.String._check(_json[$_get]("entryPointType"));
    }
    if (dart.test(_json[$containsKey]("label"))) {
      this.label = core.String._check(_json[$_get]("label"));
    }
    if (dart.test(_json[$containsKey]("meetingCode"))) {
      this.meetingCode = core.String._check(_json[$_get]("meetingCode"));
    }
    if (dart.test(_json[$containsKey]("passcode"))) {
      this.passcode = core.String._check(_json[$_get]("passcode"));
    }
    if (dart.test(_json[$containsKey]("password"))) {
      this.password = core.String._check(_json[$_get]("password"));
    }
    if (dart.test(_json[$containsKey]("pin"))) {
      this.pin = core.String._check(_json[$_get]("pin"));
    }
    if (dart.test(_json[$containsKey]("regionCode"))) {
      this.regionCode = core.String._check(_json[$_get]("regionCode"));
    }
    if (dart.test(_json[$containsKey]("uri"))) {
      this.uri = core.String._check(_json[$_get]("uri"));
    }
  }).prototype = v3.EntryPoint.prototype;
  dart.addTypeTests(v3.EntryPoint);
  dart.setMethodSignature(v3.EntryPoint, () => ({
    __proto__: dart.getMethods(v3.EntryPoint.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.EntryPoint, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.EntryPoint, () => ({
    __proto__: dart.getFields(v3.EntryPoint.__proto__),
    accessCode: dart.fieldType(core.String),
    entryPointFeatures: dart.fieldType(core.List$(core.String)),
    entryPointType: dart.fieldType(core.String),
    label: dart.fieldType(core.String),
    meetingCode: dart.fieldType(core.String),
    passcode: dart.fieldType(core.String),
    password: dart.fieldType(core.String),
    pin: dart.fieldType(core.String),
    regionCode: dart.fieldType(core.String),
    uri: dart.fieldType(core.String)
  }));
  var domain = dart.privateName(v3, "Error.domain");
  var reason = dart.privateName(v3, "Error.reason");
  v3.Error = class Error extends core.Object {
    get domain() {
      return this[domain];
    }
    set domain(value) {
      this[domain] = value;
    }
    get reason() {
      return this[reason];
    }
    set reason(value) {
      this[reason] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.domain != null) {
        _json[$_set]("domain", this.domain);
      }
      if (this.reason != null) {
        _json[$_set]("reason", this.reason);
      }
      return _json;
    }
  };
  (v3.Error.new = function() {
    this[domain] = null;
    this[reason] = null;
    ;
  }).prototype = v3.Error.prototype;
  (v3.Error.fromJson = function(_json) {
    this[domain] = null;
    this[reason] = null;
    if (dart.test(_json[$containsKey]("domain"))) {
      this.domain = core.String._check(_json[$_get]("domain"));
    }
    if (dart.test(_json[$containsKey]("reason"))) {
      this.reason = core.String._check(_json[$_get]("reason"));
    }
  }).prototype = v3.Error.prototype;
  dart.addTypeTests(v3.Error);
  dart.setMethodSignature(v3.Error, () => ({
    __proto__: dart.getMethods(v3.Error.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.Error, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.Error, () => ({
    __proto__: dart.getFields(v3.Error.__proto__),
    domain: dart.fieldType(core.String),
    reason: dart.fieldType(core.String)
  }));
  var displayName = dart.privateName(v3, "EventCreator.displayName");
  var email = dart.privateName(v3, "EventCreator.email");
  var id$2 = dart.privateName(v3, "EventCreator.id");
  var self = dart.privateName(v3, "EventCreator.self");
  v3.EventCreator = class EventCreator extends core.Object {
    get displayName() {
      return this[displayName];
    }
    set displayName(value) {
      this[displayName] = value;
    }
    get email() {
      return this[email];
    }
    set email(value) {
      this[email] = value;
    }
    get id() {
      return this[id$2];
    }
    set id(value) {
      this[id$2] = value;
    }
    get self() {
      return this[self];
    }
    set self(value) {
      this[self] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.displayName != null) {
        _json[$_set]("displayName", this.displayName);
      }
      if (this.email != null) {
        _json[$_set]("email", this.email);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.self != null) {
        _json[$_set]("self", this.self);
      }
      return _json;
    }
  };
  (v3.EventCreator.new = function() {
    this[displayName] = null;
    this[email] = null;
    this[id$2] = null;
    this[self] = null;
    ;
  }).prototype = v3.EventCreator.prototype;
  (v3.EventCreator.fromJson = function(_json) {
    this[displayName] = null;
    this[email] = null;
    this[id$2] = null;
    this[self] = null;
    if (dart.test(_json[$containsKey]("displayName"))) {
      this.displayName = core.String._check(_json[$_get]("displayName"));
    }
    if (dart.test(_json[$containsKey]("email"))) {
      this.email = core.String._check(_json[$_get]("email"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = core.String._check(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("self"))) {
      this.self = core.bool._check(_json[$_get]("self"));
    }
  }).prototype = v3.EventCreator.prototype;
  dart.addTypeTests(v3.EventCreator);
  dart.setMethodSignature(v3.EventCreator, () => ({
    __proto__: dart.getMethods(v3.EventCreator.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.EventCreator, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.EventCreator, () => ({
    __proto__: dart.getFields(v3.EventCreator.__proto__),
    displayName: dart.fieldType(core.String),
    email: dart.fieldType(core.String),
    id: dart.fieldType(core.String),
    self: dart.fieldType(core.bool)
  }));
  var private$ = dart.privateName(v3, "EventExtendedProperties.private");
  var shared = dart.privateName(v3, "EventExtendedProperties.shared");
  v3.EventExtendedProperties = class EventExtendedProperties extends core.Object {
    get private() {
      return this[private$];
    }
    set private(value) {
      this[private$] = value;
    }
    get shared() {
      return this[shared];
    }
    set shared(value) {
      this[shared] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.private != null) {
        _json[$_set]("private", this.private);
      }
      if (this.shared != null) {
        _json[$_set]("shared", this.shared);
      }
      return _json;
    }
  };
  (v3.EventExtendedProperties.new = function() {
    this[private$] = null;
    this[shared] = null;
    ;
  }).prototype = v3.EventExtendedProperties.prototype;
  (v3.EventExtendedProperties.fromJson = function(_json) {
    this[private$] = null;
    this[shared] = null;
    if (dart.test(_json[$containsKey]("private"))) {
      this.private = core.Map.as(_json[$_get]("private"))[$cast](core.String, core.String);
    }
    if (dart.test(_json[$containsKey]("shared"))) {
      this.shared = core.Map.as(_json[$_get]("shared"))[$cast](core.String, core.String);
    }
  }).prototype = v3.EventExtendedProperties.prototype;
  dart.addTypeTests(v3.EventExtendedProperties);
  dart.setMethodSignature(v3.EventExtendedProperties, () => ({
    __proto__: dart.getMethods(v3.EventExtendedProperties.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.EventExtendedProperties, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.EventExtendedProperties, () => ({
    __proto__: dart.getFields(v3.EventExtendedProperties.__proto__),
    private: dart.fieldType(core.Map$(core.String, core.String)),
    shared: dart.fieldType(core.Map$(core.String, core.String))
  }));
  var display = dart.privateName(v3, "EventGadget.display");
  var height = dart.privateName(v3, "EventGadget.height");
  var iconLink = dart.privateName(v3, "EventGadget.iconLink");
  var link = dart.privateName(v3, "EventGadget.link");
  var preferences = dart.privateName(v3, "EventGadget.preferences");
  var title = dart.privateName(v3, "EventGadget.title");
  var type$2 = dart.privateName(v3, "EventGadget.type");
  var width = dart.privateName(v3, "EventGadget.width");
  v3.EventGadget = class EventGadget extends core.Object {
    get display() {
      return this[display];
    }
    set display(value) {
      this[display] = value;
    }
    get height() {
      return this[height];
    }
    set height(value) {
      this[height] = value;
    }
    get iconLink() {
      return this[iconLink];
    }
    set iconLink(value) {
      this[iconLink] = value;
    }
    get link() {
      return this[link];
    }
    set link(value) {
      this[link] = value;
    }
    get preferences() {
      return this[preferences];
    }
    set preferences(value) {
      this[preferences] = value;
    }
    get title() {
      return this[title];
    }
    set title(value) {
      this[title] = value;
    }
    get type() {
      return this[type$2];
    }
    set type(value) {
      this[type$2] = value;
    }
    get width() {
      return this[width];
    }
    set width(value) {
      this[width] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.display != null) {
        _json[$_set]("display", this.display);
      }
      if (this.height != null) {
        _json[$_set]("height", this.height);
      }
      if (this.iconLink != null) {
        _json[$_set]("iconLink", this.iconLink);
      }
      if (this.link != null) {
        _json[$_set]("link", this.link);
      }
      if (this.preferences != null) {
        _json[$_set]("preferences", this.preferences);
      }
      if (this.title != null) {
        _json[$_set]("title", this.title);
      }
      if (this.type != null) {
        _json[$_set]("type", this.type);
      }
      if (this.width != null) {
        _json[$_set]("width", this.width);
      }
      return _json;
    }
  };
  (v3.EventGadget.new = function() {
    this[display] = null;
    this[height] = null;
    this[iconLink] = null;
    this[link] = null;
    this[preferences] = null;
    this[title] = null;
    this[type$2] = null;
    this[width] = null;
    ;
  }).prototype = v3.EventGadget.prototype;
  (v3.EventGadget.fromJson = function(_json) {
    this[display] = null;
    this[height] = null;
    this[iconLink] = null;
    this[link] = null;
    this[preferences] = null;
    this[title] = null;
    this[type$2] = null;
    this[width] = null;
    if (dart.test(_json[$containsKey]("display"))) {
      this.display = core.String._check(_json[$_get]("display"));
    }
    if (dart.test(_json[$containsKey]("height"))) {
      this.height = core.int._check(_json[$_get]("height"));
    }
    if (dart.test(_json[$containsKey]("iconLink"))) {
      this.iconLink = core.String._check(_json[$_get]("iconLink"));
    }
    if (dart.test(_json[$containsKey]("link"))) {
      this.link = core.String._check(_json[$_get]("link"));
    }
    if (dart.test(_json[$containsKey]("preferences"))) {
      this.preferences = core.Map.as(_json[$_get]("preferences"))[$cast](core.String, core.String);
    }
    if (dart.test(_json[$containsKey]("title"))) {
      this.title = core.String._check(_json[$_get]("title"));
    }
    if (dart.test(_json[$containsKey]("type"))) {
      this.type = core.String._check(_json[$_get]("type"));
    }
    if (dart.test(_json[$containsKey]("width"))) {
      this.width = core.int._check(_json[$_get]("width"));
    }
  }).prototype = v3.EventGadget.prototype;
  dart.addTypeTests(v3.EventGadget);
  dart.setMethodSignature(v3.EventGadget, () => ({
    __proto__: dart.getMethods(v3.EventGadget.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.EventGadget, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.EventGadget, () => ({
    __proto__: dart.getFields(v3.EventGadget.__proto__),
    display: dart.fieldType(core.String),
    height: dart.fieldType(core.int),
    iconLink: dart.fieldType(core.String),
    link: dart.fieldType(core.String),
    preferences: dart.fieldType(core.Map$(core.String, core.String)),
    title: dart.fieldType(core.String),
    type: dart.fieldType(core.String),
    width: dart.fieldType(core.int)
  }));
  var displayName$ = dart.privateName(v3, "EventOrganizer.displayName");
  var email$ = dart.privateName(v3, "EventOrganizer.email");
  var id$3 = dart.privateName(v3, "EventOrganizer.id");
  var self$ = dart.privateName(v3, "EventOrganizer.self");
  v3.EventOrganizer = class EventOrganizer extends core.Object {
    get displayName() {
      return this[displayName$];
    }
    set displayName(value) {
      this[displayName$] = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      this[email$] = value;
    }
    get id() {
      return this[id$3];
    }
    set id(value) {
      this[id$3] = value;
    }
    get self() {
      return this[self$];
    }
    set self(value) {
      this[self$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.displayName != null) {
        _json[$_set]("displayName", this.displayName);
      }
      if (this.email != null) {
        _json[$_set]("email", this.email);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.self != null) {
        _json[$_set]("self", this.self);
      }
      return _json;
    }
  };
  (v3.EventOrganizer.new = function() {
    this[displayName$] = null;
    this[email$] = null;
    this[id$3] = null;
    this[self$] = null;
    ;
  }).prototype = v3.EventOrganizer.prototype;
  (v3.EventOrganizer.fromJson = function(_json) {
    this[displayName$] = null;
    this[email$] = null;
    this[id$3] = null;
    this[self$] = null;
    if (dart.test(_json[$containsKey]("displayName"))) {
      this.displayName = core.String._check(_json[$_get]("displayName"));
    }
    if (dart.test(_json[$containsKey]("email"))) {
      this.email = core.String._check(_json[$_get]("email"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = core.String._check(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("self"))) {
      this.self = core.bool._check(_json[$_get]("self"));
    }
  }).prototype = v3.EventOrganizer.prototype;
  dart.addTypeTests(v3.EventOrganizer);
  dart.setMethodSignature(v3.EventOrganizer, () => ({
    __proto__: dart.getMethods(v3.EventOrganizer.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.EventOrganizer, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.EventOrganizer, () => ({
    __proto__: dart.getFields(v3.EventOrganizer.__proto__),
    displayName: dart.fieldType(core.String),
    email: dart.fieldType(core.String),
    id: dart.fieldType(core.String),
    self: dart.fieldType(core.bool)
  }));
  var overrides = dart.privateName(v3, "EventReminders.overrides");
  var useDefault = dart.privateName(v3, "EventReminders.useDefault");
  v3.EventReminders = class EventReminders extends core.Object {
    get overrides() {
      return this[overrides];
    }
    set overrides(value) {
      this[overrides] = value;
    }
    get useDefault() {
      return this[useDefault];
    }
    set useDefault(value) {
      this[useDefault] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.overrides != null) {
        _json[$_set]("overrides", this.overrides[$map](MapOfString$Object(), dart.fn(value => value.toJson(), EventReminderToMapOfString$Object()))[$toList]());
      }
      if (this.useDefault != null) {
        _json[$_set]("useDefault", this.useDefault);
      }
      return _json;
    }
  };
  (v3.EventReminders.new = function() {
    this[overrides] = null;
    this[useDefault] = null;
    ;
  }).prototype = v3.EventReminders.prototype;
  (v3.EventReminders.fromJson = function(_json) {
    this[overrides] = null;
    this[useDefault] = null;
    if (dart.test(_json[$containsKey]("overrides"))) {
      this.overrides = core.List.as(_json[$_get]("overrides"))[$map](v3.EventReminder, dart.fn(value => new v3.EventReminder.fromJson(core.Map._check(value)), dynamicToEventReminder()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("useDefault"))) {
      this.useDefault = core.bool._check(_json[$_get]("useDefault"));
    }
  }).prototype = v3.EventReminders.prototype;
  dart.addTypeTests(v3.EventReminders);
  dart.setMethodSignature(v3.EventReminders, () => ({
    __proto__: dart.getMethods(v3.EventReminders.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.EventReminders, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.EventReminders, () => ({
    __proto__: dart.getFields(v3.EventReminders.__proto__),
    overrides: dart.fieldType(core.List$(v3.EventReminder)),
    useDefault: dart.fieldType(core.bool)
  }));
  var title$ = dart.privateName(v3, "EventSource.title");
  var url = dart.privateName(v3, "EventSource.url");
  v3.EventSource = class EventSource extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    get url() {
      return this[url];
    }
    set url(value) {
      this[url] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.title != null) {
        _json[$_set]("title", this.title);
      }
      if (this.url != null) {
        _json[$_set]("url", this.url);
      }
      return _json;
    }
  };
  (v3.EventSource.new = function() {
    this[title$] = null;
    this[url] = null;
    ;
  }).prototype = v3.EventSource.prototype;
  (v3.EventSource.fromJson = function(_json) {
    this[title$] = null;
    this[url] = null;
    if (dart.test(_json[$containsKey]("title"))) {
      this.title = core.String._check(_json[$_get]("title"));
    }
    if (dart.test(_json[$containsKey]("url"))) {
      this.url = core.String._check(_json[$_get]("url"));
    }
  }).prototype = v3.EventSource.prototype;
  dart.addTypeTests(v3.EventSource);
  dart.setMethodSignature(v3.EventSource, () => ({
    __proto__: dart.getMethods(v3.EventSource.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.EventSource, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.EventSource, () => ({
    __proto__: dart.getFields(v3.EventSource.__proto__),
    title: dart.fieldType(core.String),
    url: dart.fieldType(core.String)
  }));
  var anyoneCanAddSelf = dart.privateName(v3, "Event.anyoneCanAddSelf");
  var attachments = dart.privateName(v3, "Event.attachments");
  var attendees = dart.privateName(v3, "Event.attendees");
  var attendeesOmitted = dart.privateName(v3, "Event.attendeesOmitted");
  var colorId$ = dart.privateName(v3, "Event.colorId");
  var conferenceData = dart.privateName(v3, "Event.conferenceData");
  var created = dart.privateName(v3, "Event.created");
  var creator = dart.privateName(v3, "Event.creator");
  var description$0 = dart.privateName(v3, "Event.description");
  var end = dart.privateName(v3, "Event.end");
  var endTimeUnspecified = dart.privateName(v3, "Event.endTimeUnspecified");
  var etag$3 = dart.privateName(v3, "Event.etag");
  var extendedProperties = dart.privateName(v3, "Event.extendedProperties");
  var gadget = dart.privateName(v3, "Event.gadget");
  var guestsCanInviteOthers = dart.privateName(v3, "Event.guestsCanInviteOthers");
  var guestsCanModify = dart.privateName(v3, "Event.guestsCanModify");
  var guestsCanSeeOtherGuests = dart.privateName(v3, "Event.guestsCanSeeOtherGuests");
  var hangoutLink = dart.privateName(v3, "Event.hangoutLink");
  var htmlLink = dart.privateName(v3, "Event.htmlLink");
  var iCalUID = dart.privateName(v3, "Event.iCalUID");
  var id$4 = dart.privateName(v3, "Event.id");
  var kind$5 = dart.privateName(v3, "Event.kind");
  var location$0 = dart.privateName(v3, "Event.location");
  var locked = dart.privateName(v3, "Event.locked");
  var organizer = dart.privateName(v3, "Event.organizer");
  var originalStartTime = dart.privateName(v3, "Event.originalStartTime");
  var privateCopy = dart.privateName(v3, "Event.privateCopy");
  var recurrence = dart.privateName(v3, "Event.recurrence");
  var recurringEventId = dart.privateName(v3, "Event.recurringEventId");
  var reminders = dart.privateName(v3, "Event.reminders");
  var sequence = dart.privateName(v3, "Event.sequence");
  var source = dart.privateName(v3, "Event.source");
  var start = dart.privateName(v3, "Event.start");
  var status$ = dart.privateName(v3, "Event.status");
  var summary$0 = dart.privateName(v3, "Event.summary");
  var transparency = dart.privateName(v3, "Event.transparency");
  var updated$ = dart.privateName(v3, "Event.updated");
  var visibility = dart.privateName(v3, "Event.visibility");
  v3.Event = class Event extends core.Object {
    get anyoneCanAddSelf() {
      return this[anyoneCanAddSelf];
    }
    set anyoneCanAddSelf(value) {
      this[anyoneCanAddSelf] = value;
    }
    get attachments() {
      return this[attachments];
    }
    set attachments(value) {
      this[attachments] = value;
    }
    get attendees() {
      return this[attendees];
    }
    set attendees(value) {
      this[attendees] = value;
    }
    get attendeesOmitted() {
      return this[attendeesOmitted];
    }
    set attendeesOmitted(value) {
      this[attendeesOmitted] = value;
    }
    get colorId() {
      return this[colorId$];
    }
    set colorId(value) {
      this[colorId$] = value;
    }
    get conferenceData() {
      return this[conferenceData];
    }
    set conferenceData(value) {
      this[conferenceData] = value;
    }
    get created() {
      return this[created];
    }
    set created(value) {
      this[created] = value;
    }
    get creator() {
      return this[creator];
    }
    set creator(value) {
      this[creator] = value;
    }
    get description() {
      return this[description$0];
    }
    set description(value) {
      this[description$0] = value;
    }
    get end() {
      return this[end];
    }
    set end(value) {
      this[end] = value;
    }
    get endTimeUnspecified() {
      return this[endTimeUnspecified];
    }
    set endTimeUnspecified(value) {
      this[endTimeUnspecified] = value;
    }
    get etag() {
      return this[etag$3];
    }
    set etag(value) {
      this[etag$3] = value;
    }
    get extendedProperties() {
      return this[extendedProperties];
    }
    set extendedProperties(value) {
      this[extendedProperties] = value;
    }
    get gadget() {
      return this[gadget];
    }
    set gadget(value) {
      this[gadget] = value;
    }
    get guestsCanInviteOthers() {
      return this[guestsCanInviteOthers];
    }
    set guestsCanInviteOthers(value) {
      this[guestsCanInviteOthers] = value;
    }
    get guestsCanModify() {
      return this[guestsCanModify];
    }
    set guestsCanModify(value) {
      this[guestsCanModify] = value;
    }
    get guestsCanSeeOtherGuests() {
      return this[guestsCanSeeOtherGuests];
    }
    set guestsCanSeeOtherGuests(value) {
      this[guestsCanSeeOtherGuests] = value;
    }
    get hangoutLink() {
      return this[hangoutLink];
    }
    set hangoutLink(value) {
      this[hangoutLink] = value;
    }
    get htmlLink() {
      return this[htmlLink];
    }
    set htmlLink(value) {
      this[htmlLink] = value;
    }
    get iCalUID() {
      return this[iCalUID];
    }
    set iCalUID(value) {
      this[iCalUID] = value;
    }
    get id() {
      return this[id$4];
    }
    set id(value) {
      this[id$4] = value;
    }
    get kind() {
      return this[kind$5];
    }
    set kind(value) {
      this[kind$5] = value;
    }
    get location() {
      return this[location$0];
    }
    set location(value) {
      this[location$0] = value;
    }
    get locked() {
      return this[locked];
    }
    set locked(value) {
      this[locked] = value;
    }
    get organizer() {
      return this[organizer];
    }
    set organizer(value) {
      this[organizer] = value;
    }
    get originalStartTime() {
      return this[originalStartTime];
    }
    set originalStartTime(value) {
      this[originalStartTime] = value;
    }
    get privateCopy() {
      return this[privateCopy];
    }
    set privateCopy(value) {
      this[privateCopy] = value;
    }
    get recurrence() {
      return this[recurrence];
    }
    set recurrence(value) {
      this[recurrence] = value;
    }
    get recurringEventId() {
      return this[recurringEventId];
    }
    set recurringEventId(value) {
      this[recurringEventId] = value;
    }
    get reminders() {
      return this[reminders];
    }
    set reminders(value) {
      this[reminders] = value;
    }
    get sequence() {
      return this[sequence];
    }
    set sequence(value) {
      this[sequence] = value;
    }
    get source() {
      return this[source];
    }
    set source(value) {
      this[source] = value;
    }
    get start() {
      return this[start];
    }
    set start(value) {
      this[start] = value;
    }
    get status() {
      return this[status$];
    }
    set status(value) {
      this[status$] = value;
    }
    get summary() {
      return this[summary$0];
    }
    set summary(value) {
      this[summary$0] = value;
    }
    get transparency() {
      return this[transparency];
    }
    set transparency(value) {
      this[transparency] = value;
    }
    get updated() {
      return this[updated$];
    }
    set updated(value) {
      this[updated$] = value;
    }
    get visibility() {
      return this[visibility];
    }
    set visibility(value) {
      this[visibility] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.anyoneCanAddSelf != null) {
        _json[$_set]("anyoneCanAddSelf", this.anyoneCanAddSelf);
      }
      if (this.attachments != null) {
        _json[$_set]("attachments", this.attachments[$map](MapOfString$Object(), dart.fn(value => value.toJson(), EventAttachmentToMapOfString$Object()))[$toList]());
      }
      if (this.attendees != null) {
        _json[$_set]("attendees", this.attendees[$map](MapOfString$Object(), dart.fn(value => value.toJson(), EventAttendeeToMapOfString$Object()))[$toList]());
      }
      if (this.attendeesOmitted != null) {
        _json[$_set]("attendeesOmitted", this.attendeesOmitted);
      }
      if (this.colorId != null) {
        _json[$_set]("colorId", this.colorId);
      }
      if (this.conferenceData != null) {
        _json[$_set]("conferenceData", this.conferenceData.toJson());
      }
      if (this.created != null) {
        _json[$_set]("created", this.created.toIso8601String());
      }
      if (this.creator != null) {
        _json[$_set]("creator", this.creator.toJson());
      }
      if (this.description != null) {
        _json[$_set]("description", this.description);
      }
      if (this.end != null) {
        _json[$_set]("end", this.end.toJson());
      }
      if (this.endTimeUnspecified != null) {
        _json[$_set]("endTimeUnspecified", this.endTimeUnspecified);
      }
      if (this.etag != null) {
        _json[$_set]("etag", this.etag);
      }
      if (this.extendedProperties != null) {
        _json[$_set]("extendedProperties", this.extendedProperties.toJson());
      }
      if (this.gadget != null) {
        _json[$_set]("gadget", this.gadget.toJson());
      }
      if (this.guestsCanInviteOthers != null) {
        _json[$_set]("guestsCanInviteOthers", this.guestsCanInviteOthers);
      }
      if (this.guestsCanModify != null) {
        _json[$_set]("guestsCanModify", this.guestsCanModify);
      }
      if (this.guestsCanSeeOtherGuests != null) {
        _json[$_set]("guestsCanSeeOtherGuests", this.guestsCanSeeOtherGuests);
      }
      if (this.hangoutLink != null) {
        _json[$_set]("hangoutLink", this.hangoutLink);
      }
      if (this.htmlLink != null) {
        _json[$_set]("htmlLink", this.htmlLink);
      }
      if (this.iCalUID != null) {
        _json[$_set]("iCalUID", this.iCalUID);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.location != null) {
        _json[$_set]("location", this.location);
      }
      if (this.locked != null) {
        _json[$_set]("locked", this.locked);
      }
      if (this.organizer != null) {
        _json[$_set]("organizer", this.organizer.toJson());
      }
      if (this.originalStartTime != null) {
        _json[$_set]("originalStartTime", this.originalStartTime.toJson());
      }
      if (this.privateCopy != null) {
        _json[$_set]("privateCopy", this.privateCopy);
      }
      if (this.recurrence != null) {
        _json[$_set]("recurrence", this.recurrence);
      }
      if (this.recurringEventId != null) {
        _json[$_set]("recurringEventId", this.recurringEventId);
      }
      if (this.reminders != null) {
        _json[$_set]("reminders", this.reminders.toJson());
      }
      if (this.sequence != null) {
        _json[$_set]("sequence", this.sequence);
      }
      if (this.source != null) {
        _json[$_set]("source", this.source.toJson());
      }
      if (this.start != null) {
        _json[$_set]("start", this.start.toJson());
      }
      if (this.status != null) {
        _json[$_set]("status", this.status);
      }
      if (this.summary != null) {
        _json[$_set]("summary", this.summary);
      }
      if (this.transparency != null) {
        _json[$_set]("transparency", this.transparency);
      }
      if (this.updated != null) {
        _json[$_set]("updated", this.updated.toIso8601String());
      }
      if (this.visibility != null) {
        _json[$_set]("visibility", this.visibility);
      }
      return _json;
    }
  };
  (v3.Event.new = function() {
    this[anyoneCanAddSelf] = null;
    this[attachments] = null;
    this[attendees] = null;
    this[attendeesOmitted] = null;
    this[colorId$] = null;
    this[conferenceData] = null;
    this[created] = null;
    this[creator] = null;
    this[description$0] = null;
    this[end] = null;
    this[endTimeUnspecified] = null;
    this[etag$3] = null;
    this[extendedProperties] = null;
    this[gadget] = null;
    this[guestsCanInviteOthers] = null;
    this[guestsCanModify] = null;
    this[guestsCanSeeOtherGuests] = null;
    this[hangoutLink] = null;
    this[htmlLink] = null;
    this[iCalUID] = null;
    this[id$4] = null;
    this[kind$5] = null;
    this[location$0] = null;
    this[locked] = null;
    this[organizer] = null;
    this[originalStartTime] = null;
    this[privateCopy] = null;
    this[recurrence] = null;
    this[recurringEventId] = null;
    this[reminders] = null;
    this[sequence] = null;
    this[source] = null;
    this[start] = null;
    this[status$] = null;
    this[summary$0] = null;
    this[transparency] = null;
    this[updated$] = null;
    this[visibility] = null;
    ;
  }).prototype = v3.Event.prototype;
  (v3.Event.fromJson = function(_json) {
    this[anyoneCanAddSelf] = null;
    this[attachments] = null;
    this[attendees] = null;
    this[attendeesOmitted] = null;
    this[colorId$] = null;
    this[conferenceData] = null;
    this[created] = null;
    this[creator] = null;
    this[description$0] = null;
    this[end] = null;
    this[endTimeUnspecified] = null;
    this[etag$3] = null;
    this[extendedProperties] = null;
    this[gadget] = null;
    this[guestsCanInviteOthers] = null;
    this[guestsCanModify] = null;
    this[guestsCanSeeOtherGuests] = null;
    this[hangoutLink] = null;
    this[htmlLink] = null;
    this[iCalUID] = null;
    this[id$4] = null;
    this[kind$5] = null;
    this[location$0] = null;
    this[locked] = null;
    this[organizer] = null;
    this[originalStartTime] = null;
    this[privateCopy] = null;
    this[recurrence] = null;
    this[recurringEventId] = null;
    this[reminders] = null;
    this[sequence] = null;
    this[source] = null;
    this[start] = null;
    this[status$] = null;
    this[summary$0] = null;
    this[transparency] = null;
    this[updated$] = null;
    this[visibility] = null;
    if (dart.test(_json[$containsKey]("anyoneCanAddSelf"))) {
      this.anyoneCanAddSelf = core.bool._check(_json[$_get]("anyoneCanAddSelf"));
    }
    if (dart.test(_json[$containsKey]("attachments"))) {
      this.attachments = core.List.as(_json[$_get]("attachments"))[$map](v3.EventAttachment, dart.fn(value => new v3.EventAttachment.fromJson(core.Map._check(value)), dynamicToEventAttachment()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("attendees"))) {
      this.attendees = core.List.as(_json[$_get]("attendees"))[$map](v3.EventAttendee, dart.fn(value => new v3.EventAttendee.fromJson(core.Map._check(value)), dynamicToEventAttendee()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("attendeesOmitted"))) {
      this.attendeesOmitted = core.bool._check(_json[$_get]("attendeesOmitted"));
    }
    if (dart.test(_json[$containsKey]("colorId"))) {
      this.colorId = core.String._check(_json[$_get]("colorId"));
    }
    if (dart.test(_json[$containsKey]("conferenceData"))) {
      this.conferenceData = new v3.ConferenceData.fromJson(core.Map._check(_json[$_get]("conferenceData")));
    }
    if (dart.test(_json[$containsKey]("created"))) {
      this.created = core.DateTime.parse(core.String._check(_json[$_get]("created")));
    }
    if (dart.test(_json[$containsKey]("creator"))) {
      this.creator = new v3.EventCreator.fromJson(core.Map._check(_json[$_get]("creator")));
    }
    if (dart.test(_json[$containsKey]("description"))) {
      this.description = core.String._check(_json[$_get]("description"));
    }
    if (dart.test(_json[$containsKey]("end"))) {
      this.end = new v3.EventDateTime.fromJson(core.Map._check(_json[$_get]("end")));
    }
    if (dart.test(_json[$containsKey]("endTimeUnspecified"))) {
      this.endTimeUnspecified = core.bool._check(_json[$_get]("endTimeUnspecified"));
    }
    if (dart.test(_json[$containsKey]("etag"))) {
      this.etag = core.String._check(_json[$_get]("etag"));
    }
    if (dart.test(_json[$containsKey]("extendedProperties"))) {
      this.extendedProperties = new v3.EventExtendedProperties.fromJson(core.Map._check(_json[$_get]("extendedProperties")));
    }
    if (dart.test(_json[$containsKey]("gadget"))) {
      this.gadget = new v3.EventGadget.fromJson(core.Map._check(_json[$_get]("gadget")));
    }
    if (dart.test(_json[$containsKey]("guestsCanInviteOthers"))) {
      this.guestsCanInviteOthers = core.bool._check(_json[$_get]("guestsCanInviteOthers"));
    }
    if (dart.test(_json[$containsKey]("guestsCanModify"))) {
      this.guestsCanModify = core.bool._check(_json[$_get]("guestsCanModify"));
    }
    if (dart.test(_json[$containsKey]("guestsCanSeeOtherGuests"))) {
      this.guestsCanSeeOtherGuests = core.bool._check(_json[$_get]("guestsCanSeeOtherGuests"));
    }
    if (dart.test(_json[$containsKey]("hangoutLink"))) {
      this.hangoutLink = core.String._check(_json[$_get]("hangoutLink"));
    }
    if (dart.test(_json[$containsKey]("htmlLink"))) {
      this.htmlLink = core.String._check(_json[$_get]("htmlLink"));
    }
    if (dart.test(_json[$containsKey]("iCalUID"))) {
      this.iCalUID = core.String._check(_json[$_get]("iCalUID"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = core.String._check(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = core.String._check(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("location"))) {
      this.location = core.String._check(_json[$_get]("location"));
    }
    if (dart.test(_json[$containsKey]("locked"))) {
      this.locked = core.bool._check(_json[$_get]("locked"));
    }
    if (dart.test(_json[$containsKey]("organizer"))) {
      this.organizer = new v3.EventOrganizer.fromJson(core.Map._check(_json[$_get]("organizer")));
    }
    if (dart.test(_json[$containsKey]("originalStartTime"))) {
      this.originalStartTime = new v3.EventDateTime.fromJson(core.Map._check(_json[$_get]("originalStartTime")));
    }
    if (dart.test(_json[$containsKey]("privateCopy"))) {
      this.privateCopy = core.bool._check(_json[$_get]("privateCopy"));
    }
    if (dart.test(_json[$containsKey]("recurrence"))) {
      this.recurrence = core.List.as(_json[$_get]("recurrence"))[$cast](core.String);
    }
    if (dart.test(_json[$containsKey]("recurringEventId"))) {
      this.recurringEventId = core.String._check(_json[$_get]("recurringEventId"));
    }
    if (dart.test(_json[$containsKey]("reminders"))) {
      this.reminders = new v3.EventReminders.fromJson(core.Map._check(_json[$_get]("reminders")));
    }
    if (dart.test(_json[$containsKey]("sequence"))) {
      this.sequence = core.int._check(_json[$_get]("sequence"));
    }
    if (dart.test(_json[$containsKey]("source"))) {
      this.source = new v3.EventSource.fromJson(core.Map._check(_json[$_get]("source")));
    }
    if (dart.test(_json[$containsKey]("start"))) {
      this.start = new v3.EventDateTime.fromJson(core.Map._check(_json[$_get]("start")));
    }
    if (dart.test(_json[$containsKey]("status"))) {
      this.status = core.String._check(_json[$_get]("status"));
    }
    if (dart.test(_json[$containsKey]("summary"))) {
      this.summary = core.String._check(_json[$_get]("summary"));
    }
    if (dart.test(_json[$containsKey]("transparency"))) {
      this.transparency = core.String._check(_json[$_get]("transparency"));
    }
    if (dart.test(_json[$containsKey]("updated"))) {
      this.updated = core.DateTime.parse(core.String._check(_json[$_get]("updated")));
    }
    if (dart.test(_json[$containsKey]("visibility"))) {
      this.visibility = core.String._check(_json[$_get]("visibility"));
    }
  }).prototype = v3.Event.prototype;
  dart.addTypeTests(v3.Event);
  dart.setMethodSignature(v3.Event, () => ({
    __proto__: dart.getMethods(v3.Event.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.Event, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.Event, () => ({
    __proto__: dart.getFields(v3.Event.__proto__),
    anyoneCanAddSelf: dart.fieldType(core.bool),
    attachments: dart.fieldType(core.List$(v3.EventAttachment)),
    attendees: dart.fieldType(core.List$(v3.EventAttendee)),
    attendeesOmitted: dart.fieldType(core.bool),
    colorId: dart.fieldType(core.String),
    conferenceData: dart.fieldType(v3.ConferenceData),
    created: dart.fieldType(core.DateTime),
    creator: dart.fieldType(v3.EventCreator),
    description: dart.fieldType(core.String),
    end: dart.fieldType(v3.EventDateTime),
    endTimeUnspecified: dart.fieldType(core.bool),
    etag: dart.fieldType(core.String),
    extendedProperties: dart.fieldType(v3.EventExtendedProperties),
    gadget: dart.fieldType(v3.EventGadget),
    guestsCanInviteOthers: dart.fieldType(core.bool),
    guestsCanModify: dart.fieldType(core.bool),
    guestsCanSeeOtherGuests: dart.fieldType(core.bool),
    hangoutLink: dart.fieldType(core.String),
    htmlLink: dart.fieldType(core.String),
    iCalUID: dart.fieldType(core.String),
    id: dart.fieldType(core.String),
    kind: dart.fieldType(core.String),
    location: dart.fieldType(core.String),
    locked: dart.fieldType(core.bool),
    organizer: dart.fieldType(v3.EventOrganizer),
    originalStartTime: dart.fieldType(v3.EventDateTime),
    privateCopy: dart.fieldType(core.bool),
    recurrence: dart.fieldType(core.List$(core.String)),
    recurringEventId: dart.fieldType(core.String),
    reminders: dart.fieldType(v3.EventReminders),
    sequence: dart.fieldType(core.int),
    source: dart.fieldType(v3.EventSource),
    start: dart.fieldType(v3.EventDateTime),
    status: dart.fieldType(core.String),
    summary: dart.fieldType(core.String),
    transparency: dart.fieldType(core.String),
    updated: dart.fieldType(core.DateTime),
    visibility: dart.fieldType(core.String)
  }));
  var fileId = dart.privateName(v3, "EventAttachment.fileId");
  var fileUrl = dart.privateName(v3, "EventAttachment.fileUrl");
  var iconLink$ = dart.privateName(v3, "EventAttachment.iconLink");
  var mimeType = dart.privateName(v3, "EventAttachment.mimeType");
  var title$0 = dart.privateName(v3, "EventAttachment.title");
  v3.EventAttachment = class EventAttachment extends core.Object {
    get fileId() {
      return this[fileId];
    }
    set fileId(value) {
      this[fileId] = value;
    }
    get fileUrl() {
      return this[fileUrl];
    }
    set fileUrl(value) {
      this[fileUrl] = value;
    }
    get iconLink() {
      return this[iconLink$];
    }
    set iconLink(value) {
      this[iconLink$] = value;
    }
    get mimeType() {
      return this[mimeType];
    }
    set mimeType(value) {
      this[mimeType] = value;
    }
    get title() {
      return this[title$0];
    }
    set title(value) {
      this[title$0] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.fileId != null) {
        _json[$_set]("fileId", this.fileId);
      }
      if (this.fileUrl != null) {
        _json[$_set]("fileUrl", this.fileUrl);
      }
      if (this.iconLink != null) {
        _json[$_set]("iconLink", this.iconLink);
      }
      if (this.mimeType != null) {
        _json[$_set]("mimeType", this.mimeType);
      }
      if (this.title != null) {
        _json[$_set]("title", this.title);
      }
      return _json;
    }
  };
  (v3.EventAttachment.new = function() {
    this[fileId] = null;
    this[fileUrl] = null;
    this[iconLink$] = null;
    this[mimeType] = null;
    this[title$0] = null;
    ;
  }).prototype = v3.EventAttachment.prototype;
  (v3.EventAttachment.fromJson = function(_json) {
    this[fileId] = null;
    this[fileUrl] = null;
    this[iconLink$] = null;
    this[mimeType] = null;
    this[title$0] = null;
    if (dart.test(_json[$containsKey]("fileId"))) {
      this.fileId = core.String._check(_json[$_get]("fileId"));
    }
    if (dart.test(_json[$containsKey]("fileUrl"))) {
      this.fileUrl = core.String._check(_json[$_get]("fileUrl"));
    }
    if (dart.test(_json[$containsKey]("iconLink"))) {
      this.iconLink = core.String._check(_json[$_get]("iconLink"));
    }
    if (dart.test(_json[$containsKey]("mimeType"))) {
      this.mimeType = core.String._check(_json[$_get]("mimeType"));
    }
    if (dart.test(_json[$containsKey]("title"))) {
      this.title = core.String._check(_json[$_get]("title"));
    }
  }).prototype = v3.EventAttachment.prototype;
  dart.addTypeTests(v3.EventAttachment);
  dart.setMethodSignature(v3.EventAttachment, () => ({
    __proto__: dart.getMethods(v3.EventAttachment.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.EventAttachment, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.EventAttachment, () => ({
    __proto__: dart.getFields(v3.EventAttachment.__proto__),
    fileId: dart.fieldType(core.String),
    fileUrl: dart.fieldType(core.String),
    iconLink: dart.fieldType(core.String),
    mimeType: dart.fieldType(core.String),
    title: dart.fieldType(core.String)
  }));
  var additionalGuests = dart.privateName(v3, "EventAttendee.additionalGuests");
  var comment = dart.privateName(v3, "EventAttendee.comment");
  var displayName$0 = dart.privateName(v3, "EventAttendee.displayName");
  var email$0 = dart.privateName(v3, "EventAttendee.email");
  var id$5 = dart.privateName(v3, "EventAttendee.id");
  var optional = dart.privateName(v3, "EventAttendee.optional");
  var organizer$ = dart.privateName(v3, "EventAttendee.organizer");
  var resource = dart.privateName(v3, "EventAttendee.resource");
  var responseStatus = dart.privateName(v3, "EventAttendee.responseStatus");
  var self$0 = dart.privateName(v3, "EventAttendee.self");
  v3.EventAttendee = class EventAttendee extends core.Object {
    get additionalGuests() {
      return this[additionalGuests];
    }
    set additionalGuests(value) {
      this[additionalGuests] = value;
    }
    get comment() {
      return this[comment];
    }
    set comment(value) {
      this[comment] = value;
    }
    get displayName() {
      return this[displayName$0];
    }
    set displayName(value) {
      this[displayName$0] = value;
    }
    get email() {
      return this[email$0];
    }
    set email(value) {
      this[email$0] = value;
    }
    get id() {
      return this[id$5];
    }
    set id(value) {
      this[id$5] = value;
    }
    get optional() {
      return this[optional];
    }
    set optional(value) {
      this[optional] = value;
    }
    get organizer() {
      return this[organizer$];
    }
    set organizer(value) {
      this[organizer$] = value;
    }
    get resource() {
      return this[resource];
    }
    set resource(value) {
      this[resource] = value;
    }
    get responseStatus() {
      return this[responseStatus];
    }
    set responseStatus(value) {
      this[responseStatus] = value;
    }
    get self() {
      return this[self$0];
    }
    set self(value) {
      this[self$0] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.additionalGuests != null) {
        _json[$_set]("additionalGuests", this.additionalGuests);
      }
      if (this.comment != null) {
        _json[$_set]("comment", this.comment);
      }
      if (this.displayName != null) {
        _json[$_set]("displayName", this.displayName);
      }
      if (this.email != null) {
        _json[$_set]("email", this.email);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.optional != null) {
        _json[$_set]("optional", this.optional);
      }
      if (this.organizer != null) {
        _json[$_set]("organizer", this.organizer);
      }
      if (this.resource != null) {
        _json[$_set]("resource", this.resource);
      }
      if (this.responseStatus != null) {
        _json[$_set]("responseStatus", this.responseStatus);
      }
      if (this.self != null) {
        _json[$_set]("self", this.self);
      }
      return _json;
    }
  };
  (v3.EventAttendee.new = function() {
    this[additionalGuests] = null;
    this[comment] = null;
    this[displayName$0] = null;
    this[email$0] = null;
    this[id$5] = null;
    this[optional] = null;
    this[organizer$] = null;
    this[resource] = null;
    this[responseStatus] = null;
    this[self$0] = null;
    ;
  }).prototype = v3.EventAttendee.prototype;
  (v3.EventAttendee.fromJson = function(_json) {
    this[additionalGuests] = null;
    this[comment] = null;
    this[displayName$0] = null;
    this[email$0] = null;
    this[id$5] = null;
    this[optional] = null;
    this[organizer$] = null;
    this[resource] = null;
    this[responseStatus] = null;
    this[self$0] = null;
    if (dart.test(_json[$containsKey]("additionalGuests"))) {
      this.additionalGuests = core.int._check(_json[$_get]("additionalGuests"));
    }
    if (dart.test(_json[$containsKey]("comment"))) {
      this.comment = core.String._check(_json[$_get]("comment"));
    }
    if (dart.test(_json[$containsKey]("displayName"))) {
      this.displayName = core.String._check(_json[$_get]("displayName"));
    }
    if (dart.test(_json[$containsKey]("email"))) {
      this.email = core.String._check(_json[$_get]("email"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = core.String._check(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("optional"))) {
      this.optional = core.bool._check(_json[$_get]("optional"));
    }
    if (dart.test(_json[$containsKey]("organizer"))) {
      this.organizer = core.bool._check(_json[$_get]("organizer"));
    }
    if (dart.test(_json[$containsKey]("resource"))) {
      this.resource = core.bool._check(_json[$_get]("resource"));
    }
    if (dart.test(_json[$containsKey]("responseStatus"))) {
      this.responseStatus = core.String._check(_json[$_get]("responseStatus"));
    }
    if (dart.test(_json[$containsKey]("self"))) {
      this.self = core.bool._check(_json[$_get]("self"));
    }
  }).prototype = v3.EventAttendee.prototype;
  dart.addTypeTests(v3.EventAttendee);
  dart.setMethodSignature(v3.EventAttendee, () => ({
    __proto__: dart.getMethods(v3.EventAttendee.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.EventAttendee, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.EventAttendee, () => ({
    __proto__: dart.getFields(v3.EventAttendee.__proto__),
    additionalGuests: dart.fieldType(core.int),
    comment: dart.fieldType(core.String),
    displayName: dart.fieldType(core.String),
    email: dart.fieldType(core.String),
    id: dart.fieldType(core.String),
    optional: dart.fieldType(core.bool),
    organizer: dart.fieldType(core.bool),
    resource: dart.fieldType(core.bool),
    responseStatus: dart.fieldType(core.String),
    self: dart.fieldType(core.bool)
  }));
  var date = dart.privateName(v3, "EventDateTime.date");
  var dateTime = dart.privateName(v3, "EventDateTime.dateTime");
  var timeZone$0 = dart.privateName(v3, "EventDateTime.timeZone");
  v3.EventDateTime = class EventDateTime extends core.Object {
    get date() {
      return this[date];
    }
    set date(value) {
      this[date] = value;
    }
    get dateTime() {
      return this[dateTime];
    }
    set dateTime(value) {
      this[dateTime] = value;
    }
    get timeZone() {
      return this[timeZone$0];
    }
    set timeZone(value) {
      this[timeZone$0] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.date != null) {
        _json[$_set]("date", dart.toString(this.date.year)[$padLeft](4, "0") + "-" + dart.toString(this.date.month)[$padLeft](2, "0") + "-" + dart.toString(this.date.day)[$padLeft](2, "0"));
      }
      if (this.dateTime != null) {
        _json[$_set]("dateTime", this.dateTime.toIso8601String());
      }
      if (this.timeZone != null) {
        _json[$_set]("timeZone", this.timeZone);
      }
      return _json;
    }
  };
  (v3.EventDateTime.new = function() {
    this[date] = null;
    this[dateTime] = null;
    this[timeZone$0] = null;
    ;
  }).prototype = v3.EventDateTime.prototype;
  (v3.EventDateTime.fromJson = function(_json) {
    this[date] = null;
    this[dateTime] = null;
    this[timeZone$0] = null;
    if (dart.test(_json[$containsKey]("date"))) {
      this.date = core.DateTime.parse(core.String._check(_json[$_get]("date")));
    }
    if (dart.test(_json[$containsKey]("dateTime"))) {
      this.dateTime = core.DateTime.parse(core.String._check(_json[$_get]("dateTime")));
    }
    if (dart.test(_json[$containsKey]("timeZone"))) {
      this.timeZone = core.String._check(_json[$_get]("timeZone"));
    }
  }).prototype = v3.EventDateTime.prototype;
  dart.addTypeTests(v3.EventDateTime);
  dart.setMethodSignature(v3.EventDateTime, () => ({
    __proto__: dart.getMethods(v3.EventDateTime.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.EventDateTime, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.EventDateTime, () => ({
    __proto__: dart.getFields(v3.EventDateTime.__proto__),
    date: dart.fieldType(core.DateTime),
    dateTime: dart.fieldType(core.DateTime),
    timeZone: dart.fieldType(core.String)
  }));
  var method$ = dart.privateName(v3, "EventReminder.method");
  var minutes = dart.privateName(v3, "EventReminder.minutes");
  v3.EventReminder = class EventReminder extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      this[method$] = value;
    }
    get minutes() {
      return this[minutes];
    }
    set minutes(value) {
      this[minutes] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.method != null) {
        _json[$_set]("method", this.method);
      }
      if (this.minutes != null) {
        _json[$_set]("minutes", this.minutes);
      }
      return _json;
    }
  };
  (v3.EventReminder.new = function() {
    this[method$] = null;
    this[minutes] = null;
    ;
  }).prototype = v3.EventReminder.prototype;
  (v3.EventReminder.fromJson = function(_json) {
    this[method$] = null;
    this[minutes] = null;
    if (dart.test(_json[$containsKey]("method"))) {
      this.method = core.String._check(_json[$_get]("method"));
    }
    if (dart.test(_json[$containsKey]("minutes"))) {
      this.minutes = core.int._check(_json[$_get]("minutes"));
    }
  }).prototype = v3.EventReminder.prototype;
  dart.addTypeTests(v3.EventReminder);
  dart.setMethodSignature(v3.EventReminder, () => ({
    __proto__: dart.getMethods(v3.EventReminder.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.EventReminder, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.EventReminder, () => ({
    __proto__: dart.getFields(v3.EventReminder.__proto__),
    method: dart.fieldType(core.String),
    minutes: dart.fieldType(core.int)
  }));
  var accessRole$ = dart.privateName(v3, "Events.accessRole");
  var defaultReminders$ = dart.privateName(v3, "Events.defaultReminders");
  var description$1 = dart.privateName(v3, "Events.description");
  var etag$4 = dart.privateName(v3, "Events.etag");
  var items$0 = dart.privateName(v3, "Events.items");
  var kind$6 = dart.privateName(v3, "Events.kind");
  var nextPageToken$0 = dart.privateName(v3, "Events.nextPageToken");
  var nextSyncToken$0 = dart.privateName(v3, "Events.nextSyncToken");
  var summary$1 = dart.privateName(v3, "Events.summary");
  var timeZone$1 = dart.privateName(v3, "Events.timeZone");
  var updated$0 = dart.privateName(v3, "Events.updated");
  v3.Events = class Events extends core.Object {
    get accessRole() {
      return this[accessRole$];
    }
    set accessRole(value) {
      this[accessRole$] = value;
    }
    get defaultReminders() {
      return this[defaultReminders$];
    }
    set defaultReminders(value) {
      this[defaultReminders$] = value;
    }
    get description() {
      return this[description$1];
    }
    set description(value) {
      this[description$1] = value;
    }
    get etag() {
      return this[etag$4];
    }
    set etag(value) {
      this[etag$4] = value;
    }
    get items() {
      return this[items$0];
    }
    set items(value) {
      this[items$0] = value;
    }
    get kind() {
      return this[kind$6];
    }
    set kind(value) {
      this[kind$6] = value;
    }
    get nextPageToken() {
      return this[nextPageToken$0];
    }
    set nextPageToken(value) {
      this[nextPageToken$0] = value;
    }
    get nextSyncToken() {
      return this[nextSyncToken$0];
    }
    set nextSyncToken(value) {
      this[nextSyncToken$0] = value;
    }
    get summary() {
      return this[summary$1];
    }
    set summary(value) {
      this[summary$1] = value;
    }
    get timeZone() {
      return this[timeZone$1];
    }
    set timeZone(value) {
      this[timeZone$1] = value;
    }
    get updated() {
      return this[updated$0];
    }
    set updated(value) {
      this[updated$0] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.accessRole != null) {
        _json[$_set]("accessRole", this.accessRole);
      }
      if (this.defaultReminders != null) {
        _json[$_set]("defaultReminders", this.defaultReminders[$map](MapOfString$Object(), dart.fn(value => value.toJson(), EventReminderToMapOfString$Object()))[$toList]());
      }
      if (this.description != null) {
        _json[$_set]("description", this.description);
      }
      if (this.etag != null) {
        _json[$_set]("etag", this.etag);
      }
      if (this.items != null) {
        _json[$_set]("items", this.items[$map](MapOfString$Object(), dart.fn(value => value.toJson(), EventToMapOfString$Object()))[$toList]());
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.nextPageToken != null) {
        _json[$_set]("nextPageToken", this.nextPageToken);
      }
      if (this.nextSyncToken != null) {
        _json[$_set]("nextSyncToken", this.nextSyncToken);
      }
      if (this.summary != null) {
        _json[$_set]("summary", this.summary);
      }
      if (this.timeZone != null) {
        _json[$_set]("timeZone", this.timeZone);
      }
      if (this.updated != null) {
        _json[$_set]("updated", this.updated.toIso8601String());
      }
      return _json;
    }
  };
  (v3.Events.new = function() {
    this[accessRole$] = null;
    this[defaultReminders$] = null;
    this[description$1] = null;
    this[etag$4] = null;
    this[items$0] = null;
    this[kind$6] = null;
    this[nextPageToken$0] = null;
    this[nextSyncToken$0] = null;
    this[summary$1] = null;
    this[timeZone$1] = null;
    this[updated$0] = null;
    ;
  }).prototype = v3.Events.prototype;
  (v3.Events.fromJson = function(_json) {
    this[accessRole$] = null;
    this[defaultReminders$] = null;
    this[description$1] = null;
    this[etag$4] = null;
    this[items$0] = null;
    this[kind$6] = null;
    this[nextPageToken$0] = null;
    this[nextSyncToken$0] = null;
    this[summary$1] = null;
    this[timeZone$1] = null;
    this[updated$0] = null;
    if (dart.test(_json[$containsKey]("accessRole"))) {
      this.accessRole = core.String._check(_json[$_get]("accessRole"));
    }
    if (dart.test(_json[$containsKey]("defaultReminders"))) {
      this.defaultReminders = core.List.as(_json[$_get]("defaultReminders"))[$map](v3.EventReminder, dart.fn(value => new v3.EventReminder.fromJson(core.Map._check(value)), dynamicToEventReminder()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("description"))) {
      this.description = core.String._check(_json[$_get]("description"));
    }
    if (dart.test(_json[$containsKey]("etag"))) {
      this.etag = core.String._check(_json[$_get]("etag"));
    }
    if (dart.test(_json[$containsKey]("items"))) {
      this.items = core.List.as(_json[$_get]("items"))[$map](v3.Event, dart.fn(value => new v3.Event.fromJson(core.Map._check(value)), dynamicToEvent()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = core.String._check(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("nextPageToken"))) {
      this.nextPageToken = core.String._check(_json[$_get]("nextPageToken"));
    }
    if (dart.test(_json[$containsKey]("nextSyncToken"))) {
      this.nextSyncToken = core.String._check(_json[$_get]("nextSyncToken"));
    }
    if (dart.test(_json[$containsKey]("summary"))) {
      this.summary = core.String._check(_json[$_get]("summary"));
    }
    if (dart.test(_json[$containsKey]("timeZone"))) {
      this.timeZone = core.String._check(_json[$_get]("timeZone"));
    }
    if (dart.test(_json[$containsKey]("updated"))) {
      this.updated = core.DateTime.parse(core.String._check(_json[$_get]("updated")));
    }
  }).prototype = v3.Events.prototype;
  dart.addTypeTests(v3.Events);
  dart.setMethodSignature(v3.Events, () => ({
    __proto__: dart.getMethods(v3.Events.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.Events, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.Events, () => ({
    __proto__: dart.getFields(v3.Events.__proto__),
    accessRole: dart.fieldType(core.String),
    defaultReminders: dart.fieldType(core.List$(v3.EventReminder)),
    description: dart.fieldType(core.String),
    etag: dart.fieldType(core.String),
    items: dart.fieldType(core.List$(v3.Event)),
    kind: dart.fieldType(core.String),
    nextPageToken: dart.fieldType(core.String),
    nextSyncToken: dart.fieldType(core.String),
    summary: dart.fieldType(core.String),
    timeZone: dart.fieldType(core.String),
    updated: dart.fieldType(core.DateTime)
  }));
  var busy = dart.privateName(v3, "FreeBusyCalendar.busy");
  var errors = dart.privateName(v3, "FreeBusyCalendar.errors");
  v3.FreeBusyCalendar = class FreeBusyCalendar extends core.Object {
    get busy() {
      return this[busy];
    }
    set busy(value) {
      this[busy] = value;
    }
    get errors() {
      return this[errors];
    }
    set errors(value) {
      this[errors] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.busy != null) {
        _json[$_set]("busy", this.busy[$map](MapOfString$Object(), dart.fn(value => value.toJson(), TimePeriodToMapOfString$Object()))[$toList]());
      }
      if (this.errors != null) {
        _json[$_set]("errors", this.errors[$map](MapOfString$Object(), dart.fn(value => value.toJson(), ErrorToMapOfString$Object()))[$toList]());
      }
      return _json;
    }
  };
  (v3.FreeBusyCalendar.new = function() {
    this[busy] = null;
    this[errors] = null;
    ;
  }).prototype = v3.FreeBusyCalendar.prototype;
  (v3.FreeBusyCalendar.fromJson = function(_json) {
    this[busy] = null;
    this[errors] = null;
    if (dart.test(_json[$containsKey]("busy"))) {
      this.busy = core.List.as(_json[$_get]("busy"))[$map](v3.TimePeriod, dart.fn(value => new v3.TimePeriod.fromJson(core.Map._check(value)), dynamicToTimePeriod()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("errors"))) {
      this.errors = core.List.as(_json[$_get]("errors"))[$map](v3.Error, dart.fn(value => new v3.Error.fromJson(core.Map._check(value)), dynamicToError()))[$toList]();
    }
  }).prototype = v3.FreeBusyCalendar.prototype;
  dart.addTypeTests(v3.FreeBusyCalendar);
  dart.setMethodSignature(v3.FreeBusyCalendar, () => ({
    __proto__: dart.getMethods(v3.FreeBusyCalendar.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.FreeBusyCalendar, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.FreeBusyCalendar, () => ({
    __proto__: dart.getFields(v3.FreeBusyCalendar.__proto__),
    busy: dart.fieldType(core.List$(v3.TimePeriod)),
    errors: dart.fieldType(core.List$(v3.Error))
  }));
  var calendars = dart.privateName(v3, "FreeBusyGroup.calendars");
  var errors$ = dart.privateName(v3, "FreeBusyGroup.errors");
  v3.FreeBusyGroup = class FreeBusyGroup extends core.Object {
    get calendars() {
      return this[calendars];
    }
    set calendars(value) {
      this[calendars] = value;
    }
    get errors() {
      return this[errors$];
    }
    set errors(value) {
      this[errors$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.calendars != null) {
        _json[$_set]("calendars", this.calendars);
      }
      if (this.errors != null) {
        _json[$_set]("errors", this.errors[$map](MapOfString$Object(), dart.fn(value => value.toJson(), ErrorToMapOfString$Object()))[$toList]());
      }
      return _json;
    }
  };
  (v3.FreeBusyGroup.new = function() {
    this[calendars] = null;
    this[errors$] = null;
    ;
  }).prototype = v3.FreeBusyGroup.prototype;
  (v3.FreeBusyGroup.fromJson = function(_json) {
    this[calendars] = null;
    this[errors$] = null;
    if (dart.test(_json[$containsKey]("calendars"))) {
      this.calendars = core.List.as(_json[$_get]("calendars"))[$cast](core.String);
    }
    if (dart.test(_json[$containsKey]("errors"))) {
      this.errors = core.List.as(_json[$_get]("errors"))[$map](v3.Error, dart.fn(value => new v3.Error.fromJson(core.Map._check(value)), dynamicToError()))[$toList]();
    }
  }).prototype = v3.FreeBusyGroup.prototype;
  dart.addTypeTests(v3.FreeBusyGroup);
  dart.setMethodSignature(v3.FreeBusyGroup, () => ({
    __proto__: dart.getMethods(v3.FreeBusyGroup.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.FreeBusyGroup, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.FreeBusyGroup, () => ({
    __proto__: dart.getFields(v3.FreeBusyGroup.__proto__),
    calendars: dart.fieldType(core.List$(core.String)),
    errors: dart.fieldType(core.List$(v3.Error))
  }));
  var calendarExpansionMax = dart.privateName(v3, "FreeBusyRequest.calendarExpansionMax");
  var groupExpansionMax = dart.privateName(v3, "FreeBusyRequest.groupExpansionMax");
  var items$1 = dart.privateName(v3, "FreeBusyRequest.items");
  var timeMax = dart.privateName(v3, "FreeBusyRequest.timeMax");
  var timeMin = dart.privateName(v3, "FreeBusyRequest.timeMin");
  var timeZone$2 = dart.privateName(v3, "FreeBusyRequest.timeZone");
  v3.FreeBusyRequest = class FreeBusyRequest extends core.Object {
    get calendarExpansionMax() {
      return this[calendarExpansionMax];
    }
    set calendarExpansionMax(value) {
      this[calendarExpansionMax] = value;
    }
    get groupExpansionMax() {
      return this[groupExpansionMax];
    }
    set groupExpansionMax(value) {
      this[groupExpansionMax] = value;
    }
    get items() {
      return this[items$1];
    }
    set items(value) {
      this[items$1] = value;
    }
    get timeMax() {
      return this[timeMax];
    }
    set timeMax(value) {
      this[timeMax] = value;
    }
    get timeMin() {
      return this[timeMin];
    }
    set timeMin(value) {
      this[timeMin] = value;
    }
    get timeZone() {
      return this[timeZone$2];
    }
    set timeZone(value) {
      this[timeZone$2] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.calendarExpansionMax != null) {
        _json[$_set]("calendarExpansionMax", this.calendarExpansionMax);
      }
      if (this.groupExpansionMax != null) {
        _json[$_set]("groupExpansionMax", this.groupExpansionMax);
      }
      if (this.items != null) {
        _json[$_set]("items", this.items[$map](MapOfString$Object(), dart.fn(value => value.toJson(), FreeBusyRequestItemToMapOfString$Object()))[$toList]());
      }
      if (this.timeMax != null) {
        _json[$_set]("timeMax", this.timeMax.toIso8601String());
      }
      if (this.timeMin != null) {
        _json[$_set]("timeMin", this.timeMin.toIso8601String());
      }
      if (this.timeZone != null) {
        _json[$_set]("timeZone", this.timeZone);
      }
      return _json;
    }
  };
  (v3.FreeBusyRequest.new = function() {
    this[calendarExpansionMax] = null;
    this[groupExpansionMax] = null;
    this[items$1] = null;
    this[timeMax] = null;
    this[timeMin] = null;
    this[timeZone$2] = null;
    ;
  }).prototype = v3.FreeBusyRequest.prototype;
  (v3.FreeBusyRequest.fromJson = function(_json) {
    this[calendarExpansionMax] = null;
    this[groupExpansionMax] = null;
    this[items$1] = null;
    this[timeMax] = null;
    this[timeMin] = null;
    this[timeZone$2] = null;
    if (dart.test(_json[$containsKey]("calendarExpansionMax"))) {
      this.calendarExpansionMax = core.int._check(_json[$_get]("calendarExpansionMax"));
    }
    if (dart.test(_json[$containsKey]("groupExpansionMax"))) {
      this.groupExpansionMax = core.int._check(_json[$_get]("groupExpansionMax"));
    }
    if (dart.test(_json[$containsKey]("items"))) {
      this.items = core.List.as(_json[$_get]("items"))[$map](v3.FreeBusyRequestItem, dart.fn(value => new v3.FreeBusyRequestItem.fromJson(core.Map._check(value)), dynamicToFreeBusyRequestItem()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("timeMax"))) {
      this.timeMax = core.DateTime.parse(core.String._check(_json[$_get]("timeMax")));
    }
    if (dart.test(_json[$containsKey]("timeMin"))) {
      this.timeMin = core.DateTime.parse(core.String._check(_json[$_get]("timeMin")));
    }
    if (dart.test(_json[$containsKey]("timeZone"))) {
      this.timeZone = core.String._check(_json[$_get]("timeZone"));
    }
  }).prototype = v3.FreeBusyRequest.prototype;
  dart.addTypeTests(v3.FreeBusyRequest);
  dart.setMethodSignature(v3.FreeBusyRequest, () => ({
    __proto__: dart.getMethods(v3.FreeBusyRequest.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.FreeBusyRequest, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.FreeBusyRequest, () => ({
    __proto__: dart.getFields(v3.FreeBusyRequest.__proto__),
    calendarExpansionMax: dart.fieldType(core.int),
    groupExpansionMax: dart.fieldType(core.int),
    items: dart.fieldType(core.List$(v3.FreeBusyRequestItem)),
    timeMax: dart.fieldType(core.DateTime),
    timeMin: dart.fieldType(core.DateTime),
    timeZone: dart.fieldType(core.String)
  }));
  var id$6 = dart.privateName(v3, "FreeBusyRequestItem.id");
  v3.FreeBusyRequestItem = class FreeBusyRequestItem extends core.Object {
    get id() {
      return this[id$6];
    }
    set id(value) {
      this[id$6] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      return _json;
    }
  };
  (v3.FreeBusyRequestItem.new = function() {
    this[id$6] = null;
    ;
  }).prototype = v3.FreeBusyRequestItem.prototype;
  (v3.FreeBusyRequestItem.fromJson = function(_json) {
    this[id$6] = null;
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = core.String._check(_json[$_get]("id"));
    }
  }).prototype = v3.FreeBusyRequestItem.prototype;
  dart.addTypeTests(v3.FreeBusyRequestItem);
  dart.setMethodSignature(v3.FreeBusyRequestItem, () => ({
    __proto__: dart.getMethods(v3.FreeBusyRequestItem.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.FreeBusyRequestItem, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.FreeBusyRequestItem, () => ({
    __proto__: dart.getFields(v3.FreeBusyRequestItem.__proto__),
    id: dart.fieldType(core.String)
  }));
  var calendars$ = dart.privateName(v3, "FreeBusyResponse.calendars");
  var groups = dart.privateName(v3, "FreeBusyResponse.groups");
  var kind$7 = dart.privateName(v3, "FreeBusyResponse.kind");
  var timeMax$ = dart.privateName(v3, "FreeBusyResponse.timeMax");
  var timeMin$ = dart.privateName(v3, "FreeBusyResponse.timeMin");
  v3.FreeBusyResponse = class FreeBusyResponse extends core.Object {
    get calendars() {
      return this[calendars$];
    }
    set calendars(value) {
      this[calendars$] = value;
    }
    get groups() {
      return this[groups];
    }
    set groups(value) {
      this[groups] = value;
    }
    get kind() {
      return this[kind$7];
    }
    set kind(value) {
      this[kind$7] = value;
    }
    get timeMax() {
      return this[timeMax$];
    }
    set timeMax(value) {
      this[timeMax$] = value;
    }
    get timeMin() {
      return this[timeMin$];
    }
    set timeMin(value) {
      this[timeMin$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.calendars != null) {
        _json[$_set]("calendars", clients.mapMap(v3.FreeBusyCalendar, MapOfString$Object(), this.calendars, dart.fn(item => item.toJson(), FreeBusyCalendarToMapOfString$Object())));
      }
      if (this.groups != null) {
        _json[$_set]("groups", clients.mapMap(v3.FreeBusyGroup, MapOfString$Object(), this.groups, dart.fn(item => item.toJson(), FreeBusyGroupToMapOfString$Object())));
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.timeMax != null) {
        _json[$_set]("timeMax", this.timeMax.toIso8601String());
      }
      if (this.timeMin != null) {
        _json[$_set]("timeMin", this.timeMin.toIso8601String());
      }
      return _json;
    }
  };
  (v3.FreeBusyResponse.new = function() {
    this[calendars$] = null;
    this[groups] = null;
    this[kind$7] = null;
    this[timeMax$] = null;
    this[timeMin$] = null;
    ;
  }).prototype = v3.FreeBusyResponse.prototype;
  (v3.FreeBusyResponse.fromJson = function(_json) {
    this[calendars$] = null;
    this[groups] = null;
    this[kind$7] = null;
    this[timeMax$] = null;
    this[timeMin$] = null;
    if (dart.test(_json[$containsKey]("calendars"))) {
      this.calendars = clients.mapMap(core.Map, v3.FreeBusyCalendar, MapOfString$Map()._check(dart.dgsend(_json[$_get]("calendars"), [core.String, core.Map], 'cast', [])), dart.fn(item => new v3.FreeBusyCalendar.fromJson(item), MapToFreeBusyCalendar()));
    }
    if (dart.test(_json[$containsKey]("groups"))) {
      this.groups = clients.mapMap(core.Map, v3.FreeBusyGroup, MapOfString$Map()._check(dart.dgsend(_json[$_get]("groups"), [core.String, core.Map], 'cast', [])), dart.fn(item => new v3.FreeBusyGroup.fromJson(item), MapToFreeBusyGroup()));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = core.String._check(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("timeMax"))) {
      this.timeMax = core.DateTime.parse(core.String._check(_json[$_get]("timeMax")));
    }
    if (dart.test(_json[$containsKey]("timeMin"))) {
      this.timeMin = core.DateTime.parse(core.String._check(_json[$_get]("timeMin")));
    }
  }).prototype = v3.FreeBusyResponse.prototype;
  dart.addTypeTests(v3.FreeBusyResponse);
  dart.setMethodSignature(v3.FreeBusyResponse, () => ({
    __proto__: dart.getMethods(v3.FreeBusyResponse.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.FreeBusyResponse, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.FreeBusyResponse, () => ({
    __proto__: dart.getFields(v3.FreeBusyResponse.__proto__),
    calendars: dart.fieldType(core.Map$(core.String, v3.FreeBusyCalendar)),
    groups: dart.fieldType(core.Map$(core.String, v3.FreeBusyGroup)),
    kind: dart.fieldType(core.String),
    timeMax: dart.fieldType(core.DateTime),
    timeMin: dart.fieldType(core.DateTime)
  }));
  var etag$5 = dart.privateName(v3, "Setting.etag");
  var id$7 = dart.privateName(v3, "Setting.id");
  var kind$8 = dart.privateName(v3, "Setting.kind");
  var value$0 = dart.privateName(v3, "Setting.value");
  v3.Setting = class Setting extends core.Object {
    get etag() {
      return this[etag$5];
    }
    set etag(value) {
      this[etag$5] = value;
    }
    get id() {
      return this[id$7];
    }
    set id(value) {
      this[id$7] = value;
    }
    get kind() {
      return this[kind$8];
    }
    set kind(value) {
      this[kind$8] = value;
    }
    get value() {
      return this[value$0];
    }
    set value(value) {
      this[value$0] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.etag != null) {
        _json[$_set]("etag", this.etag);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.value != null) {
        _json[$_set]("value", this.value);
      }
      return _json;
    }
  };
  (v3.Setting.new = function() {
    this[etag$5] = null;
    this[id$7] = null;
    this[kind$8] = null;
    this[value$0] = null;
    ;
  }).prototype = v3.Setting.prototype;
  (v3.Setting.fromJson = function(_json) {
    this[etag$5] = null;
    this[id$7] = null;
    this[kind$8] = null;
    this[value$0] = null;
    if (dart.test(_json[$containsKey]("etag"))) {
      this.etag = core.String._check(_json[$_get]("etag"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = core.String._check(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = core.String._check(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("value"))) {
      this.value = core.String._check(_json[$_get]("value"));
    }
  }).prototype = v3.Setting.prototype;
  dart.addTypeTests(v3.Setting);
  dart.setMethodSignature(v3.Setting, () => ({
    __proto__: dart.getMethods(v3.Setting.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.Setting, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.Setting, () => ({
    __proto__: dart.getFields(v3.Setting.__proto__),
    etag: dart.fieldType(core.String),
    id: dart.fieldType(core.String),
    kind: dart.fieldType(core.String),
    value: dart.fieldType(core.String)
  }));
  var etag$6 = dart.privateName(v3, "Settings.etag");
  var items$2 = dart.privateName(v3, "Settings.items");
  var kind$9 = dart.privateName(v3, "Settings.kind");
  var nextPageToken$1 = dart.privateName(v3, "Settings.nextPageToken");
  var nextSyncToken$1 = dart.privateName(v3, "Settings.nextSyncToken");
  v3.Settings = class Settings extends core.Object {
    get etag() {
      return this[etag$6];
    }
    set etag(value) {
      this[etag$6] = value;
    }
    get items() {
      return this[items$2];
    }
    set items(value) {
      this[items$2] = value;
    }
    get kind() {
      return this[kind$9];
    }
    set kind(value) {
      this[kind$9] = value;
    }
    get nextPageToken() {
      return this[nextPageToken$1];
    }
    set nextPageToken(value) {
      this[nextPageToken$1] = value;
    }
    get nextSyncToken() {
      return this[nextSyncToken$1];
    }
    set nextSyncToken(value) {
      this[nextSyncToken$1] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.etag != null) {
        _json[$_set]("etag", this.etag);
      }
      if (this.items != null) {
        _json[$_set]("items", this.items[$map](MapOfString$Object(), dart.fn(value => value.toJson(), SettingToMapOfString$Object()))[$toList]());
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.nextPageToken != null) {
        _json[$_set]("nextPageToken", this.nextPageToken);
      }
      if (this.nextSyncToken != null) {
        _json[$_set]("nextSyncToken", this.nextSyncToken);
      }
      return _json;
    }
  };
  (v3.Settings.new = function() {
    this[etag$6] = null;
    this[items$2] = null;
    this[kind$9] = null;
    this[nextPageToken$1] = null;
    this[nextSyncToken$1] = null;
    ;
  }).prototype = v3.Settings.prototype;
  (v3.Settings.fromJson = function(_json) {
    this[etag$6] = null;
    this[items$2] = null;
    this[kind$9] = null;
    this[nextPageToken$1] = null;
    this[nextSyncToken$1] = null;
    if (dart.test(_json[$containsKey]("etag"))) {
      this.etag = core.String._check(_json[$_get]("etag"));
    }
    if (dart.test(_json[$containsKey]("items"))) {
      this.items = core.List.as(_json[$_get]("items"))[$map](v3.Setting, dart.fn(value => new v3.Setting.fromJson(core.Map._check(value)), dynamicToSetting()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = core.String._check(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("nextPageToken"))) {
      this.nextPageToken = core.String._check(_json[$_get]("nextPageToken"));
    }
    if (dart.test(_json[$containsKey]("nextSyncToken"))) {
      this.nextSyncToken = core.String._check(_json[$_get]("nextSyncToken"));
    }
  }).prototype = v3.Settings.prototype;
  dart.addTypeTests(v3.Settings);
  dart.setMethodSignature(v3.Settings, () => ({
    __proto__: dart.getMethods(v3.Settings.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.Settings, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.Settings, () => ({
    __proto__: dart.getFields(v3.Settings.__proto__),
    etag: dart.fieldType(core.String),
    items: dart.fieldType(core.List$(v3.Setting)),
    kind: dart.fieldType(core.String),
    nextPageToken: dart.fieldType(core.String),
    nextSyncToken: dart.fieldType(core.String)
  }));
  var end$ = dart.privateName(v3, "TimePeriod.end");
  var start$ = dart.privateName(v3, "TimePeriod.start");
  v3.TimePeriod = class TimePeriod extends core.Object {
    get end() {
      return this[end$];
    }
    set end(value) {
      this[end$] = value;
    }
    get start() {
      return this[start$];
    }
    set start(value) {
      this[start$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.end != null) {
        _json[$_set]("end", this.end.toIso8601String());
      }
      if (this.start != null) {
        _json[$_set]("start", this.start.toIso8601String());
      }
      return _json;
    }
  };
  (v3.TimePeriod.new = function() {
    this[end$] = null;
    this[start$] = null;
    ;
  }).prototype = v3.TimePeriod.prototype;
  (v3.TimePeriod.fromJson = function(_json) {
    this[end$] = null;
    this[start$] = null;
    if (dart.test(_json[$containsKey]("end"))) {
      this.end = core.DateTime.parse(core.String._check(_json[$_get]("end")));
    }
    if (dart.test(_json[$containsKey]("start"))) {
      this.start = core.DateTime.parse(core.String._check(_json[$_get]("start")));
    }
  }).prototype = v3.TimePeriod.prototype;
  dart.addTypeTests(v3.TimePeriod);
  dart.setMethodSignature(v3.TimePeriod, () => ({
    __proto__: dart.getMethods(v3.TimePeriod.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(v3.TimePeriod, "package:googleapis/calendar/v3.dart");
  dart.setFieldSignature(v3.TimePeriod, () => ({
    __proto__: dart.getFields(v3.TimePeriod.__proto__),
    end: dart.fieldType(core.DateTime),
    start: dart.fieldType(core.DateTime)
  }));
  dart.defineLazy(v3, {
    /*v3.USER_AGENT*/get USER_AGENT() {
      return "dart-api-client calendar/v3";
    }
  });
  dart.trackLibraries("packages/googleapis/calendar/v3", {
    "package:googleapis/calendar/v3.dart": v3
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["v3.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0C4B,YAAI,2BAAe;IAAW;;AAEpD,YAAI,oCAAwB;IAAW;;AACL,YAAI,iCAAqB;IAAW;;AACtC,YAAI,gCAAoB;IAAW;;AACvC,YAAI,8BAAkB;IAAW;;AACjC,YAAI,8BAAkB;IAAW;;AAC7B,YAAI,gCAAoB;IAAW;;AACnC,YAAI,gCAAoB;IAAW;;iCAE/C;QACP;QACD;IACC,mBACH,6BAAqB,MAAM,EAAE,OAAO,EAAE,WAAW;;EAAa;;;;;;;;;;;;;;;;;;;MAlC/D,4BAAa;;;MAGb,kCAAmB;;;MAInB,0CAA2B;;;MAI3B,oCAAqB;;;MAIrB,4CAA6B;;;;;WA6CV,YAAwB;UACvC;AACX;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,AAAO,MAAD,IAAI;AACiD,QAA7D,WAAU,2BAAmB;;AAE/B,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGL,MAAvB,mBAAmB;AAKyB,MAH5C,OAAO,AAAa,AAC6B,AACrC,4BADQ,8BAA2B,SAAX,UAAU,MAC1C,uBACgB,8BAAuB,SAAP,MAAM;AAEtC,sBAAY,AAAW,4CAAQ,IAAI,GAAE,oCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,oBAAM,QAAC,QAAS;IAClC;QAsBsC,YAAwB;UAC7C;AACX;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,AAAO,MAAD,IAAI;AACiD,QAA7D,WAAU,2BAAmB;;AAE/B,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAMgB,MAH5C,OAAO,AAAa,AAC6B,AACrC,4BADQ,8BAA2B,SAAX,UAAU,MAC1C,uBACgB,8BAAuB,SAAP,MAAM;AAEtC,sBAAY,AAAW,4CAAQ,IAAI,GAAE,iCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,kBAAM,QAAC,QAAa,wCAAiB,IAAI;IAC3D;WAyBqC,SAAqB;UAC3C;UAA+B;AACxC;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,iBAAiB,IAAI;AACqC,QAA5D,AAAY,YAAA,QAAC,qBAAuB,sBAAuB,SAAnB,iBAAiB;;AAE3D,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAG+C,MAA3E,OAAO,AAAa,AAA+C,4BAA7B,8BAA2B,SAAX,UAAU,MAAK;AAEjE,sBAAY,AAAW,4CAAQ,IAAI,GAAE,kCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,kBAAM,QAAC,QAAa,wCAAiB,IAAI;IAC3D;SAyCmC;UACrB;UACE;UACF;UACE;UACA;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,UAAU,IAAI;AAC8B,QAA9C,AAAY,YAAA,QAAC,cAAgB,sBAAgB,SAAZ,UAAU;;AAE7C,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,WAAW,IAAI;AAC+B,QAAhD,AAAY,YAAA,QAAC,eAAiB,sBAAiB,SAAb,WAAW;;AAE/C,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAG+C,MAA3E,OAAO,AAAa,AAA+C,4BAA7B,8BAA2B,SAAX,UAAU,MAAK;AAEjE,sBAAY,AAAW,4CAAQ,IAAI,GAAE,iCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,cAAM,QAAC,QAAa,oCAAa,IAAI;IACvD;UA6BY,SAAqB,YAAwB;UAC1C;UAA+B;AACxC;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,AAAO,MAAD,IAAI;AACiD,QAA7D,WAAU,2BAAmB;;AAE/B,UAAI,iBAAiB,IAAI;AACqC,QAA5D,AAAY,YAAA,QAAC,qBAAuB,sBAAuB,SAAnB,iBAAiB;;AAE3D,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAMgB,MAH5C,OAAO,AAAa,AAC6B,AACrC,4BADQ,8BAA2B,SAAX,UAAU,MAC1C,uBACgB,8BAAuB,SAAP,MAAM;AAEtC,sBAAY,AAAW,4CAAQ,IAAI,GAAE,mCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,kBAAM,QAAC,QAAa,wCAAiB,IAAI;IAC3D;WA6BY,SAAqB,YAAwB;UAC1C;UAA+B;AACxC;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,AAAO,MAAD,IAAI;AACiD,QAA7D,WAAU,2BAAmB;;AAE/B,UAAI,iBAAiB,IAAI;AACqC,QAA5D,AAAY,YAAA,QAAC,qBAAuB,sBAAuB,SAAnB,iBAAiB;;AAE3D,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAMgB,MAH5C,OAAO,AAAa,AAC6B,AACrC,4BADQ,8BAA2B,SAAX,UAAU,MAC1C,uBACgB,8BAAuB,SAAP,MAAM;AAEtC,sBAAY,AAAW,4CAAQ,IAAI,GAAE,iCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,kBAAM,QAAC,QAAa,wCAAiB,IAAI;IAC3D;UA2CoC,SAAqB;UAC3C;UACE;UACF;UACE;UACA;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,UAAU,IAAI;AAC8B,QAA9C,AAAY,YAAA,QAAC,cAAgB,sBAAgB,SAAZ,UAAU;;AAE7C,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,WAAW,IAAI;AAC+B,QAAhD,AAAY,YAAA,QAAC,eAAiB,sBAAiB,SAAb,WAAW;;AAE/C,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAKZ,MAFhB,OAAO,AAAa,AAC6B,4BAA7B,8BAA2B,SAAX,UAAU,MAC1C;AAEA,sBAAY,AAAW,4CAAQ,IAAI,GAAE,kCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,kBAAM,QAAC,QAAa,wCAAiB,IAAI;IAC3D;;oCAjdoC;IAAqB,mBAAE,MAAM;;;;;;;;;;;;;;;;;;;;WAyejC;UAAyB;AACnD;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGL,MAAvB,mBAAmB;AAGwD,MAD3E,OACI,AAAyB,wCAAkB,8BAA2B,SAAX,UAAU;AAErE,sBAAY,AAAW,4CAAQ,IAAI,GAAE,oCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,oBAAM,QAAC,QAAS;IAClC;QAoBgD;UAC/B;AACX;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAI+C,MAD3E,OACI,AAAyB,wCAAkB,8BAA2B,SAAX,UAAU;AAErE,sBAAY,AAAW,4CAAQ,IAAI,GAAE,iCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,4BAAM,QAAC,QAAa,kDAA2B,IAAI;IACrE;WAuByD;UAC1C;UAA4B;AACrC;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,cAAc,IAAI;AACkC,QAAtD,AAAY,YAAA,QAAC,kBAAoB,sBAAoB,SAAhB,cAAc;;AAErD,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGE,MAA9B,OAAO;AAEH,sBAAY,AAAW,4CAAQ,IAAI,GAAE,kCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,4BAAM,QAAC,QAAa,kDAA2B,IAAI;IACrE;;UAoDc;UACE;UACA;UACF;UACA;UACE;UACA;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,UAAU,IAAI;AAC8B,QAA9C,AAAY,YAAA,QAAC,cAAgB,sBAAgB,SAAZ,UAAU;;AAE7C,UAAI,aAAa,IAAI;AAC4B,QAA/C,AAAY,YAAA,QAAC,iBAAmB,sBAAC,aAAa;;AAEhD,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,WAAW,IAAI;AAC+B,QAAhD,AAAY,YAAA,QAAC,eAAiB,sBAAiB,SAAb,WAAW;;AAE/C,UAAI,UAAU,IAAI;AAC8B,QAA9C,AAAY,YAAA,QAAC,cAAgB,sBAAgB,SAAZ,UAAU;;AAE7C,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGE,MAA9B,OAAO;AAEH,sBAAY,AAAW,4CAAQ,IAAI,GAAE,iCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,uBAAM,QAAC,QAAa,6CAAsB,IAAI;IAChE;UA6BsB,SAAqB;UAC5B;UAA4B;AACrC;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,cAAc,IAAI;AACkC,QAAtD,AAAY,YAAA,QAAC,kBAAoB,sBAAoB,SAAhB,cAAc;;AAErD,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAI+C,MAD3E,OACI,AAAyB,wCAAkB,8BAA2B,SAAX,UAAU;AAErE,sBAAY,AAAW,4CAAQ,IAAI,GAAE,mCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,4BAAM,QAAC,QAAa,kDAA2B,IAAI;IACrE;WA4BsB,SAAqB;UAC5B;UAA4B;AACrC;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,cAAc,IAAI;AACkC,QAAtD,AAAY,YAAA,QAAC,kBAAoB,sBAAoB,SAAhB,cAAc;;AAErD,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAI+C,MAD3E,OACI,AAAyB,wCAAkB,8BAA2B,SAAX,UAAU;AAErE,sBAAY,AAAW,4CAAQ,IAAI,GAAE,iCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,4BAAM,QAAC,QAAa,kDAA2B,IAAI;IACrE;UAqDoC;UACtB;UACE;UACA;UACF;UACA;UACE;UACA;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,UAAU,IAAI;AAC8B,QAA9C,AAAY,YAAA,QAAC,cAAgB,sBAAgB,SAAZ,UAAU;;AAE7C,UAAI,aAAa,IAAI;AAC4B,QAA/C,AAAY,YAAA,QAAC,iBAAmB,sBAAC,aAAa;;AAEhD,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,WAAW,IAAI;AAC+B,QAAhD,AAAY,YAAA,QAAC,eAAiB,sBAAiB,SAAb,WAAW;;AAE/C,UAAI,UAAU,IAAI;AAC8B,QAA9C,AAAY,YAAA,QAAC,cAAgB,sBAAgB,SAAZ,UAAU;;AAE7C,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGQ,MAApC,OAAO;AAEH,sBAAY,AAAW,4CAAQ,IAAI,GAAE,kCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,kBAAM,QAAC,QAAa,wCAAiB,IAAI;IAC3D;;6CA9c6C;IAAqB,mBAAE,MAAM;;;;;;;;;;;;;;;;;;;;UAue3C;UAAyB;AAClD;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGL,MAAvB,mBAAmB;AAGuD,MAD1E,OACI,AAAa,AAA+C,4BAA7B,8BAA2B,SAAX,UAAU,MAAK;AAE9D,sBAAY,AAAW,4CAAQ,IAAI,GAAE,kCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,oBAAM,QAAC,QAAS;IAClC;WAmBgC;UAAyB;AACnD;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGL,MAAvB,mBAAmB;AAE+C,MAAlE,OAAO,AAAa,4BAAkB,8BAA2B,SAAX,UAAU;AAE5D,sBAAY,AAAW,4CAAQ,IAAI,GAAE,oCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,oBAAM,QAAC,QAAS;IAClC;QAoBuC;UAAyB;AAC1D;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGsC,MAAlE,OAAO,AAAa,4BAAkB,8BAA2B,SAAX,UAAU;AAE5D,sBAAY,AAAW,4CAAQ,IAAI,GAAE,iCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,mBAAM,QAAC,QAAa,yCAAkB,IAAI;IAC5D;WAkBuC;UAAsB;AACvD;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGV,MAAlB,OAAO;AAEH,sBAAY,AAAW,4CAAQ,IAAI,GAAE,kCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,mBAAM,QAAC,QAAa,yCAAkB,IAAI;IAC5D;UAsBsC,SAAqB;UAC1C;AACX;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGsC,MAAlE,OAAO,AAAa,4BAAkB,8BAA2B,SAAX,UAAU;AAE5D,sBAAY,AAAW,4CAAQ,IAAI,GAAE,mCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,mBAAM,QAAC,QAAa,yCAAkB,IAAI;IAC5D;WAsBuC,SAAqB;UAC3C;AACX;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGsC,MAAlE,OAAO,AAAa,4BAAkB,8BAA2B,SAAX,UAAU;AAE5D,sBAAY,AAAW,4CAAQ,IAAI,GAAE,iCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,mBAAM,QAAC,QAAa,yCAAkB,IAAI;IAC5D;;0CArR0C;IAAqB,mBAAE,MAAM;;;;;;;;;;;;;;;;;;;SA2S7C;UAAsB;AAC1C;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGL,MAAvB,mBAAmB;AAEG,MAAtB,OAAO;AAEH,sBAAY,AAAW,4CAAQ,IAAI,GAAE,kCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,oBAAM,QAAC,QAAS;IAClC;;yCA1CyC;IAAqB,mBAAE,MAAM;;;;;;;;;;;;;;;UAgEhC;AAChC;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGb,MAAf,OAAO;AAEH,sBAAY,AAAW,4CAAQ,IAAI,GAAE,iCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,iBAAM,QAAC,QAAa,uCAAgB,IAAI;IAC1D;;uCArCuC;IAAqB,mBAAE,MAAM;;;;;;;;;;;;;;WA+EpC,YAAwB;UACzC;UACC;UACA;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,AAAQ,OAAD,IAAI;AACiD,QAA9D,WAAU,2BAAmB;;AAE/B,UAAI,iBAAiB,IAAI;AACqC,QAA5D,AAAY,YAAA,QAAC,qBAAuB,sBAAuB,SAAnB,iBAAiB;;AAE3D,UAAI,WAAW,IAAI;AAC0B,QAA3C,AAAY,YAAA,QAAC,eAAiB,sBAAC,WAAW;;AAE5C,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGL,MAAvB,mBAAmB;AAK0B,MAH7C,OAAO,AAAa,AAC6B,AAClC,4BADK,8BAA2B,SAAX,UAAU,MAC1C,0BACgB,8BAAwB,SAAR,OAAO;AAEvC,sBAAY,AAAW,4CAAQ,IAAI,GAAE,oCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,oBAAM,QAAC,QAAS;IAClC;QAoCoC,YAAwB;UAC7C;UACF;UACG;UACA;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,AAAQ,OAAD,IAAI;AACiD,QAA9D,WAAU,2BAAmB;;AAE/B,UAAI,kBAAkB,IAAI;AACsC,QAA9D,AAAY,YAAA,QAAC,sBAAwB,sBAAwB,SAApB,kBAAkB;;AAE7D,UAAI,YAAY,IAAI;AACgC,QAAlD,AAAY,YAAA,QAAC,gBAAkB,sBAAkB,SAAd,YAAY;;AAEjD,UAAI,QAAQ,IAAI;AACuB,QAArC,AAAY,YAAA,QAAC,YAAc,sBAAC,QAAQ;;AAEtC,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAMiB,MAH7C,OAAO,AAAa,AAC6B,AAClC,4BADK,8BAA2B,SAAX,UAAU,MAC1C,0BACgB,8BAAwB,SAAR,OAAO;AAEvC,sBAAY,AAAW,4CAAQ,IAAI,GAAE,iCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,gBAAM,QAAC,QAAa,sCAAe,IAAI;IACzD;WAiCiC,SAAqB;UACxC;UACA;UACE;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,qBAAqB,IAAI;AACyC,QAApE,AAAY,YAAA,QAAC,yBAA2B,sBAA2B,SAAvB,qBAAqB;;AAEnE,UAAI,mBAAmB,IAAI;AACuC,QAAhE,AAAY,YAAA,QAAC,uBAAyB,sBAAyB,SAArB,mBAAmB;;AAE/D,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAKR,MAFpB,OAAO,AAAa,AAC6B,4BAA7B,8BAA2B,SAAX,UAAU,MAC1C;AAEA,sBAAY,AAAW,4CAAQ,IAAI,GAAE,kCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,gBAAM,QAAC,QAAa,sCAAe,IAAI;IACzD;WAqDiC,SAAqB;UACxC;UACD;UACC;UACE;UACF;UACE;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,qBAAqB,IAAI;AACyC,QAApE,AAAY,YAAA,QAAC,yBAA2B,sBAA2B,SAAvB,qBAAqB;;AAEnE,UAAI,YAAY,IAAI;AACgC,QAAlD,AAAY,YAAA,QAAC,gBAAkB,sBAAkB,SAAd,YAAY;;AAEjD,UAAI,iBAAiB,IAAI;AACqC,QAA5D,AAAY,YAAA,QAAC,qBAAuB,sBAAuB,SAAnB,iBAAiB;;AAE3D,UAAI,WAAW,IAAI;AAC0B,QAA3C,AAAY,YAAA,QAAC,eAAiB,sBAAC,WAAW;;AAE5C,UAAI,mBAAmB,IAAI;AACuC,QAAhE,AAAY,YAAA,QAAC,uBAAyB,sBAAyB,SAArB,mBAAmB;;AAE/D,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAI+C,MAD3E,OACI,AAAa,AAA+C,4BAA7B,8BAA2B,SAAX,UAAU,MAAK;AAE9D,sBAAY,AAAW,4CAAQ,IAAI,GAAE,kCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,gBAAM,QAAC,QAAa,sCAAe,IAAI;IACzD;cA0D2C,YAAwB;UACpD;UACF;UACA;UACG;UACA;UACF;UACI;UACA;UACF;UACA;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,AAAQ,OAAD,IAAI;AACiD,QAA9D,WAAU,2BAAmB;;AAE/B,UAAI,kBAAkB,IAAI;AACsC,QAA9D,AAAY,YAAA,QAAC,sBAAwB,sBAAwB,SAApB,kBAAkB;;AAE7D,UAAI,YAAY,IAAI;AACgC,QAAlD,AAAY,YAAA,QAAC,gBAAkB,sBAAkB,SAAd,YAAY;;AAEjD,UAAI,UAAU,IAAI;AAC8B,QAA9C,AAAY,YAAA,QAAC,cAAgB,sBAAgB,SAAZ,UAAU;;AAE7C,UAAI,aAAa,IAAI;AAC4B,QAA/C,AAAY,YAAA,QAAC,iBAAmB,sBAAC,aAAa;;AAEhD,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,WAAW,IAAI;AAC+B,QAAhD,AAAY,YAAA,QAAC,eAAiB,sBAAiB,SAAb,WAAW;;AAE/C,UAAI,OAAO,IAAI;AAC0C,QAAvD,AAAY,YAAA,QAAC,WAAa,sBAAE,AAAS,OAAF;;AAErC,UAAI,OAAO,IAAI;AAC0C,QAAvD,AAAY,YAAA,QAAC,WAAa,sBAAE,AAAS,OAAF;;AAErC,UAAI,QAAQ,IAAI;AACuB,QAArC,AAAY,YAAA,QAAC,YAAc,sBAAC,QAAQ;;AAEtC,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAOZ,MAJhB,OAAO,AAAa,AAC6B,AAClC,AAC+B,4BAF1B,8BAA2B,SAAX,UAAU,MAC1C,0BACgB,8BAAwB,SAAR,OAAO,MACvC;AAEA,sBAAY,AAAW,4CAAQ,IAAI,GAAE,iCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,iBAAM,QAAC,QAAa,uCAAgB,IAAI;IAC1D;SA2HsC;UACvB;UACC;UACH;UACA;UACG;UACA;UACW;UACX;UACW;UACb;UACA;UACA;UACE;UACE;UACA;UACF;UACE;UACF;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,kBAAkB,IAAI;AACsC,QAA9D,AAAY,YAAA,QAAC,sBAAwB,sBAAwB,SAApB,kBAAkB;;AAE7D,UAAI,OAAO,IAAI;AACsB,QAAnC,AAAY,YAAA,QAAC,WAAa,sBAAC,OAAO;;AAEpC,UAAI,YAAY,IAAI;AACgC,QAAlD,AAAY,YAAA,QAAC,gBAAkB,sBAAkB,SAAd,YAAY;;AAEjD,UAAI,UAAU,IAAI;AAC8B,QAA9C,AAAY,YAAA,QAAC,cAAgB,sBAAgB,SAAZ,UAAU;;AAE7C,UAAI,OAAO,IAAI;AACsB,QAAnC,AAAY,YAAA,QAAC,WAAa,sBAAC,OAAO;;AAEpC,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,uBAAuB,IAAI;AACoC,QAAjE,AAAY,YAAA,QAAC,2BAA6B,uBAAuB;;AAEnE,UAAI,CAAC,IAAI;AACgB,QAAvB,AAAY,YAAA,QAAC,KAAO,sBAAC,CAAC;;AAExB,UAAI,sBAAsB,IAAI;AACmC,QAA/D,AAAY,YAAA,QAAC,0BAA4B,sBAAsB;;AAEjE,UAAI,WAAW,IAAI;AAC+B,QAAhD,AAAY,YAAA,QAAC,eAAiB,sBAAiB,SAAb,WAAW;;AAE/C,UAAI,qBAAqB,IAAI;AACyC,QAApE,AAAY,YAAA,QAAC,yBAA2B,sBAA2B,SAAvB,qBAAqB;;AAEnE,UAAI,YAAY,IAAI;AACgC,QAAlD,AAAY,YAAA,QAAC,gBAAkB,sBAAkB,SAAd,YAAY;;AAEjD,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,OAAO,IAAI;AAC0C,QAAvD,AAAY,YAAA,QAAC,WAAa,sBAAE,AAAS,OAAF;;AAErC,UAAI,OAAO,IAAI;AAC0C,QAAvD,AAAY,YAAA,QAAC,WAAa,sBAAE,AAAS,OAAF;;AAErC,UAAI,QAAQ,IAAI;AACuB,QAArC,AAAY,YAAA,QAAC,YAAc,sBAAC,QAAQ;;AAEtC,UAAI,UAAU,IAAI;AAC6C,QAA7D,AAAY,YAAA,QAAC,cAAgB,sBAAE,AAAY,UAAF;;AAE3C,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAI+C,MAD3E,OACI,AAAa,AAA+C,4BAA7B,8BAA2B,SAAX,UAAU,MAAK;AAE9D,sBAAY,AAAW,4CAAQ,IAAI,GAAE,iCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,iBAAM,QAAC,QAAa,uCAAgB,IAAI;IAC1D;SAyCgB,YAAwB,SAAqB;UAC9C;UACC;UACA;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,AAAQ,OAAD,IAAI;AACiD,QAA9D,WAAU,2BAAmB;;AAE/B,UAAI,AAAY,WAAD,IAAI;AACiD,QAAlE,WAAU,2BAAmB;;AAEY,MAA3C,AAAY,YAAA,QAAC,eAAiB,sBAAC,WAAW;AAC1C,UAAI,iBAAiB,IAAI;AACqC,QAA5D,AAAY,YAAA,QAAC,qBAAuB,sBAAuB,SAAnB,iBAAiB;;AAE3D,UAAI,WAAW,IAAI;AAC0B,QAA3C,AAAY,YAAA,QAAC,eAAiB,sBAAC,WAAW;;AAE5C,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAOjB,MAJX,OAAO,AAAa,AAC6B,AAClC,AAC+B,4BAF1B,8BAA2B,SAAX,UAAU,MAC1C,0BACgB,8BAAwB,SAAR,OAAO,MACvC;AAEA,sBAAY,AAAW,4CAAQ,IAAI,GAAE,kCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,gBAAM,QAAC,QAAa,sCAAe,IAAI;IACzD;UA8DU,SAAqB,YAAwB;UACxC;UACF;UACA;UACC;UACE;UACF;UACE;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,AAAQ,OAAD,IAAI;AACiD,QAA9D,WAAU,2BAAmB;;AAE/B,UAAI,kBAAkB,IAAI;AACsC,QAA9D,AAAY,YAAA,QAAC,sBAAwB,sBAAwB,SAApB,kBAAkB;;AAE7D,UAAI,qBAAqB,IAAI;AACyC,QAApE,AAAY,YAAA,QAAC,yBAA2B,sBAA2B,SAAvB,qBAAqB;;AAEnE,UAAI,YAAY,IAAI;AACgC,QAAlD,AAAY,YAAA,QAAC,gBAAkB,sBAAkB,SAAd,YAAY;;AAEjD,UAAI,iBAAiB,IAAI;AACqC,QAA5D,AAAY,YAAA,QAAC,qBAAuB,sBAAuB,SAAnB,iBAAiB;;AAE3D,UAAI,WAAW,IAAI;AAC0B,QAA3C,AAAY,YAAA,QAAC,eAAiB,sBAAC,WAAW;;AAE5C,UAAI,mBAAmB,IAAI;AACuC,QAAhE,AAAY,YAAA,QAAC,uBAAyB,sBAAyB,SAArB,mBAAmB;;AAE/D,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAMiB,MAH7C,OAAO,AAAa,AAC6B,AAClC,4BADK,8BAA2B,SAAX,UAAU,MAC1C,0BACgB,8BAAwB,SAAR,OAAO;AAEvC,sBAAY,AAAW,4CAAQ,IAAI,GAAE,mCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,gBAAM,QAAC,QAAa,sCAAe,IAAI;IACzD;aAsCyC,YAAwB;UAClD;UACC;UACA;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,AAAK,IAAD,IAAI;AACiD,QAA3D,WAAU,2BAAmB;;AAEF,MAA7B,AAAY,YAAA,QAAC,QAAU,sBAAC,IAAI;AAC5B,UAAI,iBAAiB,IAAI;AACqC,QAA5D,AAAY,YAAA,QAAC,qBAAuB,sBAAuB,SAAnB,iBAAiB;;AAE3D,UAAI,WAAW,IAAI;AAC0B,QAA3C,AAAY,YAAA,QAAC,eAAiB,sBAAC,WAAW;;AAE5C,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAKN,MAFtB,OAAO,AAAa,AAC6B,4BAA7B,8BAA2B,SAAX,UAAU,MAC1C;AAEA,sBAAY,AAAW,4CAAQ,IAAI,GAAE,kCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,gBAAM,QAAC,QAAa,sCAAe,IAAI;IACzD;WA8DU,SAAqB,YAAwB;UACxC;UACF;UACA;UACC;UACE;UACF;UACE;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,AAAQ,OAAD,IAAI;AACiD,QAA9D,WAAU,2BAAmB;;AAE/B,UAAI,kBAAkB,IAAI;AACsC,QAA9D,AAAY,YAAA,QAAC,sBAAwB,sBAAwB,SAApB,kBAAkB;;AAE7D,UAAI,qBAAqB,IAAI;AACyC,QAApE,AAAY,YAAA,QAAC,yBAA2B,sBAA2B,SAAvB,qBAAqB;;AAEnE,UAAI,YAAY,IAAI;AACgC,QAAlD,AAAY,YAAA,QAAC,gBAAkB,sBAAkB,SAAd,YAAY;;AAEjD,UAAI,iBAAiB,IAAI;AACqC,QAA5D,AAAY,YAAA,QAAC,qBAAuB,sBAAuB,SAAnB,iBAAiB;;AAE3D,UAAI,WAAW,IAAI;AAC0B,QAA3C,AAAY,YAAA,QAAC,eAAiB,sBAAC,WAAW;;AAE5C,UAAI,mBAAmB,IAAI;AACuC,QAAhE,AAAY,YAAA,QAAC,uBAAyB,sBAAyB,SAArB,mBAAmB;;AAE/D,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAMiB,MAH7C,OAAO,AAAa,AAC6B,AAClC,4BADK,8BAA2B,SAAX,UAAU,MAC1C,0BACgB,8BAAwB,SAAR,OAAO;AAEvC,sBAAY,AAAW,4CAAQ,IAAI,GAAE,iCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,gBAAM,QAAC,QAAa,sCAAe,IAAI;IACzD;UA6HoC,SAAqB;UAC1C;UACC;UACH;UACA;UACG;UACA;UACW;UACX;UACW;UACb;UACA;UACA;UACE;UACE;UACA;UACF;UACE;UACF;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,AAAW,UAAD,IAAI;AACiD,QAAjE,WAAU,2BAAmB;;AAE/B,UAAI,kBAAkB,IAAI;AACsC,QAA9D,AAAY,YAAA,QAAC,sBAAwB,sBAAwB,SAApB,kBAAkB;;AAE7D,UAAI,OAAO,IAAI;AACsB,QAAnC,AAAY,YAAA,QAAC,WAAa,sBAAC,OAAO;;AAEpC,UAAI,YAAY,IAAI;AACgC,QAAlD,AAAY,YAAA,QAAC,gBAAkB,sBAAkB,SAAd,YAAY;;AAEjD,UAAI,UAAU,IAAI;AAC8B,QAA9C,AAAY,YAAA,QAAC,cAAgB,sBAAgB,SAAZ,UAAU;;AAE7C,UAAI,OAAO,IAAI;AACsB,QAAnC,AAAY,YAAA,QAAC,WAAa,sBAAC,OAAO;;AAEpC,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,uBAAuB,IAAI;AACoC,QAAjE,AAAY,YAAA,QAAC,2BAA6B,uBAAuB;;AAEnE,UAAI,CAAC,IAAI;AACgB,QAAvB,AAAY,YAAA,QAAC,KAAO,sBAAC,CAAC;;AAExB,UAAI,sBAAsB,IAAI;AACmC,QAA/D,AAAY,YAAA,QAAC,0BAA4B,sBAAsB;;AAEjE,UAAI,WAAW,IAAI;AAC+B,QAAhD,AAAY,YAAA,QAAC,eAAiB,sBAAiB,SAAb,WAAW;;AAE/C,UAAI,qBAAqB,IAAI;AACyC,QAApE,AAAY,YAAA,QAAC,yBAA2B,sBAA2B,SAAvB,qBAAqB;;AAEnE,UAAI,YAAY,IAAI;AACgC,QAAlD,AAAY,YAAA,QAAC,gBAAkB,sBAAkB,SAAd,YAAY;;AAEjD,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,OAAO,IAAI;AAC0C,QAAvD,AAAY,YAAA,QAAC,WAAa,sBAAE,AAAS,OAAF;;AAErC,UAAI,OAAO,IAAI;AAC0C,QAAvD,AAAY,YAAA,QAAC,WAAa,sBAAE,AAAS,OAAF;;AAErC,UAAI,QAAQ,IAAI;AACuB,QAArC,AAAY,YAAA,QAAC,YAAc,sBAAC,QAAQ;;AAEtC,UAAI,UAAU,IAAI;AAC6C,QAA7D,AAAY,YAAA,QAAC,cAAgB,sBAAE,AAAY,UAAF;;AAE3C,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAKT,MAFnB,OAAO,AAAa,AAC6B,4BAA7B,8BAA2B,SAAX,UAAU,MAC1C;AAEA,sBAAY,AAAW,4CAAQ,IAAI,GAAE,kCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,kBAAM,QAAC,QAAa,wCAAiB,IAAI;IAC3D;;uCAjxCuC;IAAqB,mBAAE,MAAM;;;;;;;;;;;;;;;;;;;;;;;;UAyyCf;UACpC;AACX;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGX,MAAjB,OAAO;AAEH,sBAAY,AAAW,4CAAQ,IAAI,GAAE,kCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,2BAAM,QAAC,QAAa,iDAA0B,IAAI;IACpE;;yCA3CyC;IAAqB,mBAAE,MAAM;;;;;;;;;;;;;;QAmEhC;UAAsB;AACtD;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,AAAQ,OAAD,IAAI;AACiD,QAA9D,WAAU,2BAAmB;;AAE/B,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAG2C,MAAvE,OAAO,AAAqB,oCAAkB,8BAAwB,SAAR,OAAO;AAEjE,sBAAY,AAAW,4CAAQ,IAAI,GAAE,iCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,kBAAM,QAAC,QAAa,wCAAiB,IAAI;IAC3D;;UAgCc;UACE;UACA;UACA;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,UAAU,IAAI;AAC8B,QAA9C,AAAY,YAAA,QAAC,cAAgB,sBAAgB,SAAZ,UAAU;;AAE7C,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGF,MAA1B,OAAO;AAEH,sBAAY,AAAW,4CAAQ,IAAI,GAAE,iCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,mBAAM,QAAC,QAAa,yCAAkB,IAAI;IAC5D;UAiCoC;UACtB;UACE;UACA;UACA;AACV;AACA,yBAAmB;AACnB;AACA;AACA,6BAA2C;AAC3C;AAEJ,UAAI,OAAO,IAAI;AACkC,QAA/C,QAAgB,AAAK,oBAAQ,AAAS,OAAF;;AAEtC,UAAI,UAAU,IAAI;AAC8B,QAA9C,AAAY,YAAA,QAAC,cAAgB,sBAAgB,SAAZ,UAAU;;AAE7C,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,SAAS,IAAI;AACwB,QAAvC,AAAY,YAAA,QAAC,aAAe,sBAAC,SAAS;;AAExC,UAAI,aAAW;AACqB,QAAlC,AAAY,YAAA,QAAC,UAAY,sBAAC;;AAGI,MAAhC,OAAO;AAEH,sBAAY,AAAW,4CAAQ,IAAI,GAAE,kCAC/B,KAAK,gBACE,YAAY,+CACV,cAAc,sCAChB,YAAY,oBACR,gBAAgB;AACrC,YAAO,AAAU,UAAD,kBAAM,QAAC,QAAa,wCAAiB,IAAI;IAC3D;;yCAjLyC;IAAqB,mBAAE,MAAM;;;;;;;;;;;;;;;;;;;;;IAsL1D;;;;;;IAGO;;;;;;IAGP;;;;;;IAIA;;;;;;IAKA;;;;;;;AAyB+B,kBACjC;AACR,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,cAAS;AACqD,QAAhE,AAAK,KAAA,QAAC,SAAW,AAAM,AAAiC,uCAA7B,QAAC,SAAW,AAAO,KAAF;;AAE9C,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,sBAAiB;AACmB,QAAtC,AAAK,KAAA,QAAC,iBAAmB;;AAE3B,UAAI,sBAAiB;AACmB,QAAtC,AAAK,KAAA,QAAC,iBAAmB;;AAE3B,YAAO,MAAK;IACd;;;IA1DY;IAGO;IAGP;IAIA;IAKA;;EAEP;8BAEiB;IAnBV;IAGO;IAGP;IAIA;IAKA;AAKV,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AAGP,MAFb,aAAwB,AACnB,AACA,aAFI,AAAK,KAAA,QAAC,4BACG,QAAC,SAAc,wCAAiB,KAAK;;AAGzD,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACkB,2BAAtC,mBAAgB,AAAK,KAAA,QAAC;;AAExB,kBAAI,AAAM,KAAD,eAAa;AACkB,2BAAtC,mBAAgB,AAAK,KAAA,QAAC;;EAE1B;;;;;;;;;;;;;;;;;;IAiCY;;;;;;IAIA;;;;;;;AAc+B,kBACjC;AACR,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,cAAS;AACW,QAAtB,AAAK,KAAA,QAAC,SAAW;;AAEnB,YAAO,MAAK;IACd;;;IA3BY;IAIA;;EAEE;uCAEiB;IARnB;IAIA;AAKV,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACE,mBAAtB,mBAAQ,AAAK,KAAA,QAAC;;EAElB;;;;;;;;;;;;;;;;;;IAiBY;;;;;;IAGA;;;;;;IAGA;;;;;;IAaA;;;;;;IAGC;;;;;;;AAuB8B,kBACjC;AACR,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,WAAM;AACQ,QAAhB,AAAK,KAAA,QAAC,MAAQ;;AAEhB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,cAAS;AACsB,QAAjC,AAAK,KAAA,QAAC,SAAY,AAAO;;AAE3B,YAAO,MAAK;IACd;;;IA/DY;IAGA;IAGA;IAaA;IAGC;;EAEJ;kCAEiB;IA1Bd;IAGA;IAGA;IAaA;IAGC;AAKX,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACJ,gBAAhB,mBAAK,AAAK,KAAA,QAAC;;AAEb,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AAC6B,MAAjD,aAAY,6CAAsB,AAAK,KAAA,QAAC;;EAE5C;;;;;;;;;;;;;;;;;;;;;;;;IA2BqB;;;;;;IAGT;;;;;;IAGA;;;;;;IAIA;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAIA;;;;;;;AAiC+B,kBACjC;AACR,UAAI,6BAAwB;AACqC,QAA/D,AAAK,KAAA,QAAC,wBAA2B,AAAsB;;AAEzD,UAAI,oBAAe;AACiB,QAAlC,AAAK,KAAA,QAAC,eAAiB;;AAEzB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,WAAM;AACQ,QAAhB,AAAK,KAAA,QAAC,MAAQ;;AAEhB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,YAAO,MAAK;IACd;;;IAnFqB;IAGT;IAGA;IAIA;IAGA;IAGA;IAGA;IAIA;;EAEF;mCAEiB;IA3BN;IAGT;IAGA;IAIA;IAGA;IAGA;IAGA;IAIA;AAKV,kBAAI,AAAM,KAAD,eAAa;AAEgD,MADpE,4BACQ,qDAA8B,AAAK,KAAA,QAAC;;AAE9C,kBAAI,AAAM,KAAD,eAAa;AACc,yBAAlC,mBAAc,AAAK,KAAA,QAAC;;AAEtB,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACJ,gBAAhB,mBAAK,AAAK,KAAA,QAAC;;AAEb,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,mBAAW,AAAK,KAAA,QAAC;;AAEnB,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,mBAAU,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,mBAAW,AAAK,KAAA,QAAC;;EAErB;;;;;;;;;;;;;;;;;;;;;;;;IAmCY;;;;;;IAGiB;;;;;;IAGjB;;;;;;IAIA;;;;;;IAKA;;;;;;;AA0B+B,kBACjC;AACR,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,cAAS;AACqD,QAAhE,AAAK,KAAA,QAAC,SAAW,AAAM,AAAiC,uCAA7B,QAAC,SAAW,AAAO,KAAF;;AAE9C,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,sBAAiB;AACmB,QAAtC,AAAK,KAAA,QAAC,iBAAmB;;AAE3B,UAAI,sBAAiB;AACmB,QAAtC,AAAK,KAAA,QAAC,iBAAmB;;AAE3B,YAAO,MAAK;IACd;;;IA3DY;IAGiB;IAGjB;IAIA;IAKA;;EAEE;uCAEiB;IAnBnB;IAGiB;IAGjB;IAIA;IAKA;AAKV,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AAIP,MAHb,aAAwB,AACnB,AAEA,aAHI,AAAK,KAAA,QAAC,sCAEP,QAAC,SAAc,kDAA2B,KAAK;;AAGzD,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACkB,2BAAtC,mBAAgB,AAAK,KAAA,QAAC;;AAExB,kBAAI,AAAM,KAAD,eAAa;AACkB,2BAAtC,mBAAgB,AAAK,KAAA,QAAC;;EAE1B;;;;;;;;;;;;;;;;;IA4BgC;;;;;;;AAcW,kBACjC;AACR,UAAI,sBAAiB;AAEwC,QAD3D,AAAK,KAAA,QAAC,iBACF,AAAc,AAAiC,+CAA7B,QAAC,SAAW,AAAO,KAAF;;AAEzC,YAAO,MAAK;IACd;;;IArBgC;;EAEO;gEAEiB;IAJxB;AAK9B,kBAAI,AAAM,KAAD,eAAa;AAIP,MAHb,qBAAwC,AACnC,AAEA,aAHY,AAAK,KAAA,QAAC,iDAEf,QAAC,SAAc,qDAA8B,KAAK;;EAG9D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyBY;;;;;;IAMA;;;;;;IAMA;;;;;;IAIS;;;;;;IAGI;;;;;;IAIf;;;;;;IAGE;;;;;;IAGA;;;;;;IAMA;;;;;;IAIF;;;;;;IAGE;;;;;;IAGA;;;;;;IAIA;;;;;;IAI0B;;;;;;IAI5B;;;;;;IAIA;;;;;;IAGE;;;;;;IAIA;;;;;;IAGA;;;;;;;AAqE+B,kBACjC;AACR,UAAI,mBAAc;AACgB,QAAhC,AAAK,KAAA,QAAC,cAAgB;;AAExB,UAAI,wBAAmB;AACqB,QAA1C,AAAK,KAAA,QAAC,mBAAqB;;AAE7B,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,6BAAwB;AACqC,QAA/D,AAAK,KAAA,QAAC,wBAA2B,AAAsB;;AAEzD,UAAI,yBAAoB;AAEwC,QAD9D,AAAK,KAAA,QAAC,oBACF,AAAiB,AAAiC,kDAA7B,QAAC,SAAW,AAAO,KAAF;;AAE5C,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,oBAAe;AACiB,QAAlC,AAAK,KAAA,QAAC,eAAiB;;AAEzB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,wBAAmB;AACqB,QAA1C,AAAK,KAAA,QAAC,mBAAqB;;AAE7B,UAAI,eAAU;AACY,QAAxB,AAAK,KAAA,QAAC,UAAY;;AAEpB,UAAI,WAAM;AACQ,QAAhB,AAAK,KAAA,QAAC,MAAQ;;AAEhB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,UAAI,6BAAwB;AACqC,QAA/D,AAAK,KAAA,QAAC,wBAA2B,AAAsB;;AAEzD,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,wBAAmB;AACqB,QAA1C,AAAK,KAAA,QAAC,mBAAqB;;AAE7B,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,YAAO,MAAK;IACd;;;IAzMY;IAMA;IAMA;IAIS;IAGI;IAIf;IAGE;IAGA;IAMA;IAIF;IAGE;IAGA;IAIA;IAI0B;IAI5B;IAIA;IAGE;IAIA;IAGA;;EAEO;4CAEiB;IA3ExB;IAMA;IAMA;IAIS;IAGI;IAIf;IAGE;IAGA;IAMA;IAIF;IAGE;IAGA;IAIA;IAI0B;IAI5B;IAIA;IAGE;IAIA;IAGA;AAKV,kBAAI,AAAM,KAAD,eAAa;AACY,wBAAhC,mBAAa,AAAK,KAAA,QAAC;;AAErB,kBAAI,AAAM,KAAD,eAAa;AACsB,6BAA1C,mBAAkB,AAAK,KAAA,QAAC;;AAE1B,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,mBAAU,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AAEgD,MADpE,4BACQ,qDAA8B,AAAK,KAAA,QAAC;;AAE9C,kBAAI,AAAM,KAAD,eAAa;AAGP,MAFb,wBAA8C,AACzC,AACA,aAFe,AAAK,KAAA,QAAC,6CACF,QAAC,SAAc,8CAAuB,KAAK;;AAGrE,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,iBAAU,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AACc,yBAAlC,mBAAc,AAAK,KAAA,QAAC;;AAEtB,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACsB,6BAA1C,mBAAkB,AAAK,KAAA,QAAC;;AAE1B,kBAAI,AAAM,KAAD,eAAa;AACI,oBAAxB,iBAAS,AAAK,KAAA,QAAC;;AAEjB,kBAAI,AAAM,KAAD,eAAa;AACJ,gBAAhB,mBAAK,AAAK,KAAA,QAAC;;AAEb,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,mBAAW,AAAK,KAAA,QAAC;;AAEnB,kBAAI,AAAM,KAAD,eAAa;AAEc,MADlC,4BAA2B,sEACvB,AAAK,KAAA,QAAC;;AAEZ,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,iBAAU,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,iBAAW,AAAK,KAAA,QAAC;;AAEnB,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,mBAAU,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AACsB,6BAA1C,mBAAkB,AAAK,KAAA,QAAC;;AAE1B,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,mBAAW,AAAK,KAAA,QAAC;;EAErB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8EY;;;;;;IAYA;;;;;;;AAc+B,kBACjC;AACR,UAAI,eAAU;AACY,QAAxB,AAAK,KAAA,QAAC,UAAY;;AAEpB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,YAAO,MAAK;IACd;;;IAnCY;IAYA;;EAEU;+CAEiB;IAhB3B;IAYA;AAKV,kBAAI,AAAM,KAAD,eAAa;AACI,oBAAxB,mBAAS,AAAK,KAAA,QAAC;;AAEjB,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;EAEjB;;;;;;;;;;;;;;;;;;;;;;;IAiBY;;;;;;IAIA;;;;;;IAGA;;;;;;IAIA;;;;;;IAGuB;;;;;;IAGzB;;;;;;IAIE;;;;;;IAGA;;;;;;IAIA;;;;;;IAGA;;;;;;;AAsC+B,kBACjC;AACR,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,mBAAc;AACgB,QAAhC,AAAK,KAAA,QAAC,cAAgB;;AAExB,UAAI,WAAM;AACQ,QAAhB,AAAK,KAAA,QAAC,MAAQ;;AAEhB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,eAAU;AACY,QAAxB,AAAK,KAAA,QAAC,UAAY;;AAEpB,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,mBAAc;AACgB,QAAhC,AAAK,KAAA,QAAC,cAAgB;;AAExB,UAAI,oBAAe;AACiB,QAAlC,AAAK,KAAA,QAAC,eAAiB;;AAEzB,UAAI,cAAS;AACW,QAAtB,AAAK,KAAA,QAAC,SAAW;;AAEnB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,YAAO,MAAK;IACd;;;IAtGY;IAIA;IAGA;IAIA;IAGuB;IAGzB;IAIE;IAGA;IAIA;IAGA;;EAEH;kCAEiB;IAnCd;IAIA;IAGA;IAIA;IAGuB;IAGzB;IAIE;IAGA;IAIA;IAGA;AAKV,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,mBAAU,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AACY,wBAAhC,mBAAa,AAAK,KAAA,QAAC;;AAErB,kBAAI,AAAM,KAAD,eAAa;AACJ,gBAAhB,mBAAK,AAAK,KAAA,QAAC;;AAEb,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACmD,MAAvE,cAA0B,AAAa,YAA7B,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,iBAAU,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AACY,wBAAhC,mBAAa,AAAK,KAAA,QAAC;;AAErB,kBAAI,AAAM,KAAD,eAAa;AACc,yBAAlC,mBAAc,AAAK,KAAA,QAAC;;AAEtB,kBAAI,AAAM,KAAD,eAAa;AACE,mBAAtB,mBAAQ,AAAK,KAAA,QAAC;;AAEhB,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;EAEjB;;;;;;;;;;;;;;;;;;;;;;;IAyCY;;;;;;IAIA;;;;;;;AAc+B,kBACjC;AACR,UAAI,mBAAc;AACgB,QAAhC,AAAK,KAAA,QAAC,cAAgB;;AAExB,UAAI,mBAAc;AACgB,QAAhC,AAAK,KAAA,QAAC,cAAgB;;AAExB,YAAO,MAAK;IACd;;;IA3BY;IAIA;;EAEK;0CAEiB;IARtB;IAIA;AAKV,kBAAI,AAAM,KAAD,eAAa;AACY,wBAAhC,mBAAa,AAAK,KAAA,QAAC;;AAErB,kBAAI,AAAM,KAAD,eAAa;AACY,wBAAhC,mBAAa,AAAK,KAAA,QAAC;;EAEvB;;;;;;;;;;;;;;;;;IAmBuC;;;;;;IAKA;;;;;;IAG3B;;;;;;IAIE;;;;;;;AAwB6B,kBACjC;AACR,UAAI,iBAAY;AAG8C,QAF5D,AAAK,KAAA,QAAC,YACF,yDACI,eAAU,QAAiB,QAAU,AAAM,IAAF;;AAEnD,UAAI,cAAS;AAG8C,QAFzD,AAAK,KAAA,QAAC,SACF,yDACI,YAAO,QAAiB,QAAU,AAAM,IAAF;;AAEhD,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,gBAAW;AACiC,QAA9C,AAAK,KAAA,QAAC,WAAc,AAAS;;AAE/B,YAAO,MAAK;IACd;;;IAvDuC;IAKA;IAG3B;IAIE;;EAEN;iCAEiB;IAhBc;IAKA;IAG3B;IAIE;AAKZ,kBAAI,AAAM,KAAD,eAAa;AAGsC,MAF1D,gBAAW,sEACW,YAAlB,AAAK,KAAA,QAAC,oDACN,QAAU,QAAa,gCAAyB,IAAI;;AAE1D,kBAAI,AAAM,KAAD,eAAa;AAGsC,MAF1D,aAAQ,sEACW,YAAf,AAAK,KAAA,QAAC,iDACN,QAAU,QAAa,gCAAyB,IAAI;;AAE1D,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AAC2B,MAA/C,eAAwB,uCAAM,AAAK,KAAA,QAAC;;EAExC;;;;;;;;;;;;;;;;;;;;;;IAkCY;;;;;;IAMO;;;;;;IAOK;;;;;;IAOF;;;;;;IAKV;;;;;;IAIS;;;;;;IAOT;;;;;;;AAiC+B,kBACjC;AACR,UAAI,qBAAgB;AACkB,QAApC,AAAK,KAAA,QAAC,gBAAkB;;AAE1B,UAAI,2BAAsB;AACmC,QAA3D,AAAK,KAAA,QAAC,sBAAyB,AAAoB;;AAErD,UAAI,sBAAiB;AAC8B,QAAjD,AAAK,KAAA,QAAC,iBAAoB,AAAe;;AAE3C,UAAI,oBAAe;AAEwC,QADzD,AAAK,KAAA,QAAC,eACF,AAAY,AAAiC,6CAA7B,QAAC,SAAW,AAAO,KAAF;;AAEvC,UAAI,cAAS;AACW,QAAtB,AAAK,KAAA,QAAC,SAAW;;AAEnB,UAAI,mBAAc;AAC2B,QAA3C,AAAK,KAAA,QAAC,cAAiB,AAAY;;AAErC,UAAI,kBAAa;AACe,QAA9B,AAAK,KAAA,QAAC,aAAe;;AAEvB,YAAO,MAAK;IACd;;;IA9FY;IAMO;IAOK;IAOF;IAKV;IAIS;IAOT;;EAEI;yCAEiB;IAxCrB;IAMO;IAOK;IAOF;IAKV;IAIS;IAOT;AAKV,kBAAI,AAAM,KAAD,eAAa;AACgB,0BAApC,mBAAe,AAAK,KAAA,QAAC;;AAEvB,kBAAI,AAAM,KAAD,eAAa;AAE4C,MADhE,0BACQ,mDAA4B,AAAK,KAAA,QAAC;;AAE5C,kBAAI,AAAM,KAAD,eAAa;AAE4C,MADhE,qBACQ,wDAAiC,AAAK,KAAA,QAAC;;AAEjD,kBAAI,AAAM,KAAD,eAAa;AAGP,MAFb,mBAAoC,AAC/B,AACA,aAFU,AAAK,KAAA,QAAC,qCACA,QAAC,SAAc,2CAAoB,KAAK;;AAG/D,kBAAI,AAAM,KAAD,eAAa;AACE,mBAAtB,mBAAQ,AAAK,KAAA,QAAC;;AAEhB,kBAAI,AAAM,KAAD,eAAa;AAC+C,MAAnE,kBAAiB,qDAA8B,AAAK,KAAA,QAAC;;AAEvD,kBAAI,AAAM,KAAD,eAAa;AACU,uBAA9B,mBAAY,AAAK,KAAA,QAAC;;EAEtB;;;;;;;;;;;;;;;;;;;IAiCoC;;;;;;;AAYO,kBACjC;AACR,UAAI,wBAAmB;AACgC,QAArD,AAAK,KAAA,QAAC,mBAAsB,AAAiB;;AAE/C,YAAO,MAAK;IACd;;;IAlBoC;;EAEd;+CAEiB;IAJH;AAKlC,kBAAI,AAAM,KAAD,eAAa;AAES,MAD7B,uBAAsB,oEAClB,AAAK,KAAA,QAAC;;EAEd;;;;;;;;;;;;;IAamC;;;;;;;AAYQ,kBACjC;AACR,UAAI,mBAAc;AACgB,QAAhC,AAAK,KAAA,QAAC,cAAgB;;AAExB,YAAO,MAAK;IACd;;;IAlBmC;;EAEE;8DAEiB;IAJnB;AAKjC,kBAAI,AAAM,KAAD,eAAa;AAEkD,MADtE,kBACyB,AAAa,YAAjC,AAAK,KAAA,QAAC;;EAEf;;;;;;;;;;;;;IAkBuB;;;;;;;AAaoB,kBACjC;AACR,UAAI,uCAAkC;AACoC,QAAxE,AAAK,KAAA,QAAC,kCAAoC;;AAE5C,YAAO,MAAK;IACd;;;IAnBuB;;EAED;+CAEiB;IAJhB;AAKrB,kBAAI,AAAM,KAAD,eAAa;AAGQ,MAF5B,sCAC6C,AACpC,aADJ,AAAK,KAAA,QAAC;;EAGf;;;;;;;;;;;;;IAoBY;;;;;;;AAW+B,kBACjC;AACR,UAAI,mBAAc;AACgB,QAAhC,AAAK,KAAA,QAAC,cAAgB;;AAExB,YAAO,MAAK;IACd;;;IAjBY;;EAEa;kDAEiB;IAJ9B;AAKV,kBAAI,AAAM,KAAD,eAAa;AACY,wBAAhC,mBAAa,AAAK,KAAA,QAAC;;EAEvB;;;;;;;;;;;;;;;IAcY;;;;;;IAIU;;;;;;IAGV;;;;;;;AAiB+B,kBACjC;AACR,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,YAAO;AACoB,QAA7B,AAAK,KAAA,QAAC,OAAU,AAAK;;AAEvB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,YAAO,MAAK;IACd;;;IApCY;IAIU;IAGV;;EAEQ;6CAEiB;IAXzB;IAIU;IAGV;AAKV,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,mBAAU,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AACkC,MAAtD,WAAU,sDAA+B,AAAK,KAAA,QAAC;;AAEjD,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;EAEjB;;;;;;;;;;;;;;;IA4BY;;;;;;;AAW+B,kBACjC;AACR,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,YAAO,MAAK;IACd;;;IAjBY;;EAEW;gDAEiB;IAJ5B;AAKV,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;EAEjB;;;;;;;;;;;;;;;IAcsB;;;;;;IAKV;;;;;;IAGY;;;;;;;AAkBmB,kBACjC;AACR,UAAI,8BAAyB;AACsC,QAAjE,AAAK,KAAA,QAAC,yBAA4B,AAAuB;;AAE3D,UAAI,kBAAa;AACe,QAA9B,AAAK,KAAA,QAAC,aAAe;;AAEvB,UAAI,eAAU;AACuB,QAAnC,AAAK,KAAA,QAAC,UAAa,AAAQ;;AAE7B,YAAO,MAAK;IACd;;;IAtCsB;IAKV;IAGY;;EAEC;kDAEiB;IAZpB;IAKV;IAGY;AAKtB,kBAAI,AAAM,KAAD,eAAa;AAEkD,MADtE,6BACQ,sDAA+B,AAAK,KAAA,QAAC;;AAE/C,kBAAI,AAAM,KAAD,eAAa;AACU,uBAA9B,mBAAY,AAAK,KAAA,QAAC;;AAEpB,kBAAI,AAAM,KAAD,eAAa;AAC0C,MAA9D,cAAa,wDAAiC,AAAK,KAAA,QAAC;;EAExD;;;;;;;;;;;;;;;;;;;;;;;;IA0BY;;;;;;IAKW;;;;;;IAaX;;;;;;IAUA;;;;;;IASA;;;;;;IAQA;;;;;;IASA;;;;;;IAQA;;;;;;IAKA;;;;;;IASA;;;;;;;AAuC+B,kBACjC;AACR,UAAI,mBAAc;AACgB,QAAhC,AAAK,KAAA,QAAC,cAAgB;;AAExB,UAAI,2BAAsB;AACwB,QAAhD,AAAK,KAAA,QAAC,sBAAwB;;AAEhC,UAAI,uBAAkB;AACoB,QAAxC,AAAK,KAAA,QAAC,kBAAoB;;AAE5B,UAAI,cAAS;AACW,QAAtB,AAAK,KAAA,QAAC,SAAW;;AAEnB,UAAI,oBAAe;AACiB,QAAlC,AAAK,KAAA,QAAC,eAAiB;;AAEzB,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,UAAI,YAAO;AACS,QAAlB,AAAK,KAAA,QAAC,OAAS;;AAEjB,UAAI,mBAAc;AACgB,QAAhC,AAAK,KAAA,QAAC,cAAgB;;AAExB,UAAI,YAAO;AACS,QAAlB,AAAK,KAAA,QAAC,OAAS;;AAEjB,YAAO,MAAK;IACd;;;IApJY;IAKW;IAaX;IAUA;IASA;IAQA;IASA;IAQA;IAKA;IASA;;EAEA;qCAEiB;IAhFjB;IAKW;IAaX;IAUA;IASA;IAQA;IASA;IAQA;IAKA;IASA;AAKV,kBAAI,AAAM,KAAD,eAAa;AACY,wBAAhC,mBAAa,AAAK,KAAA,QAAC;;AAErB,kBAAI,AAAM,KAAD,eAAa;AAE8C,MADlE,0BACiC,AAAc,aAA1C,AAAK,KAAA,QAAC;;AAEb,kBAAI,AAAM,KAAD,eAAa;AACoB,4BAAxC,mBAAiB,AAAK,KAAA,QAAC;;AAEzB,kBAAI,AAAM,KAAD,eAAa;AACE,mBAAtB,mBAAQ,AAAK,KAAA,QAAC;;AAEhB,kBAAI,AAAM,KAAD,eAAa;AACc,yBAAlC,mBAAc,AAAK,KAAA,QAAC;;AAEtB,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,mBAAW,AAAK,KAAA,QAAC;;AAEnB,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,mBAAW,AAAK,KAAA,QAAC;;AAEnB,kBAAI,AAAM,KAAD,eAAa;AACF,iBAAlB,mBAAM,AAAK,KAAA,QAAC;;AAEd,kBAAI,AAAM,KAAD,eAAa;AACY,wBAAhC,mBAAa,AAAK,KAAA,QAAC;;AAErB,kBAAI,AAAM,KAAD,eAAa;AACF,iBAAlB,mBAAM,AAAK,KAAA,QAAC;;EAEhB;;;;;;;;;;;;;;;;;;;;;;;IAyCY;;;;;;IAWA;;;;;;;AAc+B,kBACjC;AACR,UAAI,eAAU;AACY,QAAxB,AAAK,KAAA,QAAC,UAAY;;AAEpB,UAAI,eAAU;AACY,QAAxB,AAAK,KAAA,QAAC,UAAY;;AAEpB,YAAO,MAAK;IACd;;;IAlCY;IAWA;;EAEL;gCAEiB;IAfZ;IAWA;AAKV,kBAAI,AAAM,KAAD,eAAa;AACI,oBAAxB,mBAAS,AAAK,KAAA,QAAC;;AAEjB,kBAAI,AAAM,KAAD,eAAa;AACI,oBAAxB,mBAAS,AAAK,KAAA,QAAC;;EAEnB;;;;;;;;;;;;;;;;;IAkBY;;;;;;IAGA;;;;;;IAIA;;;;;;IAIF;;;;;;;AAoBiC,kBACjC;AACR,UAAI,oBAAe;AACiB,QAAlC,AAAK,KAAA,QAAC,eAAiB;;AAEzB,UAAI,cAAS;AACW,QAAtB,AAAK,KAAA,QAAC,SAAW;;AAEnB,UAAI,WAAM;AACQ,QAAhB,AAAK,KAAA,QAAC,MAAQ;;AAEhB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,YAAO,MAAK;IACd;;;IA9CY;IAGA;IAIA;IAIF;;EAEI;uCAEiB;IAfnB;IAGA;IAIA;IAIF;AAKR,kBAAI,AAAM,KAAD,eAAa;AACc,yBAAlC,mBAAc,AAAK,KAAA,QAAC;;AAEtB,kBAAI,AAAM,KAAD,eAAa;AACE,mBAAtB,mBAAQ,AAAK,KAAA,QAAC;;AAEhB,kBAAI,AAAM,KAAD,eAAa;AACJ,gBAAhB,mBAAK,AAAK,KAAA,QAAC;;AAEb,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,iBAAO,AAAK,KAAA,QAAC;;EAEjB;;;;;;;;;;;;;;;;;IAyBmC;;;;;;IAIA;;;;;;;AAcQ,kBACjC;AACR,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,eAAU;AACY,QAAxB,AAAK,KAAA,QAAC,UAAY;;AAEpB,YAAO,MAAK;IACd;;;IA3BmC;IAIA;;EAEV;kDAEiB;IARP;IAIA;AAKjC,kBAAI,AAAM,KAAD,eAAa;AACqD,MAAzE,eAA4B,AAAa,YAA9B,AAAK,KAAA,QAAC;;AAEnB,kBAAI,AAAM,KAAD,eAAa;AACmD,MAAvE,cAA0B,AAAa,YAA7B,AAAK,KAAA,QAAC;;EAEpB;;;;;;;;;;;;;;;;;;;;;IAqBY;;;;;;IAIH;;;;;;IAGG;;;;;;IAGA;;;;;;IAGuB;;;;;;IAGvB;;;;;;IAGA;;;;;;IAIH;;;;;;;AAiCkC,kBACjC;AACR,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,eAAU;AACY,QAAxB,AAAK,KAAA,QAAC,UAAY;;AAEpB,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,oBAAe;AACiB,QAAlC,AAAK,KAAA,QAAC,eAAiB;;AAEzB,UAAI,cAAS;AACW,QAAtB,AAAK,KAAA,QAAC,SAAW;;AAEnB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,cAAS;AACW,QAAtB,AAAK,KAAA,QAAC,SAAW;;AAEnB,YAAO,MAAK;IACd;;;IAnFY;IAIH;IAGG;IAGA;IAGuB;IAGvB;IAGA;IAIH;;EAEI;sCAEiB;IA3BlB;IAIH;IAGG;IAGA;IAGuB;IAGvB;IAGA;IAIH;AAKP,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,mBAAU,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AACI,oBAAxB,gBAAS,AAAK,KAAA,QAAC;;AAEjB,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,mBAAW,AAAK,KAAA,QAAC;;AAEnB,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AAEmD,MADvE,mBAC0B,AAAa,YAAlC,AAAK,KAAA,QAAC;;AAEb,kBAAI,AAAM,KAAD,eAAa;AACE,mBAAtB,mBAAQ,AAAK,KAAA,QAAC;;AAEhB,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACE,mBAAtB,gBAAQ,AAAK,KAAA,QAAC;;EAElB;;;;;;;;;;;;;;;;;;;;;;;IAuCY;;;;;;IAIA;;;;;;IAIA;;;;;;IAIF;;;;;;;AAoBiC,kBACjC;AACR,UAAI,oBAAe;AACiB,QAAlC,AAAK,KAAA,QAAC,eAAiB;;AAEzB,UAAI,cAAS;AACW,QAAtB,AAAK,KAAA,QAAC,SAAW;;AAEnB,UAAI,WAAM;AACQ,QAAhB,AAAK,KAAA,QAAC,MAAQ;;AAEhB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,YAAO,MAAK;IACd;;;IA/CY;IAIA;IAIA;IAIF;;EAEM;yCAEiB;IAhBrB;IAIA;IAIA;IAIF;AAKR,kBAAI,AAAM,KAAD,eAAa;AACc,yBAAlC,mBAAc,AAAK,KAAA,QAAC;;AAEtB,kBAAI,AAAM,KAAD,eAAa;AACE,mBAAtB,mBAAQ,AAAK,KAAA,QAAC;;AAEhB,kBAAI,AAAM,KAAD,eAAa;AACJ,gBAAhB,mBAAK,AAAK,KAAA,QAAC;;AAEb,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,iBAAO,AAAK,KAAA,QAAC;;EAEjB;;;;;;;;;;;;;;;;;IA0ByB;;;;;;IAGf;;;;;;;AAgBiC,kBACjC;AACR,UAAI,kBAAa;AACyD,QAAxE,AAAK,KAAA,QAAC,aAAe,AAAU,AAAiC,2CAA7B,QAAC,SAAW,AAAO,KAAF;;AAEtD,UAAI,mBAAc;AACgB,QAAhC,AAAK,KAAA,QAAC,cAAgB;;AAExB,YAAO,MAAK;IACd;;;IA5ByB;IAGf;;EAEM;yCAEiB;IAPR;IAGf;AAKR,kBAAI,AAAM,KAAD,eAAa;AAGP,MAFb,iBAAgC,AAC3B,AACA,aAFQ,AAAK,KAAA,QAAC,sCACK,QAAC,SAAc,8CAAuB,KAAK;;AAGrE,kBAAI,AAAM,KAAD,eAAa;AACY,wBAAhC,iBAAa,AAAK,KAAA,QAAC;;EAEvB;;;;;;;;;;;;;;;IAqBY;;;;;;IAIA;;;;;;;AAc+B,kBACjC;AACR,UAAI,cAAS;AACW,QAAtB,AAAK,KAAA,QAAC,SAAW;;AAEnB,UAAI,YAAO;AACS,QAAlB,AAAK,KAAA,QAAC,OAAS;;AAEjB,YAAO,MAAK;IACd;;;IA3BY;IAIA;;EAEC;sCAEiB;IARlB;IAIA;AAKV,kBAAI,AAAM,KAAD,eAAa;AACE,mBAAtB,mBAAQ,AAAK,KAAA,QAAC;;AAEhB,kBAAI,AAAM,KAAD,eAAa;AACF,iBAAlB,mBAAM,AAAK,KAAA,QAAC;;EAEhB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkBU;;;;;;IAOiB;;;;;;IAIF;;;;;;IAMf;;;;;;IAIE;;;;;;IAMG;;;;;;IAGD;;;;;;IAGD;;;;;;IAGD;;;;;;IAIE;;;;;;IAKJ;;;;;;IAGE;;;;;;IAGY;;;;;;IAGZ;;;;;;IAIF;;;;;;IAIA;;;;;;IAIA;;;;;;IAIE;;;;;;IAGA;;;;;;IASA;;;;;;IAkBA;;;;;;IAGA;;;;;;IAGA;;;;;;IAKF;;;;;;IAMK;;;;;;IAOD;;;;;;IAKJ;;;;;;IAOa;;;;;;IAIX;;;;;;IAGG;;;;;;IAGN;;;;;;IAKG;;;;;;IAIE;;;;;;IA6BF;;;;;;IAGA;;;;;;IAQA;;;;;;IAGE;;;;;;IAWF;;;;;;;AAgI+B,kBACjC;AACR,UAAI,yBAAoB;AACsB,QAA5C,AAAK,KAAA,QAAC,oBAAsB;;AAE9B,UAAI,oBAAe;AAEwC,QADzD,AAAK,KAAA,QAAC,eACF,AAAY,AAAiC,6CAA7B,QAAC,SAAW,AAAO,KAAF;;AAEvC,UAAI,kBAAa;AACyD,QAAxE,AAAK,KAAA,QAAC,aAAe,AAAU,AAAiC,2CAA7B,QAAC,SAAW,AAAO,KAAF;;AAEtD,UAAI,yBAAoB;AACsB,QAA5C,AAAK,KAAA,QAAC,oBAAsB;;AAE9B,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,uBAAkB;AAC+B,QAAnD,AAAK,KAAA,QAAC,kBAAqB,AAAgB;;AAE7C,UAAI,gBAAW;AACiC,QAA9C,AAAK,KAAA,QAAC,WAAc,AAAS;;AAE/B,UAAI,gBAAW;AACwB,QAArC,AAAK,KAAA,QAAC,WAAc,AAAS;;AAE/B,UAAI,oBAAe;AACiB,QAAlC,AAAK,KAAA,QAAC,eAAiB;;AAEzB,UAAI,YAAO;AACoB,QAA7B,AAAK,KAAA,QAAC,OAAU,AAAK;;AAEvB,UAAI,2BAAsB;AACwB,QAAhD,AAAK,KAAA,QAAC,sBAAwB;;AAEhC,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,2BAAsB;AACmC,QAA3D,AAAK,KAAA,QAAC,sBAAyB,AAAoB;;AAErD,UAAI,eAAU;AACuB,QAAnC,AAAK,KAAA,QAAC,UAAa,AAAQ;;AAE7B,UAAI,8BAAyB;AAC2B,QAAtD,AAAK,KAAA,QAAC,yBAA2B;;AAEnC,UAAI,wBAAmB;AACqB,QAA1C,AAAK,KAAA,QAAC,mBAAqB;;AAE7B,UAAI,gCAA2B;AAC6B,QAA1D,AAAK,KAAA,QAAC,2BAA6B;;AAErC,UAAI,oBAAe;AACiB,QAAlC,AAAK,KAAA,QAAC,eAAiB;;AAEzB,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,WAAM;AACQ,QAAhB,AAAK,KAAA,QAAC,MAAQ;;AAEhB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,UAAI,eAAU;AACY,QAAxB,AAAK,KAAA,QAAC,UAAY;;AAEpB,UAAI,kBAAa;AAC0B,QAAzC,AAAK,KAAA,QAAC,aAAgB,AAAW;;AAEnC,UAAI,0BAAqB;AACkC,QAAzD,AAAK,KAAA,QAAC,qBAAwB,AAAmB;;AAEnD,UAAI,oBAAe;AACiB,QAAlC,AAAK,KAAA,QAAC,eAAiB;;AAEzB,UAAI,mBAAc;AACgB,QAAhC,AAAK,KAAA,QAAC,cAAgB;;AAExB,UAAI,yBAAoB;AACsB,QAA5C,AAAK,KAAA,QAAC,oBAAsB;;AAE9B,UAAI,kBAAa;AAC0B,QAAzC,AAAK,KAAA,QAAC,aAAgB,AAAW;;AAEnC,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,UAAI,eAAU;AACuB,QAAnC,AAAK,KAAA,QAAC,UAAa,AAAQ;;AAE7B,UAAI,cAAS;AACsB,QAAjC,AAAK,KAAA,QAAC,SAAY,AAAO;;AAE3B,UAAI,eAAU;AACY,QAAxB,AAAK,KAAA,QAAC,UAAY;;AAEpB,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,qBAAgB;AACkB,QAApC,AAAK,KAAA,QAAC,gBAAkB;;AAE1B,UAAI,gBAAW;AACiC,QAA9C,AAAK,KAAA,QAAC,WAAc,AAAS;;AAE/B,UAAI,mBAAc;AACgB,QAAhC,AAAK,KAAA,QAAC,cAAgB;;AAExB,YAAO,MAAK;IACd;;;IAvcU;IAOiB;IAIF;IAMf;IAIE;IAMG;IAGD;IAGD;IAGD;IAIE;IAKJ;IAGE;IAGY;IAGZ;IAIF;IAIA;IAIA;IAIE;IAGA;IASA;IAkBA;IAGA;IAGA;IAKF;IAMK;IAOD;IAKJ;IAOa;IAIX;IAGG;IAGN;IAKG;IAIE;IA6BF;IAGA;IAQA;IAGE;IAWF;;EAEL;gCAEiB;IArNd;IAOiB;IAIF;IAMf;IAIE;IAMG;IAGD;IAGD;IAGD;IAIE;IAKJ;IAGE;IAGY;IAGZ;IAIF;IAIA;IAIA;IAIE;IAGA;IASA;IAkBA;IAGA;IAGA;IAKF;IAMK;IAOD;IAKJ;IAOa;IAIX;IAGG;IAGN;IAKG;IAIE;IA6BF;IAGA;IAQA;IAGE;IAWF;AAKV,kBAAI,AAAM,KAAD,eAAa;AACwB,8BAA5C,iBAAmB,AAAK,KAAA,QAAC;;AAE3B,kBAAI,AAAM,KAAD,eAAa;AAGP,MAFb,mBAAoC,AAC/B,AACA,aAFU,AAAK,KAAA,QAAC,0CACK,QAAC,SAAc,gDAAyB,KAAK;;AAGzE,kBAAI,AAAM,KAAD,eAAa;AAGP,MAFb,iBAAgC,AAC3B,AACA,aAFQ,AAAK,KAAA,QAAC,sCACK,QAAC,SAAc,8CAAuB,KAAK;;AAGrE,kBAAI,AAAM,KAAD,eAAa;AACwB,8BAA5C,iBAAmB,AAAK,KAAA,QAAC;;AAE3B,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,mBAAU,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AACiD,MAArE,sBAAqB,+CAAwB,AAAK,KAAA,QAAC;;AAErD,kBAAI,AAAM,KAAD,eAAa;AAC2B,MAA/C,eAAwB,uCAAM,AAAK,KAAA,QAAC;;AAEtC,kBAAI,AAAM,KAAD,eAAa;AACiC,MAArD,eAAc,6CAAsB,AAAK,KAAA,QAAC;;AAE5C,kBAAI,AAAM,KAAD,eAAa;AACc,yBAAlC,mBAAc,AAAK,KAAA,QAAC;;AAEtB,kBAAI,AAAM,KAAD,eAAa;AAC0B,MAA9C,WAAU,8CAAuB,AAAK,KAAA,QAAC;;AAEzC,kBAAI,AAAM,KAAD,eAAa;AAC4B,gCAAhD,iBAAqB,AAAK,KAAA,QAAC;;AAE7B,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AAEiD,MADrE,0BACQ,wDAAiC,AAAK,KAAA,QAAC;;AAEjD,kBAAI,AAAM,KAAD,eAAa;AAC8B,MAAlD,cAAa,4CAAqB,AAAK,KAAA,QAAC;;AAE1C,kBAAI,AAAM,KAAD,eAAa;AACkC,mCAAtD,iBAAwB,AAAK,KAAA,QAAC;;AAEhC,kBAAI,AAAM,KAAD,eAAa;AACsB,6BAA1C,iBAAkB,AAAK,KAAA,QAAC;;AAE1B,kBAAI,AAAM,KAAD,eAAa;AACsC,qCAA1D,iBAA0B,AAAK,KAAA,QAAC;;AAElC,kBAAI,AAAM,KAAD,eAAa;AACc,yBAAlC,mBAAc,AAAK,KAAA,QAAC;;AAEtB,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,mBAAW,AAAK,KAAA,QAAC;;AAEnB,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,mBAAU,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AACJ,gBAAhB,mBAAK,AAAK,KAAA,QAAC;;AAEb,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,mBAAW,AAAK,KAAA,QAAC;;AAEnB,kBAAI,AAAM,KAAD,eAAa;AACI,oBAAxB,iBAAS,AAAK,KAAA,QAAC;;AAEjB,kBAAI,AAAM,KAAD,eAAa;AACuC,MAA3D,iBAAgB,+CAAwB,AAAK,KAAA,QAAC;;AAEhD,kBAAI,AAAM,KAAD,eAAa;AAEsC,MAD1D,yBACQ,8CAAuB,AAAK,KAAA,QAAC;;AAEvC,kBAAI,AAAM,KAAD,eAAa;AACc,yBAAlC,iBAAc,AAAK,KAAA,QAAC;;AAEtB,kBAAI,AAAM,KAAD,eAAa;AAC+C,MAAnE,kBAAkC,AAAc,aAAlC,AAAK,KAAA,QAAC;;AAEtB,kBAAI,AAAM,KAAD,eAAa;AACwB,8BAA5C,mBAAmB,AAAK,KAAA,QAAC;;AAE3B,kBAAI,AAAM,KAAD,eAAa;AACuC,MAA3D,iBAAgB,+CAAwB,AAAK,KAAA,QAAC;;AAEhD,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,gBAAW,AAAK,KAAA,QAAC;;AAEnB,kBAAI,AAAM,KAAD,eAAa;AAC8B,MAAlD,cAAa,4CAAqB,AAAK,KAAA,QAAC;;AAE1C,kBAAI,AAAM,KAAD,eAAa;AAC8B,MAAlD,aAAY,8CAAuB,AAAK,KAAA,QAAC;;AAE3C,kBAAI,AAAM,KAAD,eAAa;AACI,oBAAxB,mBAAS,AAAK,KAAA,QAAC;;AAEjB,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,mBAAU,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AACgB,0BAApC,mBAAe,AAAK,KAAA,QAAC;;AAEvB,kBAAI,AAAM,KAAD,eAAa;AAC2B,MAA/C,eAAwB,uCAAM,AAAK,KAAA,QAAC;;AAEtC,kBAAI,AAAM,KAAD,eAAa;AACY,wBAAhC,mBAAa,AAAK,KAAA,QAAC;;EAEvB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgIY;;;;;;IAMA;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;;AAuB+B,kBACjC;AACR,UAAI,eAAU;AACY,QAAxB,AAAK,KAAA,QAAC,UAAY;;AAEpB,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,UAAI,cAAS;AACW,QAAtB,AAAK,KAAA,QAAC,SAAW;;AAEnB,YAAO,MAAK;IACd;;;IAxDY;IAMA;IAGA;IAGA;IAGA;;EAEK;0CAEiB;IAnBtB;IAMA;IAGA;IAGA;IAGA;AAKV,kBAAI,AAAM,KAAD,eAAa;AACI,oBAAxB,mBAAS,AAAK,KAAA,QAAC;;AAEjB,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,mBAAU,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,mBAAW,AAAK,KAAA,QAAC;;AAEnB,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,mBAAW,AAAK,KAAA,QAAC;;AAEnB,kBAAI,AAAM,KAAD,eAAa;AACE,mBAAtB,mBAAQ,AAAK,KAAA,QAAC;;EAElB;;;;;;;;;;;;;;;;;;;;;;;;;;IA0BS;;;;;;IAGG;;;;;;IAGA;;;;;;IAKA;;;;;;IAIA;;;;;;IAGF;;;;;;IAIA;;;;;;IAKA;;;;;;IAOE;;;;;;IAIF;;;;;;;AAsCiC,kBACjC;AACR,UAAI,yBAAoB;AACsB,QAA5C,AAAK,KAAA,QAAC,oBAAsB;;AAE9B,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,oBAAe;AACiB,QAAlC,AAAK,KAAA,QAAC,eAAiB;;AAEzB,UAAI,cAAS;AACW,QAAtB,AAAK,KAAA,QAAC,SAAW;;AAEnB,UAAI,WAAM;AACQ,QAAhB,AAAK,KAAA,QAAC,MAAQ;;AAEhB,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,UAAI,kBAAa;AACe,QAA9B,AAAK,KAAA,QAAC,aAAe;;AAEvB,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,UAAI,uBAAkB;AACoB,QAAxC,AAAK,KAAA,QAAC,kBAAoB;;AAE5B,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,YAAO,MAAK;IACd;;;IA7GS;IAGG;IAGA;IAKA;IAIA;IAGF;IAIA;IAKA;IAOE;IAIF;;EAEK;wCAEiB;IA1CvB;IAGG;IAGA;IAKA;IAIA;IAGF;IAIA;IAKA;IAOE;IAIF;AAKR,kBAAI,AAAM,KAAD,eAAa;AACwB,8BAA5C,gBAAmB,AAAK,KAAA,QAAC;;AAE3B,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,mBAAU,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AACc,yBAAlC,mBAAc,AAAK,KAAA,QAAC;;AAEtB,kBAAI,AAAM,KAAD,eAAa;AACE,mBAAtB,mBAAQ,AAAK,KAAA,QAAC;;AAEhB,kBAAI,AAAM,KAAD,eAAa;AACJ,gBAAhB,mBAAK,AAAK,KAAA,QAAC;;AAEb,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,iBAAW,AAAK,KAAA,QAAC;;AAEnB,kBAAI,AAAM,KAAD,eAAa;AACU,uBAA9B,iBAAY,AAAK,KAAA,QAAC;;AAEpB,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,iBAAW,AAAK,KAAA,QAAC;;AAEnB,kBAAI,AAAM,KAAD,eAAa;AACoB,4BAAxC,mBAAiB,AAAK,KAAA,QAAC;;AAEzB,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,iBAAO,AAAK,KAAA,QAAC;;EAEjB;;;;;;;;;;;;;;;;;;;;;;;;IAyCc;;;;;;IAKA;;;;;;IAOF;;;;;;;AAiB+B,kBACjC;AACR,UAAI,aAAQ;AAEyH,QADnI,AAAK,KAAA,QAAC,QACa,AAAW,AAAqG,cAA3H,AAAM,0BAAwB,GAAG,OAAK,MAAgB,AAAW,cAAvB,AAAM,2BAAyB,GAAG,OAAK,MAAc,AAAW,cAArB,AAAM,yBAAuB,GAAG;;AAE/H,UAAI,iBAAY;AACkC,QAAhD,AAAK,KAAA,QAAC,YAAe,AAAU;;AAEjC,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,YAAO,MAAK;IACd;;;IA1Cc;IAKA;IAOF;;EAEG;wCAEiB;IAhBlB;IAKA;IAOF;AAKV,kBAAI,AAAM,KAAD,eAAa;AACqB,MAAzC,YAAqB,uCAAM,AAAK,KAAA,QAAC;;AAEnC,kBAAI,AAAM,KAAD,eAAa;AAC6B,MAAjD,gBAAyB,uCAAM,AAAK,KAAA,QAAC;;AAEvC,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,mBAAW,AAAK,KAAA,QAAC;;EAErB;;;;;;;;;;;;;;;;IA+BY;;;;;;IAKH;;;;;;;AAckC,kBACjC;AACR,UAAI,eAAU;AACY,QAAxB,AAAK,KAAA,QAAC,UAAY;;AAEpB,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,YAAO,MAAK;IACd;;;IA5BY;IAKH;;EAEM;wCAEiB;IATpB;IAKH;AAKP,kBAAI,AAAM,KAAD,eAAa;AACI,oBAAxB,mBAAS,AAAK,KAAA,QAAC;;AAEjB,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,gBAAU,AAAK,KAAA,QAAC;;EAEpB;;;;;;;;;;;;;;;;;;;;;;;;IA2BY;;;;;;IAKa;;;;;;IAGb;;;;;;IAGA;;;;;;IAGK;;;;;;IAGL;;;;;;IAIA;;;;;;IAKA;;;;;;IAGA;;;;;;IAGA;;;;;;IAIE;;;;;;;AA6C6B,kBACjC;AACR,UAAI,mBAAc;AACgB,QAAhC,AAAK,KAAA,QAAC,cAAgB;;AAExB,UAAI,yBAAoB;AAEwC,QAD9D,AAAK,KAAA,QAAC,oBACF,AAAiB,AAAiC,kDAA7B,QAAC,SAAW,AAAO,KAAF;;AAE5C,UAAI,oBAAe;AACiB,QAAlC,AAAK,KAAA,QAAC,eAAiB;;AAEzB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,cAAS;AACqD,QAAhE,AAAK,KAAA,QAAC,SAAW,AAAM,AAAiC,uCAA7B,QAAC,SAAW,AAAO,KAAF;;AAE9C,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,sBAAiB;AACmB,QAAtC,AAAK,KAAA,QAAC,iBAAmB;;AAE3B,UAAI,sBAAiB;AACmB,QAAtC,AAAK,KAAA,QAAC,iBAAmB;;AAE3B,UAAI,gBAAW;AACa,QAA1B,AAAK,KAAA,QAAC,WAAa;;AAErB,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,UAAI,gBAAW;AACiC,QAA9C,AAAK,KAAA,QAAC,WAAc,AAAS;;AAE/B,YAAO,MAAK;IACd;;;IAtHY;IAKa;IAGb;IAGA;IAGK;IAGL;IAIA;IAKA;IAGA;IAGA;IAIE;;EAEN;iCAEiB;IAxCb;IAKa;IAGb;IAGA;IAGK;IAGL;IAIA;IAKA;IAGA;IAGA;IAIE;AAKZ,kBAAI,AAAM,KAAD,eAAa;AACY,wBAAhC,mBAAa,AAAK,KAAA,QAAC;;AAErB,kBAAI,AAAM,KAAD,eAAa;AAGP,MAFb,wBAA8C,AACzC,AACA,aAFe,AAAK,KAAA,QAAC,6CACF,QAAC,SAAc,8CAAuB,KAAK;;AAGrE,kBAAI,AAAM,KAAD,eAAa;AACc,yBAAlC,mBAAc,AAAK,KAAA,QAAC;;AAEtB,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AAGP,MAFb,aAAwB,AACnB,AACA,aAFI,AAAK,KAAA,QAAC,0BACC,QAAC,SAAc,sCAAe,KAAK;;AAGrD,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACkB,2BAAtC,mBAAgB,AAAK,KAAA,QAAC;;AAExB,kBAAI,AAAM,KAAD,eAAa;AACkB,2BAAtC,mBAAgB,AAAK,KAAA,QAAC;;AAExB,kBAAI,AAAM,KAAD,eAAa;AACM,qBAA1B,mBAAU,AAAK,KAAA,QAAC;;AAElB,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,mBAAW,AAAK,KAAA,QAAC;;AAEnB,kBAAI,AAAM,KAAD,eAAa;AAC2B,MAA/C,eAAwB,uCAAM,AAAK,KAAA,QAAC;;EAExC;;;;;;;;;;;;;;;;;;;;;;;;IA6CsB;;;;;;IAGL;;;;;;;AAkB0B,kBACjC;AACR,UAAI,aAAQ;AACoD,QAA9D,AAAK,KAAA,QAAC,QAAU,AAAK,AAAiC,sCAA7B,QAAC,SAAW,AAAO,KAAF;;AAE5C,UAAI,eAAU;AACsD,QAAlE,AAAK,KAAA,QAAC,UAAY,AAAO,AAAiC,wCAA7B,QAAC,SAAW,AAAO,KAAF;;AAEhD,YAAO,MAAK;IACd;;;IA9BsB;IAGL;;EAEC;2CAEiB;IAPb;IAGL;AAKf,kBAAI,AAAM,KAAD,eAAa;AAGP,MAFb,YAAsB,AACjB,AACA,aAFG,AAAK,KAAA,QAAC,8BACO,QAAC,SAAc,2CAAoB,KAAK;;AAG/D,kBAAI,AAAM,KAAD,eAAa;AAGP,MAFb,cAA0B,AACrB,AACA,aAFK,AAAK,KAAA,QAAC,2BACA,QAAC,SAAc,sCAAe,KAAK;;EAGvD;;;;;;;;;;;;;;;IAiBuB;;;;;;IAGN;;;;;;;AAgB0B,kBACjC;AACR,UAAI,kBAAa;AACe,QAA9B,AAAK,KAAA,QAAC,aAAe;;AAEvB,UAAI,eAAU;AACsD,QAAlE,AAAK,KAAA,QAAC,UAAY,AAAO,AAAiC,wCAA7B,QAAC,SAAW,AAAO,KAAF;;AAEhD,YAAO,MAAK;IACd;;;IA5BuB;IAGN;;EAEF;wCAEiB;IAPT;IAGN;AAKf,kBAAI,AAAM,KAAD,eAAa;AAC6C,MAAjE,iBAAgC,AAAc,aAAjC,AAAK,KAAA,QAAC;;AAErB,kBAAI,AAAM,KAAD,eAAa;AAGP,MAFb,cAA0B,AACrB,AACA,aAFK,AAAK,KAAA,QAAC,2BACA,QAAC,SAAc,sCAAe,KAAK;;EAGvD;;;;;;;;;;;;;;;;;;;IAkBS;;;;;;IAKA;;;;;;IAGsB;;;;;;IAGjB;;;;;;IAGA;;;;;;IAGF;;;;;;;AA6B+B,kBACjC;AACR,UAAI,6BAAwB;AAC0B,QAApD,AAAK,KAAA,QAAC,wBAA0B;;AAElC,UAAI,0BAAqB;AACuB,QAA9C,AAAK,KAAA,QAAC,qBAAuB;;AAE/B,UAAI,cAAS;AACqD,QAAhE,AAAK,KAAA,QAAC,SAAW,AAAM,AAAiC,uCAA7B,QAAC,SAAW,AAAO,KAAF;;AAE9C,UAAI,gBAAW;AACiC,QAA9C,AAAK,KAAA,QAAC,WAAc,AAAS;;AAE/B,UAAI,gBAAW;AACiC,QAA9C,AAAK,KAAA,QAAC,WAAc,AAAS;;AAE/B,UAAI,iBAAY;AACc,QAA5B,AAAK,KAAA,QAAC,YAAc;;AAEtB,YAAO,MAAK;IACd;;;IAnES;IAKA;IAGsB;IAGjB;IAGA;IAGF;;EAEK;0CAEiB;IArBzB;IAKA;IAGsB;IAGjB;IAGA;IAGF;AAKV,kBAAI,AAAM,KAAD,eAAa;AACgC,kCAApD,gBAAuB,AAAK,KAAA,QAAC;;AAE/B,kBAAI,AAAM,KAAD,eAAa;AAC0B,+BAA9C,gBAAoB,AAAK,KAAA,QAAC;;AAE5B,kBAAI,AAAM,KAAD,eAAa;AAIP,MAHb,aAAwB,AACnB,AAEA,aAHI,AAAK,KAAA,QAAC,wCAEP,QAAC,SAAc,oDAA6B,KAAK;;AAG3D,kBAAI,AAAM,KAAD,eAAa;AAC2B,MAA/C,eAAwB,uCAAM,AAAK,KAAA,QAAC;;AAEtC,kBAAI,AAAM,KAAD,eAAa;AAC2B,MAA/C,eAAwB,uCAAM,AAAK,KAAA,QAAC;;AAEtC,kBAAI,AAAM,KAAD,eAAa;AACQ,sBAA5B,mBAAW,AAAK,KAAA,QAAC;;EAErB;;;;;;;;;;;;;;;;;;IA6BY;;;;;;;AAW+B,kBACjC;AACR,UAAI,WAAM;AACQ,QAAhB,AAAK,KAAA,QAAC,MAAQ;;AAEhB,YAAO,MAAK;IACd;;;IAjBY;;EAES;8CAEiB;IAJ1B;AAKV,kBAAI,AAAM,KAAD,eAAa;AACJ,gBAAhB,mBAAK,AAAK,KAAA,QAAC;;EAEf;;;;;;;;;;;;;;;;;IAcwC;;;;;;IAGH;;;;;;IAGzB;;;;;;IAGE;;;;;;IAGA;;;;;;;AA2B6B,kBACjC;AACR,UAAI,kBAAa;AAG+C,QAF9D,AAAK,KAAA,QAAC,aACF,0DACI,gBAAW,QAAkB,QAAU,AAAM,IAAF;;AAErD,UAAI,eAAU;AAG4C,QAFxD,AAAK,KAAA,QAAC,UACF,uDACI,aAAQ,QAAe,QAAU,AAAM,IAAF;;AAE/C,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,gBAAW;AACiC,QAA9C,AAAK,KAAA,QAAC,WAAc,AAAS;;AAE/B,UAAI,gBAAW;AACiC,QAA9C,AAAK,KAAA,QAAC,WAAc,AAAS;;AAE/B,YAAO,MAAK;IACd;;;IA7DwC;IAGH;IAGzB;IAGE;IAGA;;EAEI;2CAEiB;IAhBK;IAGH;IAGzB;IAGE;IAGA;AAKZ,kBAAI,AAAM,KAAD,eAAa;AAGuC,MAF3D,iBAAY,uEACW,YAAnB,AAAK,KAAA,QAAC,qDACN,QAAU,QAAa,iCAA0B,IAAI;;AAE3D,kBAAI,AAAM,KAAD,eAAa;AAGoC,MAFxD,cAAS,oEACW,YAAhB,AAAK,KAAA,QAAC,kDACN,QAAU,QAAa,8BAAuB,IAAI;;AAExD,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AAC2B,MAA/C,eAAwB,uCAAM,AAAK,KAAA,QAAC;;AAEtC,kBAAI,AAAM,KAAD,eAAa;AAC2B,MAA/C,eAAwB,uCAAM,AAAK,KAAA,QAAC;;EAExC;;;;;;;;;;;;;;;;;;;;IA8BY;;;;;;IAGA;;;;;;IAGA;;;;;;IAKA;;;;;;;AAoB+B,kBACjC;AACR,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,WAAM;AACQ,QAAhB,AAAK,KAAA,QAAC,MAAQ;;AAEhB,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,cAAS;AACW,QAAtB,AAAK,KAAA,QAAC,SAAW;;AAEnB,YAAO,MAAK;IACd;;;IA9CY;IAGA;IAGA;IAKA;;EAEH;kCAEiB;IAfd;IAGA;IAGA;IAKA;AAKV,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACJ,gBAAhB,mBAAK,AAAK,KAAA,QAAC;;AAEb,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACE,mBAAtB,mBAAQ,AAAK,KAAA,QAAC;;EAElB;;;;;;;;;;;;;;;;;;;;IAuBY;;;;;;IAGO;;;;;;IAGP;;;;;;IAIA;;;;;;IAKA;;;;;;;AAyB+B,kBACjC;AACR,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,cAAS;AACqD,QAAhE,AAAK,KAAA,QAAC,SAAW,AAAM,AAAiC,uCAA7B,QAAC,SAAW,AAAO,KAAF;;AAE9C,UAAI,aAAQ;AACU,QAApB,AAAK,KAAA,QAAC,QAAU;;AAElB,UAAI,sBAAiB;AACmB,QAAtC,AAAK,KAAA,QAAC,iBAAmB;;AAE3B,UAAI,sBAAiB;AACmB,QAAtC,AAAK,KAAA,QAAC,iBAAmB;;AAE3B,YAAO,MAAK;IACd;;;IA1DY;IAGO;IAGP;IAIA;IAKA;;EAEF;mCAEiB;IAnBf;IAGO;IAGP;IAIA;IAKA;AAKV,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AAGP,MAFb,aAAwB,AACnB,AACA,aAFI,AAAK,KAAA,QAAC,4BACG,QAAC,SAAc,wCAAiB,KAAK;;AAGzD,kBAAI,AAAM,KAAD,eAAa;AACA,kBAApB,mBAAO,AAAK,KAAA,QAAC;;AAEf,kBAAI,AAAM,KAAD,eAAa;AACkB,2BAAtC,mBAAgB,AAAK,KAAA,QAAC;;AAExB,kBAAI,AAAM,KAAD,eAAa;AACkB,2BAAtC,mBAAgB,AAAK,KAAA,QAAC;;EAE1B;;;;;;;;;;;;;;;;;;IA0Bc;;;;;;IAGA;;;;;;;AAc6B,kBACjC;AACR,UAAI,YAAO;AAC6B,QAAtC,AAAK,KAAA,QAAC,OAAU,AAAK;;AAEvB,UAAI,cAAS;AAC+B,QAA1C,AAAK,KAAA,QAAC,SAAY,AAAO;;AAE3B,YAAO,MAAK;IACd;;;IA1Bc;IAGA;;EAEF;qCAEiB;IAPf;IAGA;AAKZ,kBAAI,AAAM,KAAD,eAAa;AACmB,MAAvC,WAAoB,uCAAM,AAAK,KAAA,QAAC;;AAElC,kBAAI,AAAM,KAAD,eAAa;AACuB,MAA3C,aAAsB,uCAAM,AAAK,KAAA,QAAC;;EAEtC;;;;;;;;;;;;;MAznLgB,aAAU","file":"v3.ddc.js"}');
  // Exports:
  return {
    calendar__v3: v3
  };
});

//# sourceMappingURL=v3.ddc.js.map
