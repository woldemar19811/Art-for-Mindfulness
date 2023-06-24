%% Art for Mindfulness
%
% This program generates an interactive art experience for the user. It has 
% been carefully designed to help the user explore and appreciate the meaning 
% of mindfulness.

%% Set up the figure.
close all;
figure; 
set(gcf, 'Name', 'Art for Mindfulness');
set(gcf, 'MenuBar', 'none');
set(gcf, 'NumberTitle', 'off');
set(gcf, 'Position', [500, 500, 500, 500]);
set(gcf, 'Color', [1 1 1]);

%% Define some parameters.
numCols = 6; 
numRows = 6;

%% Create an array of colors. 
colors = hsv(numCols + numRows + 1);

%% Create the art.
for c = 1:numCols       
    for r = 1:numRows
        % Choose the color for this element.
        colorIndex = r + c;
        thisColor = colors(colorIndex,:);
        
        % Create the rectangle. 
        x1 = c*(1/numCols);
        x2 = (c+1)*(1/numCols); 
        y1 = 1 - (r*(1/numRows));
        y2 = 1 - ((r+1)*(1/numRows)); 
        x = [x1 x2 x2 x1];
        y = [y1 y1 y2 y2];
        h = fill(x, y, thisColor);
        
        % Set the interaction for this element.
        set(h, 'ButtonDownFcn', {@interactElement, c, r, colorIndex});
    end
end

%% Define the interactElement function. 
function interactElement(~, ~, c, r, colorIndex)
    
    % Determine the new color index.
    colors = hsv(6+1+6+1);
    newColorIndex = colorIndex + 1;
    if newColorIndex > length(colors)
        newColorIndex = 1;
    end
    
    % Update the element. 
    x1 = c*(1/6);
    x2 = (c+1)*(1/6); 
    y1 = 1 - (r*(1/6));
    y2 = 1 - ((r+1)*(1/6)); 
    x = [x1 x2 x2 x1];
    y = [y1 y1 y2 y2];
    h = fill(x, y, colors(newColorIndex,:));
    
    % Set the interaction for this element.
    set(h, 'ButtonDownFcn', {@interactElement, c, r, newColorIndex});
end