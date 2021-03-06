/*
 * ========================================================================
 * shipping.js : v0.8.0
 *
 * ========================================================================
 * Copyright 2014
 * Authors: Daniel Petzold, Mariano Luna
 *
 * Unless you have purchased a commercial license agreement from Jaspersoft Inc., the following license terms apply:
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the
 * GNU Affero General Public License as published by the Free Software Foundation, either version 3
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 * ========================================================================
 */

var pageConfig = {
	"pages": [{
			"label": "Create Adhoc",
			"url": "/flow.html?_flowId=adhocFlow&resource=/public/Samples/FreshDelivery_Demo/Ad_Hoc_View&theme=AcmeTheme&decorate=no"
		}
	]
};

app.initializeVisualize(initPage);

function initPage(jrsConfig, visualize) {
	$('<iframe>', {
		src: jrsConfig.jrsHostname + pageConfig.pages[0].url,
		id: 'myFrame',
		class: 'embed-responsive-item',
		height: 650,
		frameborder: 0,
		scrolling: 'no'
	}).appendTo('#adhoc');
}
