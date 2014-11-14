var Qiita;
(function (Qiita) {
    var request;
    function setRequester(f) {
        request = f;
    }
    Qiita.setRequester = setRequester;
    var Resources;
    (function (Resources) {
        var AccessToken = (function () {
            function AccessToken() {
            }
            AccessToken.create_access_token = function (params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('POST', '/api/v2/access_tokens', params);
            };
            AccessToken.delete_access_token = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('DELETE', '/api/v2/access_tokens/' + id, params);
            };
            return AccessToken;
        })();
        Resources.AccessToken = AccessToken;
        var Comment = (function () {
            function Comment() {
            }
            Comment.get_comment = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/comments/' + id, params);
            };
            Comment.delete_comment = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('DELETE', '/api/v2/comments/' + id, params);
            };
            Comment.update_comment = function (id, params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('PATCH', '/api/v2/comments/' + id, params);
            };
            Comment.list_item_comments = function (id, params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/items/' + id + '/comments', params);
            };
            Comment.create_item_comment = function (id, params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('POST', '/api/v2/items/' + id + '/comments', params);
            };
            Comment.thank_comment = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('PUT', '/api/v2/comments/' + id + '/thank', params);
            };
            Comment.unthank_comment = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('DELETE', '/api/v2/comments/' + id + '/thank', params);
            };
            return Comment;
        })();
        Resources.Comment = Comment;
        var Item = (function () {
            function Item() {
            }
            Item.list_items = function (params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/items', params);
            };
            Item.create_item = function (params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('POST', '/api/v2/items', params);
            };
            Item.get_item = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/items/' + id, params);
            };
            Item.update_item = function (id, params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('PATCH', '/api/v2/items/' + id, params);
            };
            Item.delete_item = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('DELETE', '/api/v2/items/' + id, params);
            };
            Item.list_tag_items = function (id, params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/tags/' + id + '/items', params);
            };
            Item.list_user_items = function (id, params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/users/' + id + '/items', params);
            };
            Item.list_user_stocks = function (id, params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/users/' + id + '/stocks', params);
            };
            Item.stock_item = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('PUT', '/api/v2/items/' + id + '/stock', params);
            };
            Item.unstock_item = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('DELETE', '/api/v2/items/' + id + '/stock', params);
            };
            Item.lgtm_item = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('PUT', '/api/v2/items/' + id + '/lgtm', params);
            };
            Item.unlgtm_item = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('DELETE', '/api/v2/items/' + id + '/lgtm', params);
            };
            return Item;
        })();
        Resources.Item = Item;
        var Project = (function () {
            function Project() {
            }
            Project.list_projects = function (params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/projects', params);
            };
            Project.get_project = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/projects/' + id, params);
            };
            Project.create_project = function (params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('POST', '/api/v2/projects', params);
            };
            Project.delete_project = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('DELETE', '/api/v2/projects/' + id, params);
            };
            Project.update_project = function (id, params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('PATCH', '/api/v2/projects/' + id, params);
            };
            return Project;
        })();
        Resources.Project = Project;
        var ExpandedTemplate = (function () {
            function ExpandedTemplate() {
            }
            ExpandedTemplate.create_expanded_template = function (params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('POST', '/api/v2/expanded_templates', params);
            };
            return ExpandedTemplate;
        })();
        Resources.ExpandedTemplate = ExpandedTemplate;
        var Tag = (function () {
            function Tag() {
            }
            Tag.list_tags = function (params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/tags', params);
            };
            Tag.get_tag = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/tags/' + id, params);
            };
            Tag.list_user_following_tags = function (id, params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/users/' + id + '/following_tags', params);
            };
            return Tag;
        })();
        Resources.Tag = Tag;
        var Template = (function () {
            function Template() {
            }
            Template.list_templates = function (params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/templates', params);
            };
            Template.get_template = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/templates/' + id, params);
            };
            Template.delete_template = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('DELETE', '/api/v2/templates/' + id, params);
            };
            Template.create_template = function (params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('POST', '/api/v2/templates', params);
            };
            Template.update_template = function (id, params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('PATCH', '/api/v2/templates/' + id, params);
            };
            return Template;
        })();
        Resources.Template = Template;
        var User = (function () {
            function User() {
            }
            User.list_users = function (params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/users', params);
            };
            User.get_user = function (id, params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/users/' + id, params);
            };
            User.get_authenticated_user = function (params) {
                if (params === void 0) { params = {}; }
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/authenticated_user', params);
            };
            User.list_user_followees = function (id, params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/users/' + id + '/followees', params);
            };
            User.list_user_followers = function (id, params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/users/' + id + '/followers', params);
            };
            User.list_item_stockers = function (id, params) {
                if (!request)
                    throw new Error('You should set Qiita.setRequester() at first');
                return request('GET', '/api/v2/items/' + id + '/stockers', params);
            };
            return User;
        })();
        Resources.User = User;
    })(Resources = Qiita.Resources || (Qiita.Resources = {}));
})(Qiita = exports.Qiita || (exports.Qiita = {}));
Qiita.setToken = function(token){
    Qiita._token = token;
}

Qiita.Resources.setRequester(function(method, endpoint, params){
  // WIP
});
module.exports = Qiita;