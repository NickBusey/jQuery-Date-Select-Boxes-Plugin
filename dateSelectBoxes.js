/*
 *
 * Copyright (c) 2010 Nick Busey (http://nickabusey.com/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version 1.1.1
 * 
 */
(function($)
	{
		$.fn.dateSelectBoxes = function(month, day, year)
			{
				var allDays = 
				{
					"1" : "1", "2" : "2", "3" : "3",
					"4" : "4", "5" : "5", "6" : "6",
					"7" : "7", "8" : "8", "9" : "9",
					"10" : "10", "11" : "11", "12" : "12",
					"13" : "13", "14" : "14", "15" : "15",
					"16" : "16", "17" : "17", "18" : "18",
					"19" : "19", "20" : "20", "21" : "21",
					"22" : "22", "23" : "23", "24" : "24",
					"25" : "25", "26" : "26", "27" : "27",
					"28" : "28", "29" : "29", "30" : "30",
					"31" : "31"
				};
				function isLeapYear() {
					var selected = $(year).selectedValues();
					return ( selected == "" || ( ( selected % 4 == 0 ) && ( selected % 100 != 0 ) ) || ( selected % 400 == 0) );
				}
				function updateDays() {
					var selected = $(day).selectedValues();
					$(day).removeOption(/./);
					var days = {};
					switch (parseInt($(month).val())) {
						case 1:
						case 3:
						case 5:
						case 7:
						case 8:
						case 10:
						case 12:
						default:
							for (i=1;i<=31;i++)
							{
								days[i]=allDays[i]
							}
						break;
						case 2:
							var febDays = 0;
							if (isLeapYear())
								febDays = 29;
							else
								febDays = 28;
							for (i=1;i<=febDays;i++)
							{
								days[i]=allDays[i]
							}
						break;
						case 4:
						case 6:
						case 9:
						case 11:
							for (i=1;i<=30;i++)
							{
								days[i]=allDays[i]
							}
						break;
					}
					$(day).addOption(days, false);
					$(day).selectOptions(selected);
				}
				$(year).change( function() {
					updateDays();
				});
				$(month).change( function() {
					updateDays();
				});
			};
})(jQuery);