#include<bits/stdc++.h>
using namespace std;
int main() {
    // Write C++ code here
    int n;
    cin>>n;
    vector<int>v(n);
    for(int i=0;i<n;i++){
        cin>>v[i];
    }
    // finding a maximum diff 
    int maxdiff=0;
    int diff;
    for(int i=0;i<n;i++){
        for(int j=1;j<n;j++){
            diff=(v[j]-v[i]);
            maxdiff=max(maxdiff,diff);
        }
    }
    cout<<maxdiff;
}