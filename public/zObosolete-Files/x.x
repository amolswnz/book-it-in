<section id="page-title" class="page-title-dark">
    <div class="container clearfix">
        <h1>Book Transfer</h1>
        <span>Make a booking with us</span>
        <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li class="active">Transfer Bookings</li>
        </ol>
    </div>
</section>
<section id="content" data-animate="fadeInUp">
<div class="content-wrap">
    <div class="container clearfix">
    <h4>Create Booking</h4>
    <form name="transferForm" ng-submit="transferCtrl.addBooking()" novalidate>
        <md-input-container class="col-md-6">
            <label>Pickup location</label>
            <input ng-model="transferCtrl.booking.pickUpLocation" name="pickUpLocation" required min="10">
            <div ng-messages="transferForm.pickUpLocation.$error" multiple md-auto-hide="false">
                <div ng-message="min">Please enter more detailed address information.</div>
            </div>
        </md-input-container>
        <md-input-container class="col-md-6">
            <input mdc-datetime-picker="" date="true" time="true" type="text" id="datetime" format="MMMM Do YYYY, h:mm a"
                    placeholder="Date" min-date="minDate" ng-model="transferCtrl.booking.pickUpDateTime" name="pickUpDateTime" class="md-input" required>
            <div ng-messages="transferForm.pickUpDateTime.$error" multiple md-auto-hide="false">
                <div ng-message="required">Please select pickup date and time.</div>
            </div>
        </md-input-container>
        <div class="clearfix"></div>
        <md-input-container class="md-block col-md-6">
            <label>Drop-off location</label>
            <input ng-model="transferCtrl.booking.dropOffLocation" name="dropOffLocation" required min="10">
            <div ng-messages="transferForm.dropOffLocation.$error" multiple md-auto-hide="false">
                <div ng-message="min">Please enter more detailed address information.</div>
            </div>
        </md-input-container>
        <md-input-container class="md-block col-md-3">
            <label>PAX</label>
            <md-select ng-model="transferCtrl.booking.pax" name="pax" required min="1">
                <md-option ng-repeat="counter in counters" value="{{counter}}">{{counter}}</md-option>
            </md-select>
            <div ng-messages="transferForm.pax.$error" multiple md-auto-hide="false">
                <div ng-message="required">Please select number of PAX.</div>
            </div>
        </md-input-container>
        <md-input-container class="md-block col-md-3">
            <label>CHILD BELOW 5 </label>
            <md-select ng-model="transferCtrl.booking.child" name="child">
                <md-option ng-repeat="counter in counters" value="{{counter}}">{{counter}}</md-option>
            </md-select>
        </md-input-container>
        <div class="clearfix"></div>
        <md-input-container class="md-block col-md-12">
            <textarea ng-model="transferCtrl.booking.notes" name="notes" md-maxlength="250" rows="3" placeholder="Additional information" md-select-on-focus></textarea>
            <div ng-messages="transferForm.notes.$error" multiple md-auto-hide="false">
                <div ng-message="required">Please enter less than 250 characters.</div>
            </div>
        </md-input-container>
        <div class="clearfix"></div>
        <button class="button button-reveal button-large tright" type="submit"><i class="fa fa-bolt"></i><span>Confirm Booking</span></button>
    </form>
    </div>
</div>
</section>
