
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkinIssue {
  type: string;
  probability: number;
  description: string;
}

interface SkinRecommendation {
  title: string;
  description: string;
}

interface ResultCardProps {
  skinType: string;
  issues: SkinIssue[];
  recommendations: SkinRecommendation[];
}

const ResultCard: React.FC<ResultCardProps> = ({ skinType, issues, recommendations }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Skin Analysis Results</span>
          <Badge>{skinType}</Badge>
        </CardTitle>
        <CardDescription>
          Based on our AI analysis of your skin image
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Detected Issues</h3>
            {issues.length > 0 ? (
              <div className="space-y-3">
                {issues.map((issue, index) => (
                  <div key={index} className="p-3 bg-muted rounded-md">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{issue.type}</h4>
                      <Badge variant="outline">
                        {Math.round(issue.probability * 100)}%
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {issue.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No issues detected</p>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Recommendations</h3>
            {recommendations.length > 0 ? (
              <div className="space-y-3">
                {recommendations.map((recommendation, index) => (
                  <div key={index} className="p-3 border rounded-md">
                    <h4 className="font-medium">{recommendation.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {recommendation.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No recommendations available</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
