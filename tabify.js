$().ready(
    function () {
		var activeTabAttibute = 'active-tab';
        var tabifierCss = ".tab-bar { margin-top: 1em; text-align: bottom; } .tab-bar > div { display: inline-block; border: 2px solid #0C4569; border-bottom: none; padding-top: 4px;  font-size: 13pt; background-color: #0C4569; color: white; border-radius: 6px 6px 0 0; padding-left: 1em; padding-right: 1em; height: 1.35em; margin-right: 5px; margin-bottom: -2px; position: relative; /*for fake z-indexing above the tab content*/ } .tab-bar > div["+activeTabAttibute+"] { background-color: #d1e2eb; color: black; } .tab-bar > div:hover { background-color: white; color: black; cursor: pointer; } [tabbed] { display: inline-block; list-style: none outside none; border: 2px solid #0C4569; width: 98%; min-height: 300px; padding-left: 1em; padding-right: 1em; padding-bottom: 1em; margin-top: 0; padding-top: 1em; }";
        $("<style type='text/css'>" + tabifierCss + "</style>").appendTo("head");

		$("[tabbed]").each(
			function(i, tabs){
				var tabBar = $("<div class='tab-bar' />");
				
				$(tabs).before(tabBar)
				.children().each(
					function (j, tabElement) {
						var tab = $(tabElement);
						
						var firstTabChild = tab.children()[0];
						var tabLabel = $("<div class='tab'>" + $(firstTabChild).html() + "</div>");
						$(firstTabChild).remove();
						
						if (j == 0) { //first tab is active on page load
							tabLabel.attr(activeTabAttibute, true);
						} else { 
							tab.hide(); 
						}
						tabLabel.click(
							function () {
								tabLabel.attr(activeTabAttibute, true)
									.siblings().removeAttr(activeTabAttibute);
								
								tab.show()
									.siblings().hide();
							}
						);
						tabBar.append(tabLabel);
					}
				);
			}
		);
    }
);