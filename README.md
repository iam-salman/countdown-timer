# Countdown Timer

A simple React-based countdown timer application that allows users to set a countdown using hours, minutes, and seconds. The application provides features to start, pause, and reset the timer, and notifies the user when the timer completes.

## Features

-   **Set Countdown Time**: Users can enter hours, minutes, and seconds.
-   **Start Timer**: Begins the countdown and replaces the input fields with the current countdown time.
-   **Pause Timer**: Pauses the countdown and allows users to resume it.
-   **Reset Timer**: Resets the countdown to the initial state.
-   **Notifications**: Alerts the user when the timer reaches zero using the Notification API. Falls back to an alert if notifications are not permitted.

## Requirements

-   The input fields for hours, minutes, and seconds do not have visible labels but are accessible to screen readers.
-   Placeholder text is used for the input fields.
-   When the timer starts, the input fields are replaced with plain text showing the countdown time.
-   The 'Start' button is replaced with 'Pause' and 'Reset' buttons when the timer is running.
-   The 'Pause' button pauses the countdown and is replaced with a 'Start' button.
-   The timer numbers are zero-padded (e.g., 01 vs 1) during the countdown.
-   When the timer reaches zero, a native notification is displayed if permissions allow, otherwise, an alert is shown.

## Getting Started

### Prerequisites

-   Node.js and npm installed on your local machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/salmanahmed-chd/countdown-timer.git
    cd countdown-timer
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Running the App

1. Start the development server:

    ```bash
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:5173` to view the app.
