console.log($(this));
$(document).ready(function () {
	let studenDetails = null;
	$.ajax({
		url: "http://my-json-server.typicode.com/shripad-agashe/fake-api/dashboard",
		 success: function (result) {
			$.each(result, function(i, v){
				let line2 = v.line2 ? '<div class="line2">'+v.line2+'</div>' : '';
				$('.overviewBlock').append('<div class="overviewSubMain overViewSubMain'+i +'"><div class="overviewSubLogo"><div class="subLogoImg"></div></div><div class="overviewSubData"><div class="value"><div class="properValue">'+v.line1+'</div>'+line2+'</div><div class="title">'+v.title+'</div></div></div>')
			})
		}
	});
	$.ajax({
		url: "http://my-json-server.typicode.com/shripad-agashe/fake-api/students",
		 success: function (result) {
			 studenDetails = result;
			createStudentDetailsBlock(result);
		}
	});
	function createStudentDetailsBlock(result) {
		$.each(result, function(i, v){
			$('.studentDetailsMain').append('<div class="studentsMainRow studentsMainRow'+i+'"><div class="studentsInfo"><div class="studentAvatar"><div class="studentAvatarImg"></div></div><div class="studentName">'+v.name+'</div></div><div class="studentsMarks">'+v.marks+'</div></div>');
		})
	}
	
	function ascendingOrder() {
		studenDetails.sort((a, b) => a.marks - b.marks);
		$('.studentDetailsMain').empty();
		createStudentDetailsBlock(studenDetails);
		$('.descending').hide();
		$('.ascending').show();
	}
	function descendingOrder() {
		studenDetails.sort((a, b) => b.marks - a.marks);
		$('.studentDetailsMain').empty();
		createStudentDetailsBlock(studenDetails);
		$('.descending').show();
		$('.ascending').hide();
	}
	$('.descending').click(ascendingOrder);
	$('.ascending').click(descendingOrder);
});
