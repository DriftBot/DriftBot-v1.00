let texts = {
            'accept': "{{client.l('accept_pending')}}",
            'decline': "{{client.l('decline_pending')}}",
            'cancel': "{{client.l('cancel_pending')}}",
            'remove': "{{client.l('remove_friend')}}",
            'block': "{{client.l('block_user')}}",
            'whisper': "{{client.l('whisper')}}",
            'unblock': "{{client.l('unblock_user')}}",
            'promote': "{{client.l('promote_member')}}",
            'kick': "{{client.l('kick_member')}}",
            '/': "{{client.l('home')}}",
            '/config-editor': "{{client.l('config_editor')}}",
            '/commands-editor': "{{client.l('commands_editor')}}",
            '/custom-commands-editor': "{{client.l('custom_commands_editor')}}",
            '/replies-editor': "{{client.l('replies_editor')}}",
            '/boot-switch': "{{client.l('boot_switch')}}",
            '/clients-viewer': "{{client.l('clients_viewer')}}"
        }
    </script>
    <link rel="stylesheet" type="text/css" href="{{client.url_for('static', filename='css/main.css')}}">
    <link rel="stylesheet" type="text/css" href="{{client.url_for('static', filename='css/header.css')}}">
    <link rel="stylesheet" type="text/css" href="{{client.url_for('static', filename='css/clients-viewer-client.css')}}">
    <script type="text/javascript" src="{{client.url_for('static', filename='js/main.js')}}"></script>
    <script type="text/javascript" src="{{client.url_for('static', filename='js/ws.js')}}"></script>
</head>
<body id="main" ontouchstart="">
    <div id="header">
        <nav id="header-global">
            <a id="pc-logo" href="https://github.com/gomashio1596/Fortnite-LobbyBot-v2" target="_blank" rel="noopener noreferrer">Fortnite-LobbyBot</a>
            <img id="phone-logo" src="{{client.url_for('static', filename='images/logo.png')}}" alt="F" width="50">
            <ul id="header-list">
            </ul>
        </nav>
        <div id="header-button">
            <span style="top: 0px;"></span>
            <span style="top: 10px;"></span>
            <span style="top: 20px;"></span>
        </div>
    </div>
    <div id="content">
        <div id="account" class="openable">
            <span>{{client.l('account')}}</span>
            <div class="content">
                <p id="name">{{client.l('loading')}}</p>
                <div id="incoming_friend_request" class="openable">
                    <span>{{client.l('incoming_friend_request', 0)}}</span>
                    <div class="content">
                        {{client.l('loading')}}
                    </div>
                </div>
                <br>
                <div id="outgoing_friend_request" class="openable">
                    <span>{{client.l('outgoing_friend_request', 0)}}</span>
                    <div class="content">
                        {{client.l('loading')}}
                    </div>
                </div>
                <br>
                <div id="friend" class="openable">
                    <span>{{client.l('online', 0, 0)}}</span>
                    <div class="content">
                        {{client.l('loading')}}
                    </div>
                </div>
                <br>
                <div id="blocked_user" class="openable">
                    <span>{{client.l('blocked_user', 0)}}</span>
                    <div class="content">
                        {{client.l('loading')}}
                    </div>
                </div>
                <br>
                <div id="friend_message" class="openable">
                    <span>{{client.l('whisper')}}</span>
                    <div class="content">
                        {{client.l('loading')}}
                    </div>
                </div>
                <br>
            </div>
        </div>
        <br>
        <div id="party" class="openable">
            <span>{{client.l('party')}}</span>
            <div class="content">
                <p id="party_name">{{client.l('loading')}}</p>
                <input class="leave_button" type="button" value="{{client.l('leave_party')}}" onclick="leaveParty()">
                <br>
                <div id="member" class="openable">
                    <span>{{client.l('member', 0, 0)}}</span>
                    <div class="content">
                        {{client.l('loading')}}
                    </div>
                </div>
                <br>
                <div id="party_message" class="openable">
                    <span>{{client.l('party_chat')}}</span>
                    <div class="content party_chat">
                        <input class="chat_input" type="text" onkeydown="partyChatKeyPress(event.key, this.nextElementSibling)">
                        <input class="chat_submit" type="button" value="{{client.l('send')}}" onclick="sendPartyMessage(this)">
                    </div>
                </div>
                <br>
            </div>
        </div>
        <br>
        <textarea class="command_input" rows=5 placeholder="{{client.l('command')}}" onkeydown="commandKeyPress(event, this.nextElementSibling)"></textarea>
        <input class="command_button" type="button" value="{{client.l('send')}}" onclick="sendCommand(this)">
        <div id="res"></div>
    </div>
</body>
<script type="text/javascript" src="{{client.url_for('static', filename='js/header.js')}}"></script>
<script type="text/javascript" src="{{client.url_for('static', filename='js/clients-viewer-client.js')}}"></script>
